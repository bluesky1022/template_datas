const socket = io();

let localStream;
const peers = {};
let roomId;

const configuration = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
};

async function getLocalStream() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log('Got local audio stream');
  } catch (err) {
    alert('Error accessing microphone: ' + err.message);
  }
}

function createPeerConnection(peerId) {
  const peerConnection = new RTCPeerConnection(configuration);

  // Add local audio tracks to connection
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  // Handle incoming tracks from remote peer
  peerConnection.ontrack = (event) => {
    const remoteAudio = document.getElementById('audio-' + peerId);
    if (!remoteAudio) {
      const audio = document.createElement('audio');
      audio.id = 'audio-' + peerId;
      audio.autoplay = true;
      audio.srcObject = event.streams[0];
      document.body.appendChild(audio);
    }
  };

  // ICE candidate handler
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('ice-candidate', {
        target: peerId,
        candidate: event.candidate,
      });
    }
  };

  return peerConnection;
}

async function handleOffer(offer, callerId) {
  const peerConnection = createPeerConnection(callerId);
  peers[callerId] = peerConnection;

  await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  socket.emit('answer', {
    target: callerId,
    sdp: peerConnection.localDescription,
  });
}

async function handleAnswer(answer, callerId) {
  const peerConnection = peers[callerId];
  await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
}

async function handleNewUser(newUserId) {
  const peerConnection = createPeerConnection(newUserId);
  peers[newUserId] = peerConnection;

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  socket.emit('offer', {
    target: newUserId,
    sdp: peerConnection.localDescription,
  });
}

function removePeer(peerId) {
  if (peers[peerId]) {
    peers[peerId].close();
    delete peers[peerId];
  }
  const audio = document.getElementById('audio-' + peerId);
  if (audio) {
    audio.remove();
  }
}

// UI Elements
const joinBtn = document.getElementById('joinBtn');
const roomInput = document.getElementById('roomInput');
const peersList = document.getElementById('peersList');

joinBtn.onclick = async () => {
  roomId = roomInput.value.trim();
  if (!roomId) {
    alert('Please enter a room ID');
    return;
  }

  await getLocalStream();
  socket.emit('join', roomId);
};

socket.on('all-users', (users) => {
  users.forEach(userId => {
    handleNewUser(userId);
  });
});

socket.on('user-joined', (userId) => {
  console.log('User joined:', userId);
});

socket.on('offer', async (payload) => {
  await handleOffer(payload.sdp, payload.caller);
});

socket.on('answer', async (payload) => {
  await handleAnswer(payload.sdp, payload.caller);
});

socket.on('ice-candidate', (payload) => {
  const peerConnection = peers[payload.from];
  if (peerConnection) {
    peerConnection.addIceCandidate(new RTCIceCandidate(payload.candidate));
  }
});

socket.on('user-left', (userId) => {
  removePeer(userId);
});
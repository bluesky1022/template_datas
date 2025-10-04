const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Store rooms and sockets
const rooms = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (roomId) => {
    socket.join(roomId);
    console.log(`Socket ${socket.id} joined room ${roomId}`);

    // Notify others in the room
    socket.to(roomId).emit('user-joined', socket.id);

    // Send existing users to the new user
    const otherUsers = Array.from(io.sockets.adapter.rooms.get(roomId) || [])
      .filter(id => id !== socket.id);
    socket.emit('all-users', otherUsers);
  });

  socket.on('offer', (payload) => {
    io.to(payload.target).emit('offer', {
      sdp: payload.sdp,
      caller: socket.id,
    });
  });

  socket.on('answer', (payload) => {
    io.to(payload.target).emit('answer', {
      sdp: payload.sdp,
      caller: socket.id,
    });
  });

  socket.on('ice-candidate', (payload) => {
    io.to(payload.target).emit('ice-candidate', {
      candidate: payload.candidate,
      from: socket.id,
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    // Notify all rooms this socket was in
    for (const roomId of socket.rooms) {
      if (roomId !== socket.id) {
        socket.to(roomId).emit('user-left', socket.id);
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
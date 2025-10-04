const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

let users = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('login', (username) => {
    users[socket.id] = username;
    io.emit('users', Object.values(users));
    console.log(`${username} logged in`);
  });

  socket.on('send-message', (message) => {
    const username = users[socket.id] || 'Unknown';
    io.emit('receive-message', { username, message });
  });

  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('users', Object.values(users));
    console.log(`${username} disconnected`);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
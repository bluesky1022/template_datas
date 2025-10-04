import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat({ username }) {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit('login', username);

    socket.on('users', (userList) => {
      setUsers(userList);
    });

    socket.on('receive-message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off('users');
      socket.off('receive-message');
    };
  }, [username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('send-message', message.trim());
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="users-panel">
        <h3>Online Users</h3>
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>

      <div className="chat-panel">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.username === username ? 'self' : ''}`}
            >
              <strong>{msg.username}:</strong> {msg.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="app-container">
      {username ? (
        <Chat username={username} />
      ) : (
        <Login onLogin={setUsername} />
      )}
    </div>
  );
}

export default App;
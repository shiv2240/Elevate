// src/App.jsx
import { useState } from 'react';
import { useSimulatedMessages } from './hooks/useSimulatedMessages';
import './App.css';

const rooms = ['general', 'random'];

function App() {
  const [activeRoom, setActiveRoom] = useState('general');
  const [input, setInput] = useState('');
  const { messages, sendMessage, typing } = useSimulatedMessages(activeRoom);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="chat-app">
      <div className="room-tabs">
        {rooms.map((room) => (
          <button
            key={room}
            className={room === activeRoom ? 'active' : ''}
            onClick={() => setActiveRoom(room)}
          >
            #{room}
          </button>
        ))}
      </div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'You' ? 'you' : 'bot'}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          {typing && <div className="typing-indicator">Someone is typing...</div>}
        </div>
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;

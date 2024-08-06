import React, { useState } from 'react';
import axios from 'axios';
import '../css/chat.css';

type Message = {
  text: string;
  sender: string;
  timestamp: string;
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessages = [...messages, { text: input, sender: 'You', timestamp }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await axios.post('http://127.0.0.1:10000/predict', {
        message: input
      });

      const reply = response.data.reply;
      setIsTyping(false);
      setMessages([...newMessages, { text: reply, sender: 'Bot', timestamp }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      setMessages([...newMessages, { text: "Sorry, there was an error processing your request.", sender: 'Bot', timestamp }]);
    } finally {
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="chat-sender">{message.sender}:</span> {message.text}
            <div className="chat-timestamp">{message.timestamp}</div>
          </div>
        ))}
        {isTyping && <div className="chat-typing">Bot is typing...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

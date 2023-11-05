import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import englishData from '../constants/english.json';
import spanishData from '../constants/spanish.json';
import hindiData from '../constants/hindi.json';

export default function Chat() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: currentMessage }]);
    
    try {
      // Make POST request to API
      const response = await axios.post('http://localhost:5000/chat', {
        user_input: currentMessage,
        category: location.state.categories, // Assuming categories is an array or string
        language: 'en' // Set your preferred language
      });

      console.log("Response from API:", response.data); // Log the response from the API

      // Add bot response to chat
      setMessages(prev => [...prev, { sender: 'bot', text: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);

      // Optionally, display an error message in the chat
      setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, there was an error processing your message." }]);
    }

    // Clear the current message
    setCurrentMessage('');

    console.log(location.state.categories)
    console.log(location.state.company)
  };

  // Navigate index
  const navigate = useNavigate();

  // set seffirent languages
  const languages = {
    english: englishData,
    spanish: spanishData,
    hindi: hindiData,
  };

  const [currentLanguage, setCurrentLanguage] = useState('english');
  
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar changeLanguage={changeLanguage} language={languages[currentLanguage].lan} nav1={languages[currentLanguage].nav1} nav2={languages[currentLanguage].nav2} nav3={languages[currentLanguage].nav3} nav4={languages[currentLanguage].nav4}/>
      <div className="flex-1 overflow-hidden px-4 py-2">
        <div className="max-w-lg mx-auto flex flex-col h-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-rubik mb-4">Chat Bot</h2>
          <div className="flex-1 bg-gray-200 p-3 rounded-lg overflow-y-scroll">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 flex justify-${msg.sender === 'user' ? 'end' : 'start'}`}>
                <div className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <textarea
              className="flex-1 h-16 p-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600 transition duration-300 h-16"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

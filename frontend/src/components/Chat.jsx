import React from 'react';
import Navbar from '../components/Navbar';

export default function Chat() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-hidden px-4 py-2">
        <div className="max-w-lg mx-auto flex flex-col h-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-rubik mb-4">Chat Bot</h2>
          <div className="flex-1 bg-gray-200 p-3 rounded-lg overflow-y-scroll">
            {/* Chat messages */}
            <div className="mb-2 flex justify-start">
              <div className="bg-blue-500 text-white p-2 rounded-lg">
                Hello! {/* Sent message */}
              </div>
            </div>
            <div className="mb-2 flex justify-end">
              <div className="bg-gray-300 p-2 rounded-lg">
                Hi there! {/* Received message */}
              </div>
            </div>
            {/* ... additional chat messages ... */}
          </div>
          <div className="mt-4 flex">
            <textarea
              className="flex-1 h-16 p-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Type your message..."
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600 transition duration-300 h-16"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Chat() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-primary-600">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-rubik">Chat Bot</h2>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg">
          {/* Chat messages */}
          <div className="mb-2 flex justify-end">
            <div className="bg-blue-500 text-white p-2 rounded-lg mr-96 font-slabo">
              Hello!
            </div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-gray-300 p-2 rounded-lg font-slabo">
              Hi there!
            </div>
          </div>
          {/* Add more chat messages here */}
        </div>
        <div className="mt-4 flex justify-start"> {/* Changed to justify-start */}
          {/* Input area */}
          <textarea
            className="w-full h-16 p-2 border border-gray-300 rounded-lg resize-none font-slabo"
            placeholder="Type your message..."
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-.8 rounded-lg hover:bg-blue-600 transition duration-300 font-slabo h-16"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

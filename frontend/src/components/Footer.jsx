import React, { useState } from 'react';

const Footer = ({text1, text2}) => {
  const [easterEgg, setEasterEgg] = useState(false);

  const toggleEasterEgg = () => {
    setEasterEgg(!easterEgg);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-500 p-1 text-center flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={toggleEasterEgg}
          className="text-4xl text-gray-200 hover:text-white"
          aria-label="Easter Egg Trigger"
        >
          💲
        </button>

        <p className="text-2xl text-white font-rubik">{text1} ❤️ {text2}</p>
        
        {/* Placeholder for spacing */}
        <div className="text-4xl opacity-0">💲</div>
      </div>
      
      {/* Easter Egg Content - Crab Emoji */}
      {easterEgg && (
        <div className="mt-2 text-2xl text-white">🦀"money"</div>
      )}
    </footer>
  );
};

export default Footer;

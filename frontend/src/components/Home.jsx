import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img/example-19.svg';
import Navbar from '../components/Navbar';
import Footer from './Footer'
import { useState } from 'react';


import englishData from '../constants/english.json';
import spanishData from '../constants/spanish.json';
import hindiData from '../constants/hindi.json';

export default function Home() {
  const gradientStyle = {
    background:
      'linear-gradient(to right top, #4d6b97, #0083ab, #009799, #00a564, #7caa15)',
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
    <div>
      <Navbar changeLanguage={changeLanguage} language={languages[currentLanguage].lan} nav1={languages[currentLanguage].nav1} nav2={languages[currentLanguage].nav2} nav3={languages[currentLanguage].nav3} nav4={languages[currentLanguage].nav4}/>
      <div className="flex justify-center items-start h-screen">
        {/* Centering container */}
        <div className="flex flex-col items-center w-full px-8 lg:px-16">
          {/* Increased margin-top (mt-20) */}
          {/* Main header */}
          <h1 className="text-8xl text-center mb-20 mt-20 font-rubik">DIVERSIFYNANCE</h1>
          {/* Blue rectangle */}
          <div className="relative w-11/12 h-96 rounded-3xl" style={gradientStyle}>
            {/* Container for insideheader and additional text */}
            <div className="flex items-center justify-center h-full space-x-72">
              <div className='flex flex-col w-4/12'>
                {/* Added flex and justify-end */}
                <h1 className="text-6xl text-black font-rubik">{languages[currentLanguage].header1}</h1>
                {/* Additional text at the bottom of insideheader with reduced line break spacing */}
                <p
                  className="text-black mt-3 font-slabo text-2xl"
                  style={{ lineHeight: '1.2' }}
                >
                  {languages[currentLanguage].descrip1}
                </p>
                {/* Functional button */}
                <button onClick={()=>navigate("/selectCompany")} className="bg-blue-500 text-white rounded-full py-4 px-7 mt-12 hover:bg-blue-600 transition duration-300 font-rubik w-52">
                {languages[currentLanguage].btn}
                </button>
              </div>
              {/* Adding SVG image */}
              <div className="">
                <img src={img1} alt="person" className="w-96 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer text1={languages[currentLanguage].footer} text2={languages[currentLanguage].footer2}/>
    </div>
  );
}
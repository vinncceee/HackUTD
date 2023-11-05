import img1 from '../assets/img/example-19.svg';
import Navbar from '../components/Navbar';

export default function Home() {
  const gradientStyle = {
    background:
      'linear-gradient(to right top, #4d6b97, #0083ab, #009799, #00a564, #7caa15)',
  };

  return (
    <div>
      <Navbar></Navbar>
      


      <div className="flex justify-center items-start h-screen">
        {/* Centering container */}
        <div className="flex flex-col items-center w-full px-8 lg:px-16">
          {/* Increased margin-top (mt-20) */}
          {/* Main header */}
          <h1 className="text-8xl text-center mb-20 mt-20 font-rubik">PROJECT NAME</h1>
          {/* Blue rectangle */}
          <div className="relative w-11/12 h-96 rounded-3xl" style={gradientStyle}>
            {/* Container for insideheader and additional text */}
            <div className="flex items-center justify-center h-full space-x-72">
              <div className='flex flex-col'>
                {/* Added flex and justify-end */}
                <h1 className="text-6xl text-black font-rubik">insideheader</h1>
                {/* Additional text at the bottom of insideheader with reduced line break spacing */}
                <p
                  className="text-black mt-3 font-slabo text-2xl"
                  style={{ lineHeight: '1.2' }}
                >
                  Additional text at the bottom
                  <br />
                  Line break here
                  <br />
                  Another line break
                </p>
                {/* Functional button */}
                <button className="bg-blue-500 text-white rounded-full py-4 px-7 mt-12 hover:bg-blue-600 transition duration-300 ml-.1 font-rubik">
                  Let's get started!
                </button>
              </div>
              {/* Adding SVG image */}
              <div className="">
                <img src={img1} alt="SVG Image" className="w-96 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
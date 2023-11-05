import img from '../assets/img/bg-18.svg'
export default function SelectCompany() {
   
    const gradientStyle = {
        background: 'linear-gradient(to right top, #4d6b97, #0083ab, #009799, #00a564, #7caa15)',
    };

  

    return (
    
    <body>
    <div className="flex justify-center items-start h-screen">
        {/* Centering container */}
        <div className="flex flex-col items-center w-full px-8 lg:px-16 mt-20">
          {/* Increased margin-top (mt-20) */}
          {/* Main header */}
          {/* Blue rectangle */}
            <div className="relative w-full h-72 rounded-3xl mt-15" style={gradientStyle}>
                {/* Container for insideheader and additional text */}
                <div className="flex items-center justify-center h-full space-x-72" >
                    <div className="inline-block group flex flex-col">
                            <button type="button" className="bg-blue-500 text-white rounded-full py-4 px-7 mt-12 hover:bg-blue-600 transition duration-300 ml-.1 font-rubik">
                                Financial Institutions
                            </button>
                                <div className="absolute hidden origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fedelity</a>
                                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">JP Morgan Chase</a>
                                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">PNC</a>
                                    
                                </div>
                    </div>
                    {/* Adding SVG image */}
                        <div className="">
                            <img src={img} alt="SVG Image" className=" w-60 h-auto ml-80"  />
                        </div>
            </div>
          </div>
        </div>
    </div>









        <div className=" text-white py-7 bg-red-300" >
            <div className="container mx-0 text-center">
                <h1></h1>
            </div>
        </div>

        <div className="h-3 w-80 px-30 py-40 bg-teal-500 rounded-lg mt-20 ">
            {/* Content inside the rectangle */}
           
            <div className=" inline-block group">

                <button type="button" className="rounded-lg justify-center  px-5 py-6 text-sm font-medium text-white  hover:opacity-75  focus:outline-none" style={gradientStyle}>
                    Financial Institutions
                </button>

                <div className="absolute hidden bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fedelity</a>
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">JP Morgan Chase</a>
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">PNC</a>
                    
                </div>
            </div>
        </div>

        

    <div className="space-y-4 text-black">
      <label className="flex items-center">
        <input id="default-checkbox" type="checkbox" value="" className="form-checkbox text-black" />
        <span className="ml-2 text-black">About the Company</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 "> Checkin account</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 ">Savings  Account</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2">Brokerage </span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2">Checkbox 5</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 ">Checkbox 6</span>
      </label>
    </div>
    </body>
    
        
    )
}

export default function SelectCompany() {
   
    const gradientStyle = {
        background: 'linear-gradient(to right top, #4d6b97, #0083ab, #009799, #00a564, #7caa15)',
    };

    return (
    
    <body>

        <div className=" text-white py-7 bg-primary-300" >
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
           
                <div className="absolute hidden origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fedelity</a>
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">JP Morgan Chase</a>
                    <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">PNC</a>
                    
                </div>
            </div>
        </div>

        

    <div className="space-y-4 text-black">
      <label className="flex items-center">
        <input id="default-checkbox" type="checkbox" value="" className="form-checkbox text-black" />
        <span className="ml-2 text-black">Checkbox 1</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 ">Checkbox 2</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 ">Checkbox 3</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2">Checkbox 4</span>
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

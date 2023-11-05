export default function SelectCompany() {
    return (
    <body className="p-10">
        <div className="relative inline-block group">
            <button type="button" className="rounded-lg justify-center w-full px-5 py-6 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50" id="dropdown-menu-button" aria-expanded="true" aria-haspopup="true">
                Financial Institutions
            </button>
            <div className="absolute hidden origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fedelity</a>
                <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">JP Morgan Chase</a>
                <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">PNC</a>
                <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Blablabla</a>
                <a href="#" className="block px-7 py-6 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">blaaaaaa</a>
            </div>
        </div>

    <div className="space-y-4">
      <label className="flex items-center">
        <input id="default-checkbox" type="checkbox" value="" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 1</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 2</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 3</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 4</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 5</span>
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" />
        <span className="ml-2 text-gray-700">Checkbox 6</span>
      </label>
    </div>
    </body>
    
        
    )
}

import { NavLink } from "react-router-dom";

const Navbar = ({toggleMobileMenu}) => {
    return (
        <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-semibold text-pink-600">
                Glamour Haven
              </a>
            </div>
            
            {/* ye pura div bas navbar ke liye hai when it is in full screen */}
            <div className="hidden md:flex items-center space-x-8">
              {/* ye homgage mein noral screen ke links  */}
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/appointments">Appointments</NavLink>
              <a 
                href="/book" 
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
              >
                Book Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
                {/* nav button ka button hai ye lol */}
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-pink-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}

// this is the menu for the menu 
export const MobileMenu = ({ isOpen, onClose }) => (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg rounded-r-3xl z-50 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-pink-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <div className="flex flex-col px-6 py-4 space-y-4">
            <NavLink to="/" className="text-lg font-medium text-gray-900 py-2">
              Home
            </NavLink>
            <NavLink to="/services" className="text-lg font-medium text-gray-900 py-2">
              Services
            </NavLink>
            <NavLink to="/about" className="text-lg font-medium text-gray-900 py-2">
              About
            </NavLink>
            <NavLink to="/appointments" className="text-lg font-medium text-gray-900 py-2">
            Appointments
            </NavLink>
            <NavLink
              href="/book" 
              className="bg-pink-600 text-white px-6 py-3 rounded-xl text-center hover:bg-pink-700 mt-4"
            >
              Book Now
            </NavLink>
          </div>
  
          <div className="mt-auto p-6 border-t border-gray-200">
            <div className="space-y-2">
              <p className="text-gray-600">Contact Us:</p>
              <p className="text-gray-800">(555) 123-4567</p>
              <p className="text-gray-800">info@glamourhaven.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

export default Navbar ;
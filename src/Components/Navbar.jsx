import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MoovieMateLogo from '../assets/MoovieMate.svg'; 
import { Links } from '../Constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);

  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={MoovieMateLogo} alt="MoovieMate Logo" className="h-40" />
            </Link>
          </div>

     
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 mr-4"
            >
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              )}
            </button>
          </div>

  
          <div className="hidden md:flex md:items-center md:space-x-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out font-bold"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1 pl-3 pr-8 border-2 border-red-600 rounded-full w-full focus:outline-none focus:border-red-600 transition duration-300 ease-in-out"
              />
              <button
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <div className="flex flex-col  items-start px-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out py-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white shadow-lg py-2 px-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1 pl-3 pr-8 border-2 border-red-600 rounded-full w-full focus:outline-none focus:border-red-600 transition duration-300 ease-in-out"
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

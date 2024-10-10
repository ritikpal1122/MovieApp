import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MoovieMateLogo from '../assets/mmm.png';

import { Links } from '../Constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); 
    }
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={MoovieMateLogo} alt="MoovieMate Logo" className="h-28" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleSearch}
              className="text-gray-100  mr-4"
            >
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-100 hover:text-gray-100 focus:outline-none focus:text-gray-100"
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
                className="text-gray-200 hover:text-red-600 transition duration-300 ease-in-out font-bold"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative flex items-center">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-1 pl-3 pr-8 text-white bg-gray-800 rounded w-full focus:outline-none  transition duration-300 ease-in-out"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-100 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg py-2">
          <div className="flex flex-col items-start px-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-gray-100 hover:text-red-600 transition duration-300 ease-in-out py-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="md:hidden bg-black shadow-lg py-2 px-4">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 pl-3 pr-8 text-white bg-gray-800 rounded w-full focus:outline-none focus:border-red-600 transition duration-300 ease-in-out"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-100 hover:text-gray-800 focus:outline-none"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

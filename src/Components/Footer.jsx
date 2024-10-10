import React from 'react';
import { Link } from 'react-router-dom';
import MoovieMateLogo from '../assets/mmm2.png';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4">
          <span className='text-3xl'>Master <span className='text-red-600'>Movie</span> </span>
            <p className="text-gray-400">
              MoovieMate is your go-to source for the latest movies, reviews, and streaming content. Enjoy a world of entertainment at your fingertips.
            </p>
          </div>

          <div className="w-full md:w-1/5 mb-6">
            <h3 className="text-lg font-bold mb-2">Navigation</h3>
            <ul>
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/popular" className="text-gray-400 hover:text-white">Popular</Link></li>
              <li><Link to="/toprated" className="text-gray-400 hover:text-white">Top Rated</Link></li>
              <li><Link to="/toprated" className="text-gray-400 hover:text-white">Upcoming</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
            </ul>
          </div>

          <div className="w-full  md:w-1/5 mb-4">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="flex-col ">
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://youtube.com" className="text-gray-400 hover:text-white">YouTube</a></li>
            </ul>
          </div>

     
          <div className="w-full md:w-1/5 mb-4">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:support@mooviemate.com" className="hover:text-white">support@mooviemate.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+123456789" className="hover:text-white">+123-456-789</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 MoovieMate By <a href="https://ritik-portfolio-two.vercel.app/" className='underline-none text-white'>Ritik Pal</a> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

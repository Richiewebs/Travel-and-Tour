import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-28 transparent absolute flex justify-between cursor-pointer '>
      <div className='w-10/12 h-24 flex pl-24'>
        <ul className='flex text-gray-200 space-x-20 p-8 text-lg'>
          <li>
            <a href="#hero" className='hover:border-solid hover:border-b-4 hover:text-white'>
              Home
            </a>
          </li>
          <li>
            <a href="#services" className='hover:border-solid hover:border-b-4 hover:text-white'>
              Services
            </a>
          </li>
          <li>
            <a href="#about" className='hover:border-solid hover:border-b-4 hover:text-white'>
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className='hover:border-solid hover:border-b-4 hover:text-white'>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className='hover:border-solid hover:border-b-4 hover:text-white'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

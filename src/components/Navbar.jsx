import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-28 transparent absolute flex justify-between cursor-pointer '>
        <div className='w-10/12 h-24 flex pl-24'>
            <ul className='flex text-gray-200 space-x-20 p-8 text-lg'>
                <li className='hover:border-solid hover:border-b-4 hover:text-white'>Home</li>
                <li className='hover:border-solid hover:border-b-4 hover:text-white'>Services</li>
                <li className='hover:border-solid hover:border-b-4 hover:text-white'>About us</li>
                <li className='hover:border-solid hover:border-b-4 hover:text-white'>Porfolio</li>
                <li className='hover:border-solid hover:border-b-4 hover:text-white'>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar

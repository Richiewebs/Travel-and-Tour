import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6";
import { FaCopyright, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-56 p-24 flex justify-between text-white' style={{background:'black'}}>
        <div className='flex flex-col leading-6'>
            <h1 className='text-xl underline'>Social Media</h1>
            <p className='font-normal text-lg'>contact123@gmail.com</p>
            <p className='font-normal text-lg'>www.richie.inkedIn.com</p>
            <p className='font-normal text-lg'>contact123@gmail.com</p>
        </div>

        <div className='flex space-x-2 m-auto'>
          <p>Copyright </p>
          <FaCopyright></FaCopyright>
          <p>Richelle</p>
        </div>
        <div className='flex gap-10'>
        <FaGithub style={{fontSize: 50 }}/>
        <FaSquareXTwitter style={{fontSize: 50}} class='icon'/>
        <FaLinkedin style={{fontSize: 50}} class='icon'/>
        <FaFacebookSquare style={{fontSize: 50}} class='icon'/>
        </div>
    </div>
  )
}

export default Footer

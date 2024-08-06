import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-56 p-24 flex  text-white' style={{background:'black'}}>
        <div className='flex flex-col leading-6'>
            <h1 className='text-xl underline'>Social Media</h1>
            <p className='font-normal text-lg'>contact123@gmail.com</p>
            <p className='font-normal text-lg'>www.richie.inkedIn.com</p>
            <p className='font-normal text-lg'>contact123@gmail.com</p>
        </div>
        <div className='flex m-auto gap-10'>
        <FaGithub style={{fontSize: 70 }}/>
        <FaSquareXTwitter style={{fontSize: 70}} class='icon'/>
        <FaLinkedin style={{fontSize: 70}} class='icon'/>
        <FaFacebookSquare style={{fontSize: 70}} class='icon'/>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='flex flex-col wrap w-full h-screen blur-md' class='home' style={{color: 'white'}}>
        
        <div className='flex w-full h-4/6 p-12 pt-10'>
            <div className='w-1/2 h-full rounded p-5 pt-10'>
                <img src={about} alt="About Us" className='w-full h-1/2 object-cover rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300'/>
            </div>
            
            <div className='w-1/2 p-10 pt-3 flex flex-col'>
            <h1 className=' p-8 text-3xl font-bold mb-8 '>About us</h1>
                <p className=' px-10 leading-8 font-normal text-lg'>
                    Welcome to JourneyJoy Travel, your ultimate travel companion.
                    We are passionate about creating unforgettable travel experiences 
                    for our clients. 
                    Our mission is to provide top-notch travel services that cater to your unique needs
                    and preferences. With years of experience in the travel industry, we pride ourselves 
                    on our attention to detail and customer satisfaction. Join us on a journey to explore 
                    the world and make lasting memories.
                </p>
            </div>
        </div>
        <div className='flex w-full p-12 pt-2'>
            <div className='w-1/2 p-5 pr-10'>
                <h1 className='text-xl font-semibold'>Mission</h1>
                <p className='font-normal text-lg pr-10'>To inspire and enable people to explore the world with 
                    ease and confidence, providing exceptional travel experiences
                     that create lifelong memories.</p>
            </div>
            <div className='w-1/2 p-5'>
                <h1 className='text-xl font-semibold px-10 '>Vision</h1>
                <p className='font-normal text-lg px-10'>
                To be the leading travel agency known for excellence
                 in customer service and innovation in travel solutions.
                </p>
            </div>
        </div>
    </div>
   
  )
}

export default About

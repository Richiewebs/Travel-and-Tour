import React from 'react'
import Navbar from '../components/Navbar'
import beach1 from '../assets/beach(2).jpg'
import Button from '../components/Button'

const Home = (props) => {
    const images = ['beach1', 'hiker', 'night'];
    
  return (
    <div className='flex flex-col w-full  relative text-white overflow-hidden'>

      <Navbar></Navbar>
      <div className='w-full h-4/6'>
      <img src={beach1} alt="beach" srcset="" className='bg-cover w-full'/>
      </div>
      <div className='absolute top-52 w-3/4 h-56 p-5 left-24 '>
      <h1 className='absolute text-7xl font-bold'>Discover Paradise</h1>
      <p className='top-28 text-2xl  absolute'>Experience the most breathtaking beaches around the world.</p>
      
      <div className='absolute top-48'>
            <Button name='Explore Beaches'></Button>
        </div>
      </div>
        
        <div className=' left-2/4 w-full flex space-x-4 absolute bottom-16'>
            <div className='bg-transparent border-4 rounded-full p-1 border-white'></div>
            <div className='bg-transparent border-4 rounded-full p-1 border-white'></div>
            <div className='bg-transparent border-4 rounded-full p-1 border-white'></div>
        </div>
    </div>
  )
}

export default Home

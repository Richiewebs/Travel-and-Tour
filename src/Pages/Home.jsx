import React from 'react'
import Hero from '../components/Hero';
import Service from './Service';

const Home = () => {
   
  return (
    <div className='flex flex-col w-full text-white overflow-hidden'>
        <Hero></Hero>
        <Service></Service>
    </div>
  )
}

export default Home

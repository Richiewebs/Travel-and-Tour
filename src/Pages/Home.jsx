import React from 'react'
import Hero from '../components/Hero';
import Service from './Service';
import About from './About';
import Porfolio from './Porfolio';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
   
  return (
    <div className='flex flex-col w-full text-white overflow-hidden'>
        <Hero></Hero>
        <Service></Service>
        <About></About>
        <Porfolio></Porfolio>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home

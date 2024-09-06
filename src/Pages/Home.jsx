// Home.js
import React from 'react';
import Hero from '../components/Hero';
import Service from './Service';
import About from './About';
import Portfolio from './Porfolio';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col w-full text-white overflow-hidden'>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;

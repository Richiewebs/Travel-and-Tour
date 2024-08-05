
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import beach1 from '../assets/beach(2).jpg';
import hiker from '../assets/hiker1.png';
import night from '../assets/night.jpg';
import Button from '../components/Button';

const Hero = () => {
    const images = [
        { src: beach1, header: 'Discover Paradise', sub: 'Experience the most breathtaking beaches around the world', name: 'Explore beaches' },
        { src: hiker, header: 'Adventure Awaits', sub: "Embark on thrilling adventures in the world's most majestic mountains.", name: 'Start Your Adventure' },
        { src: night, header: 'Urban Excursions', sub: "Discover the charm and excitement of the world's greatest cities", name: 'Explore Cities' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='flex flex-col  h-screen w-full relative text-white overflow-hidden'>
            <Navbar />
            <div className='w-full h-4/6'>
                <img src={images[currentIndex].src} alt="hero" className='bg-cover w-full' />
            </div>
            <div className='absolute top-52 w-3/4 h-56 p-5 left-24'>
                <h1 className='absolute text-7xl font-bold'>{images[currentIndex].header}</h1>
                <p className='top-28 text-2xl absolute'>{images[currentIndex].sub}</p>
                <div className='absolute top-48'>
                <button className='border-4  hover:w-64 p-6  text-xl rounded-full border-white bg-transparent'>{images[currentIndex].name}</button>
                </div>
            </div>
            <div className='left-2/4 w-full flex space-x-4 absolute bottom-16'>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`bg-transparent border-4 rounded-full p-1 ${index === currentIndex ? 'border-white' : 'border-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Hero;

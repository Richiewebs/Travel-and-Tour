import React, { useState, useEffect } from 'react';
import carossel1 from '../assets/carossel1.avif';
import couple from '../assets/couple.avif';
import family from '../assets/family.jpg';
import hiker from '../assets/hiker1.png';
import friends from '../assets/friends.jpg';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Data array
const data1 = [
    {
        id: 1,
        src: carossel1,
        title: 'African Safari Adventure',
        desc: 'Experience the thrill of an African safari with our expert-guided tours. Witness the majestic wildlife in their natural habitat'
    },
    {
        id: 2,
        src: couple,
        title: 'Romantic Sunset Cruise',
        desc: 'Sail into the sunset on a luxurious cruise. Perfect for romantic getaways and special occasions'
    },
    {
        id: 3,
        src: family,
        title: 'Family Adventure in Greece',
        desc: 'Discover the ancient wonders of Greece with our family-friendly tours. Explore historical sites and enjoy cultural experiences'
    },
    {
        id: 4,
        src: hiker,
        title: 'Solo Hiking Expedition',
        desc: 'Challenge yourself with our solo hiking expeditions. Perfect for adventurers seeking solitude and breathtaking views'
    },
    {
        id: 5,
        src: friends,
        title: 'City Tour in Tokyo',
        desc: 'Explore the vibrant city of Tokyo with our guided city tours. Discover hidden gems and iconic landmarks.'
    }
];

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data1.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data1.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data1.length) % data1.length);
    };

    return (
        <div className='w-full flex flex-col items-center bg-gray-200 p-5 pb-24 ' style={{minHeight: '100vh', color: 'black'}}>
            <h1 className='text-3xl p-10 font-semibold'>Portfolio</h1>
            <div className='relative w-full max-w-6xl h-full rounded bg-white shadow-md overflow-hidden'>
                <div className='w-full h-full flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {data1.map((item) => (
                        <div key={item.id} className='w-full flex-shrink-0'>
                            <div className='w-full h-3/4 relative z-1'>
                                <img className='w-full h-full object-cover rounded-t relative z-1' src={item.src} alt={item.title} />
                            </div>
                            <div className='w-full h-14 p-10 leading-6'>
                                <h2 className='text-2xl font-semibold'>{item.title}</h2>
                                <p className='text-md font-normal '>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className='p-2 text-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 z-10' style={{fontSize: 40, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}><FaArrowCircleLeft /></button>
                <button onClick={nextSlide} className='p-2 text-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10' style={{fontSize: 40, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}><FaArrowCircleRight /></button>
            </div>
        </div>
    );
};

export default Portfolio;

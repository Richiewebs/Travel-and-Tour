import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const data = [
    {
        id: 1,
        label: 'Custom Travel Packages',
        renderContent: () => (
            <p>
                We offer personalized travel packages tailored to your preferences.
                Whether you’re looking for a romantic getaway, 
                a family vacation, or an adventure trip, we’ve got you covered.
            </p>
        )
    },
    {
        id: 2,
        label: 'Guided Tours',
        renderContent: () => (
            <p>
                Join our guided tours to explore new destinations with experienced guides.
                Our tours cover historical sites, natural wonders, and cultural experiences.
            </p>
        )
    },
    {
        id: 3,
        label: 'Accommodation Booking',
        renderContent: () => (
            <p>
                Book your stay at the best hotels, resorts, 
                and vacation rentals. We provide a range of options to suit every budget and preference.
            </p>
        )
    },
    {
        id: 4,
        label: 'Flight Reservations',
        renderContent: () => (
            <p>
                Find the best deals on flights to your
                favorite destinations. We offer comprehensive 
                flight booking services with flexible options.
            </p>
        )
    },
    {
        id: 5,
        label: 'Travel Insurance',
        renderContent: () => (
            <p>
                Travel with peace of mind with our comprehensive
                travel insurance plans. Protect yourself against 
                unforeseen events and emergencies.
            </p>
        )
    }
];

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div>
            <div  className="cursor-pointer p-4 border-b border-gray-300 flex justify-between">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <FaAngleDown onClick={onClick}/>
            </div>
            {isOpen && (
                <div className="p-4">
                    {item.renderContent()}
                </div>
            )}
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem 
                    key={item.id}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

const App = () => {
    return (
        <div className="max-w-md mx-auto">
            <Accordion items={data} />
        </div>
    );
};

export default App;

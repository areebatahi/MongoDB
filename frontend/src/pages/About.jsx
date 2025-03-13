import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto my-28 px-4'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                {/* Text Content */}
                <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>Welcome to online shop</h1>
                    <p className='text-lg text-gray-800 leading-relaxed'>
                        At YourBrand, we believe shopping should be easy, enjoyable, and rewarding. Our mission is to provide a seamless online shopping experience by offering high-quality products at unbeatable prices.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

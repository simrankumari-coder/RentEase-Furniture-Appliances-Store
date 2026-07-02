import React from 'react'
import heroSec from "../images/heroSec.jpg";
const Hero = () => {
    return (
        <div>

            <main className="flex flex-col md:flex-row items-center justify-between px-6  py-10 md:px-8 md:py-16 bg-slate-50 gap-10">
                <div className='max-w-xl'>
                    <h1 className='md:mt-0 mt-20 text-5xl font-bold leading-tight'>Rent Furniture & Appliances Easily</h1>
                    <p className='mt-4 text-slate-600 text-lg'> Affordable monthly rental plans for modern living. No heavy buying cost, just rent and relax.</p>
                    <button className='mt-6 bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-900'> Explore Rentals</button>
                </div>
                <div className='lg:w-1/2 flex justify-center md:justify-end'>
                    <img src={heroSec} alt="furniture image" className='w-full h-auto
                   max-w-md md:max-w-lg lg:max-w-xl object-contain rounded-lg' />
                </div>
            </main>
        </div>
    )
}

export default Hero

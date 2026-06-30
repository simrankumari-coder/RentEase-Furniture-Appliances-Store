import React from 'react'
import sofa from "../images/sofa.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import washing from "../images/washing.jpg";
const FeaturedProducts = () => {
    const products = [
        {
            name: "Comfort Sofa",
            price: "₹499 / month",
            image: sofa,
        },
        {
            name: "Modern Fridge",
            price: "₹799 / month",
            image: fridge,
        },
        {
            name: "Smart TV",
            price: "₹999 / month",
            image: tv,
        },
        {
            name: "Washing Machine",
            price: "₹699 / month",
            image: washing,
        },
    ];
    return (
        <div>
            <section className='px-8 py-14 bg-white'>
                <h2 className='text-3xl font-bold text-slate-900 mb-10'>Featured Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {products.map((item, index) => {
                        return <div key={index} className='bg-slate-50  border-2 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition'>
                            <img src={item.image} alt={item.name} className='h-40 w-full object-cover' />
                            <div>
                                <h3 className='px-2 font-semibold text-slate-900'>{item.name}</h3>
                                <p className='px-2 text-purple-700 font-medium mt-2'>{item.price}</p>
                                <button className='px-2 mt-4 w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 cursor-pointer transition'>Rent Now</button>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts

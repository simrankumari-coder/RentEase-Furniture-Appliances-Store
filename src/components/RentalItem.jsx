import React from 'react'

const RentalItem = ({ item }) => {
    return (
        <div className='flex max-w-xl items-center gap-4 p-4 border rounded-lg bg-white shadow-sm w-full'>

            <img
                src={item.image}
                alt={item.name}
                className='w-24 h-24 object-cover rounded-md'
            />

            {/* RIGHT: TEXT + BUTTON */}
            <div className='flex flex-col flex-1 '>

                <h3 className='font-semibold text-sm md:text-2xl text-slate-900'>
                    {item.name}
                </h3>

                <p className='text-purple-800 md:text-2xl text-sm'>
                    ₹{item.price} /month
                </p>
                <p className='text-purple-800 md:text-2xl text-sm'>{item.status}</p>
                <p className='text-purple-800 md:text-2xl text-sm'>{item.startDate}</p>

            </div>

        </div>
    )
}

export default RentalItem

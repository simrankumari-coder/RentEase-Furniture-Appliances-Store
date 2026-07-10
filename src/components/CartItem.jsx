import React from 'react'

const CartItem = ({ item, removeItem }) => {


    return (
        <div className='flex  items-center gap-4 p-4 border rounded-lg bg-white shadow-sm w-full'>

            <img
                src={item.image}
                alt={item.name}
                className='w-24 h-24 object-cover rounded-md'
            />


            <div className='flex flex-col flex-1'>

                <h3 className='font-semibold text-slate-900'>
                    {item.name}
                </h3>

                <p className='text-purple-800'>
                    ₹{item.price} /month
                </p>

                <button onClick={() => removeItem(item.cartId)} className='mt-2 self-start bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200'>
                    Remove
                </button>

            </div>

        </div>
    )
}

export default CartItem
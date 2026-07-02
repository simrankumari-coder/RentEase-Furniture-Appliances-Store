import React from 'react'
import CartItem from '../components/CartItem'
const Cart = ({ cart, setCart, checkoutBtn }) => {
    const totalRent = cart.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
    const removeItem = (cartId) => {
        console.log("clicked remove:", cartId)
        setCart(prev =>
            prev.filter(item => item.cartId !== cartId))
    }
    console.log("cart in checkout:", cart)



    console.log(cart)
    return (
        <div className='px-6 md:px-10 py-8 bg-slate-50 pt-24 '>

            < h1 className='md:mt-0 mt-20 text-3xl sticky font-bold text-slate-900 mb-3' > My Cart</h1 >

            <div className='flex md:gap-6 flex-col md:flex-row gap-11 '>
                <div className='flex-1'>
                    <div className='max-h-[70vh] overflow-y-auto flex flex-col gap-3'>
                        {
                            cart.length === 0 ? <span>Your Cart is Empty</span> :

                                cart.map((item, index) => {
                                    return <CartItem key={item.cartId} item={item} removeItem={removeItem} />
                                })

                        }
                    </div>
                </div>

                < div className='md:w-1/3  md:top-24 border rounded-md px-2 py-3 flex gap-2 flex-col'>
                    <h2 className='text-xl font-semibold'>Summary :</h2>
                    <p className='flex justify-between text-slate-700'>Total Items: {cart.length}</p>
                    <p className='flex justify-between text-slate-700'>Total Rent: ₹        {Number(totalRent)} / month
                    </p>
                    <button onClick={checkoutBtn} className='bg-purple-800 text-white w-full py-2 rounded-md hover:bg-purple-900'>Checkout
                    </button>
                </div >
            </div>
        </div >
    )
}

export default Cart

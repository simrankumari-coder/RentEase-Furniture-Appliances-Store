import React from 'react'
import RentalItem from '../components/RentalItem'
const MyRentals = ({ rentals, setRentals, cart }) => {
    console.log(rentals)
    return (
        <div className='px-6 md:px-10 py-8 bg-slate-50 pt-24'>

            <div className='md:mt-0 mt-20 text-3xl sticky font-bold text-slate-900 mb-3'>
                <h1 className='text-3xl font-bold text-slate-900'>Your Rentals</h1>
                <div className='flex gap-5 flex-col mt-7'>
                    {rentals.length === 0 ? <span className='text-sm font-light mt-0'>No Rentals Yet</span> :
                        rentals.map((item, index) => {
                            return <RentalItem item={item} key={index} />
                        })

                    }
                </div>
            </div>

        </div>
    )
}

export default MyRentals

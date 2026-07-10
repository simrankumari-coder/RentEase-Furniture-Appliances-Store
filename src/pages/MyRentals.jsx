import React from 'react'

import RentalItem from '../components/RentalItem'
const MyRentals = ({ rentals, setRentals, returnRental, cart }) => {

    return (
        <div className='px-6 md:px-10 py-8 bg-slate-50 '>

            <div className=' text-3xl sticky font-bold text-slate-900 mb-3'>
                <h1 className='text-3xl font-bold text-slate-900'>Your Rentals</h1>
                <div className='flex flex-col gap-5  mt-7'>
                    {rentals.length === 0 ? <span className='text-xl font-normal mt-1'>No Rentals Yet</span> :
                        rentals.map((item, index) => {
                            return <RentalItem item={item} returnRental={returnRental} key={index} />
                        })

                    }
                </div>
            </div>

        </div>
    )
}

export default MyRentals

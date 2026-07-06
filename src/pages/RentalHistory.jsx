import React from 'react'
import { useLocation } from 'react-router-dom'
const RentalHistory = ({ rentals }) => {

    return (
        <div>
            {console.log(rentals)}
            {console.log(
                rentals.filter(item => item.status === "completed")
            )
            }      {rentals.filter(item => item.status === "completed")
                .map(item =>
                    <div className='' key={item.cartId}>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                    </div>
                )}
        </div>
    )
}

export default RentalHistory

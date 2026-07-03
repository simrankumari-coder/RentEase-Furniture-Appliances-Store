import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const ScrollToTop = () => {

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div>

        </div>
    )
}

export default ScrollToTop

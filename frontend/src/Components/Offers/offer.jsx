import React from "react"
import './offer.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = () => {
    return (
        <div className="offer-banner">
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers for you !!</h1>
                <p>Only On Best Sellers Products</p>
                <button onClick={()=> window.scrollTo(0,2240)}>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={exclusive_image} alt="image" />
            </div>
        </div>
    )
}
export default Offer
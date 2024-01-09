import React from "react"
import './breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (Props) => {
    //get the data using props
    const { product } = Props
    
    return (
        <div className="breadcrum">
            Home <img src={arrow_icon} /> Shop <img src={arrow_icon} /> {product.category} <img src={arrow_icon} /> {product.name}
        </div>
    )
}
export default Breadcrum
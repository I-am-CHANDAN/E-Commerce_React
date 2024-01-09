import React from "react";
import {Link} from 'react-router-dom'
import './items.css'

// recieve props and show the data values
const Item = (Props) => {
    return (
        <div className="items">
            <Link to={`/product/${Props.id}`} onClick={()=> window.scrollTo(0,0)}><img src={Props.image} alt="image" /></Link>
            <p>{Props.name}</p>
            <div className="item-price">
                <div className="old-price">
                    {Props.old_price}$
                </div>
                <div className="new-price">
                    {Props.new_price}$
                </div>
            </div>
        </div>
    )
}
export default Item
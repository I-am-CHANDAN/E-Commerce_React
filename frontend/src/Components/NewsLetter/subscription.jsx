import React from "react";
import './subscription.css'

const NewsLetter=()=>{
    return(
        <div className="subscription-box">
            <h1>Get Exclusive offers on your Email</h1>
            <p>Subscribe to our NewsLetter and Stay Updated.</p>
            <div>
                <input type="email" placeholder="Your E-mail Id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter
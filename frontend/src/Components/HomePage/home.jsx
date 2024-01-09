import React from "react";
import './home.css'
import { Link } from "react-router-dom";
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/girl1.png'
import NewCollection from "../NewCollection/newCollection";

const Home = () => {
    const latest = ()=>{
        // return window.scrollTo(0,100)
        console.log("clicked")
    }

    return (
        <div className="home-page">
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <p>Here</p>
                        <img src={hand_icon} alt="image"></img>
                    </div>
                    <p>is the new</p>
                    <p>GenZ collections ):</p>
                </div>
                <div className="hero-latest-btn">
                    <div onClick={()=> window.scrollTo(0,2240)}>Latest Collection</div>
                    <img src={arrow_icon} alt="image"></img>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="image"></img>
                {/* <img src={girl_removebg} alt="image"></img> */}
            </div>
        </div>
    )
}
export default Home
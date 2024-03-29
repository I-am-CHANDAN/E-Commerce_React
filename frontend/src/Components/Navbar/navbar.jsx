import React, { useState } from "react";
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="image" />
                <h1>GenZ Kart</h1>
            </div>
            <ul className="nav-menu">
                {/* check condition for hr tag (ternary operator) */}
                {/* created links here */}
                <li onClick={() => { setMenu("shop") }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#000" }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("men") }}>
                    <Link to="men" style={{ textDecoration: "none", color: "#000" }}>Men</Link>{menu === "men" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("women") }}>
                    <Link to="women" style={{ textDecoration: "none", color: "#000" }}>Women</Link> {menu === "women" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link to="kids" style={{ textDecoration: "none", color: "#000" }}>Kids</Link> {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="cart"><img src={cart_icon} alt="image" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
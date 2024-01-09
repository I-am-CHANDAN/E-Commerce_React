import React from "react";
import './CSS/loginSignup.css'

const LoginSignup = () => {
    return (
        <div className="login-signup">
            <div className="loginsign-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-field">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Your email" />
                    <input type="password" placeholder="password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an Account? <span>Login here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>I agree the terms & condition</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup
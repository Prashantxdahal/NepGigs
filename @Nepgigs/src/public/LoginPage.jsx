import React from "react";
import "../css/LoginPage.css";
import loginImage from "../assets/images/login.png"; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="form-section">
          <h1 className="logo">
              <span className="@Nepgigs/src/assets/images/logo.png"></span> 
          </h1>
          <h2>Welcome Back!</h2>
          <p>Select your role to continue</p>

          <div className="button-group">
            <button className="role-btn">Freelancer</button>
            <button className="role-btn">Client</button>
          </div>

          <form>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="form-footer">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit">Login</button>
          </form>
        </div>

        <div className="image-section">
          <img src={loginImage} alt="Login Visual" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

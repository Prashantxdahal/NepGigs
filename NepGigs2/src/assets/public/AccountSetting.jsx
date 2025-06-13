import React from "react";
import "../../Css/AccountSetting.css";
import logo from "../image/nepgigs.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="NepGigs Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <div className="dropdown">
          <a href="#my-business">My Business</a>
        </div>
        <div className="dropdown">
          <a href="#growth-marketing">Growth & Marketing</a>
        </div>
        <div className="dropdown">
          <a href="#analytics">Analytics</a>
        </div>
        <div className="nav-icons">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-regular fa-circle-question"></i>
          <div className="profile-icon"></div>
        </div>
      </nav>
    </header>
  );
};


const AccountSetting = () => {
  return (
    <>
      <Header />
      <div className="account-body">
         <AccountSettingsForm />
       
      </div>
    </>
  );
};


export default AccountSetting;
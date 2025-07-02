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
const AccountSettingsForm = () => {
  return (
    <div className="account-settings-container">
      <aside className="account-sidebar">
        <div className="sidebar-section">
          <p className="sidebar-active">Account</p>
          <p className="sidebar-inactive">Security</p>
        </div>
      </aside>

      <section className="account-form-section">
        <div className="account-form-box">
          <p className="form-note">
            Need to update your public profile?{" "}
            <a href="#" className="go-profile-link">
              Go to My Profile
            </a>
          </p>

          <form className="form-fields">
            <label htmlFor="fullname">FULL NAME</label>
            <input type="text" id="fullname" value="Chirag" readOnly />

            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" value="u*****i@gmail.com" readOnly />

            <button className="update-btn" type="submit">
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
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
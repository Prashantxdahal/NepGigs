// GigDetailPage.jsx
import React from 'react';
import '../css/GigDetailPage.css';
import gigpostingdetail from "../assets/images/gigpostingdetail.png";
import nepgigs from '../assets/images/nepgigs.png';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const GigDetailPage = () => {
  return (
    <div className="gig-detail-page">
      {/* Header */}
      <header className="gig-header">
        <div className="gig-header-left">
          <img src={nepgigs} alt="NepGigs Logo" className="gig-logo" />
        </div>
        <nav className="gig-nav">
          <a href="#">Dashboard</a>
          <div className="dropdown">
            <a href="#">My Business <IoIosArrowDown className="dropdown-icon" /></a>
          </div>
          <div className="dropdown">
            <a href="#">Growth & Marketing <IoIosArrowDown className="dropdown-icon" /></a>
          </div>
          <div className="dropdown">
            <a href="#">Analytics <IoIosArrowDown className="dropdown-icon" /></a>
          </div>
        </nav>
        <div className="gig-header-icons">
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          <FaUserCircle className="icon profile-icon" />
        </div>
      </header>

     {/* Main Content */}
      <main className="gig-main">
        <div className="scroll-wrapper">
          <section className="gig-left">
            <h1 className="gig-title">I will create a stunning modern website for your business</h1>
            {/* Author Info */}
            <div className="gig-author">
              <div className="author-initials">SK</div>
              <div className="author-details">
                <div className="author-name">Sujan Karki</div>
                <div className="order-count">47 orders completed</div>
              </div>
            </div>
            {/* Tag Buttons */}
            <div className="gig-tags">
              <span className="tag-button">Web Development</span>
              <span className="tag-button">3–4 Weeks</span>
              <span className="tag-button">ASAP</span>
            </div>
            <div className="gig-image">
              <img src={gigpostingdetail} alt="Gig preview" />
            </div>
            <div className="gig-description">
              <h3>About This Gig</h3>
              <p>
                Looking for a stunning, professional WordPress website that converts visitors into customers? You’ve come to the right place!
                I specialize in creating modern, responsive WordPress websites that not only look amazing but also perform exceptionally well.
              </p>
              <p>
                With over 5 years of experience in web development and having completed 47+ successful projects, I understand what makes a website truly effective for Nepali businesses.
              </p>
            </div>
          </section>
        </div>
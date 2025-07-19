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

     
import React from 'react';
import '../css/Landingpage.css';

import Landing from "../assets/images/landing.png";
import Card1 from '../assets/images/Card1.png';
import Card2 from '../assets/images/Card2.png';
import Card3 from '../assets/images/Card3.png';
import Card4 from '../assets/images/Card4.png';
import logo from '../assets/images/logo.png';


const LandingPage = () => {
  const services = [
    { title: 'WEB DEVELOPMENT', image: Card1 },
    { title: 'LOGO DESIGN', image: Card2 },
    { title: 'SEO', image: Card3 },
    { title: 'VIDEO EDITING', image: Card4 },
  ];

  return (
    <div>
      <header className="navbar">
        <div className="logo">NepGigs</div>
        <nav className="nav-links">
          <a href="#">Discover</a>
          <a href="#">Hire An Expert</a>
          <a href="#">Freelance Now</a>
          <a href="#">How It Works</a>
          <a href="#">Login</a>
          <button className="join-btn">Join Now</button>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hire An Expert. <br /> Or Become One.
          </h1>
          <p className="subheading">Talent Marketplace Reimagined</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder='Search To "Find Freelancers, Jobs, Or Services"'
            />
            <button className="search-btn">🔍</button>
          </div>
          <div className="trending">
            <span>Trending Services</span>
            <div className="tags">
              <span className="tag">DESIGNER</span>
              <span className="tag">Homework Help</span>
              <span className="tag">WORDPRESS</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={Landing} alt="Hero Woman" />
        </div>
      </section>

      
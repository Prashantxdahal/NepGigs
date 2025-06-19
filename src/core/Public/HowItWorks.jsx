import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Style/HowItWorks.css";
import image from "../../assets/logo.png"; // logo image

// Reusable step card
const StepCard = ({ number, title, description }) => (
  <div className="step">
    <span className="number">{number}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Footer component
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <p className="footer-heading">Categories</p>
          <a href="#">UGC</a>
          <a href="#">Marketing</a>
          <a href="#">Graphic Design</a>
          <a href="#">Web</a>
          <a href="#">Writing</a>
          <a href="#">Business</a>
          <a href="#">Video & Photography</a>
          <a href="#">Programs</a>
        </div>
        <div className="footer-column">
          <p className="footer-heading">About</p>
          <a href="#">Our Instructors</a>
          <a href="#">Our Courses</a>
          <a href="#">Terms of Service</a>
          <a href="#">Nepgigs Privacy Policy</a>
          <a href="#">Nepgigs.com</a>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Support</p>
          <a href="#">FAQ</a>
          <a href="#">Contact Support</a>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Share</p>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a href="#">Become a Seller</a>
          <a href="#">Become Buyer</a>
        </div>
      </div>
    </footer>
  );
};

// Main component
const MainContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <>
      {/* Navbar */}
      <section className="navbar">
        <div className="navbar-left">
          <img src={image} alt="NepGigs Logo" className="logo" />
        </div>

        <div className="navbar-center">
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
          <Link to="/freelance" className="nav-link">
            Freelances Now
          </Link>
          <Link to="/how-it-works" className="nav-link active">
            How It Works
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>

        <div className="navbar-right">
          <Link to="/signup">
            <button className="join-button">join Now</button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>How Nepgigs Works</h1>
        <p>
          Connect with talented freelancers or start your freelancing journey in
          just few simple steps
        </p>
      </section>

      <Footer />
    </>
  );
};

export default MainContent;

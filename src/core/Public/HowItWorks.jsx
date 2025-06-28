import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Style/HowItWorks.css";
import image from "../../assets/nepgigs.png"; // logo image

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
          <img src={image} alt="NepGigs Logo" className="project.png" />
        </div>

        <div className="navbar-center">
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
          <Link to="/freelance" className="nav-link">
            Freelance Now
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
            <button className="join-button">Join Now</button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>How NepGigs Works</h1>
        <p>
          Connect with talented freelancers or start your freelancing journey in
          just a few simple steps
        </p>
      </section>

      {/* For Clients */}
      <section className="clients">
        <h2>For Clients: Hire Expert Freelancers</h2>
        <div className="steps">
          <StepCard
            number="1"
            title="Post Your Project"
            description="Describe your project requirements, set your budget, and timeline. Be specific about what you need to attract the right freelancers."
          />
          <StepCard
            number="2"
            title="Browse & Hire"
            description="Review proposals from skilled freelancers, check their profiles, ratings, and previous work. Choose the perfect match for your project."
          />
          <StepCard
            number="3"
            title="Work with Freelancer"
            description="Work directly with your chosen freelancer, track progress, and make secure payments through our platform when you're satisfied."
          />
        </div>
      </section>

      {/* For Freelancers */}
      <section className="freelancers">
        <h2>For Freelancers: Start Earning Today</h2>
        <div className="steps">
          <StepCard
            number="1"
            title="Create Your Profile"
            description="Build a compelling profile showcasing your skills, experience, and portfolio. Add samples of your best work to attract clients."
          />
          <StepCard
            number="2"
            title="Create Gigs"
            description="Create detailed gig listings for your services. Set competitive prices, clear deliverables, and turnaround times that work for you."
          />
          <StepCard
            number="3"
            title="Deliver & Earn"
            description="Receive orders, communicate with clients, deliver high-quality work on time, and get paid securely through our platform."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of successful freelancers and clients on NepGigs today
        </p>
        <div className="cta-buttons">
          <Link to="/freelance">
            <button className="start">Start Freelancing</button>
          </Link>
          <Link to="/hire">
            <button className="hire">Hire a Freelancer</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainContent;

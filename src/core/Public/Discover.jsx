 
import React from "react";
import "../../Css/DiscoverPage.css";
// import logo from "../image/NepGigs.png";
 
// import { FaArrowRight, FaArrowLeft, FaHeart, FaStar  } from "react-icons/fa";
// import image0 from "../assets/image/image0.png";
// import image1 from "../assets/image/image1.png";
// import image0 from "../image/image0.png";
// import image1 from "../image/image1.png";
// import image2 from "../image/image2.png";
// import image3 from "../image/image3.png";
 
 
// Header
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="NepGigs Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#discover">Discover</a>
        <a href="#freelance">Freelance Now</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#login">Login</a>
        <button className="join-button">Join Now</button>
      </nav>
    </header>
     
  );
};
 
const CategoryNav = () => {
  return (
    <div className="category-nav">
      <a href="#graphics">Graphics & Design</a>
      <a href="#marketing">Digital Marketing</a>
      <a href="#writing">Writing & Translation</a>
      <a href="#video">Video & Animation</a>
      <a href="#music">Music & Audio</a>
      <a href="#tech">Programming & Tech</a>
      <a href="#assignment">Assignment</a>
    </div>
  );
};
 
const ContinueBrowsing = () => {
  return (
    <div className="continue-row">
      <div className="continue-left">
        <span className="continue-title">Continue browsing</span>
        <FaArrowRight className="continue-arrow" />
      </div>
      <div className="continue-right">
        <button className="circle-btn">
          <FaArrowLeft />
        </button>
        <button className="circle-btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
 
const gigs = [
  {
    id: 1,
    seller: "cc__creative",
    level: "Top Rated Seller",
    image: image0,
    title: "I will design UI UX for mobile app with figma for ios",
    rating: 5.0,
    reviews: 570,
    price: "₨8,674",
    likes: "5k"
  },
  {
    id: 2,
    seller: "dorje_lama",
    level: "Level 2 Seller",
    image: image1,
    title: "I will create a professional business website design",
    rating: 4.8,
    reviews: 517,
    price: "₨4,674",
    likes: "3.4K"
  },
  {
    id: 3,
    seller: "cc__creative",
    level: "Top Rated Seller",                    
    image: image0,
    title: "I will design UI UX for mobile app with figma for ios",
    rating: 5.0,
    reviews: 570,
    price: "₨8,674",
    likes: "1k"
  },
  {
    id: 4,
    seller: "adhikari_rohan",
    level: "Level 2 Seller",
    image: image1,
    title: "I will create a professional business website design",
    rating: 4.8,
    reviews: 517,
    price: "₨4,674",
    likes: "3.4K"
  }
];
 
const GigCard = ({ gig }) => (
  <div className="gig-card">
    <div className="gig-seller">
      <FaHeart className="heart" />
      <div>
        <div className="seller-name">{gig.seller}</div>
        <div className="seller-level">{gig.level}</div>
      </div>
    </div>
    <img src={gig.image} alt="Gig" className="gig-image" />
    <div className="gig-info">
      <div className="gig-likes"><FaHeart /> {gig.likes}</div>
      <div className="gig-title">{gig.title}</div>
      <div className="gig-rating">
        <FaStar className="star-icon" /> {gig.rating} <span>({gig.reviews})</span>
      </div>
      <div className="gig-price">STARTING AT <strong>{gig.price}</strong></div>
    </div>
  </div>
);
 
 
const GigCarousel = () => (
  <div className="carousel-container">
    {gigs.map((gig) => (
      <GigCard key={gig.id} gig={gig} />
    ))}
    <div className="carousel-indicators">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  </div>
);
// Most popular gigs
 
 
const MostPopularGigs = () => {
  return (
    <div className="popular-row">
      <div className="popular-left">
        <span className="popular-title">Most Popular Gigs</span>
        <FaArrowRight className="popular-arrow" />
      </div>
      <div className="popular-right">
        <button className="circle-btn">
          <FaArrowLeft />
        </button>
        <button className="circle-btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
 
const gigs1 = [
  {
    id: 1,
    seller: "assignment_dai",
    level: "Top Rated Seller",
    image: image2,
    title: "I will do your college assignment",
    rating: 5.0,
    reviews: 570,
    price: "₨8,674",
    likes: "5k"
  },
  {
    id: 2,
    seller: "sisan baniya",
    level: "Level 2 Seller",
    image: image3,
    title: "I will edit professional video with color grading",
    rating: 4.8,
    reviews: 517,
    price: "₨4,674",
    likes: "3.4K"
  },
  {
    id: 3,
    seller: "creative hub",
    level: "Top Rated Seller",                    
    image: image1,
    title: "I will design UI UX for mobile app with figma for ios",
    rating: 5.0,
    reviews: 570,
    price: "₨8,674",
    likes: "1k"
  },
  {
    id: 4,
    seller: "adhikari_rohan",
    level: "Level 2 Seller",
    image: image0,
    title: "I will create a professional business website design",
    rating: 4.8,
    reviews: 517,
    price: "₨4,674",
    likes: "3.4K"
  }
];
const GigCard1 = ({ gig }) => (
  <div className="gig-card1">
    <div className="gig-seller1">
      <FaHeart className="heart1" />
      <div>
        <div className="seller-name1">{gig.seller}</div>
        <div className="seller-level1">{gig.level}</div>
      </div>
    </div>
    <img src={gig.image} alt="Gig" className="gig-image1" />
    <div className="gig-info1">
      <div className="gig-likes1"><FaHeart /> {gig.likes}</div>
      <div className="gig-title1">{gig.title}</div>
      <div className="gig-rating1">
        <FaStar className="star-icon" /> {gig.rating} <span>({gig.reviews})</span>
      </div>
      <div className="gig-price1">STARTING AT <strong>{gig.price}</strong></div>
    </div>
  </div>
);
 
const GigCarousel1 = () => (
  <div className="carousel-container">
    {gigs.map((gig) => (
      <GigCard key={gig.id} gig={gig} />
    ))}
    <div className="carousel-indicators1">
      <span className="dot active1"></span>
      <span className="dot1"></span>
      <span className="dot1"></span>
    </div>
  </div>
);
 
// Footer
 
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
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <a href="#">Become a Seller</a>
          <a href="#">Become Buyer</a>
        </div>
      </div>
    </footer>
  );
};
 
const DiscoverPage = () => {
  return (
    <>
      <Header />
      <CategoryNav/>
      <ContinueBrowsing />
      <GigCarousel />
      <MostPopularGigs />
     
      <GigCarousel1 />
      <Footer />
     
     
      <div className="body-content">
      </div>
    </>
  );
};
 
 
 
export default DiscoverPage;
 
 
 
 
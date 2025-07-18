

import React, { useState } from "react";
import "../../Css/GigsPosting.css";
import logo from "../image/image5.png";
import gigsImage from "../image/gigs.png";
import { FaChevronRight, FaPaperclip } from "react-icons/fa";

const GigsPosting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  return (
    <div>
      {/* Header */}
      <div className="gigs-posting-header">
        <div className="logo-container">
          <img src={logo} alt="NepGigs Logo" className="logo" />
        </div>
        <div className="step-indicator">
          <a href="#" className="step active">
            1 Share brief description <FaChevronRight className="arrow-icon" />
          </a>
          <a href="#" className="step">
            2 Add timeline and budget <FaChevronRight className="arrow-icon" />
          </a>
          <a href="#" className="step disabled">
            3 Review and Publish
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="gigs-container">
        {/* Left Section */}
        <div className="timeline-left">
          <h1 className="timeline-heading">Let the matching begin...</h1>
          <p className="timeline-subtext">This is where you fill us in on the big picture.</p>
          <a href="#" className="timeline-help-link">How does this matching thing work?</a>
          <div className="timeline-image">
            <img src={gigsImage} alt="Gig Posting Illustration" />
          </div>
        </div>

        {/* Right Section */}
        <div className="gigs-right">
          <div className="freelancer-box">
            <span>🔵 Are you a freelancer?</span>
            <button className="seller-btn">Become a seller</button>
          </div>

          <label className="form-label">
            <span className="form-title">Give your project brief a title</span>
            <span className="form-subtitle">
              Keep it short and simple – this will help us match you to the right category.
            </span>
            <input
              type="text"
              maxLength="70"
              placeholder="Example: Create a WordPress website for my company"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <a href="#" className="helper-link">Some title examples</a>
          </label>

          <label className="form-label">
            <span className="form-title">What are you looking to get done?</span>
            <span className="form-subtitle">
              This will help get your brief to the right talent. Specifics help here.
            </span>
            <textarea
              maxLength="2000"
              placeholder="I need..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <a href="#" className="helper-link">How to write a great description</a>
          </label>

          <label className="file-label">
            <input
              type="file"
              id="file-upload"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <FaPaperclip /> Attach Files
          </label>

          <label className="form-label">
            <span className="form-title">Which category best fits your project?</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose 1 category</option>
              <option value="webdev">Web Development</option>
              <option value="design">Graphic Design</option>
              <option value="writing">Content Writing</option>
              <option value="marketing">Digital Marketing</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GigsPosting;

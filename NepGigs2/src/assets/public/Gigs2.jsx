import React, { useState } from 'react';
import "../../Css/GigsPosting.css";

const NepGigs = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { title, description, category });
  };

  return (
    <div className="nepgigs-container">
      <header className="header">
        <div className="logo-container">
          <span className="logo-triangle">▲</span>
          <span className="logo-text">NepGigs</span>
        </div>
        <div className="progress-steps">
          <div className="step active">
            <span className="step-number">1</span>
            <span className="step-text">Share brief description</span>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-text">Add timeline and budget</span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-text">Review and Publish</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="left-section">
          <div className="hero-content">
            <h1 className="hero-title">Let the matching begin...</h1>
            <p className="hero-subtitle">This is where you fill us in on the big picture.</p>
            <a href="#" className="help-link">How does this matching thing work?</a>
          </div>
          <div className="illustration">
            <svg width="300" height="200" viewBox="0 0 300 200" className="person-illustration">
              <rect x="120" y="80" width="60" height="80" rx="5" fill="#2c3e50" />
              <circle cx="150" cy="60" r="20" fill="#2c3e50" />
              <path d="M140 50 Q140 40 150 40 Q160 40 160 50" fill="none" stroke="#2c3e50" strokeWidth="3" />
              <rect x="190" y="120" width="80" height="50" rx="5" fill="none" stroke="#2c3e50" strokeWidth="2" />
              <circle cx="210" cy="135" r="3" fill="#2c3e50" />
              <path d="M100 80 Q90 70 100 60" fill="none" stroke="#16a085" strokeWidth="3" />
              <path d="M110 70 Q100 60 110 50" fill="none" stroke="#16a085" strokeWidth="3" />
              <path d="M120 60 Q110 50 120 40" fill="none" stroke="#16a085" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="right-section">
          <div className="form-header">
            <div className="info-badge">
              <span className="info-icon">ℹ</span>
              <span>Are you a freelancer?</span>
            </div>
            <button className="become-seller-btn">Become a seller</button>
          </div>

          <div className="project-form">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Give your project brief a title
              </label>
              <p className="form-help">Keep it short and simple - this will help us match you to the right category.</p>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Example: Create a WordPress website for my company"
                className="form-input"
                maxLength={70}
              />
              <div className="char-count">{title.length}/70</div>
              <a href="#" className="help-link">Some title examples</a>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                What are you looking to get done?
              </label>
              <p className="form-help">This will help get your brief to the right talent. Specifics help here.</p>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="I need..."
                className="form-textarea"
                maxLength={2000}
              />
              <div className="char-count">{description.length}/2,000</div>
              <a href="#" className="help-link">How to write a great description</a>
            </div>

            <div className="form-group">
              <button type="button" className="attach-files-btn">
                <span className="attach-icon">📎</span>
                Attach Files
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Which category best fits your project?
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
              >
                <option value="">Choose 1 category</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="design">Design & Creative</option>
                <option value="writing">Writing & Translation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="business">Business & Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepGigs;
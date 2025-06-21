import React, { useState } from "react";
import nepgigs from '../assets/images/nepgigs.png';
import gigImage from '../assets/images/gigposting.png';
import '../css/GigPosting.css';

export default function GigPosting() {
  const [budgetType, setBudgetType] = useState(null);

  return (
    <div className="timeline-container">
      {/* Header - refined inline style */}
      <div className="timeline-header-inline">
        <img src={nepgigs} alt="NepGigs Logo" className="timeline-logo-small" />
        <div className="timeline-progress-inline">
          <span className="step">1</span>
          <span className="label">Share brief description</span>
          <span className="arrow">›</span>
          <span className="step active">2</span>
          <span className="label">Add timeline and budget</span>
          <span className="arrow">›</span>
          <span className="step">3</span>
          <span className="label">Review and Publish</span>
        </div>
      </div>

      <div className="timeline-main">
        {/* Left Section */}
        <div className="timeline-left">
          <h1 className="timeline-heading">
            Tell us about your timeline and budget...
          </h1>
          <p className="timeline-subtext">
            This will help us match you with the right freelancers for your project.
          </p>
          <div className="timeline-image">
            <img src={gigImage} alt="Gig Posting Illustration" />
          </div>
        </div>
        {/* Right Section */}
        <div className="timeline-right">
          <div className="timeline-box">
            <h2 className="box-title">Project Timeline</h2>
            <div className="form-group">
              <label>How long do you expect this project to take?</label>
              <select>
                <option>Select Project Duration</option>
              </select>
            </div>
            <div className="form-group">
              <label>When would you like to start</label>
              <select>
                <option>Select start timeframe</option>
              </select>
            </div>
          </div>

          <div className="timeline-box">
            <h2 className="box-title">Project Budget</h2>
            <div className="budget-options">
              <div
                className={`budget-option ${budgetType === "fixed" ? "active" : ""}`}
                onClick={() => setBudgetType("fixed")}
              >
                <h3>Fixed Price</h3>
                <p>Pay a fixed amount for the entire project</p>
              </div>
              <div
                className={`budget-option ${budgetType === "hourly" ? "active" : ""}`}
                onClick={() => setBudgetType("hourly")}
              >
                <h3>Hourly Rate</h3>
                <p>Pay based on hours worked</p>
              </div>
            </div>
          </div>

          <div className="timeline-buttons">
            <button className="btn-back">Back</button>
            <button className="btn-continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
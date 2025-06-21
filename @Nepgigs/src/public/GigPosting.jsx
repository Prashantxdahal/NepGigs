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
        
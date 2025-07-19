
import React, { useState } from "react";
import "../../Css/RequestForm.css";



const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectDetails: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="request-form-container">
        <div className="request-form-header">
            <h2>Hire Sujan Karki</h2>
            <p>Fill out this form to get started. We'll review your request and get back to you ASAP!</p>
        </div>

        
      <div className="profile-section">
        <div className="profile-initial">SK</div>
        <div className="profile-info">
          <div className="profile-name">Sujan Karki</div>
          <div className="profile-title">Modern Website Development Expert</div>
        </div>
        <div className="price-tag">NPR 15,000 <span>Starting Price</span></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="+977 98XXXXXXXX"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="projectDetails"
          placeholder="Tell us about your project.... What do you need? What's your vision? Any specific requirements?"
          value={formData.projectDetails}
          onChange={handleChange}
          required
        />

        <div className="section-title">Prefeed Budget Range</div>
        <div className="button-group">
          {["NPR 15K-25K", "NPR 25K-50K", "NPR 50K-100K", "NPR 100K+"].map((range) => (
            <button
              type="button"
              className={formData.budget === range ? "selected" : ""}
              onClick={() => handleSelect("budget", range)}
              key={range}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="section-title">Prefeed Timeline</div>
        <div className="button-group">
          {["ASAP", "1 Week", "2 Weeks", "1 Month", "2 Month"].map((time) => (
            <button
              type="button"
              className={formData.timeline === time ? "selected" : ""}
              onClick={() => handleSelect("timeline", time)}
              key={time}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="file-upload">
          <label htmlFor="file-upload">
            <div className="upload-box">
              <span>📁</span>
              <p>Drop Files Here Or Click To Browse<br/>Images, Documents Or Inspiration Files</p>
            </div>
          </label>
          <input type="file" id="file-upload" hidden />
        </div>

        <button type="submit" className="submit-btn">SEND REQUEST</button>
      </form>
    </div>
  );
};

export default RequestForm;
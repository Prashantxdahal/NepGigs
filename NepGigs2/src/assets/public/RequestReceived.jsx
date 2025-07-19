import React from 'react';
// import './RequestReceived.css';
import "../../Css/RequestReceived.css";
import { FaCheckCircle } from 'react-icons/fa';

const RequestReceived = () => {
  return (
    <div className="request-container">
      <div className="request-card">
        <FaCheckCircle className="check-icon" />
        <h2 className="title">Request Received</h2>
        <p className="subtitle">
          Thanks for submitting your hire request. We'll review your request and get back to you within 24 hours via the contact information you provided.
        </p>

        <div className="details-box">
          <div className="detail-row">
            <span>Request ID</span>
            <span className="highlight">#REQ-2047</span>
          </div>
          <div className="detail-row">
            <span>Freelancer</span>
            <span>Sujan Karki</span>
          </div>
          <div className="detail-row">
            <span>Service</span>
            <span>Modern Website Development</span>
          </div>
          <div className="detail-row">
            <span>Submitted</span>
            <span>Jul 17, 02:16 PM</span>
          </div>
        </div>

        <div className="button-group">
          <button className="btn-red">Back to Gigs</button>
          <button className="btn-white">Explore Services</button>
        </div>

        <p className="contact-info">
          Need help? Contact us at <a href="mailto:support@nepgigs.com">support@nepgigs.com</a>
        </p>
      </div>
    </div>
  );
};

export default RequestReceived;

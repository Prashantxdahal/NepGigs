import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import { FaBell, FaEnvelope } from "react-icons/fa";
import image from "../../assets/nepgigs.png";
import "../../Style/UserDashboard.css";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Profile Updated:", data);
    setShowForm(false);
    reset();
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="navbar">
        {/* Logo */}
        <div className="navbar-left">
          <div className="logo">
            <img src={image} alt="NepGigs Logo" className="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>Dashboard</li>
            <li>
              My Business <FiChevronDown size={14} />
            </li>
            <li>
              Growth & Marketing <FiChevronDown size={14} />
            </li>
            <li>
              Analytics <FiChevronDown size={14} />
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="navbar-right">
          <div className="icon">
            <FaBell />
            <span className="dot" />
          </div>
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="avatar">
            <img
              src="https://i.pravatar.cc/40" // Placeholder image
              alt="User"
            />
            <span className="status-dot" />
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome, Season Rai 👋</h1>
        <p>
          Find important messages, tips and links to helpful resources here:
        </p>
      </div>
      {/* Profile and Stats */}
      <div className="main-section">
        <div className="profile-card">
          <div className="avatar">SR</div>
          <p>@seasonrai_087</p>
          <button className="profile-btn" onClick={() => setShowForm(true)}>
            Edit Profile
          </button>
        </div>

        <div className="stats">
          <div className="stat-box">
            2<br />
            Active Orders
          </div>
          <div className="stat-box">
            Rs.20,000
            <br />
            Total Earnings
          </div>
          <div className="stat-box">
            8<br />
            Completed Orders
          </div>
          <div className="stat-box">
            2<br />
            Active Gigs
          </div>
        </div>
      </div>
      {/* Recent Gigs */}
      <div className="recent-gigs">
        <div className="recent-header">
          <h3>Recent Gigs</h3>
          <a href="#">View All</a>
        </div>
        <ul className="gig-list">
          {[
            { title: "Mobile APP UI Design", client: "Techlekh Nepal" },
            { title: "Login Design Package", client: "Techpana", blue: true },
            { title: "Website Revamp", client: "24 Seven Waterproofing" },
            { title: "Mobile APP UI Design", client: "Techlekh Nepal" },
            { title: "Mobile APP UI Design", client: "Techlekh Nepal" },
          ].map((gig, index) => (
            <li key={index} className="gig-item">
              <div>
                <strong>{gig.title}</strong>
                <br />
                <span>Client: {gig.client}</span>
              </div>
              <span className={`status ${gig.blue ? "blue" : ""}`}>
                Completed
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

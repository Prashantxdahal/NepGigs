// import React from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/nepgigs.png";
import { Link } from "react-router-dom";
import "../../Style/BuyerDashboard.css";

const BuyDashboard = () => {
  const { register, handleSubmit, watch } = useForm();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Marketing Website",
      date: "May 13, 2025",
      description:
        "Modern website for digital marketing agency with CMS integration.",
      client: "Pradip Bhattarai",
      amount: "Rs.15,000",
      status: "Active",
    },
    {
      id: 2,
      title: "Logo Design",
      date: "May 13, 2025",
      description: "Design Minimal Logo For my new Business",
      client: "Neehangma Tamang",
      amount: "Rs.5,000",
      status: "Completed",
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      date: "May 30, 2025",
      description:
        "Interactive dashboard for business intelligence with real-time data visualization.",
      client: "Samikshya Sharma",
      amount: "Rs.5,000",
      status: "Completed",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Active Projects (1)" && project.status === "Active") ||
      (activeTab === "Completed" && project.status === "Completed");
    return matchesSearch && matchesTab;
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="navbar-left">
          <img src={image} alt="NepGigs Logo" className="logo" />
        </div>
        <a href="#" className="nav-item">
          Dashboard
        </a>
        <Link to="/my-business" className="nav-item">
          My Business
        </Link>
        <Link to="/growth-marketing" className="nav-item">
          Growth & Marketing
        </Link>
        <Link to="/analytics" className="nav-item">
          Analytics
        </Link>

        <div className="user-actions">
          <div className="message-icon">✉️</div>
          <div className="user-avatar">P</div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1 className="welcome-title">Welcome, Pradip Rai 👋</h1>
        <p className="welcome-subtitle">We're glad to have you back!</p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="profile-card">
          <div className="profile-avatar">PB</div>
          <div className="profile-username">@Pradiprai_087</div>
          <button
            className="view-profile-btn"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyDashboard;

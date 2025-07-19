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

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">1</div>
            <div className="stat-label">Active Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-value">Rs.20,000</div>
            <div className="stat-label">Total Spent</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-value">2</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-header">
          <div className="tabs">
            <button
              className={`tab ${
                activeTab === "Active Projects (1)" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Active Projects (1)")}
            >
              Active Projects (1)
            </button>
            <button
              className={`tab ${activeTab === "Completed" ? "active" : ""}`}
              onClick={() => setActiveTab("Completed")}
            >
              Completed
            </button>
            <button
              className={`tab ${activeTab === "All" ? "active" : ""}`}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
          </div>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              {...register("search")}
            />
          </div>
        </div>

        {/* Project Cards */}
        <div>
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                </div>
                <span
                  className={`project-status ${
                    project.status === "Active"
                      ? "status-active"
                      : "status-completed"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <div className="client-info">
                  <div className="client-avatar">
                    {project.client
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="client-name">{project.client}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="project-amount">{project.amount}</span>
                  {project.status === "Active" && (
                    <button
                      type="button"
                      className="action-btn"
                      onClick={() => handleSubmit(onSubmit)()}
                      //   {...register(`approve_${project.id}`)}
                    >
                      Approve and Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyDashboard;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../assets/nepgigs.png";
import { Link } from "react-router-dom";
import "../../Style/UserDashboard.css";

const NepGigsRequests = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const requests = [
    {
      id: 1,
      title: "Custom Logo Design for Tech Startup with Modern Asthetic",
      client: "Sujan Karki",
      clientInitials: "SK",
      clientColor: "#8b5cf6",
      timeAgo: "2 hours ago",
      budget: "NPR 45,000",
      deadline: "5 days",
      status: "pending",
    },
    {
      id: 2,
      title: "Wordpress website design for my new business",
      client: "Gautam Bahadur",
      clientInitials: "GB",
      clientColor: "#6366f1",
      timeAgo: "2 hours ago",
      budget: "NPR 45,000",
      deadline: "5 days",
      status: "pending",
    },
    {
      id: 3,
      title: "Custom Logo Design for Tech Startup with Modern Asthetic",
      client: "Sujan Karki",
      clientInitials: "SK",
      clientColor: "#8b5cf6",
      timeAgo: "2 hours ago",
      budget: "NPR 45,000",
      deadline: "5 days",
      status: "pending",
    },
  ];

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Pending Requests (1)" && request.status === "pending") ||
      (activeTab === "Active Gigs (1)" && request.status === "active") ||
      (activeTab === "Completed" && request.status === "completed");
    return matchesSearch && matchesTab;
  });

  const handleAccept = (requestId) => {
    console.log(`Accepted request ${requestId}`);
    // Handle accept logic here
  };

  const handleReject = (requestId) => {
    console.log(`Rejected request ${requestId}`);
    // Handle reject logic here
  };

  const handleViewDetails = (requestId) => {
    console.log(`View details for request ${requestId}`);
    // Handle view details logic here
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="requests-dashboard">
      {/* Header */}
      <header className="header">
        <div className="navbar-left">
          <img src={image} alt="NepGigs Logo" className="logo" />
        </div>
        <Link to="/dashboard" className="nav-item">
          Dashboard
        </Link>
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
          <div className="user-avatar">S</div>
        </div>
      </header>
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1 className="welcome-title">Welcome, Season Rai 👋</h1>
        <p className="welcome-subtitle">
          Find important messages, tips and links tohelpful resources here:
        </p>
      </div>
      {/* Stats Section */}
      <div className="stats-section">
        <div className="profile-card">
          <div className="profile-avatar">SR</div>
          <div className="profile-username">@seasonrai_087</div>
          <button className="view-profile-btn">View Profile</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">2</div>
            <div className="stat-label">Active Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Rs.20,000</div>
            <div className="stat-label">Total Spent</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">In Review</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>
      </div>
      {/* Requests Section */}
      <div className="requests-section">
        <div className="requests-header">
          <div className="tabs">
            <button
              className={`tab ${
                activeTab === "Pending Requests (1)" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Pending Requests (1)")}
            >
              Pending Requests (3)
            </button>
            <button
              className={`tab ${
                activeTab === "Active Gigs (1)" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Active Gigs (1)")}
            >
              Active Gigs (1)
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

        {/* Request Cards */}
        <div className="requests-list">
          {filteredRequests.map((request) => (
            <div key={request.id} className="request-card">
              <div className="request-header">
                <div className="client-info">
                  <div
                    className="client-avatar"
                    style={{ backgroundColor: request.clientColor }}
                  >
                    {request.clientInitials}
                  </div>
                  <div className="client-details">
                    <span className="client-name">{request.client}</span>
                    <span className="time-ago">{request.timeAgo}</span>
                  </div>
                </div>
              </div>

              <h3 className="request-title">{request.title}</h3>

              <div className="request-details">
                <div className="detail-item">
                  <span className="detail-label">BUDGET</span>
                  <span className="detail-value budget-value">
                    {request.budget}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">DEADLINE</span>
                  <span className="detail-value">{request.deadline}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">REQUESTED</span>
                  <span className="detail-value">{request.timeAgo}</span>
                </div>
              </div>

              <div className="request-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleAccept(request.id)}
                  {...register(`accept_${request.id}`)}
                >
                  ACCEPT
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleReject(request.id)}
                  {...register(`reject_${request.id}`)}
                >
                  REJECT
                </button>

                {/* <button
                  className="details-btn"
                  onClick={() => handleViewDetails(request.id)}
                  {...register(`details_${request.id}`)}
                >
                  VIEW DETAILS
                </button>
                </button> */}
                <Link to="/View Details" className="nav-item">
                  VIEW DETAILs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NepGigsRequests;

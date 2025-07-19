import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Users,
  Briefcase,
  BarChart3,
  Eye,
  Trash2,
  Flag,
} from "lucide-react";
import image from "../../assets/nepgigs.png";
import "../../Style/AdminDashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock form handling (since we don't have react-hook-form available)
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleReportAction = (action, gigId) => {
    console.log(`${action} gig:`, gigId);
  };

  const tabs = [
    { name: "Dashboard", icon: BarChart3, active: true },
    { name: "Users", icon: Users, active: false },
    { name: "Gigs", icon: Briefcase, active: false },
    { name: "Reports", icon: Flag, active: false },
  ];

  const reportedGigs = [
    {
      id: "GIG-001",
      title: "Logo Design for Tech Startup",
      severity: "High",
      issue: "Inappropriate content reported",
      reporter: "user123",
      timeAgo: "2 hours ago",
    },
    {
      id: "GIG-002",
      title: "Web Development Project",
      severity: "Medium",
      issue: "Plagiarized content",
      reporter: "client456",
      timeAgo: "4 hours ago",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="navbar-left">
              <img src={image} alt="NepGigs Logo" className="logo" />
            </div>
            <h1 className="dashboard-title">Admin Dashboard</h1>
          </div>

          <div className="header-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                className="search-input"
              />
            </div>

            <div className="notification-container">
              <Bell className="notification-icon" />
              <span className="notification-badge"></span>
            </div>

            <div className="user-container">
              <User className="user-icon" />
              <span className="user-name">Admin</span>
            </div>
          </div>
        </div>
        //{" "}
      </header>
      {/* <header className="header">
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
          <div className="notification-icon">🔔</div>
          <div className="message-icon">✉️</div>
          <div className="user-avatar">P</div>
        </div>
      </header> */}

      <div className="main-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-content">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`sidebar-tab ${
                    activeTab === tab.name ? "sidebar-tab-active" : ""
                  }`}
                >
                  <Icon className="sidebar-icon" />
                  <span className="sidebar-text">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          {/* User Overview */}
          <div className="section">
            <h2 className="section-title">User Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-content">
                  <div className="stat-icon-container stat-icon-blue">
                    <Users className="stat-icon" />
                  </div>
                  <div className="stat-details">
                    <p className="stat-label">Total Users</p>
                    <p className="stat-value">4,370</p>
                    <p className="stat-growth stat-growth-positive">
                      +12% this month
                    </p>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-simple">
                  <p className="stat-label">Freelancers</p>
                  <p className="stat-value">2,847</p>
                  <p className="stat-subtitle">65% of total</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-simple">
                  <p className="stat-label">Clients</p>
                  <p className="stat-value">1,523</p>
                  <p className="stat-subtitle">35% of total</p>
                </div>
              </div>

              <div className="stat-card stat-card-green">
                <div className="stat-simple">
                  <p className="stat-label-green">New Signups This Week</p>
                  <p className="stat-value-green">127</p>
                  <p className="stat-growth stat-growth-positive">
                    +18% vs last week
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gig Activity */}
          <div className="section">
            <h2 className="section-title">Gig Activity</h2>
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-title-section">
                  <div className="stat-icon-container stat-icon-purple">
                    <Briefcase className="stat-icon" />
                  </div>
                  <div className="stat-details">
                    <p className="stat-label">Total Gigs</p>
                    <p className="stat-value">3,740</p>
                  </div>
                </div>
                <p className="stat-growth stat-growth-positive">
                  +15% this month
                </p>
              </div>

              <div className="status-grid">
                <div className="status-card status-card-orange">
                  <div className="status-header">
                    <div className="status-dot status-dot-orange"></div>
                    <span className="status-label status-label-orange">
                      Pending
                    </span>
                  </div>
                  <p className="status-value status-value-orange">156</p>
                </div>

                <div className="status-card status-card-blue">
                  <div className="status-header">
                    <div className="status-dot status-dot-blue"></div>
                    <span className="status-label status-label-blue">
                      Approved
                    </span>
                  </div>
                  <p className="status-value status-value-blue">456</p>
                </div>

                <div className="status-card status-card-green">
                  <div className="status-header">
                    <div className="status-dot status-dot-green"></div>
                    <span className="status-label status-label-green">
                      Completed
                    </span>
                  </div>
                  <p className="status-value status-value-green">3,128</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reported Gigs */}
          <div className="section">
            <div className="reports-header">
              <h2 className="section-title">Reported Gigs</h2>
              <span className="pending-count">3 pending</span>
            </div>

            <div className="reports-list">
              {reportedGigs.map((gig) => (
                <div key={gig.id} className="report-card">
                  <div className="report-content">
                    <div className="report-details">
                      <div className="report-title-row">
                        <h3 className="report-title">{gig.title}</h3>
                        <span
                          className={`severity-badge ${
                            gig.severity === "High"
                              ? "severity-high"
                              : "severity-medium"
                          }`}
                        >
                          {gig.severity}
                        </span>
                      </div>
                      <p className="report-issue">{gig.issue}</p>
                      <p className="report-meta">
                        ID: {gig.id} • Reporter: {gig.reporter} • {gig.timeAgo}
                      </p>
                    </div>

                    <div className="report-actions">
                      <button
                        onClick={() => handleReportAction("view", gig.id)}
                        className="action-button action-button-view"
                      >
                        <Eye className="action-icon" />
                      </button>
                      <button
                        onClick={() => handleReportAction("delete", gig.id)}
                        className="action-button action-button-delete"
                      >
                        <Trash2 className="action-icon" />
                      </button>
                      <button
                        onClick={() => handleReportAction("flag", gig.id)}
                        className="action-button action-button-flag"
                      >
                        <Flag className="action-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

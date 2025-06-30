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
    </div>
  );
};

export default NepGigsRequests;

import React, { useState } from "react";
import "../css/AccountSetting.css";
import logo from "../assets/images/logo.png";

export default function AccountSetting() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
    } else if (password !== confirm) {
      setError("Passwords do not match.");
    } else {
      setSuccess("Password updated successfully!");
      // Add API call here
      setPassword("");
      setConfirm("");
    }
  };

  return (
    <div className="account-page">
      {/* Top Nav */}
      <nav className="top-nav">
        <div className="logo-section">
          <img src={logo} alt="NepGigs Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>My Business ▾</li>
          <li>Growth And Marketing ▾</li>
          <li>Analytics ▾</li>
        </ul>
        <div className="nav-icons">
          
          <span>✉️</span>
          <span>?</span>
          <span className="profile-avatar"></span>
        </div>
      </nav>

      <div className="account-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>Account</li>
            <li className="active">Security</li>
            <li>Notifications</li>
          </ul>
        </aside>

        {/* Main Section */}
        <section className="security-settings">
          <h2>SET PASSWORD</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
              />
            </div>
            <p className="password-hint">
              8 characters or longer. Combine upper and lowercase letters and numbers.
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <button className="update-btn" type="submit">Update</button>
          </form>
        </section>
      </div>
    </div>
    );
    }
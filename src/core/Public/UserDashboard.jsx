import React from "react";
import { useForm } from "react-hook-form";
import "../../Style/UserDashboard.css";

const NepGigs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="nep-gigs-container">
      <div className="sidebar">
        <h1>NepGigs</h1>

        <div className="section">
          <h2>Recent Gigs</h2>
          <ul>
            <li>
              Mobile APP UI Design <span>Client: Techlekh Nepal</span>
            </li>
            <li>
              Login Design Package <span>Client: Techpana</span>
            </li>
            <li>
              Website Revamp <span>Client: 24 Seven Waterproofing</span>
            </li>
            <li>
              Mobile APP UI Design <span>Client: Techlekh Nepal</span>
            </li>
            <li>
              Mobile APP UI Design <span>Client: Techlekh Nepal</span>
            </li>
            <li className="view-all">View All</li>
          </ul>
        </div>

        <div className="section">
          <h2>Completed</h2>
          <ul>
            <li>Completed</li>
            <li>Completed</li>
            <li>Completed</li>
          </ul>
        </div>

        <div className="section">
          <h2>Recent Notifications</h2>
          <ul>
            <li>
              Login Successful <span>2 Hours Ago</span>
            </li>
            <li>
              New Project Received <span>Just Now</span>
            </li>
            <li>
              New Project Received <span>Just Now</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <form onSubmit={handleSubmit(onSubmit)} className="gig-form">
          <h2>Create New Gig</h2>

          <div className="form-group">
            <label htmlFor="gigTitle">Gig Title</label>
            <input
              id="gigTitle"
              type="text"
              {...register("gigTitle", { required: "Gig title is required" })}
              placeholder="e.g. Mobile APP UI Design"
            />
            {errors.gigTitle && (
              <span className="error">{errors.gigTitle.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="clientName">Client Name</label>
            <input
              id="clientName"
              type="text"
              {...register("clientName", {
                required: "Client name is required",
              })}
              placeholder="e.g. Techlekh Nepal"
            />
            {errors.clientName && (
              <span className="error">{errors.clientName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="gigType">Gig Type</label>
            <select
              id="gigType"
              {...register("gigType", { required: "Please select a gig type" })}
            >
              <option value="">Select gig type</option>
              <option value="Mobile APP UI Design">Mobile APP UI Design</option>
              <option value="Login Design Package">Login Design Package</option>
              <option value="Website Revamp">Website Revamp</option>
              <option value="Other">Other</option>
            </select>
            {errors.gigType && (
              <span className="error">{errors.gigType.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...register("description")}
              placeholder="Describe the gig details..."
              rows="4"
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Gig
          </button>
        </form>
      </div>
    </div>
  );
};

export default NepGigs;

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import image from "../../assets/nepgigs.png";
import "../../Style/GigsPosting.css";

const ReviewProject = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Project Submitted:", data);
    alert("Project Published!");
  };

  return (
    <div className="review-container">
      {/* Header Steps Bar */}
      <div className="header">
        <img src={image} alt="nepgigs.png" height="40" />
        <div className="step-indicator">
          <span
            className="step done"
            onClick={() => navigate("/share-description")}
          >
            ① Share brief description
          </span>
          <span className="arrow">›</span>
          <span
            className="step done"
            onClick={() => navigate("/add-timeline-budget")}
          >
            ② Add timeline and budget
          </span>
          <span className="arrow">›</span>
          <span
            className="step active"
            // onClick={() => navigate("/review-publish")}
          >
            ③ Review and Publish
          </span>
        </div>
      </div>

      <h2>Review your project</h2>
      <p>
        Make sure everything looks good before publishing your project to
        attract the best freelancers.
      </p>

      <div className="review-grid">
        {/* Left Panel */}
        <div className="preview-card">
          <h3>How your project will appear to freelancers</h3>
          <h4>Create a WordPress website for my company</h4>
          <div className="tags">
            <span>Web Development</span>
            <span>3 - 4 Weeks</span>
            <span>ASAP</span>
            <span>1 Freelancer</span>
          </div>
          <p className="description">
            I need a professional WordPress website for my growing business. The
            site should be modern, responsive, and include a contact form, about
            page, and blog section. I'm looking for someone with experience in
            WordPress development and good design skills.
          </p>
          <div className="price-box">
            <strong>Rs.25,000</strong>
            <p>Fixed Price Project</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="actions-card">
          <button
            className="publish-btn"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            + Publish Project
          </button>
          <button className="draft-btn">Save as Draft</button>
          <div className="next-steps">
            <h4>What happens next?</h4>
            <ul>
              <li>✅ Your project goes live immediately</li>
              <li>✅ Freelancers start submitting proposals</li>
              <li>✅ Review proposals and chat with candidates</li>
              <li>✅ Hire your chosen freelancer and start work</li>
              <li>✅ Pay safely through our secure platform</li>
            </ul>
            <div className="pro-tip">
              <strong>Pro Tip:</strong> Projects with clear descriptions and
              realistic budgets receive 3× more quality proposals!
            </div>
          </div>
        </div>
      </div>

      {/* Settings Form */}
      <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Project Settings</h3>

        <label>
          How many freelancers do you want to hire?
          <select {...register("freelancerCount", { required: true })}>
            <option>One Freelancer</option>
            <option>Multiple Freelancers</option>
          </select>
        </label>

        <label>
          Freelancer experience level
          <select {...register("experienceLevel")}>
            <option>Any Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </label>

        <label>
          Location preference
          <select {...register("location")}>
            <option>Nepal</option>
            <option>Worldwide</option>
          </select>
        </label>

        <label>
          Additional requirements (optional)
          <input
            type="text"
            placeholder="e.g. Must have portfolio, available for video calls, etc."
            {...register("requirements")}
          />
        </label>

        <div className="terms">
          <input type="checkbox" {...register("agree", { required: true })} />
          <span>
            I agree to NepGigs <a href="#">Terms and Services</a> and{" "}
            <a href="#">Privacy Policy</a>. I understand that I will be charged
            a 3% processing fee when I release payment to freelancers.
          </span>
        </div>
        {errors.agree && <p className="error">You must agree to the terms.</p>}

        <button type="submit" className="submit-form">
          Publish
        </button>
      </form>
    </div>
  );
};

export default ReviewProject;

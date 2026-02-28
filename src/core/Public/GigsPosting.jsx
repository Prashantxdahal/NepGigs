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
      <h2>Review your project</h2>
      <p>
        Make sure everything looks good before publishing your project to
        attract the bests freelancers.
      </p>
      <h3>Project Settings</h3>
      <label>
        How many freelancers do you want to hire?
        <select {...register("freelancerCount", { required: true })}>
          <option>One Freelancer</option>
          <option>Multiple Freelancers</option>
        </select>
      </label>
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
          <a href="#">Privacy Policy</a>. I understand that I will be charged a
          3% processing fee when I release payment to freelancer.
        </span>
      </div>
      {errors.agree && <p className="error">You must agree to the term.</p>}
      <button type="submit" className="submit-form">
        Publish
      </button>
    </div>
  );
};

export default ReviewProject;

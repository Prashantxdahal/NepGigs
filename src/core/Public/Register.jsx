import React from 'react';
import { useForm } from 'react-hook-form';
import "../../Style/Register.css";
import image from "../../assets/project.png"


const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    console.log("Accounted created");
  };
  return (
    <div className="account-container">
      <div className="form-section">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })} />
                {errors.email && <p className="error">{errors.email.message}</p>}
          <input type="password" placeholder="Password" {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "At least 8 characters",
                  },
                  validate: {
                    hasUpper: (val) =>
                      /[A-Z]/.test(val) || "Must include an uppercase letter",
                    hasLower: (val) =>
                      /[a-z]/.test(val) || "Must include a lowercase letter",
                    hasNumber: (val) =>
                      /[0-9]/.test(val) || "Must include a number",
                  },
                })}/>
                {errors.password && <p className="error">{errors.password.message}</p>}
          <button type="submit">Create Account</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      
      <div className="image-section">
        <img
          src={image}
          alt="Person jumping and taking a selfie"
        />
      </div>
    </div>
  );
};

export default CreateAccount;
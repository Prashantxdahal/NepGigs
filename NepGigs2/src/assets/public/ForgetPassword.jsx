import React, { useState } from "react";
import "../../Css/ForgetPassword.css";
import resetImage from "../image/forget.png";

const ForgetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };


  return (
    <div className="reset-container">
      <div className="reset-left">
        <img src={resetImage} alt="Reset Password" />
      </div>
      <div className="reset-right">
        <h2>Reset Password</h2>
        <label>New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="reset-btn">Reset Password</button>
      </div>
    </div>
  );
};

export default ForgetPassword;

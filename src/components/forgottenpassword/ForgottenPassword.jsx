import { Image, Transformation } from "cloudinary-react";
import React, { useState } from "react";
import { cloudName, logo } from "../cloud/CloudImages";
import "./forgottenpassword.css";

import axios from "axios";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://propwise.onrender.com/user/forgot-password",
        { email }
      );
      setSuccess(response.data.message)
      setMessage(null)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        setSuccess(null)
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="logo">
        <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
      <h2>Forgot Password</h2>
      {
        message && (
          <div className="error-message">
            <p>{ message }</p>
          </div>
        )
      }
      {
        success && (
          <div className="success-message">
            <p>{ success }</p>
          </div>
        )
      }
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgottenPassword;

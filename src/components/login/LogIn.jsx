// export default Login;
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom"; // Import useNavigate
import { Image, Transformation } from "cloudinary-react";
import { cloudName, logo } from "../cloud/CloudImages";
import "./login.css";

import Logo from "../../../public/Logo.png";

import axios from "axios";

import Cookies from "js-cookie";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  // axios credentials

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // consume api
    try {
      const response = await axios.post(
        "https://propwise.onrender.com/user/login",
        formData
      );
      //get token
      const token = response.data.token;
      // set cookie
      Cookies.set("authToken", token, { expires: 7 });
      setError(null);
      navigate("/user");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <img src={Logo} alt="logo" width={250} height={120} />
        <h4>Welcome back!</h4>
        <p>Please log in to continue</p>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="input-style"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="input-style"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <a href="/forgottenpassword" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        <div className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

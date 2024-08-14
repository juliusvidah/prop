// export default Login;
import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom'; // Import useNavigate
import './admin.css';
import { Image, Transformation } from 'cloudinary-react';
import { cloudName, logo } from '../../cloud/CloudImages';

import axios from 'axios'
import Cookies from 'js-cookie'

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const navigate = useNavigate(); // Initialize navigate

  // axios credentials
  
  const handleChange = (e) => {
    const { name, value } = e.target
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    setFormData(prevFormData=>({
      ...prevFormData,
      [name]: value
    }))
  };
  
  const [ data, setData ] = useState(null)
  const [ errMss, setErrMssg ] = useState(null) 
  
  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault();
    // consume api 
    try {
      const response = await axios.post('https://propwise.onrender.com/admin/propwise-admin/login', formData) 
      const token = response.data.token
      Cookies.set('adminAuth', token, {expires: 7})    
      console.log("login successful") 
      setErrMssg(null)
      navigate('/admin/dashboard')
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message)
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <header className="signin-header">
        <div className="logo">
        <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
          <h1>Sign in</h1>
          <p>Welcome back! Please enter your details.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="username"
              type="text"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
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

export default AdminLogin;
// export default SignUp;
import React, { useState } from "react";
import "./signup.css";
import { Image, Transformation } from "cloudinary-react";
import { cloudName, logo } from "../cloud/CloudImages";

import CheckedImage from '../../../public/Green-Check.png'

import axios from 'axios'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const [ success, setSuccess ] = useState(null)
  const [ error, setError ] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    try {
      const response = await axios.post('https://propwise.onrender.com/user/register', formData)
      setSuccess(response.data.message)
      setError(null)
    } catch (error) {
      if(error.response){
        setError(error.response.data.message)
        setSuccess(null)
      }
    }
  };

  return (
    <>
    {
      success ? (
        <div className="success-wrapper">
          <img src={CheckedImage} alt="checked" width={200} height={200} />
          <h2>Registration Successful</h2>
          <p>Congratulations, your account has been created successfully.</p>
          <p>Kindly check your mail to verify your account to access the site.</p>
        </div>
      ): (
        <div className="signup-container">
          <div className="signup-wrapper">
            <div className="sign-up-image">
              <div className="sign-up-overlay"></div>
            </div>
            <div className="signup-form">
              <header className="signup-header">
                <div className="logo">
                  <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
                    <Transformation crop="scale" width="200" angle="0" />
                  </Image>
                </div>
                <h1>Sign up</h1>
                <p>Please enter your details.</p>
              </header>
              {
                error && <div className="error-container">
                  <p>{ error }</p>
                </div>
              }
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstname"
                        type="text"
                        placeholder="ex: John"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        name="lastname"
                        type="text"
                        placeholder="ex: Doe"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="number">Phone number</label>
                    <input
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      placeholder="Enter your specific address"
                      value={formData.phonenumber}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select your country
                        </option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Algeria">Algeria</option>{" "}
                      </select>
                    </div>
                  </div> */}
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Sign up
                </button>
              </form>
              <div className="signup-prompt">
                Already have an account? <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
    </>
  );
};

export default SignUp;

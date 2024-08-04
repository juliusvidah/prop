import { Image, Transformation } from 'cloudinary-react';
import React, { useState } from 'react';
import { cloudName, logo } from '../cloud/CloudImages';
import './forgottenpassword.css'

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call your API to send reset password link
      const response = await fetch('/https://propwise.onrender.com/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('A reset password link has been sent to your email.');
      } else {
        setMessage('Failed to send reset password link. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
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
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgottenPassword;
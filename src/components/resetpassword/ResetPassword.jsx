import { Image, Transformation } from "cloudinary-react";
import React from "react";
import { cloudName, logo } from "../cloud/CloudImages";
import './resetpassword.css'
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div>
      <div className="logo">
        <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
      <div className="heading">
        <h1>Reset Password</h1>
      </div>
      <div className="inputs1">
        <div className="input1">
          <img
            className="img"
            src="https://w7.pngwing.com/pngs/138/590/png-transparent-computer-icons-password-icon-svg-security-password-icon.png"
            alt=""
          />
          <input type="password" placeholder="Enter New Password" />
        </div>
        <div className="input1">
          <img
            className="img"
            src="https://w7.pngwing.com/pngs/138/590/png-transparent-computer-icons-password-icon-svg-security-password-icon.png"
            alt=""
          />
          <input type="password" placeholder="Confirm New Password" />
        </div>
      </div>
      <Link className="log">
        <div className="btn66">
          <button className="start66">Proceed</button>
        </div>
      </Link>
    </div>
  );
};

export default ResetPassword;

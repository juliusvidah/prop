import React from "react";
import './nav.css'
import { cloudName, mainLogo } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";
import { navGroup1, navGroup2 } from './navData';

const Nav = () => {
  return (
    <div id="Nav">
      <ul>
        <li className="mainLogo">
          {" "}
          <Link to="/">
            {" "}
            <Image cloudName={cloudName} publicId={mainLogo.logo2}>
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </Link>
        </li>
        <li className="group1">
          {navGroup1.map((each) => (
            <Link key={each.id} to={each.path}>
              {" "}
              {each.text}{" "}
            </Link>
          ))}
        </li>
        <li className="group2">
          <button className="btn1">Logout</button>
          {navGroup2.map((each) => (
            <Link to='/User'>
              <img key={each.id} src={each.text}  alt="" />
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Nav;

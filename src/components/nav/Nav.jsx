import React from "react";
import './nav.css'
import { cloudName, mainLogo } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";
import { navGroup1, navGroup2 } from './navData';

import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie'
import axios from 'axios'

const Nav = () => {

  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()

    Cookies.remove('authToken')

    navigate('/login')
  }



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
          <button type="button" onClick={ (e)=>{ handleLogout(e) } } className="btn1">Logout</button>
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

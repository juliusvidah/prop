import React from "react";
import "./home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cloudName, home, user } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="logo">
          <Image className="home1" cloudName={cloudName} publicId={home.home1}>
            <Transformation crop="scale" width="200" angle="0" />
          </Image>
          <Image className="home2" cloudName={cloudName} publicId={home.home2}>
            <Transformation crop="scale" width="200" angle="0" />
          </Image>
          <Image className="home3" cloudName={cloudName} publicId={home.home3}>
            <Transformation crop="scale" width="200" angle="0" />
          </Image>
          <Image className="home4" cloudName={cloudName} publicId={home.home4}>
            <Transformation crop="scale" width="200" angle="0" />
            <Image
              className="home5"
              cloudName={cloudName}
              publicId={home.home5}
            >
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </Image>
        </div>
        <div className="btn7">
          <Link to="/signup">
            <button className="start1">Get Started</button>
          </Link>
        </div>
      </div>
     <div className="heading-home">
     <h2>Walk With Us</h2>
     <p>Propwise is a digital platform designed to democratize real estate <br />investment</p>
     </div>
     <div className="user1">
        <LazyLoadImage className="user111" src={user.user1} />
      </div>
     <div className="about-home">
      <h2>About Us</h2>
      <p>
      We are team of dedicated individuals put together on 1st of July 2024 by CareerEx in partnership with Access bank Plc, to <br /> develop a platform that will democratize real estate investment, offer users transparency and security to their investment. <br /> Team Kraken has developed a product called Propwise, which is an investment platform(website) designed to connect the <br /> finest independent real estate investors and enthusiast  to their dream property. </p>
     </div>
    </div>
  );
};

export default Home;

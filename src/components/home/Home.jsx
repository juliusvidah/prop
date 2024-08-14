import React from "react";
import "./home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cloudName, home, user } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="heropage">
        {/* text content */}
        <div className="content">
          <Image className="home1" cloudName={cloudName} publicId={home.home1}>
            <Transformation crop="scale" width="200" angle="0" />
          </Image>
          <div className="propwise-text">
            <p>Propwise</p>
          </div>
          <div className="inner-content">
            <p className="text-one">Let Us Guide You Home</p>
            <p className="text-two">
              Transform your financial dreams into reality with expert guidance
              and lucrative opportunities in the real estate market. Discover,
              invest, and grow with confidence.
            </p>
            <div className="btn-flex">
              <Link to={"#about"} className="read-more">
                Read more &rarr;
              </Link>
              <Link to={"/login"} className="get-started">
                Get started
              </Link>
            </div>
            {/* <div className="btn7">
              <Link to="/signup">
                <button className="start1">Get Started</button>
              </Link>
            </div> */}
          </div>
          {/* <Image className="home3" cloudName={cloudName} publicId={home.home3}>
            <Transformation crop="scale" width="200" angle="0" />
          </Image> */}
          {/* <Image className="home4" cloudName={cloudName} publicId={home.home4}>
            <Transformation crop="scale" width="200" angle="0" />
            <Image
              className="home5"
              cloudName={cloudName}
              publicId={home.home5}
            >
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </Image> */}
        </div>
        {/* image content */}
        <div className="home">
          <div className="overlay"></div>
        </div>
        {/* <div className="logo">
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
          <div className="overlay">
            <div className="btn7">
              <Link to="/signup">
                <button className="start1">Get Started</button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className="heading-home">
        <h2>Walk With Us</h2>
        <p>
          Propwise is a digital platform designed to democratize real estate{" "}
          <br />
          investment
        </p>
      </div>
      {/* <div className="user1">
        <LazyLoadImage className="user111" src={user.user1} />
      </div> */}
      <div className="about-container">
        <div className="about-text wrapper-1">
          <h1>Expertly Curated Investment Opportunities</h1>
          <p>
            We providing users with a platform to invest in properties, with a
            detailed property listing.
          </p>
          <p>
            At Propwise, we sift through countless real estate options to
            present you with the best investment opportunities. Our team’s
            expertise ensures you receive only the highest quality and most
            promising prospects
          </p>
          <br /><br />
          {/* <Link to={"/signup"} className="get-started extra-w">
            Get started
          </Link> */}
        </div>
        <div className="walk-image-1"></div>
        <div className="walk-image-2"></div>
        <div className="about-text wrapper-2">
          <h1>Ongoing Support and Guidance</h1>
          <p>
            At propWise we aim to provide users with transparency and security
            in their investments. <br />
            you can manage your portfolio and keep track with trends.
          </p>
          <p>
            Our commitment doesn’t end with your investment. We provide
            continuous support and expert advice to help you maximize returns
            and navigate any challenges.
          </p>
        </div>
      </div>
      <div className="about-home">
        <div className="stroke"></div>
        <h2>About Us</h2>
        <p>
          We are team of dedicated individuals put together on 1st of July 2024
          by CareerEx in partnership with Access bank Plc, to <br /> develop a
          platform that will democratize real estate investment, offer users
          transparency and security to their investment. <br /> Team Kraken has
          developed a product called Propwise, which is an investment
          platform(website) designed to connect the <br /> finest independent
          real estate investors and enthusiast to their dream property.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;

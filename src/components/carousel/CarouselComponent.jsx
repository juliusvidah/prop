// CarouselComponent.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel, cloudName } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import "./carouselcomponent.css";

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      centerSlidePercentage={33.33}
      dynamicHeight={false}
      showThumbs={false}
      centerMode={true}
    >
      <div className="slide">
        <Image
          className="carousel1"
          cloudName={cloudName}
          publicId={carousel.caroulsel1}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
        <Image
          className="carousel4"
          cloudName={cloudName}
          publicId={carousel.caroulsel4}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
        {/* <p className="legend">SEMI-DETACHED DUOLEX <span> LOCATION </span> ABUJA</p> */}
      </div>
      <div className="slide">
        <Image
          className="carousel1"
          cloudName={cloudName}
          publicId={carousel.caroulsel2}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
        <Image
          className="carousel4"
          cloudName={cloudName}
          publicId={carousel.caroulsel4}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
      <div className="slide">
        <Image
          className="carousel1"
          cloudName={cloudName}
          publicId={carousel.caroulsel3}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
        <Image
          className="carousel4"
          cloudName={cloudName}
          publicId={carousel.caroulsel4}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

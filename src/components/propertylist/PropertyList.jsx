import React from "react";
import "./propertylist.css";
import { cloudName, property } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "../nav/Nav";
import ShowMore from "../showmore/ShowMore";
const PropertyList = () => {
  return (
    <div>
      <Nav />
      <div className="property">
        <div className="property1">
          <LazyLoadImage className="property1" src={property.property1} />
          <div className="detail">
            <h2>Semi-detached houses</h2>
            <p className="location">
              Abuja <span className="price">$10,000</span>
            </p>
            <span className="see">SEE DETAILS</span>
          </div>
        </div>

        <div className="property2">
          <LazyLoadImage className="property2" src={property.property2} />
          <LazyLoadImage className="property2" src={property.property2} />
          <LazyLoadImage className="property2" src={property.property3} />
          <LazyLoadImage className="property2" src={property.property2} />
          <LazyLoadImage className="property2" src={property.property2} />
          <LazyLoadImage className="property2" src={property.property3} />
        </div>
        {/* <button>ShowMore</button> */}
        <ShowMore/>
      </div>
    </div>
  );
};

export default PropertyList;

import React, { useEffect, useState } from "react";
import "./propertylist.css";
import { cloudName, property } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "../nav/Nav";
import ShowMore from "../showmore/ShowMore";
import ImageFile from "../../../public/bongalow-house.jpg"
import { Link } from "react-router-dom";
import axios from "axios";


const PropertyList = () => {
  const [ data, setData ] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get('https://propwise.onrender.com/properties')
        setData(response.data)
      } catch (error) {
        if(error.response){
          console.log(error.response.data.message)
        }
      }
  
    }
    fetchData()
    console.log(data);
  },[])

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
          <div className="prop-content-wrapper">
          {
                data && data.properties ? (
                  <div className="prop-list">
                    {
                      data.properties.map((property, index)=>(
                        <Link key={index} to={`/property/details/${ property._id }`}>
                          <div className="prop-wrapper">
                          <div className="image-wrapper">
                            <img src={ ImageFile } alt="prop-image" />
                          </div>
                          <div className="prop-info">
                            <span className="prop-text">
                              <p>{ property.title }</p>
                              <p className="state">{ property.state }</p>
                            </span>
                            <span style={{ color: '#E45122' }}>Property type: <span style={{ color: 'black', fontSize: 20 }}>{property.prop_type}</span></span>
                            <br />
                            <span style={{ color: '#E45122' }}>Property status: <span style={{ color: 'black', fontSize: 20 }}>{ property.prop_status }</span></span>
                            <div className="base-prop-cont">
                              <p>${property.price.$numberDecimal}</p>
                              <Link to={`/property/details/${property._id}`}>Buy</Link>
                            </div>
                          </div>
                        </div>
                        </Link>
                      ))
                    }
                  </div>
                ):<p className="loading-p">Loading properties...</p>
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

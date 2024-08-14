import React, { useEffect, useState } from "react";
import "./properties.css";
import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import Bongalow from "../../../../public/bongalow-house.jpg";
import Cookies from "js-cookie";
import axios from "axios";
const Properties = () => {
  const token = Cookies.get("adminAuth");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://propwise.onrender.com/properties",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      }
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="properties-container">
      <div className="admin-menu">
        <img src={Logo} alt="logo" width={210} height={100} />
        <div className="menu">
          <Link to="/admin/dashboard">Home</Link>
          <Link to="/admin/create-property">Create Props</Link>
          <Link to="/admin/properties">View Properties</Link>
          <Link to="/admin/users">User management</Link>
          <Link to="/admin/transactions">Transactions management</Link>
          {/* <Link to="/admin/dashboard">Home</Link>
            <Link to="/admin/dashboard">Home</Link> */}
        </div>
      </div>
      <div className="prop-listing">
        <div className="prop-menu">
          <span>
            <h2>Properties</h2>
            <p>
              This a detailed analysis of property sales, investment, finance
            </p>
          </span>
          <Link to={"/admin/create-property"}>Add New Property</Link>
        </div>
        {
          data && data.properties ? (
          <div className="prop-list">
            {
              data.properties.map((property, index)=>(
              <div className="prop-item" key={ index }>
                <div className="prop-img">
                  <img src={Bongalow} />
                </div>
                <div className="prop-base">
                  <span>
                    <p className="title">{property.title}</p>
                    <p className="state">{property.state}</p>
                  </span>
                  <div className="btn-01">
                    <p>Property type: {property.prop_type} </p>
                    <button>Update</button>
                  </div>
                  <div className="btn-02">
                    <p>${property.price.$numberDecimal}.00</p>
                    <Link to={`/property/delete/${property._id}`}>Delete</Link>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          ):(<p>No property</p>)
        }
      </div>
    </div>
  );
};

export default Properties;

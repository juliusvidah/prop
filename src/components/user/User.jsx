import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { user } from "../cloud/CloudImages";
import Nav from "../nav/Nav";
import "./user.css";
import PopUp from "../popup/PopUp";
import FilPop from "../filpop/FilPop";
import TopUp from "../topup/TopUp";
import PropertyFilterSearch from "../propertyfiltersearch/PropertyFilterSearch";
import { useNavigate, Link } from "react-router-dom";

import Unauthorized from "../../../public/unauthorized.png";

import Cookies from "js-cookie";
import axios from "axios";


const User = () => {
  const [data, setData] = useState(null);
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState(null);

  // get auth from cookie
  const token = Cookies.get("authToken");

  // function to get details
  const fetchData = async () => {
    try {

      const response = await axios.get(
        "https://propwise.onrender.com/user/user-details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  // query user transactions
  const fetchTransaction = async()=>{
    try {
      const response = await axios.get(
        "https://propwise.onrender.com/properties/transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(response.data);  
          
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        console.log(error);
        
      }
    }
  }




  useEffect(() => {
    fetchData();
    fetchTransaction()
  }, []);

  return (
    <div>
      <Nav />
      {error ? (
        <div className="unauthorized-wrapper">
          <img src={Unauthorized} width={300} height={300} />
          <p>{error}</p>
          <p>Click the button below to login</p>
          <div className="btn-link">
            <Link to="/login">Login</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="user1">
            <LazyLoadImage className="user1" src={user.user1} />
          </div>
          <div className="user2">
            <LazyLoadImage className="user2" src={user.user2} />
            <LazyLoadImage className="user7" src={user.user7} />
          </div>
          <Link to={'/user/edit-details'} className="user3">
            <LazyLoadImage className="user3" src={user.user3} />
          </Link>
          <div className="user4">
            <LazyLoadImage className="user4" src={user.user4} />
          </div>
          <div className="username">
            {data && (
              <h2>
                {data.user.firstname} {data.user.lastname}
              </h2>
            )}
            {data && (
              <p className="wallet">
                WALLET BALANCE:{" "}
                <span className="amount">$ {data.user.account_balance}.00</span>
              </p>
            )}
            {data && (
              <p className="wallet">
                Account number:{" "}
                <span className="accountnumber">{data.user.account_number}</span>
              </p>
            )}
          </div>
          <Link to={"/user/transactions"}>
            <div className="market">
              {/* <button className="market1">See Market Trends</button> */}
              <button className="market2">Transaction History</button>
            </div>
          </Link>
          <PopUp />
          <FilPop />
          <TopUp />
          <div className="my-props">
            {/* query user properties purchased */}
          </div>
          {/* <PropertyFilterSearch/> */}
        </>
      )}
    </div>
  );
};

export default User;

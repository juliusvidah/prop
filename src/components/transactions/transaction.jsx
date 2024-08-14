import React from "react";
import "./transactions.css";

import UserImage from "../../../public/heroImage.jpg";
import { Link } from "react-router-dom";

const transaction = () => {
  return (
    <div className="transactions-container">
      <div className="side-bar">
        <div className="user-image">
          <img src={UserImage} />
        </div>
        <Link to={"/user"}>Dashbaord</Link>
        <Link>Full Payment Transaction</Link>
        <Link>Installment Payment Transactions</Link>
      </div>
      <div className="trans-basic-wrappr">
        <div className="trans-content">
            <div className="trans-content-cont">
            <div className="trans-item">
                <h1>Full Payment Transactions</h1>
                <p>Total full payment carried out:</p>
                <h2>20</h2>
            </div>
            <div className="trans-item">
                <h1>Full Payment Transactions</h1>
                <p>Total full payment carried out:</p>
                <h2>20</h2>
            </div>
            </div>
        </div>
        <div>base</div>
      </div>
    </div>
  );
};

export default transaction;

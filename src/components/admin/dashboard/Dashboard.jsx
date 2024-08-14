import React, { useEffect, useState } from "react";
import "../../admin/dashboard/dashboard.css";
import WalletBalance from "../../../../public/money1.png";
import TotalFullPay from "../../../../public/analytics.png";
import InstallmentalPay from "../../../../public/installment.png";
import UserIcon from "../../../../public/User.png";
import Logo from "../../../../public/Logo.png";
import { Link } from "react-router-dom";

import Unauthorized from "../../../../public/unauthorized.png";

import axios from "axios";
import Cookies from "js-cookie";

const Dashboard = () => {
  // get cookies
  const token = Cookies.get("adminAuth");

  const [error, setErrors] = useState(null);
  const [data, setData] = useState(null);
  const [fullpayment, setFullPayment] = useState(null);
  const [installmentpayment, setInstallmentalPayment] = useState(null);

  useEffect(() => {
    // fetch user dashboard info
    const fetchDashboardDetails = async () => {
      try {
        const response = await axios.get(
          "https://propwise.onrender.com/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        if (error.response) {
          setErrors(error.response.data.message);
        }
      }
    };

    // fetch handlefullpayment
    const fullPayment = async () => {
      try {
        const response = await axios.get(
          "https://propwise.onrender.com/admin/full-payment/total",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFullPayment(response.data);
        console.log(fullpayment);
      } catch (error) {
        if (error.response) {
          setErrors(error.response.data.message);
        }
      }
    };

    // fetch handlefullpayment
    const InstallmentPayment = async () => {
      try {
        const response = await axios.get(
          "https://propwise.onrender.com/admin/installmental-pay/total",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setInstallmentalPayment(response.data);
        console.log(installmentpayment);
      } catch (error) {
        if (error.response) {
          setErrors(error.response.data.message);
        }
      }
    };

    fullPayment();
    InstallmentPayment()
    fetchDashboardDetails();
  }, []);

  return (
    <>
      {error ? (
        <div className="unauthorized-wrapper">
          <img src={Unauthorized} width={300} height={300} />
          <p>{error}</p>
          <p>Click the button below to login</p>
          <div className="btn-link">
            <Link to="/admin/login">Login</Link>
          </div>
        </div>
      ) : (
        <div className="dashboard-container">
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
          {data && fullpayment && installmentpayment && (
            <div className="admin-wrapper">
              <div className="admin-content">
                <h3>Overview</h3>
                <p>
                  This a detailed analysis of property sales, investment,
                  finance
                </p>
                <div className="grid-container">
                  <div className="content">
                    <img
                      src={WalletBalance}
                      alt="wallet balance icon"
                      width={20}
                      height={20}
                    />
                    <span>Wallet Balance</span>
                    <p className="content-inner">
                      ${data.dashboard.account_balance}.00
                    </p>
                    <br />
                    <hr />
                    <br />
                    <p>Account Number:</p>
                    <p className="content-base">{data.admin.account_number}</p>
                  </div>
                  <div className="content">
                    <img
                      src={TotalFullPay}
                      alt="wallet balance icon"
                      width={20}
                      height={20}
                    />
                    <span>Full Payments</span>
                    {
                     fullpayment && (<p className="content-inner">${fullpayment.totlaPayment}.00</p>)
                    }
                    <br />
                    <hr />
                    <br />
                    <p>Total Transactions:</p>
                    <p className="content-base">
                      {data.dashboard.propsTransaction}
                    </p>
                  </div>
                  <div className="content">
                    <img
                      src={InstallmentalPay}
                      alt="wallet balance icon"
                      width={20}
                      height={20}
                    />
                    <span>Installmental Pay</span>
                    <p className="content-inner">${installmentpayment.totlaPayment}.00</p>
                    <br />
                    <hr />
                    <br />
                    <p>Total Transactions:</p>
                    <p className="content-base">
                      {data.dashboard.installmentalTransaction}
                    </p>
                  </div>
                </div>
                <div className="grid-container-base">
                  <div className="props-overview">props overview</div>
                  <div className="total-user">
                    <img
                      src={UserIcon}
                      alt="user icon"
                      width={30}
                      height={30}
                    />
                    <span>Total Users</span>
                    <p>{data.dashboard.RegisteredUsers}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;

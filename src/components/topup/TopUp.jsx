import React, { useState, useEffect } from 'react';
import './topup.css'

import axios from 'axios';
import Cookies from 'js-cookie'
const TopUp = () => {
  // State to manage wallet balance, transaction amount, and popup visibility
  const [walletBalance, setWalletBalance] = useState(0); // Default balance
  const [transactionAmount, setTransactionAmount] = useState(''); 
  const [transactionDescription, setTransactionDescription] = useState(''); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility

  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  // Fetch the initial wallet balance from an API (mocking with useEffect)
  useEffect(() => {
    // Replace with your API call
    const fetchWalletBalance = async () => {
      // Mock API call
      const initialBalance = 1000; // Replace with actual API response
      setWalletBalance(initialBalance);
    };

    fetchWalletBalance();
  }, []);


  const token = Cookies.get('authToken')

  // Function to handle adding funds
  const handleAddFunds = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.patch('https://propwise.onrender.com/wallet/fund',
        {
          amount,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response.data.message)  
    } catch (error) {
      if(error.response){
        console.log(error.response.data.message)
      }
    }
  };

  // Function to handle withdrawing funds
  const handleWithdrawFunds = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.patch('https://propwise.onrender.com/wallet/withdraw',
        {
          amount,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response.data.message)  
    } catch (error) {
      if(error.response){
        console.log(error.response.data.message)
      }
    }
  };

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='wallet-container'>
     
      {/* Wallet Balance Display */}
      <div className='wallet-balance'>
      
      </div>

      {/* Button to open the popup */}
      <button className='top-manage' onClick={openPopup}>Manage Funds</button>

      {/* Popup Modal */}
      {
        isPopupOpen &&
      <div className='modal-container'>
        {isPopupOpen && (
          <div className='modal-box'>
            <div>
              <span className='close-icon' onClick={closePopup}>X</span>
              <h3 className='wallet-text'>Wallet Fund/Withdrawal</h3>
              <form>
                <div className="input">
                <input
                    type="number"
                    placeholder="Enter amount"
                    name='amount'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                {/* <input
                    type="text"
                    placeholder="Enter description"
                    name='description'
                    value={transactionDescription}
                    onChange={e => setTransactionDescription(e.target.value)}
                  /> */}
                  <textarea className='description' value={description} name='description' onChange={e=>setDescription(e.target.value)} rows={10} cols={30}></textarea>
                </div>
                <div className='wallet-btn'>
                  <button type='submit' onClick={handleAddFunds}>Add Funds</button>
                  <button type='submit' onClick={handleWithdrawFunds}>Withdraw Funds</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      }
    </div>
  );
};



export default TopUp;
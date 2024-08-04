import React, { useState, useEffect } from 'react';
import './topup.css'

const TopUp = () => {
  // State to manage wallet balance, transaction amount, and popup visibility
  const [walletBalance, setWalletBalance] = useState(0); // Default balance
  const [transactionAmount, setTransactionAmount] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility

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

  // Function to handle adding funds
  const handleAddFunds = () => {
    const amountToAdd = parseFloat(transactionAmount);
    if (!isNaN(amountToAdd) && amountToAdd > 0) {
      setWalletBalance(prevBalance => prevBalance + amountToAdd);
      setTransactionAmount('');
    } else {
      alert("Please enter a valid amount to add.");
    }
  };

  // Function to handle withdrawing funds
  const handleWithdrawFunds = () => {
    const amountToWithdraw = parseFloat(transactionAmount);
    if (!isNaN(amountToWithdraw) && amountToWithdraw > 0) {
      if (amountToWithdraw <= walletBalance) {
        setWalletBalance(prevBalance => prevBalance - amountToWithdraw);
        setTransactionAmount('');
      } else {
        alert("Insufficient balance.");
      }
    } else {
      alert("Please enter a valid amount to withdraw.");
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
        <h3>Wallet Balance: ${walletBalance.toFixed(2)}</h3>
      </div>

      {/* Button to open the popup */}
      <button className='top-manage' onClick={openPopup}>Manage Funds</button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div >
          <div >
            <span  onClick={closePopup}>X</span>
            <h3>Manage Your Wallet</h3>
           <div className="input">
           <input
              type="number"
              placeholder="Enter amount"
              value={transactionAmount}
              onChange={e => setTransactionAmount(e.target.value)}
            />
           </div>
            <button onClick={handleAddFunds}>Add Funds</button>
            <button onClick={handleWithdrawFunds}>Withdraw Funds</button>
          </div>
        </div>
      )}
    </div>
  );
};



export default TopUp;
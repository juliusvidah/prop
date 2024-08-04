import React, { useState } from "react"; // Mock user data
import "./payment.css";
const user = {
  walletBalance: 70000, // example balance
};
const Payment = () => {
  const [amount, setAmount] = useState("");
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleProceed = () => {
    if (parseFloat(amount) > user.walletBalance) {
      setInsufficientBalance(true);
    } else {
      setInsufficientBalance(false);
      setShowConfirmation(true);
    }
  };
  const handleConfirmPayment = () => {
    // Mock payment processing
    if (parseFloat(amount) <= user.walletBalance) {
      user.walletBalance -= parseFloat(amount);
      setTransactionStatus("success");
    } else {
      setTransactionStatus("failure");
    }
    setShowConfirmation(false);
  };
  const handleTopUp = () => {
    user.walletBalance += 5000; // example top-up
  };
  return (
    <div className="payment-page">
      <button className="go-back">Go Back</button>
      <PaymentSummary />{" "}
      <PaymentDetails
        amount={amount}
        onAmountChange={handleAmountChange}
        onProceed={handleProceed}
        insufficientBalance={insufficientBalance}
        walletBalance={user.walletBalance}
        onTopUp={handleTopUp}
      />
      <PaymentInfo />{" "}
      {showConfirmation && (
        <PaymentConfirmation
          amount={amount}
          onConfirm={handleConfirmPayment}
          onCancel={() => setShowConfirmation(false)}
        />
      )}{" "}
      {transactionStatus && (
        <TransactionNotification
          status={transactionStatus}
          onClose={() => setTransactionStatus(null)}
        />
      )}{" "}
    </div>
  );
};
const PaymentSummary = () => (
  <div className="payment-summary">
    {" "}
    <h2>
      Amount to be paid: <span>$5,000</span>
    </h2>{" "}
    <p>
      Thank you for choosing PropWise. Receipt and complete property
      documentation would be available after a successful payment and
      transaction report is successful.
    </p>{" "}
    <div className="transaction-steps">
      <span>Property selected</span>
      <span>Payment Successful</span>
      <span>Transaction Approved</span>{" "}
    </div>{" "}
  </div>
);
const PaymentDetails = ({
  amount,
  onAmountChange,
  onProceed,
  insufficientBalance,
  walletBalance,
  onTopUp,
}) => (
  <div className="payment-details">
    <h1>PropWise</h1>{" "}
    <p>
      An initial first payment of 50% of the total cost of the property is
      required.
    </p>{" "}
    <p>
      The remaining 50% has been split in two, 25% to be paid twice within a
      span of 90 days, from the day the first deposit was made.
    </p>
    <p>Wallet Balance: ${walletBalance}</p>{" "}
    <input
      type="number"
      value={amount}
      onChange={onAmountChange}
      placeholder="Enter Amount"
    />{" "}
    {insufficientBalance && (
      <p className="error">
        Insufficient Balance?{" "}
        <a href="/topup" onClick={onTopUp}>
          Top Up Wallet
        </a>
      </p>
    )}
    <button onClick={onProceed}>Proceed</button> {" "}
  </div>
);
const PaymentInfo = () => (
  <div className="payment-info">{/* Additional information can go here */}</div>
);
const PaymentConfirmation = ({ amount, onConfirm, onCancel }) => (
  <div className="payment-confirmation">
    <h3>Confirm Payment</h3>
    <p>Are you sure you want to pay ${amount}?</p>
    <button onClick={onConfirm}>Confirm</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);
const TransactionNotification = ({ status, onClose }) => (
  <div className={`transaction-notification ${status}`}>
    {status === "success" ? (
      <p>Payment Successful!</p>
    ) : (
      <p>Payment Failed. Please try again.</p>
    )}
    <button onClick={onClose}>Close</button>
  </div>
);
export default Payment;

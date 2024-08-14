import React from 'react'
import { Link } from 'react-router-dom'
import './payment.css'
import Logo from '../../../public/Logo.png'

const Payment = () => {
  return (
    <div className='payment-section'>
      <Link to={"/"}>Go Back</Link>
      <div className='payment-wrapper'>
        <div className='amount'>
          <p className='amt'>Amount to be paid:<span>$5,000</span></p>
          <p className='para-2'>Thank you for choosing Propwise, Reciept and complete property documentation would be available after a successful payment and transaction report is successful</p>
        </div>
        <div className='prop'>
          <img src={ Logo } alt='logo' width={280} height={100} />
          <p>An  initial first payment of 50% of the total cost of the property is required.</p>
          <p>The remaining 50% has been split in two, 25% to be paid twice within a span of 90 days, from the day the first deposit was made. </p>
          <input type='text' name='downPayment' placeholder='Enter Amount' />
          <button>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default Payment
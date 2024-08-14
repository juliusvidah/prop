import React from 'react'
import { Link } from 'react-router-dom'
import './payment.css'
import Logo from '../../../public/Logo.png'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
const Payment = () => {

  const token = Cookies.get
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
          <p>Property amount would be deducted in full from your wallet balance.</p>
          <p>Click the button below to initiate payment.</p>
          <button>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default Payment
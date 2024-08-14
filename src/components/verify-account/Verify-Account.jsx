import React from 'react'

import CheckedImage from '../../../public/Green-Check.png'
import { Link } from 'react-router-dom'

import './verify-account.css'

import { useParams } from 'react-router-dom'

import axios from 'axios'
import Cookies from 'js-cookie'

const VerifyAccount = async() => {

  const authToken = Cookies.get('authToken')

  const { token } = useParams()

  // const response = await axios.patch(``)


  return (
    <div className="success-wrapper">
        <img src={CheckedImage} alt="checked" width={200} height={200} />
        <h2>Verification Successful</h2>
        <p>Congratulations, your account has been verified successfully.</p>
        <p>Click the link below to login</p>
        <Link className='link' to='/login'>Click to Login</Link>
  </div>
  )
}

export default VerifyAccount
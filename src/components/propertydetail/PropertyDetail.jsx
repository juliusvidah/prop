import React, { useState } from 'react'
import Nav from "../nav/Nav";
import './propertydetails.css'
import DemoImg from '../../../public/bongalow-house.jpg'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const PropertyDetail = () => {

  // get params 
  const { id } = useParams()
  // reg error
  const [ error, setError ] = useState(null)
  const [ data, setData ] = useState(null)
  console.log(id)

  // fetch data 
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.get(`https://propwise.onrender.com/property/details/${id}`)
        console.log(response.data);
        
        setData(response.data)
      } catch (error) {
        if(error.response){
          console.log(error.response.data.message)
        }
      }
    }
    fetchData()
  },[])


  return (
    <div>
      <Nav />
      <div className='details-container'>
        <div className='inner-wrapper'>
          <div className='description-container'>
            <div className='img-wrapper'>
              <img src={ DemoImg } alt='description image' />
            </div>
            {
             data && (<h1>{data.details.title}</h1>)
            }
            {
              data && (<p>{ data.details.city } { data.details.state }, Nigeria</p>)
            }
            {
              data && (
              <div className='desc-content'>
                <span className='desc-span-1'>
                  <p className='desc-content-1'>YEAR BUILT</p>
                  <p className='desc-contetn-2'>{ data.details.year_built }</p>
                </span>
                <span className='desc-span-1'>
                  <p className='desc-content-1'>BEDROOM(S)</p>
                  <p className='desc-contetn-2'>{ data.details.bedrooms }</p>
                </span>
                <span className='desc-span-2'>
                  <p className='desc-content-1'>BATHROOM</p>
                  <p className='desc-contetn-2'>{ data.details.bathrooms }, + Guest</p>
                </span>
                <span className='desc-span-2'>
                  <p className='desc-content-1'>ACRE LOT</p>
                  <p className='desc-contetn-2'>{ data.details.acre_lot.$numberDecimal } SQR</p>
                </span>
              </div>
              )
            }
            <br /><br />
            <hr />
            {
              data && (
                <>
                  <h4 className='desc-t'>DESCRIPTION</h4>
                <p className='desc'>
                  { data.details.description }
                </p>
                </>
              )
            }
            {
              data && (
              <div className='desc-btn'>              
                <Link to={`/full-payment/${data.details._id}`}>Make Full Payment</Link>
                <Link to={`/installmental-payment/${data.details._id}`}>Installmental Payment</Link>
              </div>
              )
            }
          </div>
          {
            data && (
            <div className='price-container'>
              <p className='props-title'>Price</p>
              <h1>${data.details.price.$numberDecimal}</h1>
              <p className='props-title'>Features</p>
              <p className='props-inner-price-cont'>
                {data.details.features}
              </p>
              <p className='props-title'>Property type</p>
              <p className='props-inner-price-cont'>{ data.details.prop_type }</p>
              <p className='props-title'>Property status</p>
              <p className='props-inner-price-cont'>{ data.details.prop_status }</p>
              
            </div>
            )
          }
        </div>
        <p className='related-post'>Related Post</p>
        <hr />
      </div>
    </div>
  )
}

export default PropertyDetail
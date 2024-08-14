import React from 'react'
import User from '../../components/user/User'
import './edit.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Edit = () => {
      const [ error, setError ] = useState(null) 
      const [ data, setData ] = useState(null)

      const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        phonenumber: '',
        password: ''
      });
    
      const navigate = useNavigate(); // Initialize navigate
    
      // axios credentials
      
      const handleChange = (e) => {
        const { name, value } = e.target
        // setFormData({
        //   ...formData,
        //   [e.target.name]: e.target.value,
        // });
        setFormData(prevFormData=>({
          ...prevFormData,
          [name]: value
        }))
      };
    // get tokens
    const token = Cookies.get('authToken')

    // api call to get user details
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
          setFormData(response.data);
          setError(null);
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          }
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

    // api call to update record
    const handleUpdate = async(e) => {
      e.preventDefault()
        try {
            const response = await axios.patch('https://propwise.onrender.com/user/edit-records',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log('success', formData)
            setError(null)
        } catch (error) {
            if(error.response){
                console.log(error.response.data)
            }
        }
    }

  return (
    <div className='edit-wrapper'>
        <User />
        <div className='edit-container'>
            <div className='inner-container'>
                <div>
                    <Link to='/user' className='btn-x'>X</Link>
                    <form onSubmit={ handleUpdate }>
                        <input type='firstname' name='firstname' value={formData.firstname} placeholder='Enter firstname' onChange={ handleChange } />
                        <input type='lastname' name='lastname' value={formData.lastname} placeholder='Enter lastname' onChange={ handleChange } />
                        <input type='phonenumber' name='phonenumber' value={formData.phonenumber} placeholder='Enter phonenumber' onChange={ handleChange } />
                        <input className='email' type='email' name='email' value={formData.email} placeholder='Enter email' onChange={ handleChange } />
                        <input className='password' type='password' name='password' value={formData.password} placeholder='Enter password' onChange={ handleChange } />
                        <input type='file' name="profileImage" />
                        <button type='submit'>Update Records</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
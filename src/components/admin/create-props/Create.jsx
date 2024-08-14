import React from "react";
import "../../admin/create-props/create.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const CreateProps = () => {
  // get token
  const token = Cookies.get("adminAuth");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    state: "",
    city: "",
    acre_lot: "",
    prop_type: "",
    features: "",
    bedrooms: "",
    bathrooms: "",
    year_built: "",
  });
  const [images, setImages] = useState([]);

  const [error, setError] = useState(null)
  const [ success, setSuccess] = useState(null)

  // handlechange

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //   handle images
  const handleImage = (event) => {
    const images = event.target.files;
    const { name } = event.target;

    console.log(images[0]);

    // let imagesArray = []
    // for(let image of images){
    //     let { type } = image
    //     const blob = new Blob([image], { type: type })
    //     const imageURL = URL.createObjectURL(blob);
    //     imagesArray.push(imageURL)
    //     formData.append(name, image)
    // }
    // console.log(images);

    // setImages(imagesArray)
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://propwise.onrender.com/admin/create-property",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(response.data.message)
      setError(null)
    } catch (error) {
        if(error.response){
            setError(error.response.data.message)
        }
    }
  };

  return (
    <div className="create-container">
        {
            error && (<p>{error}</p>)
        }
        {
            success && (<p>{success}</p>)
        }
      <div className="create-wrapper">
        <form onSubmit={handlePost}>
          <div className="header">
            <div className="title-container">
              <label htmlFor="title">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Enter Property Title"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Post Property</button>
          </div>
          <div className="inner-cont">
            <div>
              <label htmlFor="description">Property Description</label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="Enter property description"
                rows={30}
                cols={50}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                placeholder="Enter property price"
                onChange={handleChange}
              />
              <label htmlFor="acre_lot">Acre Lot</label>
              <input
                type="number"
                name="acre_lot"
                value={formData.acre_lot}
                placeholder="Enter property Acre Lot"
                onChange={handleChange}
              />
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                placeholder="Enter property state."
                onChange={handleChange}
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter city property is located"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="prop_type">Property Type</label>
              <select
                name="prop_type"
                value={formData.prop_type}
                onChange={handleChange}
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Mixed-use">Mixed-use</option>
                <option value="Victorian home">Victorian home</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Estate">Estate</option>
                <option value="Single family home">Single Family Home</option>
              </select>
              <label htmlFor="features">Features</label>
              <textarea
                name="features"
                value={formData.features}
                placeholder="Enter property features"
                rows={20}
                cols={20}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                placeholder="Enter number of bedrooms"
                onChange={handleChange}
              />
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                type="number"
                value={formData.bathrooms}
                name="bathrooms"
                placeholder="Enter number of bathrooms"
                onChange={handleChange}
              />
              <label htmlFor="images">Select Images</label>
              <input
                type="file"
                name="images"
                placeholder="Select at least 4 property images"
                multiple
                onChange={handleImage}
              />
              <label htmlFor="year_built">Year Built</label>
              <input
                type="number"
                value={formData.year_built}
                name="year_built"
                placeholder="Enter year built"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProps;

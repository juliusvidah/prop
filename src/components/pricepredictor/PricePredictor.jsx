import React, { useState } from "react";
import "./pricepredictor.css";
const PricePredictor = () => {
  const nigeriaStatesAndCities = {
    Lagos: ["Ikeja", "Lekki", "Yaba", "Surulere"],
    Abuja: ["Garki", "Wuse", "Asokoro", "Maitama"],
    Plateau: ["Jos city", "Pankshin", "Shendam", "Mangu"],
    Kano: ["Kano Municipal", "Fagge", "Tarauni", "Nasarawa"],
    Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme", "Ikwerre"], // Add more states and cities here...
  };
  const [formValues, setFormValues] = useState({
    squareFeet: "",
    bedrooms: "",
    bathrooms: "",
    state: "",
    city: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setFormValues({
        ...formValues,
        state: value,
        city: "", // Reset city when state changes
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Dummy prediction function
    const price = predictPrice(formValues);
    setPredictedPrice(price);
  };
  const predictPrice = (values) => {
    const basePrice = 50000;
    const pricePerSquareFoot = 200;
    const bedroomMultiplier = 10000;
    const bathroomMultiplier = 7000; // Example of factoring in location, e.g., state and city
    const locationMultiplier =
      values.state === "Lagos" || values.city === "Lekki" ? 2 : 1.5;
    return (
      (basePrice +
        values.squareFeet * pricePerSquareFoot +
        values.bedrooms * bedroomMultiplier +
        values.bathrooms * bathroomMultiplier) *
      locationMultiplier
    );
  };
  return (
    <div className="container">
       <h1>Real Estate Price Predictor</h1>
      {" "}
      <form onSubmit={handleSubmit}>
       {" "}
        <div>
          <label>Square Feet:</label>
         {" "}
          <input
            type="number"
            name="squareFeet"
            value={formValues.squareFeet}
            onChange={handleChange}
          />
        {" "}
        </div>
       {" "}
        <div>
        <label>Bedrooms:</label>
        {" "}
          <input
            type="number"
            name="bedrooms"
            value={formValues.bedrooms}
            onChange={handleChange}
          />
          {" "}
        </div>
        {" "}
        <div>
          <label>Bathrooms:</label>
          {" "}
          <input
            type="number"
            name="bathrooms"
            value={formValues.bathrooms}
            onChange={handleChange}
          />
          {" "}
        </div>
        {" "}
        <div>
        <label>State:</label>
          {" "}
          <select name="state" value={formValues.state} onChange={handleChange}>
            <option value="">Select a state</option>
            {" "}
            {Object.keys(nigeriaStatesAndCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
            {" "}
          </select>
        {" "}
        </div>
      {" "}
        <div>
          <label>City:</label>
         {" "}
          <select
            name="city"
            value={formValues.city}
            onChange={handleChange}
            disabled={!formValues.state}
          >
           <option value="">Select a city</option>
           {" "}
            {formValues.state &&
              nigeriaStatesAndCities[formValues.state].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            {" "}
          </select>
          {" "}
        </div>
        <button type="submit">Predict Price</button>
      {" "}
      </form>
      {" "}
      {predictedPrice && (
        <div className="prediction">
           <h2>Predicted Price:</h2>
         <p>${predictedPrice.toFixed(2)}</p>
          {" "}
        </div>
      )}
    {" "}
    </div>
  );
};
export default PricePredictor;

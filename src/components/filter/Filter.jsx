import React, { useState, useEffect } from 'react';
// import propertiesData from './properties.json'; // Assume this is the dataset provided by the data scientist
import './filter.css';

function Filter() {
  // State to manage the full list of properties and the filtered list
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
 
  // State to manage filter criteria
  const [priceRange, setPriceRange] = useState('all');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');

  // Load the dataset on component mount
  useEffect(() => {
    setProperties('');
    setFilteredProperties(''); // Initialize filtered properties with the full dataset
  }, []);

  // Handle filter logic
  const handleFilter = (e) => {
    e.preventDefault();

    const filtered = properties.filter(property => {
      let matchesPrice = true;
      let matchesLocation = true;
      let matchesType = true;

      // Filter by price range
      if (priceRange !== 'all') {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        matchesPrice = maxPrice
          ? property.price >= minPrice && property.price <= maxPrice
          : property.price >= minPrice;
      }

      // Filter by location
      if (location) {
        matchesLocation = property.location.toLowerCase().includes(location.toLowerCase());
      }

      // Filter by property type
      if (propertyType !== 'all') {
        matchesType = property.type === propertyType;
      }

      return matchesPrice && matchesLocation && matchesType;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="filter-container">
      <h2>Filter Properties</h2>
      <form onSubmit={handleFilter}>
        <div className="form-group">
          <label htmlFor="price-range">Price Range:</label>
          <select
            id="price-range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="0-50000">Up to $50,000</option>
            <option value="50000-100000">$50,000 - $100,000</option>
            <option value="100000-200000">$100,000 - $200,000</option>
            <option value="200000+">Over $200,000</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="property-type">Property Type:</label>
          <select
            id="property-type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <button type="submit">Apply Filters</button>
      </form>

      <div className="results">
        <h3>Filtered Properties</h3>
        {filteredProperties.length > 0 ? (
          <ul>
            {filteredProperties.map(property => (
              <li key={property.id}>
                {property.location} - {property.type} - ${property.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
  );
}

export default Filter;
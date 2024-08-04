import React, { useState, useEffect } from 'react';

const PropertyFilterSearch = () => {
  const properties = [
    { id: 1, location: 'Lagos', price: 50000, type: 'Apartment' },
    { id: 2, location: 'Abuja', price: 75000, type: 'House' },
    // Add more properties here...
  ];

  const [filters, setFilters] = useState({ location: '', priceRange: '', type: '' });
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    const filtered = properties.filter((property) => {
      return (
        (filters.location ? property.location === filters.location : true) &&
        (filters.priceRange ? property.price <= filters.priceRange : true) &&
        (filters.type ? property.type === filters.type : true)
      );
    });
    setFilteredProperties(filtered);
  }, [filters]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar with Filter Inputs */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#e45122',
        color: '#fff',
      }}>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
          style={{
            padding: '0.5rem',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="number"
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
          placeholder="Max Price"
          style={{
            padding: '0.5rem',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
      </nav>

      {/* Display Filtered Properties */}
      <div style={{
        padding: '1rem',
        backgroundColor: '#f4f4f4',
      }}>
        {filteredProperties.map((property) => (
          <div key={property.id} style={{
            backgroundColor: '#fff',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>{property.location}</h3>
            <p style={{ margin: '0 0 0.5rem' }}>Price: ${property.price}</p>
            <p style={{ margin: '0' }}>Type: {property.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFilterSearch;
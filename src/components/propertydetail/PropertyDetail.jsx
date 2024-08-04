import React, { useState } from 'react';

const PropertyDetail = ({ property, onClose }) => {
  if (!property) return null;

  const { description, status, type, price, imageUrl } = property;

  const handlePayment = () => {
    // Logic for handling payment goes here
    alert('Redirecting to payment...');
  };

  return (
    <div style={styles.container}>
      <button onClick={onClose} style={styles.closeButton}>Close</button>
      <h2 style={styles.title}>Property Details</h2>
     
      <img src={imageUrl} alt="Property" style={styles.image} />
     
      <p style={styles.description}>{description}</p>
     
      <div style={styles.details}>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Price:</strong> {price}</p>
      </div>
     
      <button style={styles.paymentButton} onClick={handlePayment}>
        Make Payment
      </button>
    </div>
  );
};

const PropertyList = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      description: 'A luxurious 4-bedroom villa with stunning ocean views, private pool, and modern amenities.',
      status: 'Available',
      type: 'Residential',
      price: '$1,500,000',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      id: 2,
      name: 'Urban Apartment',
      description: 'A modern apartment in the heart of the city, close to all amenities and public transport.',
      status: 'Sold',
      type: 'Residential',
      price: '$800,000',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    // Add more properties as needed
  ];

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetail = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <ul style={styles.list}>
        {properties.map((property) => (
          <li key={property.id} style={styles.listItem}>
            <span>{property.name}</span>
            <button
              onClick={() => handlePropertyClick(property)}
              style={styles.viewButton}>
              View Details
            </button>
          </li>
        ))}
      </ul>

      {selectedProperty && (
        <PropertyDetail property={selectedProperty} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#FF7F50', // Orange color for title
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  details: {
    marginBottom: '20px',
    fontSize: '1rem',
  },
  paymentButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#FF7F50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewButton: {
    padding: '5px 10px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#FF7F50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PropertyList;
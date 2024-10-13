import React from 'react'

const FoodCard = ({ imageSrc, nameTh, nameEn, price }) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '200px', // Adjust as needed
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        margin: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
      }}>
        <img 
          src={imageSrc} 
          alt={nameEn} 
          style={{
            width: '100%',
            height: '150px', // Adjust as needed
            objectFit: 'cover'
          }} 
        />
        <div style={{ padding: '10px' }}>
          <h2 style={{ margin: '5px 0', fontSize: '18px' }}>{nameTh}</h2>
          <h3 style={{ margin: '5px 0', fontSize: '16px', color: '#555' }}>{nameEn}</h3>
          <p style={{ color: '#888' }}>Price: {price} THB</p>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
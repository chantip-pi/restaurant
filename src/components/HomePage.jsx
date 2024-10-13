import React from 'react'
import Nav from './Nav'
import FoodCard from './FoodCard'

function Homepage() {
  return (
    <>
   <Nav />
   <div style={{ display: 'flex', height: '50vh', width: '100vw' }}>
     <div style={{ flex: 1, overflow: 'hidden' }}>
        <img src="public/cover.jpg"   style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}></img>
        </div>
   </div>
    <div style={{flexDirection: 'column', margin: 10  , flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>
            Lorem Ipsum Restuarant
        </h1>
        <p>
            Authentic Japanese Restaurant
        </p>
    </div>
    <div style={{flexDirection: 'column', margin: 50  , flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>
            Special Promotions
        </h2>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <FoodCard
            imageSrc="public/placeholder.jpg"
            nameTh="อาหารไทย"
            nameEn="Thai Food"
            price="150"
        />
          <FoodCard
            imageSrc="public/placeholder.jpg"
            nameTh="อาหารไทย"
            nameEn="Thai Food"
            price="150"
        />
          <FoodCard
            imageSrc="public/placeholder.jpg"
            nameTh="อาหารไทย"
            nameEn="Thai Food"
            price="150"
        />
          <FoodCard
            imageSrc="public/placeholder.jpg"
            nameTh="อาหารไทย"
            nameEn="Thai Food"
            price="150"
        />

    </div>
    
    </>
  )
}

export default Homepage
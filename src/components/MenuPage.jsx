import React from 'react'
import Nav from './Nav'
import FoodCard from './FoodCard'
function MenuPage() {
  return (
    <>
        <Nav />
        <div>Menu</div>

        <div style={{margin: 50, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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

export default MenuPage
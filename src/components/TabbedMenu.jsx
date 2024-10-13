import React, { useState, useEffect} from 'react';
import foodCategoriesData from '../data/food.json'
import FoodCard from './FoodCard';
import Nav from './Nav';
const TabbedMenu = () => {
  const [activeTab, setActiveTab] = useState('thai');
  const [foodCategories, setFoodCategories] = useState({});

  useEffect(() => {

    setFoodCategories(foodCategoriesData);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <>
    <Nav />
    <div style={{margin: 50,flexDirection: 'column'  , flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>
            Menu
        </h1>
    </div>
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', cursor: 'pointer', marginBottom: '20px',flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {Object.keys(foodCategories).map((category) => (
          <div
            key={category}
            onClick={() => handleTabClick(category)}
            style={{
              padding: '10px 20px',
              borderBottom: activeTab === category ? '2px solid #000' : 'none',
              marginRight: '10px',
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        ))}
      </div>

      {/* Food Cards */}
      <div style={{ margin: 50, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {foodCategories[activeTab] ? (
          foodCategories[activeTab].map((food, index) => (
            <FoodCard
              key={index}
              imageSrc={food.imageSrc}
              nameTh={food.nameTh}
              nameEn={food.nameEn}
              price={food.price}
            />
          ))
        ) : (
          <p>No items available in this category.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default TabbedMenu;

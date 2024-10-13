import React from "react";
import Nav from "./Nav";
import FoodCard from "./FoodCard";

function Homepage() {
  return (
    <>
      <Nav />
      <div style={{ display: "flex", height: "50vh", width: "100vw" }}>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <img
            src="public/placeholder.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </div>
      </div>
      <div
        style={{
          margin: 50,
          flexDirection: "column",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Lorem Ipsum Restuarant</h1>
        <p>Authentic Japanese Restaurant</p>
        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src="public/placeholder.jpg"
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "#ccc", // Color of the lines
          marginRight: "10px", // Space between line and text
        }}
      />
      <div
        style={{
          flexDirection: "column",
          margin: 50,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Special Promotions</h2>
      </div>

      <div
        style={{
          margin: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
  );
}

export default Homepage;

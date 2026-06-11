import React from "react";
import foodData from "./data/foodData";
const Card = ({search,category}) => {
    const filteredFood = foodData.filter((item) => {
     const matchSearch = 
      item.name.toLowerCase().includes(search.toLowerCase().trim());
      const matchCategory = category === "All" || item.category === category;
      return matchSearch && matchCategory
    })
  return (
    <div className="card-container">
      {filteredFood.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <h2>{item.name}</h2>

          <div className="card-details">
            <h3>{item.price}</h3>
            <p>{item.type}</p>
          </div>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
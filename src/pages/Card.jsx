import React, { useState } from "react";
import foodData from "./data/foodData";
import Swal from "sweetalert2"

const Card = ({search,category,cart,setCart}) => {
  const popup = () => {
   Swal.fire({
      title: "Success!",
      text: "Item added to cart successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
}
const addToCart = (item) => {
  const exist = cart.find((x) => x.id === item.id);
  if(exist){
    setCart(
      cart.map((x) =>(
        x.id === item.id
        ? {...x,quantity: x.quantity + 1}
        : x
      ))
    )
  } else{
    setCart([...cart, {...item, quantity: 1}])
  }
  popup();
}

   
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

          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Card;
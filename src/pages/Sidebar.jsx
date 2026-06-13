import React from "react";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2"

const getPrice = (price) => {
  return parseInt(String(price).replace(/[^0-9]/g,""),10)
};
const Sidebar = ({ cart, setCart, setShowCart }) => {
   const popup = () => {
     Swal.fire({
        title: "Success!",
        text: "Order placed successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
   };

  const deliveryFee = 40;

  const subtotal = cart.reduce(
    (total, item) => total + getPrice(item.price) * item.quantity,
    0
  );

  const tax = Math.round(subtotal * 0.05);

  const grandTotal = subtotal + deliveryFee + tax;

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setShowCart(false)}
      ></div>

      <div className="fixed top-0 right-0 h-screen w-[70vw] bg-white z-50 shadow-2xl flex flex-col rounded-l-xl">

        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">My Cart</h1>

          <button onClick={() => setShowCart(false)}>
            <IoClose size={30} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">

          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full">
              <h2 className="text-2xl font-bold">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 mt-2">
                Add some delicious food 🍕
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-100 rounded-xl p-3 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-green-600 font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="w-8 h-8 bg-gray-300 rounded-full"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="w-8 h-8 bg-green-500 text-white rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>

              </div>
            ))
          )}

        </div>

        <div className="border-t p-6">

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Taxes</span>
            <span>₹{tax}</span>
          </div>

          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button className="w-full bg-green-600 text-white py-4 rounded-xl mt-6 text-lg font-semibold hover:bg-green-700 transition"onClick={popup}>
            Place Order
          </button>

        </div>

      </div>
    </>
  );
};

export default Sidebar;
import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ search, setSearch, cart, setShowCart }) => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <IoFastFoodOutline size={40} className='navlogo' />
            </div>
            <div className="navbar-search">
                <h3> <FaSearch /></h3>
                <input className="search" type='text' placeholder='Search For Food' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="navbar-cart">

                <FaShoppingCart
                    size={40}
                    className="navlogo cursor-pointer"
                    onClick={() => setShowCart(true)}
                />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>

            </div>
        </div>
    )
}

export default Navbar

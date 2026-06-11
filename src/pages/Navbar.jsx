import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({search,setSearch}) => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
               <IoFastFoodOutline size={40} className='navlogo' /> 
            </div>
            <div className="navbar-search">
                <h3> <FaSearch /></h3>
            <input className = "search" type='text' placeholder='Search For Food' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="navbar-cart">
                <FaShoppingCart size={40} className='navlogo' />
            </div>
        </div>
    )
}

export default Navbar

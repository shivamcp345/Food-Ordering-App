import React, { useState } from 'react'
import  "./index.css"
import Navbar from './pages/Navbar'
import Menu from './pages/Menu'
import Card from './pages/Card'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'
const App = () => {
  const[search,setSearch] = useState("");
  const[category,setCategory] = useState("All")
  const[cart,setCart] = useState([])
  const[showCart, setShowCart] = useState(false);
  console.log(cart);
  

  return (
    <div>
      <Navbar search = {search}
      setSearch= {setSearch}
      cart = {cart}
      setShowCart = {setShowCart}
      />
      <Menu category = {category}
       setCategory = {setCategory}
      />
      <Card search = {search}
         category = {category}
         cart = {cart}
         setCart = {setCart}
      />
      {
        showCart && (
          <Sidebar
          cart = {cart}
          setCart = {setCart}
          setShowCart = {setShowCart} />
        )
      }
      <Footer/>
      
    </div>
  )
}

export default App

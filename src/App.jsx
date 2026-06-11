import React, { useState } from 'react'
import  "./index.css"
import Navbar from './pages/Navbar'
import Menu from './pages/Menu'
import Card from './pages/Card'
import Footer from './pages/Footer'
const App = () => {
  const[search,setSearch] = useState("");
  const[category,setCategory] = useState("All")
  const[cart,setCart] = useState([])
  return (
    <div>
      <Navbar search = {search}
      setSearch= {setSearch}
      />
      <Menu category = {category}
       setCategory = {setCategory}
      />
      <Card search = {search}
         category = {category}
         cart = {cart}
         setCart = {setCart}
      />
      <Footer/>
    </div>
  )
}

export default App

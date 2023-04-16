

import Flowfooter from './component/footer'
import Flownavbar from './component/navbar'
import About from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './pages/menu'
import Home from './pages/home'
import Cart from './pages/cart'
import {CartProvider} from 'react-use-cart'
import Franchise from './pages/franchise'
import Order from './pages/order'
import Login from './pages/login'
import Register from './pages/register'
import { useState } from 'react'



function App() {
  //const [count, setCount] = useState(0)
  //{user && user._id ? <Home/> : <Login setLoginUser={setLoginUser}/>}</>
//const [collections, setLoginUser] = useState({
  // name:"",
  // email:"",
  // password:""
//})
  return (
   <>
   
   
   <CartProvider>
   
   <BrowserRouter>
   <Flownavbar></Flownavbar>
   <Routes>
   <Route path="/home" element={<Home/>}></Route>
   <Route path="/menu" element={<Menu/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
   <Route path="/franchise" element={<Franchise/>}></Route>
   <Route path="/order" element={<Order/>}></Route>
   <Route path="/" element={<Login setLoginUser={setLoginUser}/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path="/order" element={<Order/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   
   </Routes>
   </BrowserRouter>
   </CartProvider>
   <Flowfooter></Flowfooter></>
  )
}

export default App

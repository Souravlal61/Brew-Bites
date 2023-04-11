

import Flowfooter from './component/footer'
import Flownavbar from './component/navbar'
import About from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrer from './pages/carrer'
import Menu from './pages/menu'
import Home from './pages/home'
import Cart from './pages/cart'
import {CartProvider} from 'react-use-cart'
import Franchise from './pages/franchise'
import Order from './pages/order'
import Login from './pages/login'
import Register from './pages/register'
import Order from './pages/order'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   
   
   <CartProvider>
   <BrowserRouter>
   <Flownavbar></Flownavbar>
   <Routes>
   <Route path="/home" element={<Home/>}></Route>
   <Route path="/menu" element={<Menu/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/carrer" element={<Carrer/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
   <Route path="/franchise" element={<Franchise/>}></Route>
   <Route path="/order" element={<Order/>}></Route>
   <Route path="/" element={<Login/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path="/order" element={<Order/>}></Route>
   <Route path="/" element={<Login/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
   </Routes>
   </BrowserRouter>
   </CartProvider>
   <Flowfooter></Flowfooter></>
  )
}

export default App

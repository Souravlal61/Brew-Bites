 import { Navbar } from "flowbite-react"
 import { Link, useLocation } from "react-router-dom"
 import logo from "../image/logo.jpg"
 import {BsCart3} from 'react-icons/bs'
 import {Avatar} from "flowbite-react"
 import { Dropdown } from "flowbite-react"
 import user from "../image/user.jpg"
 import { useCart } from "react-use-cart"
 export default function Flownavbar(){
  const{totalItems}=useCart();
  //const location = useLocation()
    return(

 <Navbar
   fluid={true}
   rounded={true}
     className="font-bold pb-4  bg-opacity-10"
     
 >
   <Navbar.Brand>
     <img
       src={logo}
       className="mr-3 h-6 sm:h-9 rounded-full"
       alt="Logo"
     />
     <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
       BREW & BITES
     </span>
   </Navbar.Brand>
   <div className="flex md:order-2">
     <Dropdown
       arrowIcon={false}
       inline={true}
       label={<Avatar alt="User" img={user} rounded={true}/>}
     >
       
       <Dropdown.Item>
       <Link to="/menu">Setting</Link>
       </Dropdown.Item>
       <Dropdown.Divider />
       <Dropdown.Item>
        <Link to="/login">Log out</Link>
       </Dropdown.Item>
     </Dropdown>
     <Navbar.Toggle />
   </div>
   <Navbar.Collapse>
     <Navbar.Link> 
      <Link to="/home"> HOME</Link>
     </Navbar.Link>
     <Navbar.Link> 
      <Link to="/about"> ABOUT </Link>
     </Navbar.Link>
     <Navbar.Link> 
      <Link to="/menu"> MENU </Link>
     </Navbar.Link>
     <Navbar.Link> 
      <Link to="/franchise"> FRANCHISE </Link>
     </Navbar.Link>
     <Navbar.Link>
     
    <Link to="/cart" className=" font-serif text-bold text-xl"><div className="flex justify-items-center"> <BsCart3 size='2rem' /><span className="rounded-full bg-orange-600 text-white w-6 h-7 text-center">{totalItems}</span></div></Link> 
  
     </Navbar.Link>

   </Navbar.Collapse>
 </Navbar>
     )}
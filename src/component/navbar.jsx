 import { Navbar } from "flowbite-react"
 import { Link } from "react-router-dom"
 import logo from "../image/logo.jpg"
 import {BsCart3} from 'react-icons/bs'
 import {Avatar} from "flowbite-react"
 import { Dropdown } from "flowbite-react"
 import user from "../image/user.jpg"
 export default function Flownavbar(){
    return(

 <Navbar
   fluid={true}
   rounded={true}
     className="font-bold pb-4"
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
         <Link to="/register">Register</Link>
       </Dropdown.Item>
       <Dropdown.Divider />
       <Dropdown.Item>
        <Link to="/login"> Sign out</Link>
       </Dropdown.Item>
     </Dropdown>
     <Navbar.Toggle />
   </div>
   <Navbar.Collapse>
     <Navbar.Link> 
      <Link to="/home"> HOME </Link>
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
     <Link to="/cart" className=" font-serif text-bold text-xl"><BsCart3 size='2rem' />
     </Link> 
     </Navbar.Link>

   </Navbar.Collapse>
 </Navbar>
     )}
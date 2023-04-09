
import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import logo from "../image/logo.jpg"
import {BsCart3} from 'react-icons/bs'

export default function Flownavbar(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
  className="font-bold pb-5"
>
  <Navbar.Brand>
    <img
      src={logo}
      className="mr-3 h-8 sm:h-12"
      alt="logo"
    />
    <span className="self-center whitespace-nowrap text-2xl font-extrabold dark:text-white">
      Brew & Bites
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse className="text-bold text-xl font-semibold dark:text-black mt-2">
  <Navbar.Link>
    
      
        <Link to="/home" className=" font-serif text-bold text-xl">
      Home
      </Link>
    </Navbar.Link>
     
    <Navbar.Link>
    <Link to="/about" className=" font-serif text-bold text-xl">
      About  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/menu" className=" font-serif text-bold text-xl">
      Menu  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/franchise" className=" font-serif text-bold text-xl">
      Franchise</Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/carrer" className=" font-serif text-bold text-xl">
      Carrer </Link>
    </Navbar.Link>
  
    <Navbar.Link>
    <Link to="/cart" className=" font-serif text-bold text-xl"><BsCart3 size='2rem' />
    </Link> 
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}
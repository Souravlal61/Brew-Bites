
import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import logo from "../image/logo.jpg"

export default function Flownavbar(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
  className="font-bold"
>
  <Navbar.Brand>
    <img
      src={logo}
      className="mr-3 h-8 sm:h-9"
      alt="logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Brew & Bites
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse className="text-bold text-xl font-semibold dark:text-white mt-2">
  <Navbar.Link>
    
    
        <Link to="/home">
      Home
      </Link>
    </Navbar.Link>
     
    <Navbar.Link>
    <Link to="/about">
      About  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/menu">
      Menu  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/reservation">
      Reservation  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/carrer">
      Carrer </Link>
    </Navbar.Link>
  
    <Navbar.Link>
    <Link to="/cart">
    Cart</Link> 
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}
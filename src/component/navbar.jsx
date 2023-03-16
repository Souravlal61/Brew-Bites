import { CContainer } from "@coreui/react"
import { CForm } from "@coreui/react"
import { CFormInput } from "@coreui/react"
import { CButton } from "@coreui/react"
import { Dropdown } from "flowbite-react"
import { Navbar } from "flowbite-react"
import { Avatar } from "flowbite-react"
import { Link } from "react-router-dom"
import logo from "../image/logo.jpg"
export default function Flownavbar(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Brew & Bites
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
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
    <Link to="/franchise">
      Franchise </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/carrer">
      Carrer  </Link>
    </Navbar.Link>
    
    <CContainer fluid>
    
    <CForm className="d-flex">
      <CFormInput type="search" className="me-2" placeholder="Search" />
      <CButton type="submit" color="success" variant="outline">
        Search
      </CButton>
    </CForm>
  </CContainer>

  </Navbar.Collapse>
</Navbar>
    )
}
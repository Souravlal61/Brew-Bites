
import { Dropdown } from "flowbite-react"
import { Navbar } from "flowbite-react"
import { Avatar } from "flowbite-react"
import { Link } from "react-router-dom"
export default function Flownavbar(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src="logo.jpg"
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
    <Navbar.Link
      href="/navbars"
      active={false}
    >
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
    <Link to="/gallery">
      Gallery  </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/carrer">
      Carrer  </Link>
    </Navbar.Link>
    


  </Navbar.Collapse>
</Navbar>
    )
}
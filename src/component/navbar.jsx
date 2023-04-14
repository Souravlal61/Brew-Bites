
// import { Navbar } from "flowbite-react"
// import { Link } from "react-router-dom"
// import logo from "../image/logo.jpg"
// import {BsCart3} from 'react-icons/bs'


// export default function Flownavbar(){
//     return(
//         <Navbar
//   fluid={true}
//   rounded={true}
//   className="font-bold pb-5"
//  >
//   <Navbar.Brand>
//     <img
//       src={logo}
//       className="mr-3 h-8 sm:h-12 rounded-full"
      
//       alt="logo"
//     />
   
//     <span className="self-center whitespace-nowrap text-2xl font-extrabold dark:text-white">
//       Brew & Bites
//     </span>
//   </Navbar.Brand>
//    <div className="flex md:order-2">
//   {/* <Button>
//       Login
//     </Button>
//    <div className="flex md:order-2">
//   {/* <Button>
//       Login
//     </Button>
//     <Navbar.Toggle />
//   </div>
//   <div className="flex justify-end md:order-2">
//   <Button>
//       Register
//     </Button>
//     <Navbar.Toggle /> */}
//     </div> 

  

//   <Navbar.Collapse className="text-bold text-xl font-semibold dark:text-black mt-2">
//   <Navbar.Link>
    
      
        
      
//         <Link to="/home" className=" font-serif text-bold text-xl">
//       Home
//       </Link>
//     </Navbar.Link>
     
//     <Navbar.Link>
   
//     <Link to="/about" className=" font-serif text-bold text-xl">
//       About  </Link>
//     </Navbar.Link>
//     <Navbar.Link>
    
//     <Link to="/menu" className=" font-serif text-bold text-xl">
//       Menu  </Link>
//     </Navbar.Link>
//     <Navbar.Link>
    
//     <Link to="/franchise" className=" font-serif text-bold text-xl">
//       Franchise</Link>
//     </Navbar.Link>
//     <Navbar.Link>
   
//     <Link to="/carrer" className=" font-serif text-bold text-xl">
//       Carrer </Link>
//     </Navbar.Link>
  
//     <Navbar.Link>
//     <Link to="/cart" className=" font-serif text-bold text-xl"><BsCart3 size='2rem' />
//     </Link> 
//     </Navbar.Link>


//     <Navbar.Link>
//     <Link to="/login" className=" font-serif text-bold text-xl">
//       Login </Link>
//       </Navbar.Link>

//     {/* <Navbar.Link>
//     <Link to="/login" className=" font-serif text-bold text-xl">
//       Register</Link>
//     </Navbar.Link>  */}


//     {/* <Navbar.Link>
//     <Link to="/login" className=" font-serif text-bold text-xl">
//       Register</Link>
//     </Navbar.Link>  */}

//   </Navbar.Collapse>
// </Navbar>
//     )
// }


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
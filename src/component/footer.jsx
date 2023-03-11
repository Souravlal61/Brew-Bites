import { Footer } from "flowbite-react"
export default function Flowfooter(){
return(
<Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Brew & Bites"
    year={2022}
  />
  <Footer.LinkGroup>
   
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
   
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>)}
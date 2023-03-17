import { Carousel } from "flowbite-react"
import image21 from"../image/image21.jpg"
import image22 from"../image/image22.jpg"
import image23 from"../image/image23.jpg"
import image24 from"../image/image24.jpg"
import image25 from"../image/image25.jpg"
export default function Flowcrousel(){
    return(
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src={image21}
      alt="image"
    />
    <img
      src={image22}
      alt="image"
      
    />
    <img
      src={image23}
      alt="image"
    />
    <img
      src={image24}
      alt="image"
    />
    <img
      src={image25}
      alt="image"
    />
  </Carousel>
  

</div>
        </>
    )
}
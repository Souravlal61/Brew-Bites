import { Carousel } from "flowbite-react"

export default function Flowcrousel(){
    return(
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><center>Hundreds of flavors under one roof</center></h2>

</div>
        </>
    )
}
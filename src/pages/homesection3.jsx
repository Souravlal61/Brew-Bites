
import image34 from '../image/image34.jpg'
import starbuck from '../image/starbuck.jpg'
import chai from '../image/chai.png'
import burger from '../image/burger.png'
import samosa from '../image/samosa.png'
import roll from '../image/roll.jpg'
import { Link } from 'react-router-dom'
export default function Timing() {
    return (
    
       <>
      <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% ">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% "><center>Contact Us!</center></h2>
        <div className="mx-auto max-w-8xl py-20 sm:px-2 sm:py-8 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-100 to-blue-200 px-6 pt-24 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">
               Restaurant - Timing
                <br />
                Monday - Friday = 9am to 10pm
                <br />
                Saturday - Sunday = 10am to 11pm
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="mt-6 text-lg leading-4 text-black">
                Contact Us at : 98795xxxxx
              </p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="https://accounts.google.com/" className="mt-6 text-lg leading-8 text-blue-900">
               Email us at : helloeveryone@gmail.com
              </a>
               
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={image34}
                alt="Restaurant"
                width={2000}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>

<div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90%  py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <h2 className="text-center text-4xl font-bold">
    Collabration With These Companies
  </h2>
  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
   <a href='https://www.starbucks.in/dashboard'> <img
      className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 hover:scale-110"
      src={starbuck}
      alt="starbucks"
      width={140}
      height={60}
    /></a>
   <a href='https://www.burgerking.in/'> <img
      className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 hover:scale-110"
      src={burger}
      alt="Burger king"
      width={158}
      height={48}
    /></a>
   <a href=''> <img
      className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 hover:scale-110"
      src={samosa}
      alt="samosa singh"
      width={158}
      height={48}
    /></a>
 <a href=''><img
      className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-110"
      src={roll}
      alt="roll express"
      width={158}
      height={48}
    /> </a>  
   <a href=''> <img
      className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-110"
      src={chai}
      alt="chai sutta bar"
      width={158}
      height={48}
    /></a>
  </div>
</div>
</div>
</>
    )
  }
  
  
import image29 from '../image/image29.jpg'
import image30 from '../image/image30.jpg'
import image32 from '../image/image32.jpg'
import image35 from '../image/image35.jpg'
import image36 from '../image/image36.jpg'
import image37 from '../image/image37.jpg'
import { Link } from "react-router-dom"
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
const callouts = [
  {
    name: 'Cup Cakes',
    description: 'Cup Cakes with multiple flavours.',
    imageSrc: image29,
    imageAlt: 'Cup Cakes.',
    href: '#',
  },
  {
    name: 'Rolls',
    description: 'Special Rolls with different flavours.',
    imageSrc: image30,
    imageAlt: 'Rolls.',
    href: '#',
  },
  {
    name: 'Pizza',
    description: 'Piza with extra Cheese',
    imageSrc: image32,
    imageAlt: 'Pizza.',
    href: '#',
  },
  {
    name: 'Burgers',
    description: 'Burger with Panner & Chicken patties or with Different Flavours..',
    imageSrc: image35,
    imageAlt: 'Burgers.',
    href: '#',
  },
  {
    name: 'Chilli Chicken',
    description: 'Chilli Chicken with Tandoori Roti.',
    imageSrc: image36,
    imageAlt: 'Chilli Chicken.',
    href: '#',
  },
  {
    name: 'Naan with Panner',
    description: 'Naan with Panner and salad.',
    imageSrc: image37,
    imageAlt: 'Naan with Panner.',
    href: '#',
  },
]

const stats = [
  { id: 1, name: 'We arranges Birthday Parties for childrens as well as youngers with different themes as per the coustomer requirement.', value: 'Birthday Party' },
  { id: 2, name: 'We arranges Buisness Parties for their buisness meetings.coustomers are well satisfied with our services.', value: 'Buisness Meetings' },
  { id: 3, name: 'We arranges Wedding Parties for Newly Weds Couple as well as aniversery parties.', value: 'Wedding Party' },
]

export default function Items() {
  return (

   <>
    <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% ">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% "><center>Our Special Items</center></h2>
        <div className="mt-4 items-center justify-center gap-x-6 lg:justify-start">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% "><center>Feel the joy of mouthwatering food.</center></h2>
        </div>
        <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

{/*OUR SERVICES */}
<h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90% "><center><u>Services.</u></center></h2>
    <div className="bg-gradient-to-r from-indigo-300 from-10% via-sky-100 via-30% to-emerald-50 to-90%  py-24 sm:py-20">
    
<div className="mx-auto max-w-8xl px-6 lg:px-8">
  <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {stat.value}
        </dd>
      </div>
    ))}
  </dl>
</div>
</div>


<div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-100 from-10% via-sky-500 via-30% to-emerald-50 sm:py-24 lg:py-32 bg opacity-80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Why to Choose Brew & Bites.</h2>
            <p className="mt-4 text-lg leading-8 text-black">
            LOWEST OPERATING COST IN INDUSTRY, NO BRAND COMMISSIONS ON SUPPLIES/ RAW MATERIALS/ MARKETING SPENDS
            
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Link to="/venue"
              
              className="flex-none rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
             Order Venue
            </Link>
             
              <Link to="/franchise"
              
                className="flex-none rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
               Take a Franchise
              </Link>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-8 w-8 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">FOFO (Franchise Owned Franchise Operated)</dt>
              <dd className="mt-2 leading-7 text-gray-900">
                In this model, the Comapany just rents Out the Brand Name to the franchise operator for a particular non-refundable sum also said to be - franchise fees for an agreed interval of time...
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon className="h-8 w-8 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">COCO (Comapany Owned Comapany Operated)</dt>
              <dd className="mt-2 leading-7 text-gray-900">
             This can be said to be another outlet of the company which is completely owned and operated by the company. From setting up the store to running it, the company does it all.It's not related to a franchise outlet. 
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>


</>
  )
}


          

              
        
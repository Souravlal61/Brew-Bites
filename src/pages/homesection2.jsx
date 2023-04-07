import image29 from '../image/image29.jpg'
import image30 from '../image/image30.jpg'
import image32 from '../image/image32.jpg'
import image35 from '../image/image35.jpg'
import image36 from '../image/image36.jpg'
import image37 from '../image/image37.jpg'

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
    <div className="bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-4xl font-bold bg-white"><center>Our Menu Items</center></h2>
        <h2 className="text-3xl font-bold bg-white"><center>Feel the joy of mouthwatering food.</center></h2>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
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
<h2 className="text-4xl font-bold bg-white"><center><u>Services.</u></center></h2>
    <div className="bg-white py-24 sm:py-20">
    
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
</>
  )
}


          

              
        
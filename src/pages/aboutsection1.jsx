





const features = [
  {
    name: 'we entered this industry with a 2- fold approach',
  },
  
  {
  
    description:'1. To drive innovation & open new cafes specially in Tier 2 & Tier 3 cities'
  },
  {
  
    description: '2.To provide the coustomers something Special.'
  },
 
]
import image from "../image/image.jpg"
export default function About_res() {
  return (
    
    <div className="bg-lime-200 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us !</p>
              
             
              <p className="mt-6 text-lg leading-8 text-gray-600">
              In 2016, Our Founder – Sourav Lal, during an international trip visited a restaurant which had multiple Cusines options & bold flavours like  Pasta sauce , Risotto Alla Milanese , Chhole Bhature which were native to the country. That’s when the idea clicked – why can’t India has its own restaurant chain which sells varieties of Cusines with unique and varied flavours that every Indian can relate to. That’s when the Brew & Bites restaurant was born!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                     
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={image}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
       
    



    
    </div>
    
    </div>
      </div>
  )
}



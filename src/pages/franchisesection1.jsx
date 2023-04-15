


const features = [
    { name: 'CARPET AREA', description: '200 to 600 Sqft' },
    { name: 'INVESTMENT', description: 'Staring at 20 lakhs + Applicable taxes (Excluding Franchise fees)' },
    { name: 'fRANCHISE FEES', description: 'RS. 700000' },
    { name: 'PREFERRED LOCATION', description: 'Near School, College, Crowded tourist spot, High street, Crowdwd Markets' },
    { name: 'FRANCHISE TENURE', description: '5 Years' },
]
  
  import franch1 from "../image/franch1.jpg" 
import franch2 from "../image/franch2.jpg" 
import franch3 from "../image/franch3.jpg" 
import franch4 from "../image/franch4.jpg" 

  export default function Fran() {
    return (
      <div className="bg-gradient-to-r from-cyan-200 to-blue-100">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why to Choose
Brew & Bites</h2>
            <p className="mt-4 text-gray-500">
            LOWEST OPERATING COST IN INDUSTRY, NO BRAND COMMISSIONS ON SUPPLIES/ RAW MATERIALS/ MARKETING SPENDS
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={franch1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={franch2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={franch3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={franch4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      
      <section class="dark:bg-gray-900">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><center>Our Expension Across India.</center></h2>
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">Outlets</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">Cities</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">10,00000+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">Orders</dd>
              </div>
          </dl>
      </div>
    </section>
  
    </div>
      
    )
  }
  

        /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const products = [
  {
    id: 1,
    name: 'Butter Chicken',
    href: '#',
    imageSrc: 'image3.jpg',
    imageAlt: 'Butter Chicken',
  },
  {
    id: 2,
    name: 'Choumin',
    href: '#',
    imageSrc: 'image2.jpg',
    imageAlt: 'Choumin',
  },
  {
    id: 3,
    name: 'Panner Tika',
    href: '#',
    imageSrc: 'image4.jpg',
    imageAlt: 'Panner Tika',
  },
  {
    id: 4,
    name: 'French Fries',
    href: '#',
    imageSrc: 'image5.jpg',
    imageAlt: 'French Fries',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><center>Our Food</center></h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-52 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


    
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'Ma grosse bite 1',
    href: '#',
    price: 'qpofqpeok fpok',
    availability: 'White and Black',
    imageSrc: '/cat.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Ma grosse bite 2',
    href: '#',
    price: 'qpsqisdfo qoisejf oqijfoijsef',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: 'qofqoief oijqoiesjfoiqjs e',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: 'qofqoief oijqoiesjfoiqjs e',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More projects...
]

export default function ProjectsList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 transition ease-in-out hover:scale-110">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout='fill'
                  objectFit='contain'
                  className=''
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

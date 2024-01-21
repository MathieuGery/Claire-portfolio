import Image from 'next/image'
import { projects } from '@/projects/projects'

export default function ProjectsList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((product: any) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 transition ease-in-out hover:scale-110">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={400}
                  width={400}
                  // fill
                  // layout='fill'
                  // objectFit='contain'
                  // placeholder="blur"
                  className=''
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.short_description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

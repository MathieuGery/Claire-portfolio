import Image from "next/image"

const files = [
  {
    source:
      '/cat.jpg',
  },
  {
    source:
      '/cat.jpg',
  },
  {
    source:
      '/cat.jpg',
  },
  {
    source:
      '/cat.jpg',
  },
  {
    source:
      '/cat.jpg',
  },
  // More files...
]

export default function ProjectDetails(props: any) {
  return (
    <div className="bg-white">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">10/10/2023</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Lambersart
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {props.project.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {props.project.description}
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex items-center justify-center">
            <Image src={props.project.imageSrc} width={500} height={500} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
      <div className="px-20 pt-5">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {props.project.images.map((file: any) => (
            <li key={file.source} className="relative">
              <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="pointer-events-none object-cover" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
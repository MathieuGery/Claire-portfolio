import { a_propos } from '@/projects/a_propos'

export default function Recap() {
  return (
    <div className="overflow-hidden bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{a_propos.title}</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
             {a_propos.description}
            </p>
            <div className="mt-10 flex">
              <a
                href="/cv.pdf"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={a_propos.images[0].source}
                alt="me"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

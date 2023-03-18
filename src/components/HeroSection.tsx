import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit
                sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              className="rounded-full bg-indigo-50 lg:rounded-full"
              src="/claire.jpg"
              alt="me"
              height={400}
              width={400}
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-gray-900">Judith Black</div>
            <div className="mt-1 text-gray-500">CEO of Workcation</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
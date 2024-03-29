import Image from 'next/image'
import PhotoGallery from './PhotoGallery'
import YoutubePlayer from '@/components/YoutubePlayer'

export default function ProjectDetails(props: any) {
  return (
    <div className="bg-white">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div
                className="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">{props.project.date}</span>
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
            <Image src={props.project.imageSrc} width={500} height={500} alt="" className="rounded-xl"/>
          </div>
        </div>
      </div>
      {/* <div className="px-10 pt-5 sm:px-20 sm:pt-5">
        <ul role="list" className="grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
          {props.project.images.map((file: any) => (
            <li key={file.source} className="flex">
              <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="overflow-hidden pointer-events-none object-cover rounded-lg bg-gray-100 shadow-xl" />
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="mt-20 mx-12">
        <PhotoGallery images={props.project.images}/>
      </div>
      {props.project.videos &&
          <div className="mt-5 mx-12 items-center justify-center grid grid-cols-1 gap-y-10">
            {props.project.videos.map((id: { ytid: string }) => (
              <YoutubePlayer videoId={id.ytid} title='video'/>
            ))}
          </div>
      }
    </div>
  )
}

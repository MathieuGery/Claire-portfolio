import Image from "next/image"
import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

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
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex items-center justify-center">
            <Image src={props.project.imageSrc} width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import Head from 'next/head'
import axios from 'axios'
import React, { useState, Fragment } from 'react';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Dialog, Transition } from '@headlessui/react'
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_FORM_BOLD_URL,
      data: inputs
    })
      .then((r) => {
        console.log('Message sent');
        setOpen(true)
      })
      .catch((r) => {
        console.log('Error sending the message');
      });
  };

  return (
    <>
      <Head>
        <title>Claire Gery Graphiste</title>
        <meta name="description" content="Claire Gery Graphiste"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <NavBar/>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Message envoyé !
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Votre message à bien été envoyé, je vous répondrai dans les plus brefs délais.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                          setOpen(false);
                          router.push('/')
                        }}
                      >
                        Retour
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 lg:pt-24 sm:pt-5 lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Une idée, un projet ?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Contactez-moi !
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:claire.gery@outlook.com">
                        claire.gery@outlook.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form onSubmit={handleOnSubmit} className="px-6 pt-24 lg:px-8">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleOnChange}
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                      Objet
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleOnChange}
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        onChange={handleOnChange}
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

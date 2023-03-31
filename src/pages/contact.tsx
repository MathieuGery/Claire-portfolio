import Head from 'next/head'
import axios from 'axios'
import React, { useState } from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: process.env.NEXT_PUBLIC_FORM_BOLD_URL,
      data: inputs,
    })
      .then((r) => {
        console.log("Message sent");
      })
      .catch((r) => {
        console.log("Error sending the message");
      });
  };

  return (
    <>
      <Head>
        <title>Claire's portfolio</title>
        <meta name="description" content="Claire's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 lg:pt-24 sm:pt-5 lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Une idée, un projet ?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                  integer elementum id sem. Arcu sed malesuada et magna.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
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
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

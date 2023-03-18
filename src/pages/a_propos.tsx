import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Recap from '@/components/Recap'
import SocialNetworks from '@/components/SocialNetworks'

const inter = Inter({ subsets: ['latin'] })

export default function APropos() {
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
        <HeroSection />
        <Recap />
        <SocialNetworks />
      </main>
      <Footer />
    </>
  )
}
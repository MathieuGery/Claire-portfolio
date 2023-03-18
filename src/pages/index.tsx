import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProjectsList from '@/components/ProjectsList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Claire's portfolio</title>
        <meta name="description" content="Claire's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <ProjectsList />
      </main>
      <Footer />
    </>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProjecDetails from '@/components/ProjectDetails'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { projects } from '@/projects/projects'

export default function ProjectDetail() {
  const router = useRouter()
  const { pid } = router.query
  const [project, setProject] = useState(null)

  useEffect(() => {
    let item: any = projects.find(el => el.name == pid)
    setProject(item)
    console.log("item", item)
  })

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
      {project &&
        <ProjecDetails project={project} />}
      </main>
      <Footer />
    </>
  )
}

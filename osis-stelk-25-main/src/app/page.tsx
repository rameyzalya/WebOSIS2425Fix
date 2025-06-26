"use client"
import React, { useEffect, useState } from 'react'
import Hero from './_components/Hero'
import VisiMisi from './_components/VisiMisi'
import Ketos from './_components/Ketos'
import Pinti from './_components/Pinti'
import Bidang from './bdangg/Bidang'
import Event from './_components/Event'
import Saksi from './_components/Saksi'
import Footer from './_components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './_assets/Logo.png';
import bid1 from './bidang1/page'
import bid2 from './bidang2/page'

function Page() {
  const [menu, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const scrolHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolHeader)
    return () => {
      window.removeEventListener('scroll', scrolHeader)
    }
  }, [])

  return (
    <>
      {/* hero section */}
      <section className='pt-36'>
        <Hero />
      </section>
      {/* end hero section */}
      {/* about section */}
      <section className='pb-32 pt-20 bg-[#6B0000]'>
        <VisiMisi />
      </section>
      {/* end about section */}
      {/* client section */}
      <section className='pt-36 bg-slate-100'>
        <Ketos />
      </section>
      {/* end client section */}
      {/* blog section */}
      <section className='pb-32'>
        <Pinti />
      </section>
      {/* end blog section */}
      {/* portfolio section */}
      <section className='pt-36 pb-10 bg-slate-100'>
        <Bidang />
      </section>
      {/* end portfolio section */}

      {/* contact section */}
      <section className='pt-36 pb-32'>
        <Saksi />
      </section>
      {/* end contact section */}
      {/* footer section */}
      <section className='bg-slate-600 pt-24 pb-12'>
        <Footer />
      </section>
      {/* end footer section */}
    </>
  )
}

export default Page
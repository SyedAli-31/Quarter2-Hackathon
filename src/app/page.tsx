import React from 'react'
import Topheader from './component/Topheader'
import Hero from './component/Hero'
import SecHero from './component/SecHero'
import Thirdhero from './component/Thirdhero'
import Recent from './component/recent'
import Footer from './component/footer'
import Image from 'next/image'
import ProductCards from './Products/page'

const Page = () => {
  return (
    <div>
      <Topheader/>
      <Hero/>
      <SecHero/>
      <ProductCards/>
      <Recent/>
      <Image
      src={"/join1.png"}
      alt='joint'
      width={1440}
      height={444}
      className='md:mt-[60px] mt-[30px] md:w-full w-[389px]'
      />
      
      <Footer/>
    </div>
  )
}

export default Page
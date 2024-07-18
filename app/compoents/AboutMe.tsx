import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'

const AboutMe = () => {
  return (
    <div id='about' >
    <ContainerScroll  titleComponent = {
        <>
        <h1 className="text-4xl font-semibold text-black dark:text-white">
        Harnessing Technology to  <br />
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
          Create Meaningful Change
          </span>
        </h1>
      </>
    } >
     <img src="CardScroll.png" alt="Card Scroll" className="w-full h-full object-inhert
      rounded-2xl" />
    </ContainerScroll>
   </div>
  )
}

export default AboutMe

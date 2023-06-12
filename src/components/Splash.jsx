import React from 'react'
import Image from 'next/image'
import logo from "@/img/logo-2.png"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { SectionContainer } from './SectionContainer'

export const Splash = () => {
  return (
    <SectionContainer className='h-screen w-screen bg-splash bg-cover bg-no-repeat'>
      <div className='flex flex-col items-center justify-center text-center gap-24'>
        <Image src={logo} alt="Logo" className='h-96 w-96'/>
        <ClimbingBoxLoader speedMultiplier="0.8" color="#fff" size={"25px"}/>
      </div>
    </SectionContainer>
  )
}


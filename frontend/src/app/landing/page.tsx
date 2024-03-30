"use client"
import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Landing() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>ByteWave</h1>
            <h2 className='text-md md:text-2xl'>Your Intelligent Voice Companion, Tailored to Perfection</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>Insightful is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10 ml-30'>
          <Spline
            scene="https://prod.spline.design/JmMVfZmoR9EHQCGY/scene.splinecode"
            
          />
        </div>


      </header>
      <div>hi</div>
    </main>



  )
}

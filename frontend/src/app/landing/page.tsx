"use client"
import React from 'react'
import Spline from '@splinetool/react-spline'
import Feedbackform from '@/components/feedbackform'
import { IconHome, IconUser } from "@tabler/icons-react";
import { FaFlag, FaLock } from "react-icons/fa6";
import { FloatingNav } from '@/components/ui/floating-navbar'
import { TypewriterEffectSmooth } from '@/components/typewriter-effect'
import { TabsDemo } from '@/components/component/exampletab';

export default function Landing() {
  const navItems = [
    {
      name: "Home",
      link: "/landing",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Assistant",
      link: "/assistant",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Graphs",
      link: "/graph",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Login",
      link: "/login",
      icon: <FaLock className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Register",
      link: "/signup",
      icon: <FaFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  const words = [
    {
      text: "Your Intelligent",
    },
    {
      text: "AI  ",
    },
    {
      text: "Voice ",
    },
   
    {
      text: "Assistant",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <>
   
      <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>

        <FloatingNav navItems={navItems} />
        <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
            <div className='flex flex-col gap-2'>
              

              <h1 className='text-4xl font-black md:text-8xl'>WaveByte</h1>
              <TypewriterEffectSmooth words={words} />

            </div>
            <p className='max-w-md text-sm md:text-base text-zinc-500'>WaveByte offers a comprehensive voice assistant solution that leverages advanced AI/ML technologies to provide users with personalized, efficient, and intuitive assistance</p>
            <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            </div>
          </div>

          <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative z-10 ml-60'>
            <Spline
              scene="https://prod.spline.design/JmMVfZmoR9EHQCGY/scene.splinecode"

            />

          </div>
        </header>
        <TabsDemo/>
        <div className=' bg-[radial-gradient(circle_500px_at_50%_200px,#e0c9ff,transparent)]'>
        <div className='h-[10rem] mt-10 flex items-center justify-center font-black text-4xl'>
            User feedback
        </div>
        <Feedbackform />
        </div>
      </main>
    </>


  )
}

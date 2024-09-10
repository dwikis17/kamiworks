'use client'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import WorkSection from "../components/section/WorkSection";
import qr from '@/public/qr.png'
import Image from 'next/image'
import AlternativeHero from "@/components/AlternativeHero";
export default function Home() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const firstPage = useTransform(scrollYProgress, [0, 1], ['0%', '-150%'])
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between ">
      <div className="absolute md:top-20 top-8 md:left-16  left-6 z-30">
        <p>HOME</p>
      </div>
      <div className="fixed md:top-20 top-4 md:right-20 right-4  z-30 border p-3 bg-white rounded-3xl ">
        <Image src={qr} alt='qr' className='w-[70px] aspect-square' />
      </div>
      <motion.section className=" w-screen h-screen sticky top-0  z-0" style={{ y: firstPage }}>
        <AlternativeHero />
      </motion.section>
      <section className="w-screen  md:p-12 p-0  bg-white z-10 " id="works">
        <WorkSection />
      </section>


    </main>
  );
}

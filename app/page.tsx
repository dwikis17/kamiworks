'use client'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import WorkSection from "../components/section/WorkSection";
import qr from '@/public/qr.png'
import Image from 'next/image'
import AlternativeHero from "@/components/AlternativeHero";
import HeroSection from "@/components/section/HeroSection";
import { CustomHeader } from "@/components/CustomHeader";
import AboutSection from "@/components/section/AboutSection";
export default function Home() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const { scrollYProgress: another } = useScroll({

  })

  const firstPage = useTransform(scrollYProgress, [0, 1], ['0%', '-150%'])
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between ">
      <motion.div
        className="progress-bar "
        style={{ scaleX: another }}
      />
      <CustomHeader />
      <motion.section className=" w-screen h-screen sticky top-0  z-0" style={{ y: firstPage }}>
        <AlternativeHero />
      </motion.section>
      <section className=" w-screen md:p-12 p-0  bg-[#FCF5E9] z-10 " id="works">
        <WorkSection />
      </section>

      <section className=" w-screen md:p-12 p-0  bg-[#FCF5E9] z-10 " id="profile">
        <AboutSection />
      </section>
      {/* <section className="w-screen  md:p-12 p-0  bg-[#FCF5E9] z-10 " id="works">
        <WorkSection />
      </section> */}
    </main>
  );
}

'use client'
import { useRef } from "react";
import AlternativeHero from "./components/AlternativeHero";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const firstPage = useTransform(scrollYProgress, [0, 1], ['0%', '-150%'])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <motion.section className=" w-screen h-screen sticky top-0  z-0" style={{ y: firstPage }}>
        <AlternativeHero />
      </motion.section>
      <section className=" w-screen md:p-12 p-0  bg-white z-10  ">
        <section className="sticky md:top-12 top-0 h-[80vh] bg-red-500 flex justify-center items-center md:rounded-3xl relative">
          <div>
            <h1> Scroll</h1>
          </div>
        </section>
        {/* Yellow section that scrolls over the black section */}
        <section className="sticky md:top-12  top-0 h-[80vh] bg-indigo-500 flex justify-center items-center md:rounded-3xl">
          <div>
            <h1> Scroll</h1>
          </div>
        </section>

        <section className="sticky md:top-12 top-0 h-[80vh] bg-slate-500 flex justify-center items-center md:rounded-3xl">
          <div>
            <h1> Scroll</h1>
          </div>
        </section>

      </section>


    </main>
  );
}

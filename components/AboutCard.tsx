'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
export default function AboutCard() {
    const { scrollYProgress } = useScroll()


    return (
        <div className="h-[600px] text-white flex flex-col overflow-hidden lg:flex-row justify-center items-center gap-6 md:rounded-3xl relative md:mb-3 px-6 md:px-12 py-6">
            <div className="flex sm:flex-row flex-col  w-full h-full   text-black">
                <div className="flex-shrink-0 min-w-[250px]">
                    <motion.div
                        className="w-[30px] h-[30px] bg-black"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                </div>
                <div className="flex-grow overflow-hidden break-words">
                    <motion.h2 className="text-4xl font-medium leading-none" style={{ scaleX: scrollYProgress }}>
                        At Agentic, we are a team of dedicated creatives driven by the desire to redefine online experiences. Our journey began with a shared commitment to excellence in web design, development, UI/UX, and product design.
                    </motion.h2>
                </div>
            </div>
        </div>
    )
}
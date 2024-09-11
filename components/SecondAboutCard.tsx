'use client'

import { motion, useScroll, useInView } from "framer-motion"
import { useRef } from "react"

export default function SecondAboutCard() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.8 })
    console.log(isInView, 'ha')
    return (
        <motion.div
            className="h-[350px] text-white flex flex-col overflow-hidden lg:flex-row justify-center items-center gap-6 md:rounded-3xl relative md:mb-3 px-6 md:px-12 py-6"
        >
            <div className="flex sm:flex-row flex-col w-full h-full text-black">
                <div className="flex-shrink-0 min-w-[250px]">
                    <motion.div
                        className="w-[30px] h-[30px] bg-black"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <div className="flex-grow overflow-hidden break-words flex justify-center items-center">
                    <motion.h2
                        className="sm:text-4xl text-xl font-medium leading-none"
                        ref={ref}
                        initial={{ scale: 0.7, opacity: 1 }}
                        animate={{ scale: isInView ? 1 : 0.7 }}
                        transition={{ duration: 1 }}
                    >
                        At KAMI, we're a team of creatives who specialize in minimalistic web design. Whether you're looking to enhance your company profile, we're here to make it happen. From the beginning, our goal has been to bring a touch of elegance and simplicity to web design, development, UI/UX, and product design.</motion.h2>.                </div>
            </div>
        </motion.div>
    )
}
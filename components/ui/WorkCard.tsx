
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import AnimatedButton from '../button/AnimatedButton'
export interface WorkCardProps {
    name: string
    image: any
    link: string
    index: number
}

export default function WorkCard({ name, image, link, index }: WorkCardProps) {
    const color = (index + 10) % 2 === 0 ? 'bg-[#FF3C00]' : 'bg-black'
    const controls = useAnimation()
    const ref = useRef(null)
    const secondRef = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.6 },)
    const secondIsInView = useInView(secondRef, { once: false, amount: 0.6 },)

    React.useEffect(() => {
        if (isInView) {
            console.log(isInView, 'hehe')
            controls.start('visible')
        }
    }, [controls, isInView, secondIsInView])

    const containerVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    }

    const secondContainerVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0, opacity: 1, transition: {
                duration: 0.5,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        }
    }

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    }
    return (
        <div className={`sticky md:top-12  top-0 h-[90vh] ${color} text-white flex flex-col overflow-hidden lg:flex-row justify-center  items-center gap-6 md:rounded-3xl relative md:mb-3 px-6 md:px-12 py-6`}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-6 "
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl lg:text-6xl font-bold text-center lg:text-left"
                >
                    {name}
                </motion.h1>
                <motion.div
                    variants={itemVariants}
                    className='w-full flex justify-between items-center'
                >
                    <motion.div
                        className="w-[30px] h-[30px] bg-[#FCF5E9]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                    <AnimatedButton link={link}>View Project</AnimatedButton>
                </motion.div>
            </motion.div>
            <motion.div ref={secondRef}
                initial="hidden"
                animate={controls}
                variants={secondContainerVariants} className="w-full lg:w-1/2 flex justify-center items-center ">
                <div className="relative w-full aspect-video ">
                    <Image
                        alt={`Project image for ${name}`}
                        src={image}

                    />
                </div>
            </motion.div>
        </div>
    )
}
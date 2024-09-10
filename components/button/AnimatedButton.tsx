'use client'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AnimatedButton({ link, children }: { link: string, children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(false)
    const controls = useAnimation()

    const handleClick = () => {
        window.open(link, '_blank')
    }

    const handleActivate = () => {
        setIsActive(true)
        controls.start({
            opacity: 1,
            x: [0, 10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
            }
        })
    }

    const handleDeactivate = () => {
        setIsActive(false)
        controls.start({ opacity: 0, x: -20 })
    }

    return (
        <motion.button
            onClick={handleClick}
            onHoverStart={handleActivate}
            onHoverEnd={handleDeactivate}
            onTapStart={handleActivate}
            onTap={handleDeactivate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-40 h-12  text-primary-foreground rounded-md overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {children}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={controls}
                className="absolute inset-0 flex items-center justify-center"
            >
                <ArrowRight className="w-6 h-6" />
            </motion.div>
        </motion.button>
    )
}
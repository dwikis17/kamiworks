'use client'

import { motion } from 'framer-motion'

export default function AlternativeHero() {
    return (
        <div className=" h-full w-full relative flex flex-col p-12 overflow-hidden">
            <div className=" top-12 left-12 fixed">
                <p>HOME</p>
            </div>
            <div className=" top-12 right-12 fixed">
                <p>HOME</p>
            </div>

            <div className="flex sm:flex-row flex-col top-24 relative justify-between sm:p-12 p-0">
                <div className="sm:text-7xl text-4xl m" id="list">
                    <ul className="font-extrabold w-full flex flex-col gap-4 ">
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', background: 'red', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            WORK
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', background: 'red', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            ABOUT
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', background: 'red', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            SERVICES
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', background: 'red', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            CONTACT
                        </motion.li>
                    </ul>
                </div>


                <div className="text-left   flex-1" id="Subtext">
                    <p>Elevating Digital Excellence</p>
                </div>


            </div>

            <div className="absolute bottom-2 text-center  w-full font-extrabold" id="Subtext">
                <p className="text-9xl text-center">KAMI</p>
            </div>
        </div>
    )
}



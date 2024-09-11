'use client'

import { motion } from 'framer-motion'
import logo from '@/public/kamiworks.svg'
import Image from 'next/image'

export default function AlternativeHero() {
    return (
        <div className=" relative h-full   md:p-22 p-3   flex flex-col  bg-[#FCF5E9] items-center ">
            <div className="flex md:flex-row flex-col top-32 relative px-6  gap-y-6  w-full">
                <motion.div animate={{ x: 0, }} initial={{ x: -400 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="sm:text-7xl flex-auto w-full text-4xl overflow-hidden  " id="list">
                    <ul className="font-extrabold flex flex-col sm:gap-y-2 ">
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-[#FCF5E9] cursor-pointer"
                            onClick={() => { console.log('logeged') }}
                        >
                            <a href='#works'>WORKS</a>
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black bg-[#FCF5E9] cursor-pointer"
                        >
                            <a href='#profile'>PROFILE</a>
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-[#FCF5E9] cursor-pointer"
                        >
                            SERVICES
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-[#FCF5E9] cursor-pointer"
                        >
                            CONTACT
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div animate={{ x: 0, }} initial={{ x: 400 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="sm:text-right text-left flex-auto   w-full text-xl " id="Subtext">
                    <h1 className="text-3xl ">Crafting <span className="font-bold">Websites</span>,<br></br>Tailored to  <span className="font-bold">You</span>. <br></br><span className='text-2xl'>A website that truly yours.</span></h1>
                </motion.div>

            </div>

            <motion.div
                animate={{ y: 0 }}
                initial={{ y: 200 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 flex justify-center items-center text-center sm:w-full w-3/4 font-extrabold"
                id="Subtext"
            >
                {/* <p className="text-3xl md:text-8xl lg:text-9xl text-center text-custom-orange relative top-0">KAMIWORKS &copy;</p> */}
                <Image alt="logo" src={logo} className="block w-[80vw] h-auto" />
            </motion.div>

        </div>
    )
}



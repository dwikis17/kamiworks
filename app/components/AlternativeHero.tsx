'use client'

import { motion } from 'framer-motion'
import qr from '@/public/qr.png'
import Image from 'next/image'
export default function AlternativeHero() {
    return (
        <div className=" h-full container mx-auto relative flex flex-col overflow-hidden ">
            <div className=" md:top-20 top-8 md:left-16  left-6 fixed">
                <p>HOME</p>
            </div>
            <div className=" md:top-20 top-2 md:right-20 right-2 fixed">
                <Image src={qr} alt='qr' className='w-[70px] aspect-square' />
            </div>

            <div className="flex md:flex-row flex-col top-32 relative  sm:p-6 p-3">
                <motion.div animate={{ x: 0, }} initial={{ x: -100 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="sm:text-7xl text-4xl w-full overflow-hidden " id="list">
                    <ul className="font-extrabold   flex flex-col">
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                            onClick={() => { console.log('logeged') }}
                        >
                            WORK
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            ABOUT
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            SERVICES
                        </motion.li>
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                        >
                            CONTACT
                        </motion.li>
                    </ul>
                </motion.div>


                <motion.div animate={{ x: 0, }} initial={{ x: 100 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="text-left text-xl md:p-3 p-0 py-3 min-w-min" id="Subtext">
                    <p className='font-medium '>Elevating Digital Excellence. <br></br> We make cool websites, even cooler</p>
                </motion.div>


            </div>

            <motion.div animate={{ y: 0, }} initial={{ y: 200 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="absolute bottom-2 text-center  w-full font-extrabold" id="Subtext">
                <p className="md:text-8xl text-4xl kamiworks text-center text-custom-orange">KAMIWORKS  &copy;</p>
            </motion.div>
        </div>
    )
}



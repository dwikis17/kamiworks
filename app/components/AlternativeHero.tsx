'use client'

import { motion } from 'framer-motion'

export default function AlternativeHero() {
    return (
        <div className=" relative h-full w-screen  md:p-24 p-3   flex flex-col  ">


            <div className="flex md:flex-row flex-col top-32 relative  md:p-6 p-3">
                <motion.div animate={{ x: 0, }} initial={{ x: -100 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="sm:text-7xl text-5xl w-full overflow-hidden  " id="list">
                    <ul className="font-extrabold   flex flex-col sm:gap-y-2">
                        <motion.li
                            initial={{ width: 'fit-content' }}
                            whileHover={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            whileTap={{ scale: 1.02, width: '100%', backgroundColor: '#FF3C00', color: 'white' }}
                            transition={{ duration: 0.3 }} // Adjust duration for smoother effect
                            className="text-black  bg-white cursor-pointer"
                            onClick={() => { console.log('logeged') }}
                        >
                            <a href='#works'>WORK</a>
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

            <motion.div animate={{ y: 0, }} initial={{ y: 200 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="absolute bottom-0  text-center left-0  w-full font-extrabold flex justify-center items-end" id="Subtext">
                <p className="md:text-10xl sm:text-8xl text-4xl  text-center  text-custom-orange  relative md:top-20 top-12 sm:top-0 ">KAMIWORKS  &copy;</p>
            </motion.div>
        </div>
    )
}



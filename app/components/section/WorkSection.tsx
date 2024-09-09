'use client'
import { useState } from 'react'
import mbp1 from '@/public/mbp1.png'
import Image from 'next/image'
export default function WorkSection() {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div>
            <div className="sticky md:top-12 top-0 h-[80vh] bg-black text-white flex sm:flex-row flex-col justify-center items-center  gap-6  md:rounded-3xl relative md:mb-3 px-24">


                <div className="flex-1   flex-col p-3 relative">
                    <h1 className="text-6xl font-bold ">KATO LAUNDRY</h1>
                    <button className="
        px-6 py-3 rounded-md
        bg-gradient-to-r from-gray-700 to-gray-600
        text-gray-200 font-medium text-sm
        transition-all duration-300 ease-in-out
        hover:from-gray-600 hover:to-gray-500
        hover:text-white hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
        absolute right-0
      ">
                        View Project
                    </button>
                </div>
                {/* <div className="flex-1 border ">
                    <Image alt='mbp1' src={mbp1} />
                </div> */}
            </div>
            <div className="sticky md:top-12 top-0 h-[80vh] bg-[#FF3C00] text-white flex justify-center items-center  gap-6  md:rounded-3xl relative md:mb-3 px-24">


                <div className="flex-1   flex-col p-3 relative">
                    <h1 className="text-6xl font-bold ">KATO LAUNDRY</h1>
                    <button className="
px-6 py-3 rounded-md
bg-gradient-to-r from-gray-700 to-gray-600
text-gray-200 font-medium text-sm
transition-all duration-300 ease-in-out
hover:from-gray-600 hover:to-gray-500
hover:text-white hover:shadow-md
focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
absolute right-0
">
                        View Project
                    </button>
                </div>
                <div className="flex-1 ">
                    <Image alt='mbp1' src={mbp1} />
                </div>
            </div>
            <div className="sticky md:top-12 top-0 h-[80vh] bg-black text-white flex justify-center items-center  gap-6  md:rounded-3xl relative md:mb-3 px-24">


                <div className="flex-1   flex-col p-3 relative">
                    <h1 className="text-6xl font-bold ">KATO LAUNDRY</h1>
                    <button className="
px-6 py-3 rounded-md
bg-gradient-to-r from-gray-700 to-gray-600
text-gray-200 font-medium text-sm
transition-all duration-300 ease-in-out
hover:from-gray-600 hover:to-gray-500
hover:text-white hover:shadow-md
focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
absolute right-0
">
                        View Project
                    </button>
                </div>
                <div className="flex-1 ">
                    <Image alt='mbp1' src={mbp1} />
                </div>
            </div>
        </div>
    )
}
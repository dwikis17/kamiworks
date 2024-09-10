import mbp1 from '@/public/mbp1.png'
import Image from 'next/image'

export interface WorkCardProps {
    name: string
    image: any
    link: string
    index: number
}

export default function WorkCard({ name, image, link, index }: WorkCardProps) {
    const color = (index + 10) % 2 === 0 ? 'bg-[#FF3C00]' : 'bg-black'
    console.log()
    return (
        <div className={`sticky md:top-12 top-0 h-[80vh] ${color} text-white flex lg:flex-row flex-col justify-center items-center  gap-6  md:rounded-3xl relative md:mb-3 px-24`}>


            <div className="flex-1  items-center justify-center flex  flex-col p-3 relative">
                <h1 className="text-6xl font-bold ">{name}</h1>
                <button onClick={() => { window.open(link, '_blank'); }} className="
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
                <Image alt='alt1' src={image} />
            </div>
        </div>
    )
}
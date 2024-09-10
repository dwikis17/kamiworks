'use client'
import { useState } from 'react'
import mbp1 from '@/public/mbp1.png'
import Image from 'next/image'
import { GradientButton } from '../gradient-button'
import WorkCard from '../ui/WorkCard'
import { workConstants } from '@/app/constant/WorkConstant'
export default function WorkSection() {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div>
            {workConstants.map((item) => {
                return (
                    <WorkCard image={item.image} link={item.link} name={item.name} index={item.index} />
                )
            })}

        </div>
    )
}
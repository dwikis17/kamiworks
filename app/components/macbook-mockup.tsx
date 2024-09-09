'use client'
import React from 'react'

interface MacBookMockupProps {
    screenContent: React.ReactNode
    width?: number
}

export default function MacBookMockup({ screenContent, width = 800 }: MacBookMockupProps) {
    const height = width * 0.67
    const screenWidth = width * 0.7525
    const screenHeight = height * 0.7365

    return (
        <div className="flex items-center justify-center">
            <div style={{ width: `${width}px`, height: `${height}px` }} className="relative">
                <svg
                    viewBox="0 0 1258 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* MacBook body */}
                    <rect x="24" y="39" width="1210" height="722" rx="40" fill="#D8D8D8" />
                    <rect x="32" y="47" width="1194" height="706" rx="36" fill="#F2F2F2" />
                    <rect x="76" y="88" width="1106" height="620" rx="8" fill="#353535" />

                    {/* MacBook screen (to be filled with content) */}
                    <rect x="96" y="106" width="1066" height="584" rx="4" fill="#FFFFFF" />

                    {/* MacBook bottom */}
                    <path
                        d="M0 757C0 747.059 8.05887 739 18 739H1240C1249.94 739 1258 747.059 1258 757V800H0V757Z"
                        fill="#D8D8D8"
                    />
                    <rect y="797" width="1258" height="3" fill="#AFAFAF" />

                    {/* MacBook touchpad */}
                    <rect x="506" y="760" width="246" height="20" rx="10" fill="#B7B7B7" />
                </svg>

                {/* Screen content */}
                <div
                    style={{
                        position: 'absolute',
                        top: `${(height * 106) / 800}px`,
                        left: `${(width * 96) / 1258}px`,
                        width: `${screenWidth}px`,
                        height: `${screenHeight}px`,
                        overflow: 'hidden',
                        borderRadius: '4px',
                    }}
                >
                    {screenContent}
                </div>
            </div>
        </div>
    )
}

// Example usage
export function ExampleUsage() {
    const screenContent = (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ">
            <h1 className="text-4xl font-bold text-white">Your Work Here</h1>
        </div>
    )

    return <MacBookMockup screenContent={screenContent} width={800} />
}
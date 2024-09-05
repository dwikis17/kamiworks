'use client'

import { Variants, motion } from "framer-motion";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function HeroSection() {
    const TEXTS = ['Minimalistic', 'Modern', 'Uniquely Yours'];

    const [index, setIndex] = React.useState(0);

    const variants: Variants = {
        initial: { opacity: 0, scale: 1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1 },
    };
    const [text, setText] = React.useState("hola");

    // React.useEffect(() => {
    //     const intervalId = setInterval(
    //         () => setIndex((index) => index + 1),
    //         3000, // every 3 seconds
    //     );
    //     return () => clearTimeout(intervalId);
    // }, []);


    React.useEffect(() => {
        const intervalId = setInterval(() => {
            index >= TEXTS.length ? setIndex(0) : setIndex(index + 1)
            setText(TEXTS[index]);
        }, 2000);



        return () => clearInterval(intervalId);
    });

    return (
        <div className=" w-full h-full flex">
            <div className="flex-auto p-12 relative w-[55vw] flex flex-col">
                <div className="absolute top-40 ">
                    <h1 className="text-8xl ">Crafting <span className="font-bold">Websites</span>,<br></br>Tailored to  <span className="font-bold">You</span>. </h1>
                    {/* <h1 className="text-6xl font-extralight">
                        <TextTransition springConfig={presets.gentle} inline>{TEXTS[index % TEXTS.length]}</TextTransition>
                    </h1> */}

                    <motion.h1
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={text}
                        className="text-6xl font-extralight"
                    >
                        {text}
                    </motion.h1>
                </div>
            </div>
            <Card />


        </div>
    )
}

function Card() {
    return (
        <div className=" h-full bg-custom-gray flex-auto">
            <div className="w-full h-full p-12 text-right">
                <h1 className="font-extrabold text-9xl  right-12 top-24">KAMI</h1>
            </div>
        </div>
    )
}
'use client'

import React from 'react'
import { Montserrat, Poppins } from 'next/font/google'
import styles from '../page.module.css'
import useMousePosition from '../utils/useMousePosition';
import { motion } from 'framer-motion';
import { useState } from 'react';



const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})




function landing() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;
    
  return (
    <main className={`${poppins.className} text-black`}>

        <motion.div className={`${styles.mask} min-h-screen w-screen flex justify-center items-center absolute`}
            animate={{
                WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                WebkitMaskSize: `${size}px`,
                    }}
                transition={{ type: "tween", ease: "backOut", duration:0.5}}>

            <div className='text-center flex flex-col gap-4 items-center justify-center w-screen' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
                <h1 className='text-xl lg:text-7xl font-bold tracking-widest'>CHRISTIAN SANTIAGO</h1>
                <p>Vancouver Based Filmmaker</p>
            </div>

        </motion.div>

        <div className='text-center flex flex-col justify-center gap-4 min-h-screen'>
            <h1 className='text-xl lg:text-7xl font-bold tracking-widest'>CHRISTIAN SANTIAGO</h1>
            <p>Vancouver Based Filmmaker</p>
        </div>

    </main>
  )
}

export default landing
'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Template({
    children
}: { children: React.ReactNode}
) {
  return (
    <motion.div
        className='[&_>_div]:snap-y [&_>_div]:snap-mandatory [&_>_div]:overflow-y-scroll [&_>_div]:max-h-screen'
        initial={{y:20, opacity:0}}
        animate={{y: 0, opacity: 100}}
        transition={{ease: "easeOut", duration: 0.75}}
    >
        {children}
    </motion.div>
  )
}

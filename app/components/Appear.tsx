'use client'
import { useInView } from "framer-motion";
import { useRef } from "react";



import React from 'react'

export default function Appear({children} : {children:React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
  return (
    <div ref={ref}
    style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}className="flex min-h-screen relative items-center text-center justify-center lg:p-24 p-12 gap-y-12">
        {children}
    </div>
      
  )
}
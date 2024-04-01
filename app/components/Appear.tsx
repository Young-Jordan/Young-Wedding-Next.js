'use client'
import { useInView } from "framer-motion";
import { useRef } from "react";

interface props {
  children? : React.ReactNode,
  delay? : number
}

import React from 'react'

export default function Appear({children, delay = 0.5} : props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
  return (
    <div ref={ref}
    style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}className="">
        {children}
    </div>
      
  )
}
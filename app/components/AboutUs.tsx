'use client'
import Image from "next/image";
import { motion } from "framer-motion";



import React from 'react'
import Appear from "./Appear";

export default function AboutUs() {
    
  return (
    <section className="flex snap-center min-h-screen h-screen overflow-hidden relative items-center text-center justify-center lg:p-24 p-20 gap-y-12">
      <div className="lg:w-1/2 w-full">
        <Appear>
        <h3 className="md:text-lg lg:text-2xl text-base">
          During our freshman year of college, Nikole quietly had a crush on Jordan. It remained a silent chapter of our collage days, as we neared our graduation, a chance encounter on Instagram turned the page. Jordan&apos;s simple message to Nikole bridged years of silent longing, igniting a conversation that blossomed into a profound connection. Now, five years into our relationship that feels both serendipitous and inevitable, we reflect on the journey from unspoken affection to shared happiness. Our love story, sparked by a digital hello, stands as a testament to the unexpected ways life can weave two paths into one.
        </h3>
        </Appear>
      </div>
      <div className="w-1/3 hidden">
      <motion.div animate={{ rotateZ: -0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="mx-auto">
      <Appear>
          {/*<Image className="mx-auto aspect-square object-cover w-2/3 rounded-full opacity-25 overflow-hidden" src={intimate} width={400} height={400} alt="jordan & nikole"/>*/}
      </Appear>
        </motion.div>  
      </div>
    </section>
  )
}
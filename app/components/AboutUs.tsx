'use client'
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ring from "../../public/Images/Jikole_Motifs_bow.png";
import heart from "../../public/Images/Jikole_Motifs_heart.png";
import Section from "../section";
import { useRef } from "react";



import React from 'react'
import Appear from "./Appear";

export default function AboutUs() {
    
  return (
    <section className="flex min-h-screen h-screen relative items-center text-center justify-center lg:p-24 p-12 gap-y-12">
      <div className="w-3/4">
        <Appear>
        <h3>
          During our freshman year of college, Nikole quietly cherished a crush on Jordan, a sentiment hidden amidst the rush and tumble of student life. It remained a silent chapter of our youth until, we neared our graduation, a chance encounter on Instagram turned the page. Jordan's simple message to Nikole bridged years of silent longing, igniting a conversation that blossomed into a profound connection. Now, five years into our relationship that feels both serendipitous and inevitable, we reflect on the journey from unspoken affection to shared happiness. Our love story, sparked by a digital hello, stands as a testament to the unexpected ways life can weave two paths into one.
        </h3>
        </Appear>
      </div>
      <div className="w-1/2 absolute right-0 top-1/2">
      <motion.div animate={{ rotateZ: -5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="mx-auto">
          <Image className="mx-auto opacity-35" src={heart} width={400} height={400} alt="rings"/>
        </motion.div>  
      </div>
    </section>
  )
}
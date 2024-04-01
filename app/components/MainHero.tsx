'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import bow from "../../public/Images/Jikole_Motifs_bow.png";
import ring from "../../public/images/Jordan_Nikole.png";
import Link from "next/link";

export const MainHero = () => (
    <section className="lg:flex snap-center grid grid-rows-3 lg:flex-col h-screen min-h-screen items-center text-center justify-center lg:p-24 lg:pb-12 p-5 lg:gap-y-12">
      <div className="relative flex flex-col gap-y-12 mt-[25%] items-center row-start-2">
      <div className="relative">  
        <motion.div animate={{ rotateZ: 5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="absolute z-0 right-4 bottom-0 lg:-right-20 lg:-top-20">
          <Image className="w-20 lg:w-auto" src={bow} width={150} height={400} alt="bow"/>
        </motion.div>   
        <h1 className="font-sans flex flex-col lg:flex-row items-center relative z-10 lg:text-7xl text-5xl leading-relaxed lg:m-0 mt-auto"><span className="mb-10">Jordan</span><span><Image alt="rings" className="mx-16 lg:mt-6 lg:w-auto w-48" width={250} src={ring}/></span><span className="mt-10">Nikole</span></h1>
        <motion.div initial={{ rotateY: 180 }} animate={{ rotateZ: -5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="absolute z-0 left-8 -top-8 lg:-left-20 lg:-top-20">
          <Image className="w-20 lg:w-auto" src={bow} width={150} height={400} alt="bow"/>
        </motion.div>  
      </div>
      <Link href={"/rsvp"} className="outline-accent outline text-accent rounded-full w-min px-6 py-3 text-lg tracking-widest hover:outline-0 hover:text-white hover:bg-black transition-colors">RSVP</Link>
      </div>
      <div className="relative row-start-3 justify-self-center self-end">
        <p>Scroll down for our love story</p>
      </div>
    </section>
)

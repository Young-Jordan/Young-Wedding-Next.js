'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import ring from "../../public/Images/Jikole_Motifs_bow.png";

export const MainHero = () => (
    <section className="flex flex-col h-screen min-h-screen items-center text-center justify-center lg:p-24 p-5 gap-y-12">
      <div className="relative mt-auto">  
        <motion.div animate={{ rotateZ: 5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="absolute z-0 -right-10 -top-10 lg:-right-20 lg:-top-20">
          <Image className="w-20" src={ring} width={200} height={400} alt="rings"/>
        </motion.div>   
        <h1 className="font-sans relative z-10 lg:text-8xl text-4xl leading-relaxed lg:m-0 mt-auto">Jordan<br className="lg:hidden"></br> + <br className="lg:hidden"></br>Nikole</h1>
        <motion.div initial={{ rotateY: 180 }} animate={{ rotateZ: -5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror"}} className="absolute z-0 -left-10 -top-10 lg:-left-20 lg:-top-20">
          <Image className="w-20" src={ring} width={200} height={400} alt="rings"/>
        </motion.div>  
      </div>
      <div className="mt-auto">
        <p>Scroll down for our love story</p>
      </div>
    </section>
)

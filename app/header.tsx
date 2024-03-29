'use client'

import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import music from "../public/audio/meeting-lilias.wav"

const sidebar = {
	open: ({
	  opacity: 1,
	  pointerEvents: "auto",
	  transition: {
		type: "spring",
		stiffness: 400,
		damping: 40
	  }
	}),
	closed: {
	  opacity: 0, 
	  transition: {
		type: "spring",
		stiffness: 400,
		damping: 40
	  },
	  transitionEnd: {
		pointerEvents: "none"
	  }
	}
  };

export default function Header() {

	const [isOpen, toggleOpen] = useCycle(false, true);
	const pathname = usePathname();
	
	React.useEffect (() => {
	if(isOpen) {	
    	toggleOpen();
	}
	}, [pathname])

    return(
        <header className="fixed w-screen flex p-8 z-50 overflow-hidden">
			<motion.nav
			    className="w-full flex"
     			initial={false}
      			animate={isOpen ? "open" : "closed"}>

				{/* @ts-ignore */}
      			<motion.div className="fixed z-0 top-0 left-0 w-screen h-screen bg-primary" variants={sidebar}>
      			<Navigation />
				</motion.div>
				<div className="lg:flex grid grid-cols-3 z-10 gap-x-8 items-center lg:justify-start justify-center w-full">
      			<MenuToggle toggle={() => toggleOpen()} />
				<Link href="/" className="font-sans lg:text-xl text-sm mb-2 text-center lg:text-left">J<br className="lg:hidden" />&<br className="lg:hidden" />N</Link>
				<p className="font-sans relative z-10 lg:text-base text-sm mb-2 ml-auto">11<span className="lg:mx-2 mx-1">.</span>17<span className="lg:mr-2 mr-1">.</span>24</p>
				</div>
    		</motion.nav>
        </header>
    )

}
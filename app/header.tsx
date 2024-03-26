'use client'

import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebar = {
	open: ({
	  opacity: 1,
	  display: "block", 
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
		display: "none"
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
      			<motion.div className="fixed z-0 top-0 left-0 w-screen h-screen bg-primary" variants={sidebar}>
      			<Navigation />
				</motion.div>
				<div className="flex z-10 gap-x-8 items-center">
      			<MenuToggle toggle={() => toggleOpen()} />
				<Link href="/" className="font-sans text-xl mb-2">Jordan & Nikole</Link>
				</div>
    		</motion.nav>
			<p className="font-sans relative z-10">11<span className="mx-2">.</span>17<span className="mr-2">.</span>24</p>
        </header>
    )

}
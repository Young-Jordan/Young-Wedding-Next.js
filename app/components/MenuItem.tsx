import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { motion, stagger } from "framer-motion";

const variants = {
  open:{
    y:0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      ease: "anticipate"
    }
  },
  closed:{
    y:"100%",
    transition: {
      delay: 0.3
    }
  }

}

export const MenuItem = ({i} : {i : {id: number, path: string, name: string}}) => {
    const pathname = usePathname();
    const isActive = (path : any) => path === pathname
    
  return (
    <li className="overflow-hidden relative" key={i.id}>
    <motion.div variants={variants} whileHover={{
    color: "var(--accent-rgb)",
    transition: { duration: 0.2 },
  }}>
        <Link 
            href={i.path}
			      className={isActive(i.path) ? 'text-accent text-9xl uppercase' : 'text-9xl uppercase'}>
		    {i.name}
		  </Link>
    </motion.div>
    </li>
  );
};

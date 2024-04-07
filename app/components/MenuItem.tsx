import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  open:{
    y:0,
    transition: {
      duration: 1,
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

export const MenuItem = ({i} : {i : {id: number, path: string, name: string, description: string, external: boolean}}) => {
    const pathname = usePathname();
    const isActive = (path : any) => path === pathname;
    
  return (
    <li className="overflow-hidden relative flex flex-col justify-center items-center" key={i.id}>
        <p className="lg:block hidden">{i.description}</p>
    <motion.div variants={variants} whileHover={{
    color: "var(--accent-rgb)",
    transition: { duration: 0.2 },
  }}>
    {
     i.external ? 
      <Link 
            href={i.path}
            target="_blank"
			      className={isActive(i.path) ? 'text-accent lg:text-9xl text-6xl uppercase' : 'lg:text-9xl text-6xl uppercase'}>
		    {i.name}
		  </Link>
      : 
      <Link
            href={i.path}
			      className={isActive(i.path) ? 'text-accent lg:text-9xl text-6xl uppercase' : 'lg:text-9xl text-6xl uppercase'}>
		    {i.name}
		  </Link> 
    }   
    </motion.div>
    </li>
  );
};

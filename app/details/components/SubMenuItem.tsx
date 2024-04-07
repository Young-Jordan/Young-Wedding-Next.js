import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SubMenuItem = ({i} : {i : {id: number, path: string, name: string, description: string, external: boolean}}) => {
    const pathname = usePathname();
    const isActive = (path : any) => path === pathname;
    
  return (
    <li className="overflow-hidden relative flex flex-col justify-center items-center" key={i.id}>
    <motion.div whileHover={{
    color: "var(--accent-rgb)",
    transition: { duration: 0.2 },
  }}>
    {
     i.external ? 
      <Link 
            href={i.path}
            target="_blank"
			      className={isActive(i.path) ? 'text-accent text-xl uppercase' : 'text-xl uppercase'}>
		    {i.name}
		  </Link>
      : 
      <Link
            href={i.path}
			      className={isActive(i.path) ? 'text-accent text-xl uppercase' : 'text-xl uppercase'}>
		    {i.name}
		  </Link> 
    }   
    </motion.div>
    </li>
  );
};

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const NavLinks = [

	{ id: 1, name: 'rsvp', path: '/rsvp', description: "Let us know you can make it" },
	{ id: 2, name: 'registry', path: '/registry', description: "Where we are registered for gifts" },
  { id: 3, name: 'details', path: '/details', description: "When & where its happening"},
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
  }
};

export const Navigation = () => (
  <motion.ul className="flex flex-col items-center gap-y-16 justify-center h-screen" variants={variants}>
    {NavLinks.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul>
);



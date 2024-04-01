import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const NavLinks = [

	{ id: 1, name: 'rsvp', path: '/rsvp', description: "Let us know you can make it", external: false },
	{ id: 2, name: 'registry', path: 'https://www.zola.com/registry/jordanandnikole/?preview=true', description: "Where we are registered for gifts", external: false},
  { id: 3, name: 'details', path: '/details', description: "When & where its happening", external: true},
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07 }
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



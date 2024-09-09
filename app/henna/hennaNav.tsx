"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Appear from "../components/Appear";
import { SubMenuItem } from "../details/components/SubMenuItem";

const NavLinks = [
  {
    id: 0,
    name: "Henna Information",
    path: "/henna/information",
    description: "Let us know you can make it",
    external: false,
  },
  {
    id: 1,
    name: "Henna RSVP",
    path: "/henna",
    description: "Let us know you can make it",
    external: false,
  },
];

export default function HennaNav() {
  return (
    <motion.nav className="w-screen flex flex-wrap fixed lg:items-center lg:justify-center z-50 p-6 bg-white bottom-0">
      {/* @ts-ignore */}
      <motion.ul className="w-full flex flex-wrap">
        <Appear className="flex lg:gap-x-16 gap-x-6 gap-y-2 justify-center flex-wrap w-full">
          {NavLinks.map((i) => (
            <SubMenuItem i={i} key={i.id} />
          ))}
        </Appear>
      </motion.ul>
    </motion.nav>
  );
}

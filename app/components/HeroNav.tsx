"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Appear from "./Appear";
import { SubMenuItem } from "../details/components/SubMenuItem";

const NavLinks = [
  {
    id: 0,
    name: "RSVP",
    path: "/rsvp",
    description: "Let us know you can make it",
    external: false,
  },
  {
    id: 1,
    name: "Details",
    path: "/details",
    description: "Let us know you can make it",
    external: false,
  },
  {
    id: 2,
    name: "FAQ & Schedule",
    path: "/details/faq",
    description: "Where we are registered for gifts",
    external: false,
  },
];

export default function HeroNav() {
  return (
    <motion.nav className="w-full flex fixed lg:items-center lg:justify-center z-50 p-6 bg-white bottom-0 overflow-scroll">
      {/* @ts-ignore */}
      <motion.ul className="">
        <Appear className="flex lg:gap-x-16 gap-x-6">
          {NavLinks.map((i) => (
            <SubMenuItem i={i} key={i.id} />
          ))}
        </Appear>
      </motion.ul>
    </motion.nav>
  );
}

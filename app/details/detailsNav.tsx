"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { SubMenuItem } from "./components/SubMenuItem";
import Appear from "../components/Appear";

const NavLinks = [
  {
    id: 0,
    name: "Details",
    path: "/details",
    description: "Let us know you can make it",
    external: false,
  },
  {
    id: 1,
    name: "Travel",
    path: "/details/travel",
    description: "Let us know you can make it",
    external: false,
  },
  {
    id: 2,
    name: "Hotels",
    path: "/details/hotels",
    description: "Where we are registered for gifts",
    external: false,
  },
  {
    id: 3,
    name: "FAQ",
    path: "/details/faq",
    description: "When & where its happening",
    external: false,
  },
  {
    id: 4,
    name: "Attire",
    path: "details/attire",
    description: "When & where its happening",
    external: false,
  },
];

export default function DetailsNav() {
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

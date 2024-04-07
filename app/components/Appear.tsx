"use client";
import {
  DynamicOption,
  animate,
  inView,
  motion,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { Children, cloneElement, useEffect, useRef } from "react";

interface props {
  children?: React.ReactNode;
  className?: string;
}

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.5
    }
  },
};

const parent = {
  visible: {
    transition: {
      staggerChildren: 0.27,
    },
  },
};

import React from "react";

export default function Appear({ className, children }: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mappedChildren = Children.map(children, (child) => {
    return (
       //@ts-ignore
      <motion.div className={child.props.className} variants={variants}>
        {
          //@ts-ignore
          cloneElement(child, {
            className: "",
          })
        }
      </motion.div>
    );
  });

  return (
    <motion.div
      animate={isInView ? "visible" : "hidden"}
      initial={"hidden"}
      variants={parent}
      ref={ref}
      className={className}
    >
      {mappedChildren}
    </motion.div>
  );
}

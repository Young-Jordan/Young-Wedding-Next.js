import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({ children } : { children: React.ReactNode}, { className } : { className : any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-12 gap-y-12" ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}


import Appear from "@/app/components/Appear";
import Link from "next/link";
import React from "react";

export default function Venue() {
  return (
    <section className="flex snap-center min-h-screen flex-col items-center text-center justify-start lg:gap-y-12">
      <div className="flex flex-col items-start lg:mt-0 mt-12 lg:h-[40vh] w-screen relative overflow-hidden">
        <h1 className="font-sans absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          The Venue
        </h1>
        <video
          width="1920"
          height="1080"
          className="opacity-40 grayscale w-full h-full object-cover object-center"
          muted
          loop
          autoPlay
          playsInline
          preload="true"
        >
          <source src="/Bordone.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="p-12 max-w-2xl">
        <h2 className="mb-4">The Bordone LIC</h2>
        <p>
          The Bordone LIC, a premier event space in Long Island City, boasts
          breathtaking skyline views, a spacious outdoor terrace, and a modern,
          versatile interior, perfect for memorable weddings. This venue offers
          an elegant backdrop for your special day, blending urban charm with
          sophistication.
        </p>
        <Appear>
          <Link
            href={
              "https://www.google.com/maps/dir//google+maps+the+bordone/@40.7523097,-73.9912983,13z/data=!3m1!5s0x89c258d8509de8d1:0xcc25649e3ec9acdc!4m8!4m7!1m0!1m5!1m1!1s0x89c259a1be533335:0x35f4014c71d0ac93!2m2!1d-73.9500988!2d40.752252?entry=ttu"
            }
            target="_blank"
            className="outline-accent outline text-accent rounded-full w-fit uppercase mx-auto lg:mt-12 mt-6 lg:px-6 px-4 lg:py-3 py-1 lg:text-lg text-base tracking-widest hover:outline-0 hover:text-white hover:bg-black transition-colors"
          >
            Get Directions
          </Link>
        </Appear>
      </div>
    </section>
  );
}

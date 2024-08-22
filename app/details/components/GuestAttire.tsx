import React from "react";
import page1 from "../../../public/attire-page-1.jpg";
import page2 from "../../../public/attire-page-2.jpg";
import page3 from "../../../public/attire-page-3.jpg";
import page4 from "../../../public/attire-page-4.jpg";
import page5 from "../../../public/attire-page-5.jpg";
import Image from "next/image";

export const GuestAttire = () => (
  <div>
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12 h-dvh">
      <div className="h-full flex flex-col items-center mt-32 mb-14 lg:p-0 px-0 relative gap-y-6">
        <Image
          className="w-3/4 lg:w-auto lg:h-full lg:py-32"
          src={page1}
          width={1920}
          alt="Guest Attire Page 1"
        />
      </div>
    </section>
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12 h-dvh">
      <div className="h-full flex flex-col items-center mt-32 mb-14 lg:p-0 px-0 relative gap-y-6">
        <Image
          className="w-3/4 lg:w-auto lg:h-full lg:py-32"
          src={page2}
          width={1920}
          alt="Guest Attire Page 1"
        />
      </div>
    </section>
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12 h-dvh">
      <div className="h-full flex flex-col items-center mt-32 mb-14 lg:p-0 px-0 relative gap-y-6">
        <Image
          className="w-3/4 lg:w-auto lg:h-full lg:py-32"
          src={page3}
          width={1920}
          alt="Guest Attire Page 1"
        />
      </div>
    </section>
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12 h-dvh">
      <div className="h-full flex flex-col items-center mt-32 mb-14 lg:p-0 px-0 relative gap-y-6">
        <Image
          className="w-3/4 lg:w-auto lg:h-full lg:py-32"
          src={page4}
          width={1920}
          alt="Guest Attire Page 1"
        />
      </div>
    </section>
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12 h-dvh">
      <div className="h-full flex flex-col items-center mt-32 mb-14 lg:p-0 px-0 relative gap-y-6">
        <Image
          className="w-3/4 lg:w-auto lg:h-full lg:py-32"
          src={page5}
          width={1920}
          alt="Guest Attire Page 1"
        />
      </div>
    </section>
  </div>
);

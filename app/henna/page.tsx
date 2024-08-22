"use client";
import Script from "next/script";

export default function HENNA() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center lg:p-24 p-12">
      <h2 className="mb-6"> Henna RSVP </h2>
      <p className="mb-6 text-center">
        This is an intimate event & space is limited. Please let us know if you
        have any questions or are unsure about your invite.
      </p>
      <div className=" max-w-sm w-full opacity-0 iframe-contianer h-full transition-opacity delay-500">
        <iframe
          data-tally-src="https://tally.so/embed/nrKNKl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="187"
          title="Henna Ceremony"
        ></iframe>
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            /* ts-ignore */
            console.log("trigger load embed");
            document
              .querySelector(".iframe-contianer")
              ?.classList.add("opacity-100");
            /* ts-ignore */
            //Tally.loadEmbeds();
          }}
        />

        <Script id="tally-script">
          {
            "/* ts-ignore */console.log('trigger load embed');Tally.loadEmbeds();document.querySelector('.iframe-contianer')?.classList.add('opacity-100');"
          }
        </Script>
      </div>
    </section>
  );
}

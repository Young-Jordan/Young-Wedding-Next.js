"use client";
import Script from "next/script";

export default function RSVP() {
  return (
    <section className="flex min-h-screen flex-col items-center h-full justify-center lg:p-24 p-12">
      <div className="max-w-sm w-full opacity-0 iframe-contianer h-full transition-opacity delay-500">
        <iframe
          data-tally-src="https://tally.so/embed/3jyGy4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager"
          width="100%"
          height="187"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Wedding RSVP"
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

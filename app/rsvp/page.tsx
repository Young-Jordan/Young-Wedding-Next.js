'use client'
import Script from "next/script"

export default function RSVP() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=" max-w-sm w-full">
      <iframe data-tally-src="https://tally.so/embed/3jyGy4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="301" title="null"></iframe>
      <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    /* ts-ignore */
                    console.log('trigger load embed')
                }}
            />
      <Script id="tally-trigger">
        {`console.log('trigger load embed')
                    Tally.loadEmbeds();`}
      </Script>
      </div>
    </section>
  )
}

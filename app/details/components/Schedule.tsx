import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import React from "react";

export default function Schedule() {
  return (
    <section className="flex snap-center min-h-screen flex-col items-center justify-center lg:gap-y-12">
      <div className="flex flex-col items-center mt-20 mb-14 lg:p-0 px-6 relative">
        <h1 className="font-serif text-center mb-8">Schedule</h1>
        <Accordion className="lg:w-1/2 w-full max-w-4xl border-accent bg-white border-4 rounded-lg px-6">
          <AccordionItem className="py-6 border-b border-black" title={"Friday November 15th"}>
            <div className="font-serif py-6">
              For those who arrive early we will be organizing a meet & greet in
              downtown brooklyn to welcome any early arrivals.
            </div>
          </AccordionItem>
          <AccordionItem className="py-6 border-b border-black" title={"Saturday November 16th"}>
            <div className="font-serif py-6">
              The henna ceremony will be
              held on saturday as a brunch, final time still to be determined. This event is an intimate gathering,
              and as such, attendance is limited. We kindly ask you to wait for
              your invitation to confirm whether you are included in this
              special occasion.<br></br><br></br>Hosted By Betty Young.
            </div>
          </AccordionItem>
          <AccordionItem className="py-6" title={"Sunday November 17th"}>
            <div className="font-serif py-6">Our matrimonial ceremony will be hosted at the elegant Bordone LIC. The festivities will commence in the gentle glow of the afternoon sun, followed by a delightful cocktail hour that gracefully transitions into the evening reception. We look forward to celebrating this joyous occasion with you.</div>
          </AccordionItem>
        </Accordion>
        <div className="relative mt-8">
        <p>Scroll down for venue info</p>
      </div>
      </div>
    </section>
  );
}

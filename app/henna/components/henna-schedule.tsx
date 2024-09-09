import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import React from "react";

export default function HennaSchedule() {
  return (
    <section className="flex snap-center flex-col items-center justify-center lg:gap-y-12">
      <div className="flex flex-col items-center lg:p-0 px-6 relative">
        <h1 className="font-serif text-center mb-8">Henna Information</h1>
        <Accordion className="lg:w-1/2 w-full max-w-4xl border-accent bg-white border-4 rounded-lg px-6">
          <AccordionItem
            className="py-6 border-b border-black"
            title={"Location"}
          >
            <div className="font-serif py-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/?api=1&amp;query=Google&amp;query_place_id=ChIJE_MAsd9fwokR-tWj500Eu_A"
              >
                ATMOSFERA 3801 23rd Ave Queens, NY 11105
              </a>
            </div>
          </AccordionItem>
          <AccordionItem
            className="py-6 border-b border-black"
            title={"Time & Day"}
          >
            <div className="font-serif py-6">
              The henna ceremony will be held on saturday November 16th starting
              at noon.
            </div>
          </AccordionItem>
          <AccordionItem className="py-6" title={"Dress Code"}>
            <div className="font-serif py-6">
              The Henna will be a semi-formal event.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

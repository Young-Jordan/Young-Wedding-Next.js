import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import React from "react";

export default function ThingsToDo() {
  return (
    <section className="flex snap-center min-h-screen flex-col items-center justify-center lg:gap-y-12">
      <div className="flex flex-col items-center mt-20 mb-14 lg:p-0 px-6 relative">
        <h1 className="font-serif text-center mb-8">Schedule</h1>
        <Accordion className="lg:w-2/4 w-full max-w-7xl border-accent bg-white border-4 rounded-lg px-6">
          <AccordionItem
            className="py-6 border-b border-black"
            title={"Coffee & Tea:"}
          >
            <div className="font-serif py-6">
              Partners Coffee LIC = 26-25 Jackson Ave, Queens, NY 11101
              Williamsburg = 125 N 6th St, Brooklyn, NY 11249
              https://www.partnerscoffee.com/
              <br></br>
              Devocion Williamsburg 69 Grand St, Brooklyn, NY 11249
              https://www.devocion.com/
              <br></br>
              Joe&apos;s Coffee Company LIC 4037 23rd St, Long Island City, NY
              11101 https://joecoffeecompany.com/
              <br></br>
              Librae Bakery 35 Cooper Sq, New York, NY 10003
              https://www.libraebakery.com/
              <br></br>
              Daily Provisions https://www.dailyprovisionsnyc.com/
            </div>
          </AccordionItem>
          <AccordionItem className="py-6 border-b border-black" title={"Food:"}>
            <div className="font-serif py-6"></div>
          </AccordionItem>
          <AccordionItem
            className="py-6 border-b border-black"
            title={"Sightseeing:"}
          >
            <div className="font-serif py-6"></div>
          </AccordionItem>
          <AccordionItem
            className="py-6 border-b border-black"
            title={"Mueseums:"}
          >
            <div className="font-serif py-6"></div>
          </AccordionItem>
        </Accordion>
        <div className="relative mt-8">
          <p>Scroll down for venue info</p>
        </div>
      </div>
    </section>
  );
}

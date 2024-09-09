import React from "react";
import HennaSchedule from "../components/henna-schedule";

export default function FAQ() {
  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-12 gap-y-12">
      <div className="w-full">
        <HennaSchedule />
      </div>
    </section>
  );
}

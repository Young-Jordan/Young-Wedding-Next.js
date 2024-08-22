import React from "react";

import ThingsToDo from "../components/ThingsToDo";

export default function FAQ() {
  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-12 gap-y-12">
      <h1>Things to do in NYC</h1>
      <div className="w-full">
        <ThingsToDo />
      </div>
    </section>
  );
}

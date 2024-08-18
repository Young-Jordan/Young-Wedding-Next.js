import React from "react";
import Schedule from "../components/Schedule";

export default function FAQ() {
  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-12 gap-y-12">
      <h1>FAQ</h1>
      <div className="w-full">
        <Schedule />
      </div>
    </section>
  );
}

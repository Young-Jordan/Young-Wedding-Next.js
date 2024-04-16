import React from "react";
import Appear from "../../components/Appear";

export default function Travel() {
  return (
    <section className="flex min-h-screen flex-col items-center text-center justify-center lg:gap-y-12">
      <div className="flex flex-col items-center p-6 mt-12 max-w-screen-lg mx-auto mb-14">
        <h1 className="lg:mb-24 mb-12 font-serif">Travel</h1>
        <div className="flex text-center lg:flex-row lg:items-center lg:text-left flex-col items-center gap-8 lg:mx-20 lg:px-0 px-6">
          <div className="lg:w-1/2 w-full">
            <h2 className="mb-4">Fly into NYC, then uber to your hotel.</h2>
            <p>
              If you&apos;re coming in from out of town and landing at an airport,
              the fastest option is to land at La Guardia, then Uber to your accomidations.
              If you are coming from across the globe JFK is the best option.
            </p>
          </div>
            <Appear className="grid grid-rows-2 grid-cols-2 text-center gap-4 lg:w-1/2 w-full">
              <div className=" col-span-2 w-full h-full flex flex-col justify-center bg-white rounded-md p-6">
                <p>LGA</p>
                <h3>20min</h3>
                <p className="text-sm text-gray-500">
                  La Guardia Intl. Airport
                </p>
              </div>
              <div className="w-full h-full flex flex-col justify-center bg-white rounded-md p-6">
                <p>JFK</p>
                <h3>35min</h3>
                <p className="text-sm text-gray-500">
                  John F. Kennedy Intl. Airport
                </p>
              </div>
              <div className="w-full h-full flex flex-col justify-center bg-white rounded-md p-6">
                <p>NWR</p>
                <h3>50min</h3>
                <p className="text-sm text-gray-500">Newark Intl. Airport</p>
              </div>
            </Appear>
        </div>
      </div>
    </section>
  );
}

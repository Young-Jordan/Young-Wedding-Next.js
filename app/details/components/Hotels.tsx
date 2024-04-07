import React from "react";
import HotelItem from "./HotelItem";
import hoxton from "../../../publicImages/williamsburg-rooms-nav.webp";
import willam from "../../../publicImages/the-william-vale.jpg";
import ravel from "../../../publicImages/ravel.jpeg";
import sonder from "../../../publicImages/Sonder.jpeg";
import boxHouse from "../../../publicImages/the-box-house.jpeg";
import Appear from "../../components/Appear";
export default function Hotels() {
  return (
    <section className="flex min-h-screen flex-col items-center text-center justify-center lg:p-24 lg:pb-12 p-5 lg:gap-y-12">
      <div className="flex flex-col items-center p-6 mt-12 mb-14">
        <h1 className="mb-12 font-sans">Hotels</h1>
        <p className="max-w-sm mb-12">
          Here are some hotels we recommend you stay for your time celebrating
          with us. We are currently working on placing blocks on all these
          hotels.
        </p>
          <Appear className="grid lg:grid-cols-3 grid-cols-1 text-center gap-8 w-full max-w-screen-2xl mx-auto">
            <HotelItem
              image={hoxton}
              time_to_venue={"15 min"}
              hotel_name={"The Hoxton"}
              hotel_description={
                "The Hoxton, Williamsburg is a chic, boutique hotel offering stylish rooms, rooftop views, and a vibrant atmosphere in Brooklyn, NYC."
              }
              hotel_link={"https://thehoxton.com/williamsburg/"}
              cost={"$440-$540"}
            />
            <HotelItem
              image={willam}
              hotel_name={"The Willam Vale"}
              hotel_description={
                "The William Vale, an upscale hotel in Williamsburg, boasts luxurious rooms, a rooftop pool, and stunning views of Manhattan."
              }
              hotel_link={"https://www.thewilliamvale.com/"}
              cost={"$720-$1000"}
            />
            <HotelItem
              image={ravel}
              hotel_name={"The Ravel"}
              hotel_description={
                "The Ravel Hotel in LIC offers chic accommodations, stunning city views, a rooftop bar, and modern amenities in a vibrant neighborhood."
              }
              hotel_link={
                "https://www.wyndhamhotels.com/trademark/long-island-city-new-york/ravel-hotel-trademark-collection-by-wyndham/overview?CID=LC:4d7auublw4ufaga:52325&iata=00093796"
              }
              cost={"$300-$500"}
            />
            <HotelItem
              image={sonder}
              hotel_name={"Sonder"}
              hotel_description={
                "Sonder Hotel LIC features modern, spacious rooms, skyline views, convenient amenities, and a prime location in Long Island City, New York."
              }
              hotel_link={
                "https://www.sonder.com/destinations/new_york_city/court-square/c34198?sleeps=1&check_in_dt=2024-11-15&check_out_dt=2024-11-18&utm_medium=cpc&utm_source=google&utm_term=sonder+court+square&utm_campaign=15996984601"
              }
              cost={"$250-$500"}
            />
            <HotelItem
              image={boxHouse}
              hotel_name={"The Box House"}
              hotel_description={
                "The Box House Hotel in Greenpoint offers unique, spacious loft suites, vintage decor, stunning Manhattan views, and a rooftop terrace."
              }
              hotel_link={"https://theboxhousehotel.com/"}
              cost={"$450-$900"}
            />
          </Appear>
      </div>
    </section>
  );
}

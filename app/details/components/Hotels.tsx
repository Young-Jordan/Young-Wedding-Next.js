import React from "react";
import HotelItem from "./HotelItem";
import hoxton from "../../../public/Images/williamsburg-rooms-nav.webp";
import willam from "../../../public/Images/the-william-vale.jpg";
import ravel from "../../../public/Images/ravel.jpeg";
import sonder from "../../../public/Images/Sonder.jpeg";
import boxHouse from "../../../public/Images/the-box-house.jpeg";
import marriot from "../../../public/Images/marriot.jpg"
import Appear from "../../components/Appear";
export default function Hotels() {
  return (
    <section className="flex min-h-screen flex-col items-center text-center justify-center lg:p-24 lg:pb-12 p-5 lg:gap-y-12">
      <div className="flex flex-col items-center p-6 mt-12 mb-14">
        <h1 className="mb-12 font-serif">Hotels</h1>
        <p className="max-w-sm mb-12">
          Here are some hotels we recommend you stay for your time celebrating
          with us. We are currently working on placing blocks on all these
          hotels so check back when we send the official invites to see which of these hotels have blocks.
        </p>
        <Appear className="grid lg:grid-cols-3 grid-cols-1 text-center gap-8 w-full max-w-screen-2xl mx-auto">
          <HotelItem
            image={willam}
            hotel_name={"The Willam Vale"}
            time_to_venue={"15 min"}
            block_count={10}
            staying
            hotel_description={
              "The William Vale, an upscale hotel in Williamsburg, boasts luxurious rooms, a rooftop pool, and stunning views of Manhattan."
            }
            hotel_link={"https://www.thewilliamvale.com/"}
            cost={"$520-$1000"}
          />
          <HotelItem
            image={sonder}
            hotel_name={"Sonder"}
            badge="LOSPC5 for 5% off"
            time_to_venue={"15 min"}
            walk
            hotel_description={
              "Sonder Hotels are spaced out across the city. Sign up to be a member for an additional 15% off. Court Square location is closest to the venue."
            }
            hotel_link={
              "https://www.sonder.com/destinations/new_york_city/search?sleeps=1&neighborhood=all_neighborhoods&bedroom_count=0&bed_count=1&bathroom_count=1"
            }
            cost={"$250-$500"}
          />
           <HotelItem
            image={marriot}
            time_to_venue={"7 min"}
            hotel_name={"Courtyard Marriot"}
            block_count={15}
            hotel_description={
              "Offering comfortable accommodations and contemporary amenities, ideally located near our venue and convenient transportation options in Queens, New York."
            }
            hotel_link={"https://www.marriott.com/event-reservations/reservation-link.mi?id=1715259595286&key=GRP&app=resvlink"}
            cost={"$209-$220"}
          />
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
            image={boxHouse}
            hotel_name={"The Box House"}
            time_to_venue={"10 min"}
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

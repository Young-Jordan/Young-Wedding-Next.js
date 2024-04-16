"use client";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import drawing from "../../../public/Images/Jordan_Nikole.png";
import walk_icon from "../../../public/walk.svg";
import car_icon from "../../../public/car.svg";

interface HotelItemProps {
  image: string | StaticImport;
  hotel_name: String;
  is_shuttle?: Boolean;
  hotel_link: Url;
  hotel_description: String;
  time_to_venue?: String;
  cost?: String;
  block_count?: number;
  walk?: boolean;
  staying?: boolean;
  badge?: string;
}

export default function HotelItem({
  image,
  hotel_name,
  is_shuttle,
  hotel_link,
  hotel_description,
  time_to_venue,
  cost,
  block_count,
  walk,
  staying,
  badge,
}: HotelItemProps) {
  return (
    <motion.div
      className="bg-white rounded-md text-left relative shadow"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {badge && (
        <div className="absolute font-serif z-10 -top-3 -left-4 text-xs py-2 px-4 bg-yellow-500 rounded-full">
          {badge}
        </div>
      )}

      {staying && (
        <div className="absolute font-serif z-10 -top-5 -left-4 text-xs flex items-center">
          <div className="p-2 bg-white rounded-full z-10">
          <Image
            src={drawing}
            alt="jordan & nikole"
            width={40}
            height={40}
          ></Image>
          </div>
          <div className="py-2 px-4 bg-white rounded-full -ml-5 pl-6">where we are staying</div>
        </div>
      )}
      <Link
        href={hotel_link}
        target="_blank"
        className="bg-white rounded-md text-left overflow-hidden hover:scale-105 transition-transform hover:shadow"
      >
        <div className="w-full aspect-video relative">
          {block_count && (
            <div className="absolute bottom-3 right-2 text-xs py-2 px-4 bg-primary rounded-full">
              {block_count} rooms blocked{" "}
            </div>
          )}
          <Image
            src={image}
            alt="hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-6 min-h-72">
          <div className="mb-2">
            {time_to_venue && (
              <div className="mb-2 text-sm text-gray-500 flex items-center fill-gray-500 gap-x-1">
                {time_to_venue}
                {walk ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 -960 960 960"
                    width="15"
                  >
                    <path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 -960 960 960"
                    width="15"
                  >
                    <path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z" />
                  </svg>
                )}
              </div>
            )}
            <h3 className="mb-2">{hotel_name}</h3>
            <p>{hotel_description}</p>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="flex">
                <h4 className="font-mono">{cost}</h4>
                <span>&nbsp;/&nbsp;night</span>
              </span>
              <div className="outline-accent outline text-accent rounded-full px-2 py-1 w-fit uppercase text-xs hover:outline-0 hover:text-white hover:bg-black transition-colors">
                book hotel
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

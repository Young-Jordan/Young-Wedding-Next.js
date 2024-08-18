import React from "react";
import Venue from "./components/Venue";
import Schedule from "./components/Schedule";
import { GuestAttire } from "./components/GuestAttire";

export default function Details() {
  return (
    <div>
      <Schedule />
      <Venue />
    </div>
  );
}

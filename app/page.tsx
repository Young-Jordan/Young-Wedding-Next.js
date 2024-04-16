import AboutUs from "./components/AboutUs";
import { MainHero } from "./components/MainHero";
import Schedule from "./details/components/Schedule";
import Venue from "./details/components/Venue";


export default function Home() {
  return (
    <div>
   <MainHero></MainHero>
   <AboutUs></AboutUs>
   <Schedule></Schedule>
   <Venue></Venue>
   </div>
  );
}

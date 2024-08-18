import AboutUs from "./components/AboutUs";
import HeroNav from "./components/HeroNav";
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
      <HeroNav />
    </div>
  );
}

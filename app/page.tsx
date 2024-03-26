import Link from "next/link";
import Timer from "./components/timer";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-20 gap-y-12">
      <h1 className="font-sans leading-relaxed lg:m-0 mt-auto">Jordan + Nikole</h1>
      <div className="flex flex-col items-center justify-center text-center gap-y-6 lg:m-0 mt-auto">
      <h2 className="font-sans">11<span className="mx-2">.</span>17<span className="mr-2">.</span>24</h2>
      <h2 className="uppercase">Long island City, New York</h2>
      <Timer></Timer>
      </div>
    </section>
  );
}

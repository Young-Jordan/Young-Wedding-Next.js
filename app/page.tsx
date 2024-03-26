import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen items-center text-center justify-center lg:p-24 p-12 gap-y-12">
      <h1 className="font-sans leading-relaxed">Jordan + Nikole</h1>
      <h2 className="font-sans">11<span className="mx-2">.</span>17<span className="mr-2">.</span>24</h2>
      <h2 className="uppercase">Long island City, New York</h2>
    </section>
  );
}

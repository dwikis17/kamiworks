import Image from "next/image";
import HeroSection from "./components/section/HeroSection";
import AlternativeHero from "./components/AlternativeHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className=" w-screen h-screen ">
        <AlternativeHero />
      </section>
      {/* <section className=" w-screen items-center  text-sm lg:flex border h-screen">
        <AlternativeHero />
      </section> */}
    </main>
  );
}

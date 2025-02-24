import HeroSection from "@/components/content/herro-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-screen w-screen">
        <h1 className="text-7xl text-blue-500 font-bebasNeue">Section1</h1>
      </section>
      <section className="h-screen w-screen">
        <h1 className="text-7xl text-black font-bebasNeue">Section2</h1>
      </section>
      <section className="h-screen w-screen">
        <h1 className="text-7xl text-white font-bebasNeue">Section3</h1>
      </section>
      <section className="h-screen w-screen">
        <h1 className="text-7xl text-white font-bebasNeue">Section4</h1>
      </section>
    </>
  );
}

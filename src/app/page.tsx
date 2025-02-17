import HeroSection from "@/components/content/herro-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[120px]"></div>
      <section className="h-screen w-screen">Section1</section>
      <section className="h-screen w-screen">Section2</section>
      <section className="h-screen w-screen">Section3</section>
      <section className="h-screen w-screen">Section4</section>
    </>
  );
}

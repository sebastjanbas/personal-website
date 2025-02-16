import HeroSection from "@/components/content/herro-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section data-section="section1" className="h-screen w-screen">
        Section1
      </section>
      <section data-section="section2" className="h-screen w-screen">
        Section2
      </section>
      <section data-section="section3" className="h-screen w-screen">
        Section3
      </section>
    </>
  );
}

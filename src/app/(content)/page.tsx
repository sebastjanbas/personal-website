import HeroSection from "@/app/(content)/_components/hero-section";
import {Projects} from "@/app/(content)/_components/projects";
import {IntroSection} from "@/app/(content)/_components/intro-section";

export default function Home() {

    return (
        <>
            <HeroSection/>
            <div className={"bg-[#121111] w-full flex flex-col items-center min-h-screen justify-start gap-16 md:gap-32"}>
                <IntroSection />
                <Projects/>
            </div>
        </>
    );
}

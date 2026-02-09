import HeroSection from "@/app/(content)/_components/hero-section";
import {Projects} from "@/app/(content)/_components/projects";
import {LogoCarousel} from "@/app/(content)/_components/logo-carousel";
import {FlowingText} from "@/app/(content)/_components/flowing-text";

export default function Home() {

    return (
        <>
            <HeroSection/>
            <div className={"bg-[#121111] w-full flex flex-col items-center min-h-screen justify-start gap-16 md:gap-32"}>
                <div className="px-4 py-8 sm:px-8 sm:py-12 md:p-16 lg:p-20 mt-8 md:mt-16">
                    <FlowingText/>
                </div>
                <Projects/>
            </div>
            <LogoCarousel />
        </>
    );
}

import HeroSection from "@/components/content/herro-section";
import {TypescriptLogo} from "@/components/logos/typescript-logo";
import {SpringLogo} from "@/components/logos/spring-logo";
import {PythonLogo} from "@/components/logos/python-logo";
import {PostgresqlLogo} from "@/components/logos/postgresql-logo";
import {PostmanLogo} from "@/components/logos/postman-logo";
import {NextLogo} from "@/components/logos/next-logo";
import {JavaLogo} from "@/components/logos/java-logo";
import {ReactLogo} from "@/components/logos/react-logo";
import {DockerLogo} from "@/components/logos/docker-logo";
import {GrafanaLogo} from "@/components/logos/grafana-logo";
import {NodeLogo} from "@/components/logos/node-logo";
import {TailwindLogo} from "@/components/logos/tailwind-logo";
import {AwsLogo} from "@/components/logos/aws-logo";

export default function Home() {
    const BIRTHDAY = process.env.BIRTHDAY as unknown as number;
    const BIRTHMONTH = process.env.BIRTHMONTH as unknown as number;
    const BIRTHYEAR = process.env.BIRTHYEAR as unknown as number;

    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const year = (day >= BIRTHDAY && month === BIRTHMONTH) || month > BIRTHMONTH ? new Date().getFullYear() - BIRTHYEAR : new Date().getFullYear() - 1 - BIRTHYEAR;

    return (
        <>
            <HeroSection/>
            <div className={"bg-[#121111] h-screen w-full flex flex-col items-center"}>
                <div className="p-20 mt-20">
                    <h2 className={"text-light-gray text-5xl font-medium text-left indent-80"}>
                        I’m {year} years old software engineer based<br/> in <strong
                        className="font-medium text-[#F05039]">Slovenia</strong>, currently studying in US. I create a
                        better way <br/> people interact with the world through software.
                    </h2>
                </div>

                <div className={"w-full px-5 flex flex-row justify-between items-center"}>
                    <TypescriptLogo />
                    <SpringLogo/>
                    <PythonLogo />
                    <PostgresqlLogo />
                    <PostmanLogo/>
                    <NextLogo />
                    <JavaLogo />
                    <ReactLogo />
                    <DockerLogo />
                    <GrafanaLogo />
                    <NodeLogo />
                    <TailwindLogo />
                    <AwsLogo />
                </div>
            </div>
        </>
    );
}

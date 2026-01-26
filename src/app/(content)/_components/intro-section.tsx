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

export const IntroSection = () => {
    return (
        <>
            <div className="p-20 mt-20">
                <h2 className={"text-light-gray text-5xl font-medium text-left indent-80"}>
                    I’m a software engineer based in <strong
                    className="font-medium text-[#F05039]">Slovenia</strong>, <br/> currently studying in US. I create a
                    better way people interact <br/> with the world through software.
                </h2>
            </div>

            <div className={"w-full px-5 flex flex-row justify-between items-center"}>
                <TypescriptLogo/>
                <SpringLogo/>
                <PythonLogo/>
                <PostgresqlLogo/>
                <PostmanLogo/>
                <NextLogo/>
                <JavaLogo/>
                <ReactLogo/>
                <DockerLogo/>
                <GrafanaLogo/>
                <NodeLogo/>
                <TailwindLogo/>
                <AwsLogo/>
            </div>
        </>
    );
};

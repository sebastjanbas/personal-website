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
import styles from "./logos-slide.module.css"
import {FlowingText} from "@/app/(content)/_components/flowing-text";

const logos = [
    <TypescriptLogo key="typescript"/>,
    <SpringLogo key="spring"/>,
    <PythonLogo key="python"/>,
    <PostgresqlLogo key="postgresql"/>,
    <PostmanLogo key="postman"/>,
    <NextLogo key="next"/>,
    <JavaLogo key="java"/>,
    <ReactLogo key="react"/>,
    <DockerLogo key="docker"/>,
    <GrafanaLogo key="grafana"/>,
    <NodeLogo key="node"/>,
    <TailwindLogo key="tailwind"/>,
    <AwsLogo key="aws"/>,
];

export const IntroSection = () => {
    return (
        <>
            <div className="px-4 py-8 sm:px-8 sm:py-12 md:p-16 lg:p-20 mt-8 md:mt-16">
                <FlowingText/>
            </div>

            <div className="-rotate-6">
                <div className={styles.logos}>
                    <div className={styles['logos-slide']}>
                        {logos.map((logo, i) => (
                            <div key={i} className="inline-block align-middle my-0 mx-3 sm:mx-5 md:mx-10">{logo}</div>
                        ))}
                    </div>
                    <div className={styles['logos-slide']}>
                        {logos.map((logo, i) => (
                            <div key={i} className="inline-block align-middle my-0 mx-3 sm:mx-5 md:mx-10">{logo}</div>
                        ))}
                    </div>
                    <div className={styles['logos-slide']}>
                        {logos.map((logo, i) => (
                            <div key={i} className="inline-block align-middle my-0 mx-3 sm:mx-5 md:mx-10">{logo}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

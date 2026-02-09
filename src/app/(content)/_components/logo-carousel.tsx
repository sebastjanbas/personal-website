"use client";

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
import {useEffect, useState} from "react";

const small = {height: "24px", width: "24px"};
const big = {height: "48px", width: "48px"};

export const LogoCarousel = () => {
    const [width, setWidth] = useState<null | number>(null);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const size = width !== null && width < 640 ? small : big;

    const logos = [
        <TypescriptLogo size={size} key="typescript"/>,
        <SpringLogo size={size} key="spring"/>,
        <PythonLogo size={size} key="python"/>,
        <PostgresqlLogo size={size} key="postgresql"/>,
        <PostmanLogo size={size} key="postman"/>,
        <NextLogo size={size} key="next"/>,
        <JavaLogo size={size} key="java"/>,
        <ReactLogo size={size} key="react"/>,
        <DockerLogo size={size} key="docker"/>,
        <GrafanaLogo size={size} key="grafana"/>,
        <NodeLogo size={size} key="node"/>,
        <TailwindLogo size={size} key="tailwind"/>,
        <AwsLogo size={size} key="aws"/>,
    ];

    return (
        <>
            <div className="rotate-0 border-y border-light-gray mt-20 opacity-75 w-full overflow-x-hidden">
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
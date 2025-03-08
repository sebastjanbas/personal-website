/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useRef } from "react";
import Git from "../Logos/git";
import { ReactLogo } from "../Logos/react-logo";
import { Figma } from "../Logos/figma";
import { TailwindLogo } from "../Logos/tailwind-logo";
import { TypescriptLogo } from "../Logos/tyoescript-logo";
import { SupabaseLogo } from "../Logos/supabase-logo";
import { PostGreSql } from "../Logos/postgresql-logo";
import { DjangoLogo } from "../Logos/django-logo";
import { DockerLogo } from "../Logos/docker-logo";
import { NextJsLogo } from "../Logos/nextjs-logo";
import { ElectronLogo } from "../Logos/electron-logo";
import { motion, useInView } from "motion/react";

const LogoBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative bg-transparent w-full max-w-4xl h-full overflow-hidden">
      <motion.div
        className="hidden md:block relative w-full h-full transition-transform"
        style={{ transition: "2s ease-in-out" }}
        ref={ref}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.8 }}
      >
        <div className="flex justify-center items-center absolute h-fit w-fit scale-[200%] p-2 aspect-square bg-white shadow-lg rounded-2xl translate-y-16 -translate-x-16 right-0">
          <Git color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-2 aspect-square bg-white shadow-lg rounded-2xl translate-x-20 translate-y-12 scale-[200%]">
          <SupabaseLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[120%] bottom-0 left-0 translate-x-80 -translate-y-20">
          <ReactLogo color />
        </div>
        <div className="flex justify-center items-center absolute aspect-square h-fit w-fit py-2 px-5 bg-white shadow-lg rounded-2xl scale-[90%] right-0 -translate-x-80 translate-y-10">
          <Figma color />
        </div>
        <div className="flex justify-center items-center absolute aspect-square h-fit w-fit py-2 px-5 bg-white shadow-lg rounded-2xl scale-[70%] right-0 -translate-x-10 translate-y-60">
          <TailwindLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[200%] bottom-0 left-0 translate-x-12 -translate-y-16">
          <TypescriptLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[90%] translate-x-40 translate-y-60">
          <PostGreSql color className="translate-y-0.5" />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit py-2 px-4 aspect-square bg-white shadow-lg rounded-2xl scale-[150%] right-0 -translate-x-20 bottom-0 -translate-y-10">
          <DjangoLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[100%] right-0 -translate-x-72 bottom-0 -translate-y-52">
          <DockerLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[70%] bottom-0 right-0 -translate-x-60 -translate-y-2">
          <NextJsLogo color={false} />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit py-2 px-[7px] bg-white shadow-lg rounded-xl scale-[125%] translate-x-80 translate-y-32">
          <ElectronLogo color />
        </div>
      </motion.div>
      <motion.div
        className="hidden relative w-full h-full transition-transform"
        style={{ transition: "2s ease-in-out" }}
        ref={ref}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.8 }}
      >
        <div className="flex justify-center items-center absolute h-fit w-fit scale-[250%] p-2 aspect-square bg-white shadow-lg rounded-2xl translate-y-5 -translate-x-5 right-0">
          <Git color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-2 aspect-square bg-white shadow-lg rounded-2xl translate-x-20 translate-y-12 scale-[200%]">
          <SupabaseLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[120%] bottom-0 left-0 translate-x-80 -translate-y-20">
          <ReactLogo color />
        </div>
        <div className="flex justify-center items-center absolute aspect-square h-fit w-fit py-2 px-5 bg-white shadow-lg rounded-2xl scale-[90%] right-0 -translate-x-80 translate-y-10">
          <Figma color />
        </div>
        <div className="flex justify-center items-center absolute aspect-square h-fit w-fit py-2 px-5 bg-white shadow-lg rounded-2xl scale-[70%] right-0 -translate-x-10 translate-y-60">
          <TailwindLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[150%] right-0 -translate-x-20 bottom-0 -translate-y-10">
          <TypescriptLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[90%] translate-x-40 translate-y-60">
          <PostGreSql color className="translate-y-0.5" />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-2 px-4 aspect-square bg-white shadow-lg rounded-2xl scale-[200%] bottom-0 left-0 translate-x-2 -translate-y-2">
          <DjangoLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[100%] right-0 -translate-x-72 bottom-0 -translate-y-52">
          <DockerLogo color />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit p-3 aspect-square bg-white shadow-lg rounded-2xl scale-[70%] bottom-0 right-0 -translate-x-60 -translate-y-2">
          <NextJsLogo color={false} />
        </div>
        <div className="flex justify-center items-center absolute h-fit w-fit py-2 px-[7px] bg-white shadow-lg rounded-xl scale-[125%] translate-x-80 translate-y-32">
          <ElectronLogo color />
        </div>
      </motion.div>
    </div>
  );
};

export default LogoBackground;

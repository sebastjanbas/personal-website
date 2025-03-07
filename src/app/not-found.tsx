import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center w-screen h-fit mt-44 md:mt-32 overflow-hidden p-5 md:p-10 xl:p-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-sm md:text-md xl:text-xl text-slate-600 font-black">
          404
        </h3>
        <h1
          className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white
              font-robotoFont font-semibold text-transparent text-center
              text-5xl sm:text-6xl lg:text-7xl"
        >
          Page not found
        </h1>
        <p className="text-slate-700 mt-5 text-md lg:text-xl">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link href={"/"} className="mt-5">
          <span
            className="text-slate-600 font-semibold text-sm lg:text-md text-center leading-none -translate-y-40 sm:translate-y-2 
  md:after:block md:after:h-[1px] md:after:origin-left md:after:scale-x-0 md:after:bg-slate-600 
  md:after:transition-transform md:after:duration-500 
  md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform"
          >
            &larr; Back to home
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

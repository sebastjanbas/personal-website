import Link from "next/link";
import Navbar from "@/components/content/navbar";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center w-full h-screen bg-light-gray overflow-hidden px-4 md:px-10 xl:px-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] tracking-tighter font-interDisplay font-semibold text-[#1F1F1F] leading-[0.85] select-none">
            404
          </h1>
          <p className="text-[#383838] font-interDisplay font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight mt-4 md:mt-6">
            This page could not be found.
          </p>
          <Link href="/" className="mt-8 md:mt-10">
            <span
              className="text-[#383838] font-interDisplay font-medium text-sm lg:text-base tracking-tight
                md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:bg-[#383838]
                md:after:transition-transform md:after:duration-500
                md:hover:after:scale-x-100 transition-all"
            >
              &larr; Back to home
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
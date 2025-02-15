import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="absolute px-10 z-30">
        <Link
          className="font-bebasNeue text-white text-lg text-center"
          href={"/"}
        >
          Sebastjan Bas
        </Link>
      </div>
      <div className="relative z-20 flex justify-center items-center mt-5">
        <div className="flex items-center font-bebasNeue w-[20rem] justify-between bg-white px-10 py-2 rounded-full">
          <div>
            <Link href={"/about"}>About</Link>
          </div>
          <div>
            <a href="mailto:sebastjan.bas@gmail.com">Contact</a>
          </div>
          <div>
            <Link href={"/work"}>Work</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import NavigationDialog from "./navigation-dialog";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="relative  flex justify-center items-center">
        <nav className="relative z-[60] flex w-full max-w-5xl px-8 py-5 justify-between items-center">
          <Link
            className={`font-bebasNeue transition-colors duration-1000 text-lg text-center ${
              mobileMenuOpen ? "text-black" : "text-white"
            }`}
            href={"/"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Sebastjan Bas
          </Link>
          <div className="inset-y-0 flex items-center px-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`bg-transparent transition-colors duration-1000 inline-flex items-center justify-center rounded-md ${
                mobileMenuOpen ? "text-black" : "text-white"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="size-5" />
            </button>
          </div>
        </nav>
      </header>
      <NavigationDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;

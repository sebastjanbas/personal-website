"use client";
import Link from "next/link";
import NavigationDialog from "./navigation-dialog";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-[60] flex justify-center items-center">
        <nav className="relative flex w-full max-w-5xl px-8 py-5 justify-between items-center">
          <Link
            className={`translate-y-1 font-bebasNeue text-lg text-center leading-none
  after:block after:h-[1px] after:origin-left after:scale-x-0
  after:transition-transform after:duration-300 
  hover:after:scale-x-100 hover:tracking-wider transition-all will-change-transform ${
    mobileMenuOpen
      ? "text-black after:bg-black "
      : "text-foreground after:bg-foreground "
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
              className={`bg-transparent inline-flex items-center justify-center rounded-md ${
                mobileMenuOpen ? "text-black" : "text-foreground"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <span className="absolute">
                <FaBars
                  aria-hidden="true"
                  className={`size-5 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-1"
                  }`}
                />
              </span>
              <span className="absolute">
                <X
                  aria-hidden="true"
                  className={`size-6 ${
                    mobileMenuOpen ? "opacity-1" : "opacity-0"
                  }`}
                />
              </span>
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

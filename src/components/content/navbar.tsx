"use client";
import Link from "next/link";
import NavigationDialog from "./navigation-dialog";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { X } from "lucide-react";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (previous < latest && latest > 200) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: easeInOut }}
        className="fixed top-0 z-[100] flex w-full h-fit justify-center items-center"
      >
        <nav className="relative flex w-full max-w-5xl rounded-full backdrop-blur-sm px-8 py-5 justify-between items-center">

          <Link
            className={`translate-y-1 font-bebasNeue text-lg text-center leading-none
  md:after:block md:after:h-[1px] md:after:origin-left md:after:scale-x-0
  md:after:transition-transform md:after:duration-300 
  md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform ${
    mobileMenuOpen
      ? "text-slate-600 md:after:bg-slate-600 "
      : "text-slate-600 md:after:bg-slate-600 "
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
                mobileMenuOpen ? "text-slate-600" : "text-foreground"
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
      </motion.header>
      <NavigationDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;

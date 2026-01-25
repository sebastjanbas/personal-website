"use client";
import Link from "next/link";
import {useState} from "react";
import {easeInOut, motion, useMotionValueEvent, useScroll,} from "motion/react";

const Navbar = () => {
    // TODO: update the mobile version and add the mobile menu for navigation
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const {scrollY} = useScroll();
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
                    visible: {y: 0},
                    hidden: {y: "-100%"},
                }}
                animate={navHidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: easeInOut}}
                className="fixed top-0 flex w-full h-fit justify-center items-center"
                style={{zIndex: 99999}}
            >
                <nav
                    className="relative bg-transparent text-foreground flex flex-row w-full rounded-none px-8 py-5 justify-between items-center">
                    <Link
                        href={"/"}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Sebastjan Bas
                    </Link>
                    <Link
                        href={"/projects"}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href={"/blog"}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href={"mailto:sebatjan.bas@gmail.com"}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </nav>
            </motion.header>
            {/*TODO: add mobile navigation*/}
            {/*<NavigationDialog*/}
            {/*  mobileMenuOpen={mobileMenuOpen}*/}
            {/*  setMobileMenuOpen={setMobileMenuOpen}*/}
            {/*/>*/}
        </>
    );
};

export default Navbar;

import { navigation } from "@/lib/docs";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

type DialogProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (type: boolean) => void;
};

const NavigationDialog = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: DialogProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {mobileMenuOpen && (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
          <DialogPanel>
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.5, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white fixed overflow-hidden inset-0 z-90 h-screen max-h-screen w-screen"
            >
              <div className="relative max-h-screen w-full z-10 flex justify-center items-center overflow-y-auto pt-20 pb-32 px-4">
                {/* Motion Variants for Staggering */}
                <motion.ul
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 0.25,
                        staggerChildren: 0.15,
                      }, // Stagger effect
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex space-y-1 flex-col w-full max-w-5xl px-4 lg:px-8 font-bebasNeue font-bold"
                >
                  {navigation.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: "easeOut" },
                        },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(true)}
                        className="bg-clip-text bg-linear-to-b from-black via-slate-500 to-white  tracking-tight leading-17.5 md:leading-25 lg:leading-45
                        relative text-7xl sm:text-8xl lg:text-[180px] text-transparent 
                      duration-200 ease-out md:hover:text-gray-400
                      after:block md:after:h-0.5 lg:after:h-0.75 md:after:origin-left md:after:scale-x-0 md:after:bg-gray-400
                      md:after:transition-transform md:after:duration-500 md:after:ease-out md:hover:after:scale-x-100 after:-translate-y-3"
                        style={{
                          transform: "translate3d(0,0,0)", // Forces GPU acceleration
                          willChange: "transform, opacity",
                          backfaceVisibility: "hidden",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </DialogPanel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default NavigationDialog;

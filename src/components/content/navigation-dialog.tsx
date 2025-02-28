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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white fixed overflow-hidden inset-0 z-[90] h-screen max-h-screen w-screen"
              >
                <div className="relative max-h-screen w-full z-10 flex justify-center items-center overflow-y-auto pt-20 pb-32 px-4">
                  <ul className="flex flex-col space-y-1 w-full max-w-5xl px-4 lg:px-8 font-bigShoulders font-bold uppercase">
                    {navigation.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(link.stayOpen)}
                          className="relative text-7xl md:text-8xl lg:text-9xl text-black 
       duration-200 ease-out hover:text-gray-400 
      after:block after:h-[2px] lg:after:h-[3px] after:origin-left after:scale-x-0 after:bg-gray-400 
      after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 safari:transition-none"
                          style={{
                            transform: "translate3d(0,0,0)", // Forces GPU acceleration
                            willChange: "transform, opacity", // Prepares browser for smooth animations
                            backfaceVisibility: "hidden", // Prevents flickering on Safari
                            WebkitFontSmoothing: "antialiased", // Improves text rendering
                          }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
  );
};

export default NavigationDialog;

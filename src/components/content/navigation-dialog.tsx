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
    <div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} static>
            <DialogPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen"
              >
                <div className="max-h-screen w-full z-50 flex justify-center items-center overflow-y-auto pt-20 pb-32 px-4">
                  <ul className="flex flex-col space-y-1 w-full max-w-5xl px-4 lg:px-8 font-bigShoulders font-bold uppercase">
                    {navigation.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="after:block after:h-[2px] lg:after:h-[3px] after:w-0 after:bg-gray-400 after:transition-all after:duration-500 hover:after:w-full text-7xl md:text-8xl lg:text-9xl hover:tracking-wider transition-all hover:text-gray-400"
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
    </div>
  );
};

export default NavigationDialog;

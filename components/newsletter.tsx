"use client";

import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "./ui/button";
import { FormNewsletter } from "./form-newsletter";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { inputVariants } from "./ui/input";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;

export const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isInitialRender = useRef(true);

  useEffect(() => {
    return () => {
      isInitialRender.current = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex relative flex-col gap-4 justify-center items-center w-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area short:lg:gap-4 lg:gap-8">
      <div className="flex flex-col items-center min-h-0 shrink">
        {!isOpen && (
          <motion.div
            key="newsletter"
            initial={isInitialRender.current ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                scale: 1,
                transition: {
                  delay: DELAY,
                  duration: DURATION,
                  ease: EASE_OUT,
                },
              },
              hidden: {
                scale: 0.9,
                transition: { duration: DURATION, ease: EASE_OUT },
              },
              exit: {
                y: -150,
                scale: 0.9,
                transition: { duration: DURATION, ease: EASE_OUT },
              },
            }}
          >
            <div className="flex flex-col gap-4 w-full md:gap-6 lg:gap-8">
              <FormNewsletter
                input={(props) => (
                  /* @ts-expect-error - Type mismatch */
                  <motion.input
                    autoCapitalize="off"
                    autoComplete="email"
                    placeholder="Subscribe to newsletter"
                    className={inputVariants()}
                    initial={isInitialRender.current ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: DURATION,
                        ease: EASE_OUT_OPACITY,
                      },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: EASE_OUT,
                      delay: DELAY,
                    }}
                    {...props}
                  />
                )}
                submit={(props) => (
                  /* @ts-expect-error - Type mismatch */
                  <motion.button
                    className={buttonVariants({
                      variant: "iconButton",
                      size: "icon-xl",
                    })}
                    {...props}
                    initial={isInitialRender.current ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: DURATION,
                        ease: EASE_OUT_OPACITY,
                      },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: EASE_OUT,
                      delay: DELAY,
                    }}
                  >
                    <ArrowRightIcon className="w-4 h-4 text-current" />
                  </motion.button>
                )}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

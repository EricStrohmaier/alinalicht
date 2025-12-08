"use client";

import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { FormNewsletter } from "./form-newsletter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { inputVariants } from "./ui/input";
import Image from "next/image";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
};

export const Newsletter = ({ showTitle = true }: { showTitle?: boolean }) => {
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
    <div className="flex relative flex-col gap-4 justify-center items-center w-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
      {showTitle && (
        <motion.div
          layout="position"
          transition={{ duration: DURATION, ease: EASE_OUT }}
        >
          <Image
            src="/alina-licht-text-white.png"
            alt="Alina Licht"
            width={1600}
            height={400}
            priority
            className="w-[min(90vw,1000px)] h-auto"
          />
        </motion.div>
      )}

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
            <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8">
              <FormNewsletter
                input={(props) => (
                  /* @ts-expect-error - Type mismatch */
                  <motion.input
                    autoCapitalize="off"
                    autoComplete="email"
                    placeholder="Enter your email"
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
              <motion.p
                initial={isInitialRender.current ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                }}
                transition={{
                  duration: DURATION,
                  ease: EASE_OUT,
                  delay: DELAY,
                }}
                className="text-base short:lg:text-lg sm:text-lg lg:text-xl !leading-[1.1] font-medium text-center text-foreground text-pretty"
              >
                Stay updated with the latest news and exclusive content!
                Subscribe to our newsletter today and never miss out on exciting
                updates.
              </motion.p>
            </div>
          </motion.div>
        )}

        <motion.div
          layout="position"
          transition={SPRING}
          key="button"
          className={isOpen ? "my-6" : "mt-6"}
        >
          <Button
            className={cn(
              "relative px-8 border-2 ring-0 ring-offset-0 hover:ring-0 hover:ring-offset-0 hover:border-2 border-white/50 hover:border-white/50"
            )}
            style={{ borderWidth: 2 }}
            onClick={() => setIsOpen(!isOpen)}
            shine={!isOpen}
          >
            <motion.span
              animate={{ x: isOpen ? -16 : 0 }}
              transition={{ duration: DURATION, ease: EASE_OUT }}
              className="inline-block"
            >
              Manifesto
            </motion.span>

            {isOpen && (
              <motion.div
                className={cn(
                  buttonVariants({ variant: "iconButton", size: "icon" }),
                  "absolute -top-px -right-px aspect-square"
                )}
                initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: DURATION,
                  ease: EASE_OUT,
                  delay: DELAY,
                }}
              >
                <Cross1Icon className="size-5 text-primary-foreground" />
              </motion.div>
            )}
          </Button>
        </motion.div>

        {isOpen && (
          <motion.div
            key="manifesto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: DELAY,
                  duration: DURATION,
                  ease: EASE_OUT,
                },
              },
              hidden: {
                opacity: 0,
                scale: 0.9,
                transition: { duration: DURATION, ease: EASE_OUT },
              },
              exit: {
                opacity: 0,
                scale: 0.9,
                transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
              },
            }}
            className="relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[50vh] md:max-h-[60vh] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-white/50 bg-primary/20 w-full max-w-sm md:max-w-3xl text-foreground rounded-3xl shadow-button"
          >
            <article className="relative overflow-y-auto italic p-6 h-full [&_p]:my-4">
              <p>
                &quot;We stand at the forefront of a new era, where creativity
                meets technology to redefine what&apos;s possible. Our mission
                is to empower individuals and businesses alike with
                groundbreaking solutions that inspire change and drive progress.
              </p>

              <p>
                Our promise is to deliver cutting-edge technology that is
                accessible, reliable, and tailored to meet the needs of our
                users. We will challenge the status quo, embrace change, and
                lead the charge towards a brighter, more innovative future.
              </p>
            </article>
          </motion.div>
        )}
      </div>
    </div>
  );
};

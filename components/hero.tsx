import React from "react";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";

export function HeroSection() {
    const words = ["Mobile Apps", "Web Platforms", "Scalable Systems"];
  return (
    <>
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-20 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      I don&apos;t just code;  <br /> <Cover>I engineer.</Cover>
      </h1>
      <div className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-5">
        <FlipWords words={words} /> <br />
        <div className="flex flex-col gap-1">
          <div className="mt-10 lg:text-2xl md:text-xl text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400">Code is cheap; architecture is everything.</div>
          <div className="lg:text-2xl md:text-xl text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400"> I design systems that don&apos;t just work—they dominate.</div>
        </div>
      </div>
    </div>
    {/* <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        websites with Aceternity UI
      </div>
    </div> */}
    </>
  );
}

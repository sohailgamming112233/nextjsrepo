import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "../components/ui/moving-border";

const Heroseciton = () => {
  return (
    <div className="relative w-full min-h-[85vh] md:min-h-[40rem] max-w-7xl mx-auto flex items-center justify-center overflow-hidden bg-black px-4 pt-24 md:pt-32">
      <Spotlight
        className="absolute -top-40 left-1/2 -translate-x-1/2 md:left-60 md:translate-x-0 md:-top-20"
        fill="blue"
      />

      <div className="relative z-10 text-center max-w-xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Master the Art of Music
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link href="/courses">
            <Button>Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroseciton;

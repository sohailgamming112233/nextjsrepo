import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instructors = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="relative flex items-center justify-center h-[40rem] overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Meet Our Instructors
        </h2>

        <p className="mt-1 text-lg text-neutral-200">
          Discover our talented professionals who will guide your musical
          journey.
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;

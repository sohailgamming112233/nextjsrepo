"use client";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { cn } from "../Utils/cn";

const TestimonialCard = () => {
  const testimonials = [
    {
      quote:
        "The music school has transformed my understanding of rhythm and melody. The instructors are incredibly patient and knowledgeable.",
      name: "Aarav Sharma",
      title: "Student",
    },
    {
      quote:
        "I've learned so much in such a short time. The practical approach to learning has made all the difference.",
      name: "Priya Patel",
      title: "Student",
    },
    {
      quote:
        "The training is comprehensive and well-structured. I feel confident in my skills now.",
      name: "Rohan Gupta",
      title: "Student",
    },
    {
      quote:
        "The lessons are engaging and easy to follow. I enjoy every class and feel motivated to practice daily.",
      name: "Neha Verma",
      title: "Student",
    },
    {
      quote:
        "Highly recommended for beginners and advanced learners alike. The environment is very supportive.",
      name: "Kunal Mehta",
      title: "Student",
    },
  ];

  return (
    <>
      <div
        className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.5] relative flex flex-col items-cente
       justify-center overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />

        <h2 className=" text-white text-3xl  font-bold text-center mb-8 z-10">
          Hear our Harmony : Voices of sucess
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

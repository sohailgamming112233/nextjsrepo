"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
const musicSchoolContect = [
  {
    title: "Step-by-Step Music Learning",
    description:
      "Beginner se advanced level tak structured music learning. Rhythm, melody aur harmony ko practical examples ke sath samjhaaya jata hai, taake students easily concepts grasp karein aur confidently practice kar saken.",
  },
  {
    title: "Instrument & Vocal Training",
    description:
      "Guitar, piano, keyboard, drums aur vocals ki complete training ek hi platform par. Har instrument ke liye guided lessons, daily practice exercises aur proper techniques provide ki jati hain.",
  },
  {
    title: "Music Production Basics",
    description:
      "Music recording, mixing aur mastering ke fundamentals seekhein. Modern software tools ke sath hands-on training di jati hai, saath hi home studio setup ke practical tips bhi milte hain.",
  },
  {
    title: "Projects & Practical Practice",
    description:
      "Real-world music projects ke zariye learning ko strong banaya jata hai. Songs create karna, beats design karna aur practical assignments ke through skills ko next level par le jaya jata hai.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full overflow-hiden">
      <StickyScroll content={musicSchoolContect} />
    </div>
  );
};

export default WhyChooseUs;

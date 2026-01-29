import FeaturedCourses from "../components/FeaturedCourses";
import Heroseciton from "../components/HeroSeciton";
import Instructors from "../components/Instructors";
import TestimonialCard from "../components/TestimonialCard";
import UpcomingWebinars from "../components/UpcomingWebinars";

import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Heroseciton />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebinars />
      <Instructors/>
    </div>
  );
}

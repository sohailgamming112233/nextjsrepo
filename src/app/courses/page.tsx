"use client";

import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import coursesData from "../../data/music_courses.json";

const page = () => {
  return (
    <div className="px-6 py-10 bg-black min-h-screen pt-24">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        All Courses ({coursesData.courses.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {coursesData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var p-4">
            <CardBody className="relative rounded-2xl p-6 border border-white/10 bg-zinc-900 hover:border-white/20 transition duration-300 flex flex-col h-full">
              <CardItem
                translateZ="50"
                className="text-xl font-semibold text-white"
              >
                {course.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-gray-400 mt-2 leading-relaxed"
              >
                {course.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  className="h-56 w-full object-cover rounded-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-auto pt-6">
                <CardItem
                  translateZ={20}
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  Try now →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-gray-200 transition"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;

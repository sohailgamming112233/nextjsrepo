"use client";
import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-teal-500 tracking-wide uppercase">
            Featured Courses
          </h2>

          <p className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-100">
            Learn with the best
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course: Course) => (
              <BackgroundGradient
                key={course.id}
                className="rounded-2xl p-6 bg-black/80 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 inline-flex items-center justify-center rounded-lg border border-teal-500 px-4 py-2 text-sm font-semibold text-teal-400 hover:bg-teal-500 hover:text-black transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/courses">
            <button className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300">
              View all courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;

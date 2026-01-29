"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Secure Online Payments",
      description:
        "A featured webinar covering modern payment systems, subscriptions, and secure global transactions for online businesses.",
      featured: true,
    },
    {
      title: "Streaming Platforms & Delivery",
      description:
        "Learn how large-scale streaming platforms deliver high-quality video content efficiently to millions of users worldwide.",
      featured: true,
    },
    {
      title: "Search Engines & Artificial Intelligence",
      description:
        "An in-depth webinar explaining how search engines use AI, data, and algorithms to provide accurate and relevant results.",
      featured: true,
    },
    {
      title: "Social Media Platforms & Communities",
      description:
        "Understand how modern social platforms are designed to connect users and build scalable digital communities.",
      featured: true,
    },
    {
      title: "E-commerce Systems & Cloud Infrastructure",
      description:
        "This webinar explores the fundamentals of e-commerce platforms and the cloud infrastructure that powers them.",
      featured: true,
    },
    {
      title: "Software Development & Cloud Solutions",
      description:
        "A featured session focused on software ecosystems, cloud computing, and enterprise-level digital solutions.",
      featured: true,
    },
  ];

  const onlyFeatured = featuredWebinars.filter((webinar) => webinar.featured);

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Learning Journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8 mt-10">
          <HoverEffect
            items={onlyFeatured.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "#",
            }))}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/courses">
            <Button>View All Webinars</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;

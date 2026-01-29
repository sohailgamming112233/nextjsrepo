"use client";
import React from "react";
import { Meteors } from "@/src/components/ui/meteors";

const ContactCard = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Meteors full-screen background */}
      <Meteors number={900} className="fixed inset-0 z-0" />

      {/* Centered Contact Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-lg mt-24 md:mt-32">
          {/* Optional glowing background behind card */}
          <div className="absolute inset-0 rounded-3xl bg-teal-500 blur-3xl opacity-25" />

          <div className="relative rounded-3xl border border-white/10 bg-zinc-900 px-6 py-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Agar koi sawal ho ya guidance chahiye ho, feel free to contact us.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-black px-4 py-2.5 text-white border border-white/10 focus:outline-none focus:border-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-black px-4 py-2.5 text-white border border-white/10 focus:outline-none focus:border-teal-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-xl bg-black px-4 py-2.5 text-white border border-white/10 focus:outline-none focus:border-teal-500 resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-white text-black py-2.5 font-semibold hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

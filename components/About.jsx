// components/About.js
"use client";
import Image from "next/image";
import chefImg from "../public/assets/chef.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 px-6 md:px-12 py-8 pt-16 md:pt-0 md:py-0"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Image Section (comes first on desktop) */}
        <div className="md:col-span-5 flex justify-center md:justify-start order-2 md:order-1 mt-8 md:mt-0">
          <div className="relative w-48 sm:w-64 md:w-80 aspect-[4/5]">
            <Image
              src={chefImg}
              alt="FlavorTown Chef"
              fill
              className="object-contain drop-shadow-xl scale-150 md:scale-125"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-7 text-center md:text-left order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            At FlavorTown Grill, our journey began with a simple dream: to serve
            the most delicious, high-quality fast food that brings joy to every
            table. Every bite is a celebration of flavor, passion, and
            creativity.
          </p>
        </div>
      </div>
    </section>
  );
}

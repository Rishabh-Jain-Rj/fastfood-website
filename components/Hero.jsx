"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SITE_DATA } from "@/constants/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center bg-gradient-to-br from-amber-300 via-orange-200 to-orange-500 dark:from-red-900 dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 w-full py-8 md:py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Left Text Content */}
          <div className="space-y-6 text-black dark:text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {SITE_DATA.brand.tagline.split(" ").map((word, idx) => (
                <span key={idx}>
                  {word === "Adventure!" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
              {SITE_DATA.brand.description}. Every bite tells a story.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <Link href="#menu">
                <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2">
                  Order Now <FaArrowRight />
                </button>
              </Link>
              <Link href="#menu">
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition">
                  Explore Menu 📋
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-80 md:w-[420px] h-64 sm:h-80 md:h-[420px]">
              <Image
                src="/assets/hero.png"
                alt="Hero Chef"
                fill
                className="object-contain drop-shadow-xl scale-125 md:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

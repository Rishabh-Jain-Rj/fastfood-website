"use client";
import { FaStar } from "react-icons/fa";
import { SITE_DATA } from "@/constants/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-12 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Customer <span className="text-primary">Testimonials</span> 💬
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Hear from our food lovers enjoying the FlavorTown adventure!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SITE_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-3xl shadow-md transition-transform duration-300 hover:-translate-y-1 bg-orange-400/90 dark:bg-gray-800 text-white dark:text-gray-200`}
            >
              {/* Speech Bubble Tail */}
              <div
                className={`absolute bottom-[-16px] left-12 w-0 h-0 border-t-[16px] border-l-[16px] border-r-[16px] border-l-transparent border-r-transparent ${"border-t-orange-400 dark:border-t-gray-800"}`}
              ></div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-3 text-yellow-300">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed italic mb-6">{t.text}</p>

              {/* Icon Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                  {t.avatarIcon}
                </div>
                <div>
                  <h4 className="font-bold text-base">{t.name}</h4>
                  <p className="text-xs opacity-80">
                    {t.role || "Happy Customer"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

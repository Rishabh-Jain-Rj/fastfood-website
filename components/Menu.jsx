"use client";
import Image from "next/image";
import { MENU_DATA } from "@/constants/data";

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative bg-gradient-to-br from-orange-50 via-white to-amber-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-6 md:px-14 transition-colors duration-300"
    >
      {/* Background Accent (Subtle Glow) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_40%_20%,rgba(255,200,150,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(255,100,100,0.15),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our <span className="text-primary">Menu</span> 🍔
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Taste the best of FlavorTown — juicy burgers, crispy fries, and
          refreshing drinks that make every bite an adventure! 🍔🍟🥤
        </p>

        {/* Menu Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_DATA.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
            >
              {/* Icon or Emoji */}
              <div className="flex justify-center mb-4">
                {category.icon ? (
                  <Image
                    src={category.icon}
                    alt={category.category}
                    width={150}
                    height={150}
                    className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </span>
                )}
              </div>

              {/* Category Title */}
              <h5 className="font-bold text-xl mb-4 text-gray-900 dark:text-white tracking-wide">
                {category.category}
              </h5>

              {/* Menu Items */}
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-1"
                  >
                    <span>{item.name}</span>
                    <span className="font-semibold text-primary dark:text-amber-400">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Subtle glow behind each card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-200/10 via-transparent to-transparent dark:from-red-400/10 dark:via-transparent dark:to-transparent rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

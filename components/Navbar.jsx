// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { SITE_DATA } from "@/constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className=" bg-white dark:bg-black text-black dark:text-white sticky top-0 z-50 shadow-sm dark:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            🍔 {SITE_DATA.brand.name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {SITE_DATA.nav.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition"
              >
                {link}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg  bg-gray-200 dark:bg-gray-800"
            >
              {isDark ? (
                <FiSun size={20} className="text-yellow-400" />
              ) : (
                <FiMoon size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            {SITE_DATA.nav.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 px-4 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-[490px] py-14 md:py-0 md:pt-8 flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden px-6 md:px-12"
    >
      {/* Background Decorations */}
      <div className="absolute top-[-50px] right-[150px] w-[180px] h-[180px] bg-orange-300/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-[-40px] left-[80px] w-[160px] h-[160px] bg-amber-400/20 blur-3xl rounded-full -z-10"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl w-full grid grid-cols-12 items-end  md:gap-16">
        {/* --- Left: Chef image anchored to bottom --- */}
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end relative">
          <div className="relative w-full h-full flex items-end justify-center md:justify-end">
            <Image
              src="/assets/contact.png"
              alt="Chef Contact Illustration"
              width={380}
              height={380}
              className="object-contain drop-shadow-2xl  md:scale-125"
              priority
            />
          </div>
        </div>

        {/* --- Right: Form centered vertically --- */}
        <div className="col-span-12 md:col-span-8 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-orange-200 dark:border-gray-700 w-full max-w-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Get in Touch ✉️
            </h3>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary outline-none transition text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary outline-none transition text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="md:col-span-2 w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary outline-none resize-none transition text-sm"
                required
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-transform hover:scale-[1.03] text-sm shadow-md"
              >
                Send Message 🧡
              </button>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-200/10 via-transparent to-transparent dark:from-red-400/10 opacity-0 hover:opacity-100 transition-all duration-300"></div>
          </form>
        </div>
      </div>
    </section>
  );
}

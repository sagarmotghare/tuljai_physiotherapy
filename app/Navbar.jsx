"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { title: "Services", href: "#services" },
  { title: "Treatement Conditions", href: "#conditions" },
  { title: "Statistics", href: "#stats" },
  { title: "Team", href: "#team" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "About", href: "#about" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg px-6 md:px-16 py-4 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <a className="flex items-center gap-2 cursor-pointer" href="/">
          <img
            src="/logo-min.webp"
            alt="Clinic Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Tuljai Physiotherapy Clinic
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
          {links.map((l, index) => <a
            key={index}
            href={l.href}
            className="hover:text-gray-900 dark:hover:text-white">
            {l.title}
          </a>)}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600 dark:text-gray-300 text-sm">
          {links.map((l, index) => <a
            key={index}
            href={l.href}
            className="hover:text-gray-900 dark:hover:text-white"
            onClick={() => setIsOpen(false)}>
            {l.title}
          </a>)}
        </div>
      )}
    </nav>
  );
}
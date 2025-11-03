"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg px-6 md:px-16 py-4 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo-min.webp"
            alt="Clinic Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Tuljai Physiotherapy Clinic
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
          <a href="#team" className="hover:text-gray-900 dark:hover:text-white">Team</a>
          <a href="#stats" className="hover:text-gray-900 dark:hover:text-white">Statistics</a>
          <a href="#testimonials" className="hover:text-gray-900 dark:hover:text-white">Testimonials</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a>
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
          <a href="#doctors" className="hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(false)}>Doctors</a>
          <a href="#testimonials" className="hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
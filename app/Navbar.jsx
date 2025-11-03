"use client"
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 md:px-16 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-min.webp" alt="Clinic Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-semibold text-gray-800">
            Tuljai Physiotherapy Clinic
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-gray-600 text-sm">
          <a href="#team" className="hover:text-gray-900">Team</a>
          <a href="#stats" className="hover:text-gray-900">Statistics</a>
          <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600 text-sm">
          <a href="#doctors" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Doctors</a>
          <a href="#testimonials" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
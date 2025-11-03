export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 md:px-16 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo-min.webp" alt="Clinic Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-semibold text-gray-800">
          Tuljai Physiotherapy Clinic
        </span>
      </div>

      {/* Optional Nav Links */}
      <div className="hidden md:flex gap-6 text-gray-600 text-sm">
        <a href="#doctors" className="hover:text-gray-900">Doctors</a>
        <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
        <a href="#contact" className="hover:text-gray-900">Contact</a>
      </div>
    </nav>
  );
}
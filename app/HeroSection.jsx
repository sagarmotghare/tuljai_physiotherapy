import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/clinic_outside.jpg"
        alt="Clinic Inauguration"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 transition-colors duration-300 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white dark:text-gray-100 p-8 max-w-3xl">
        <h1 className="text-5xl mb-4 max-[600px]:text-[2rem] leading-tight">
          Welcome to Tuljai Physiotherapy Clinic
        </h1>
        <a
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          href="tel:+919552878890"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
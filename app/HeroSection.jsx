export default function HeroSection() {
  return (
    <div
      className="h-screen flex items-center justify-center relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/inauguration-min.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50 dark:bg-black/60 transition-colors duration-300"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white dark:text-gray-100 p-8 max-w-3xl">
        <h1 className="text-5xl mb-4 max-[600px]:text-[2rem] leading-tight">
          Welcome to Tuljai Physiotherapy Clinic
        </h1>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
          Book Appointment
        </button> */}
      </div>
    </div>
  );
}
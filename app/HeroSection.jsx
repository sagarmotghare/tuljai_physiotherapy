export default function HeroSection() {
  return (
    <div
      className="h-screen flex items-center justify-center relative bg-clinic bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/inauguration-min.webp')" }}
    >
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>
      <div className="relative z-1 text-center text-white p-8 max-w-3xl">
        <h1 className="text-5xl mb-4 max-[600px]:text-[2rem] leading-tight">
          Welcome to Tuljai Physiotherapy Clinic
        </h1>
      </div>
    </div>
  );
}
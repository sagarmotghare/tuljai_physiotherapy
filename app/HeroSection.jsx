import Image from "next/image";

export default function HeroSection({ backgroundImageSrc, backgroundImageAlt, headline, ctaText, ctaHref }) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        fill
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 transition-colors duration-300 z-10"></div>

      <div className="relative z-20 text-center text-white dark:text-gray-100 p-8 max-w-3xl">
        <h1 className="text-5xl mb-4 max-[600px]:text-[2rem] leading-tight">
          {headline}
        </h1>
        <a
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          href={ctaHref}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
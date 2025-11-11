"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import testimonialsJson from "./review.json";
import Image from "next/image";
import StarRating from "./StarRating";
import ShowMore from "./ShowMore";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const testimonials = Object.values(testimonialsJson);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="bg-white dark:bg-gray-900 h-screen flex flex-col justify-center items-center px-6 md:px-16 scroll-mt-20 transition-colors duration-300"
      {...swipeHandlers}
    >
      <h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-12">
        What Our Patients Say
      </h3>
      <div className="max-w-3xl bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out min-h-[400px] flex flex-col justify-between">
        <div className="flex justify-center mb-4">
          <Image
            src={testimonial.avatar}
            width={100}
            height={100}
            className="rounded-full"
            alt={`${testimonial.name}-avatar`}
          />
        </div>        
        <StarRating rating={parseInt(testimonial.stars)} />
        <ShowMore lines={4} className={`text-lg italic text-gray-700 dark:text-gray-300 mb-4`}>
          “{testimonial.review}”
        </ShowMore>
        <p className="text-right font-semibold text-gray-800 dark:text-white">
          — {testimonial.name}
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === index
              ? "bg-gray-800 dark:bg-white"
              : "bg-gray-400 dark:bg-gray-600"
              }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
"use client"
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import testimonialsJson from "./review.json"
import Image from "next/image";

const testimonials = Object.values(testimonialsJson)

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

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
  }, []);

  const testimonial = Object.values(testimonials)[index];

  return (
    <section
    id="testimonials"
      className="bg-white h-screen flex flex-col justify-center items-center px-6 md:px-16 scroll-mt-20"
      {...swipeHandlers}
    >
      <h3 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        What Our Patients Say
      </h3>
      <div className="max-w-3xl bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
        <Image src={testimonial.avatar} width={100} height={100} className="rounded-full justify-self-center" alt={`${testimonial.name}-avatar`}/>
        <p className="text-lg italic text-gray-700 mb-4 whitespace-pre-line">“{testimonial.review}”</p>
        <p className="text-right font-semibold text-gray-800">
          — {testimonial.name}
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
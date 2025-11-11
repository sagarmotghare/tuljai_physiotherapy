"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import testimonialsJson from "./review.json";
import Image from "next/image";
import StarRating from "./StarRating";
import ShowMore from "./ShowMore";
import Section from "./Section";

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
    <Section
      id="testimonials"
      className="justify-items-center"
      {...swipeHandlers}      
    >
      <Section.Header>What Our Patients Say</Section.Header>
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
        <p className="font-semibold text-gray-800 dark:text-white text-center">
          {testimonial.name}
        </p>
        <StarRating rating={parseInt(testimonial.stars)} />
        <ShowMore lines={4} className={`text-lg italic text-gray-700 dark:text-gray-300 mb-4`}>
          “{testimonial.review}”
        </ShowMore>
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
    </Section>
  );
}
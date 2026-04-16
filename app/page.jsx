import ClinicIntroSection from "./ClinicIntroSection";
import DoctorSection from "./DoctorSection";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import ServicesSection from "@/app/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        backgroundImageSrc="/clinic_outside.jpg"
        backgroundImageAlt="Clinic Inauguration"
        headline="Welcome to Tuljai Physiotherapy Clinic"
        ctaText="Book Appointment"
        ctaHref="tel:+919552878890"
      />
      <ClinicIntroSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialSection />
    </div>
  );
}
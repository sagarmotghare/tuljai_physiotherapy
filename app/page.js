import ClinicInfoSection from "./ClinicInfoSection";
import DoctorSection from "./DoctorSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import TestimonialSlider from "./TestimonialSlider";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorSection />
      <TestimonialSlider />
      <ClinicInfoSection />
      <FooterSection />
    </div>
  );
}
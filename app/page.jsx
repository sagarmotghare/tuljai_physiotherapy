import ClinicIntroSection from "./ClinicIntroSection";
import DoctorSection from "./DoctorSection";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import TestSection from "./TestSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ClinicIntroSection />
			<TestSection/>
			<DoctorSection />
			<TestimonialSection />
		</div>
	);
}
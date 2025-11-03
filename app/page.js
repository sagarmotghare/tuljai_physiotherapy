import ClinicInfoSection from "./ClinicInfoSection";
import ClinicIntroSection from "./ClinicIntroSection";
import DoctorSection from "./DoctorSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import StatisticsSection from "./StatisticsSection";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<ClinicIntroSection />
			<DoctorSection />
			<StatisticsSection />
			<TestimonialSection />
			<ClinicInfoSection />
			<FooterSection />
		</div>
	);
}
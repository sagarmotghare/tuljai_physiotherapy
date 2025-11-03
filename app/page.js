import ClinicInfoSection from "./ClinicInfoSection";
import ClinicIntroSection from "./ClinicIntroSection";
import ConditionsSection from "./ConditionsSection";
import DoctorSection from "./DoctorSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ServiceSection from "./ServiceSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<ClinicIntroSection />
			<ServiceSection />
			<ConditionsSection />
			<StatisticsSection />
			<DoctorSection />
			<TestimonialSection />
			<ClinicInfoSection />
			<FooterSection />
		</div>
	);
}
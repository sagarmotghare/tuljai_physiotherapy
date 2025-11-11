import Section from "./Section";

const services = [
  "Short Wave Diathermy (SWD)",
  "Interferential Therapy (IFT)",
  "Intermittent Lumbar & Cervical Traction",
  "Transcutaneous Electrical Nerve Stimulation (TENS)",
  "Electrical Stimulation",
  "Wax Bath",
  "Continuous Passive Motion (CPM)",
  "Ultrasound Therapy",
  "Shoulder Pulley / Wheel / Ladder",
  "Wrist & Elbow Exercises",
  "Ankle Exercises",
  "Balance Board Training",
  "Hand Grippers",
  "Swiss Ball Exercises",
  "Theraband Resistance Training",
  "Elbow Mobilization",
  "Exercise Cycle"
];

export default function ServiceSection() {
  return (
    <Section id="services"    >
      <h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-12">
        Our Physiotherapy Services
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-disc list-inside text-gray-800 dark:text-gray-100">
        {services.map((service, index) => (
          <li key={index} className="transition-colors duration-300">
            {service}
          </li>
        ))}
      </ul>
    </Section>
  );
}
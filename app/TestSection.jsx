import InfoCard from "./InfoCard";
import { FaRunning, FaBrain, FaHeartbeat, FaChild } from "react-icons/fa";
import Section from "./Section";

const therapies = [
    {
        icon: FaRunning,
        title: "Orthopedic Therapy",
        description:"Rehabilitation for joint, muscle, and bone injuries.",
        // items: [
        //     "Rheumatism and Osteoarthritis",
        //     "Spondylosis, Sciatica",
        //     "Pain in All Joints",
        //     "Lower Back Pain, Arm Pain, Neck Pain",
        //     "Knee Pain",
        //     "Slipped Disc",
        //     "Frozen Shoulder (Stiff Shoulder)",
        //     "Wrist or Elbow Pain",
        //     "Ligament Injury",
        //     "Heel Pain"
        // ],
    },
    {
        icon: FaBrain,
        title: "Neurological Therapy",
        description: "Treatment for stroke, Parkinson’s, and nerve conditions.",
    //     items:[
    //   "Paralysis, Facial Paralysis",
    //   "Pediatric Paralysis (Cerebral Palsy)",
    //   "Parkinson’s Disease",
    //   "Exercises for Children with Intellectual Disabilities"
    // ]
    },
    {
        icon: FaHeartbeat,
        title: "Cardiopulmonary Therapy",
        description: "Improving heart and lung function through guided exercise.",
    },
    {
        icon: FaChild,
        title: "Pediatric Therapy",
        description: "Support for developmental delays and motor skills in children.",
    },
];

export default function TestSection() {
    return <Section id="services" >
        <Section.Header className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Our Therapy Services
        </Section.Header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {therapies.map((therapy, i) => (
                <InfoCard key={i} {...therapy} />
            ))}
        </div>
    </Section>
}
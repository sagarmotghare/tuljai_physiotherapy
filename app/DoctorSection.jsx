import Image from "next/image";
import Section from "./Section";

export default function DoctorSection() {
    const doctors = [
        {
            name: "Dr. Bharat Mahipal Motghare",
            image: "/bharat.png",
            qualification: "B.P.Th.",
            description:
                "Worked with Ramakrishna Math Physiotherapy Unit Nagpur, Kingsway Hospital Nagpur",
        },
        {
            name: "Dr. Karina Puri",
            image: "/karina.png",
            qualification: "B.P.Th.",
            description: "Worked with Matru Seva Sangh Nagpur",
        },
    ];

    return (
        <Section id="team" >
            <Section.Header>Our Team</Section.Header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            width={100}
                            height={100}
                            className="w-48 h-48 rounded-full object-cover shadow-md mb-4 border-white dark:border-black border"
                        />
                        <h4 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                            {doctor.name}
                        </h4>
                        <p className="mb-2 text-gray-800 dark:text-gray-300">
                            {doctor.qualification}
                        </p>
                        <p className="mb-4 text-gray-700 dark:text-gray-400 whitespace-pre-line">
                            {doctor.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
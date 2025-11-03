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
        <section
            className="bg-white dark:bg-gray-900 py-12 px-6 md:px-16 scroll-mt-20 transition-colors duration-300"
            id="team"
        >
            <h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-12">
                Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
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
        </section>
    );
}
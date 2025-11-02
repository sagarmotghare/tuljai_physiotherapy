const doctors = [
  {
    name: "Dr. Bharat Motghare",
    image: "https://i.pravatar.cc/150?img=1",
    qualification: "B.P.Th.",
    description:
      "1 year experience in Ramakrishna Math Physiotherapy Unit, Nagpur \n3 months experience in Kingsway, Nagpur",
  },
  {
    name: "Dr. Karina Puri",
    image: "https://i.pravatar.cc/150?img=2",
    qualification: "B.P.Th.",
    description:
      "",
  },
];

export default function DoctorSection() {
    return <section className="bg-white py-12 px-6 md:px-16">
        <h3 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            Our Doctors
        </h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12`}>
            {doctors.map((doctor, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-48 h-48 rounded-full object-cover shadow-md mb-4"
                    />
                    <h4 className="text-2xl font-bold mb-2 text-gray-800">{doctor.name}</h4>
                    <p className="mb-2 text-gray-800">{doctor.qualification}</p>
                    <p className="mb-4 text-gray-700 whitespace-pre-line">{doctor.description}</p>
                </div>
            ))}
        </div>
    </section>
}
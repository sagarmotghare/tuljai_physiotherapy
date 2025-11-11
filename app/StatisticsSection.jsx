import Section, { SectionHeader } from "./Section";

export default function StatisticsSection() {
  return (
    <Section
      className="bg-gray-100 dark:bg-gray-900 py-12 text-center scroll-mt-20 transition-colors duration-300"
      id="stats"
    >
      <SectionHeader> Clinic Statistics </SectionHeader>
      <div className="flex justify-center gap-12 flex-wrap">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">350+</h3>
          <p className="text-gray-700 dark:text-gray-300">Patients Treated</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400">2</h3>
          <p className="text-gray-700 dark:text-gray-300">Qualified Doctors</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">10</h3>
          <p className="text-gray-700 dark:text-gray-300">Months of Service</p>
        </div>
      </div>
    </Section>
  );
}
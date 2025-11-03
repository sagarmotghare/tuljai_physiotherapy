// components/StatisticsSection.tsx
export default function StatisticsSection() {
  return (
    <section className="bg-gray-100 py-12 text-center scroll-mt-20" id="stats">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Clinic Statistics</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        <div className="bg-white shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-blue-600">350+</h3>
          <p className="text-gray-700">Patients Treated</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-green-600">2</h3>
          <p className="text-gray-700">Qualified Doctors</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold text-purple-600">10</h3>
          <p className="text-gray-700">Months of Service</p>
        </div>
      </div>
    </section>
  );
}
import Section from "./Section";

const conditionGroups = [
  {
    title: "🧠 Neurological Conditions",
    items: [
      "Paralysis, Facial Paralysis",
      "Pediatric Paralysis (Cerebral Palsy)",
      "Parkinson’s Disease",
      "Exercises for Children with Intellectual Disabilities"
    ]
  },
  {
    title: "🦴 Orthopedic & Musculoskeletal",
    items: [
      "Rheumatism and Osteoarthritis",
      "Spondylosis, Sciatica",
      "Pain in All Joints",
      "Lower Back Pain, Arm Pain, Neck Pain",
      "Knee Pain",
      "Slipped Disc",
      "Frozen Shoulder (Stiff Shoulder)",
      "Wrist or Elbow Pain",
      "Ligament Injury",
      "Heel Pain"
    ]
  },
  {
    title: "❤️ Metabolic & Lifestyle",
    items: [
      "Exercises for Heart and Diabetes Patients",
      "Weight Loss and Obesity Management"
    ]
  },
  {
    title: "🛠️ Post-Surgical & Rehab",
    items: [
      "Post-surgical Rehabilitation Exercises",
      "Numbness in Hands and Feet"
    ]
  }
];

export default function ConditionsSection() {
  return (
    <Section id="conditions">      
      <Section.Header>
        Conditions We Treat
      </Section.Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {conditionGroups.map((group, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {group.title}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
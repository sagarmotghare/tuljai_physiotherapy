// components/InfoCard.jsx
// import { IconType } from "react-icons";

export default function InfoCard({ icon: Icon, title, description,items }) {
  return (
    <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">
        <Icon className="text-gray-800 dark:text-white"/>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h4>
      <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
      {items?.length > 0 && <ul className="text-left text-sm text-gray-600 dark:text-gray-300 list-disc">
        {items.map(i => <li>{i}</li>)}
        </ul>}
    </div>
  );
}
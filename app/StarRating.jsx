export default function StarRating({ rating }) {
    return (
        <div className="flex gap-[5px] place-content-center">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`text-[30px] ${index < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};
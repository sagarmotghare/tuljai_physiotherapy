import { useEffect, useRef, useState } from "react";

export default function ShowMore({ children, lines = 4,className = "" }) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      const isClamped = el.scrollHeight > el.clientHeight + 1;
      setIsOverflowing(isClamped);
    }
  }, [children]);

  return (
    <div className={className}>
      <p
        ref={contentRef}
        className={`transition-all duration-300 whitespace-pre-line text-justify ${
          expanded ? "" : `line-clamp-${lines}`
        }`}
      >
        {children}
      </p>
      {isOverflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:underline text-sm mt-1"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
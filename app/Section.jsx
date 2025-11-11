import clsx from "clsx";

export function SectionHeader({children, ...rest}) {
    return <h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-12" {...rest}>
        {children}
      </h3>
}
export default function Section({ id, children, className,...rest }) {
    const sectionClass = clsx(
        "bg-white dark:bg-gray-900 py-16 px-6 md:px-16 scroll-mt-20 transition-colors duration-300",        
        className
    );
    return <section
        id={id}
        className={sectionClass}
        {...rest}
    >
        {children}
    </section>
}
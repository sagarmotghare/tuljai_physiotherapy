import clsx from "clsx";

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
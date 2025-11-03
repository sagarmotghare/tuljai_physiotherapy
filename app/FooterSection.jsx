export default function FooterSection() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 text-center py-6 text-sm transition-colors duration-300">
            © {new Date().getFullYear()} Tuljai Physiotherapy Clinic. All rights reserved.
        </footer>
    );
}
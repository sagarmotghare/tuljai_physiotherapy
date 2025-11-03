import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function ClinicInfoSection() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-16 scroll-mt-20 transition-colors duration-300"
      id="about"
    >
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        About Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            <strong className="dark:text-white">Address:</strong><br />
            Tuljai Physiotherapy Clinic,<br />
            Opposite Cotton Ginning, Near Sriram Bakery, <br />
            Main Road, Saoner,<br />
            Dist. Nagpur, Maharashtra 441107
          </p>
          <p>
            <strong className="dark:text-white">Opening Hours:</strong><br />
            Monday – Saturday: 9:00 AM – 9:00 PM<br />
            Sunday: Closed
          </p>
          <p>
            <strong className="dark:text-white">Contact:</strong><br />
            <a className="flex gap-2 items-center w-fit hover:text-blue-600 dark:hover:text-blue-400" href="tel:+919552878890">
              <FaPhoneAlt /> +91 95528 78890
            </a>
            <a className="flex gap-2 items-center w-fit hover:text-blue-600 dark:hover:text-blue-400" href="mailto:tuljaiphysiotherapy@gmail.com">
              <FiMail /> tuljaiphysiotherapy@gmail.com
            </a>
          </p>
        </div>

        <div className="w-full h-64 md:h-80">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.4103320335727!2d78.92618324169413!3d21.383614838985537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4e5e8a1f65371%3A0xc5c3d5bd0641d1e3!2sTuljai%20Physiotherapy%20Clinic!5e1!3m2!1sen!2sin!4v1762087635718!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="pt-4">
        <p className="font-semibold text-gray-800 dark:text-white mb-2">Follow us on:</p>
        <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-lg">
          <a
            href="https://www.instagram.com/tuljaiphysiotherapyclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/919552878890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
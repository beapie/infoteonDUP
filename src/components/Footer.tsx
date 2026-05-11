import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t.footer_platform,
      links: [
        { label: t.footer_p1, href: '#' },
        { label: t.footer_p2, href: '#' },
        { label: t.footer_p3, href: '#' },
        { label: t.footer_p4, href: '#' },
        { label: t.footer_p5, href: '#' },
        { label: t.footer_p6, href: '#' },
      ],
    },
    {
      title: t.footer_solutions,
      links: [
        { label: t.footer_s1, href: '#' },
        { label: t.footer_s2, href: '#' },
        { label: t.footer_s3, href: '#' },
        { label: t.footer_s4, href: '#' },
        { label: t.footer_s5, href: '#' },
        { label: t.footer_s6, href: '#' },
      ],
    },
    {
      title: t.footer_support,
      links: [
        { label: 'helpdesk@infoteon.com', href: 'mailto:helpdesk@infoteon.com' },
      ],
    },
    {
      title: t.footer_legal,
      links: [
        { label: t.footer_legal1, href: '/privacy-policy.html' },
        { label: t.footer_legal2, href: '/terms-of-service.html' },
        { label: t.footer_legal3, href: '/sla.html' },
        { label: t.footer_legal4, href: '/fair-use-policy.html' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 inline-block">
              INFOTEON
            </span>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
              {t.footer_desc}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-blue-400 dark:text-blue-500" />
                <a href="mailto:helpdesk@infoteon.com" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  helpdesk@infoteon.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-blue-400 dark:text-blue-500" />
                <a href="tel:+14077819891" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  +1 (407) 781-9891
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-blue-400 dark:text-blue-500" />
                <span>8466 Lockwood Ridge Rd, Sarasota FL 34243</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white dark:text-gray-200 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white dark:hover:text-gray-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t.footer_copyright}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.footer_cta_heading}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t.footer_cta_sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
              {t.footer_watch_demo}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              {t.footer_schedule}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

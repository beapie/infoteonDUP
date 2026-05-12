import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t.hiw_label}</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {t.hiw_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{t.hiw_heading_2}</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10" />

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-black rounded-2xl border border-gray-700 dark:border-gray-800 overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative group">
              <img
                src="/aivoice.webp"
                alt="Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-900/50 dark:bg-black/50 border-t border-gray-700 dark:border-gray-800 p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{t.hiw_stat1}</div>
                  <p className="text-xs sm:text-sm text-gray-400">{t.hiw_stat1_label}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
                  <p className="text-xs sm:text-sm text-gray-400">{t.hiw_stat2_label}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">{t.hiw_stat3}</div>
                  <p className="text-xs sm:text-sm text-gray-400">{t.hiw_stat3_label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
            <Play size={18} className="fill-white" />
            {t.hiw_watch_demo}
          </button>
        </div>
      </div>
    </section>
  );
}

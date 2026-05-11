import { useLanguage } from '../context/LanguageContext';

export default function Statistics() {
  const { t } = useLanguage();

  const stats = [
    { number: '980+', label: t.stat1_label },
    { number: '1M+', label: t.stat2_label },
    { number: '98%', label: t.stat3_label },
    { number: '$900K+', label: t.stat4_label },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 dark:from-gray-800 dark:via-black dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 overflow-hidden">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-center inline-block">
                  {stat.number}
                </div>
              </div>

              <p className="text-gray-300 text-lg sm:text-xl font-semibold">
                {stat.label}
              </p>

              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.stats_cta}
            <span className="text-white font-semibold">{t.stats_cta_part2}</span>
            {t.stats_cta_part3}
          </p>
        </div>
      </div>
    </section>
  );
}

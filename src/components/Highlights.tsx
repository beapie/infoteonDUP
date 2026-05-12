import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Highlights() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const highlights = [
    {
      title: t.hl1_title,
      subtitle: t.hl1_sub,
      description: t.hl1_desc,
      features: [t.hl1_f1, t.hl1_f2, t.hl1_f3, t.hl1_f4],
      image: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.hl2_title,
      subtitle: t.hl2_sub,
      description: t.hl2_desc,
      features: [t.hl2_f1, t.hl2_f2, t.hl2_f3, t.hl2_f4],
      image: 'from-sky-500 to-blue-600',
    },
    {
      title: t.hl3_title,
      subtitle: t.hl3_sub,
      description: t.hl3_desc,
      features: [t.hl3_f1, t.hl3_f2, t.hl3_f3, t.hl3_f4],
      image: 'from-teal-500 to-green-500',
    },
    {
      title: t.hl4_title,
      subtitle: t.hl4_sub,
      description: t.hl4_desc,
      features: [t.hl4_f1, t.hl4_f2, t.hl4_f3, t.hl4_f4],
      image: 'from-orange-500 to-amber-500',
    },
    {
      title: t.hl5_title,
      subtitle: t.hl5_sub,
      description: t.hl5_desc,
      features: [t.hl5_f1, t.hl5_f2, t.hl5_f3, t.hl5_f4],
      image: 'from-rose-500 to-pink-500',
    },
    {
      title: t.hl6_title,
      subtitle: t.hl6_sub,
      description: t.hl6_desc,
      features: [t.hl6_f1, t.hl6_f2, t.hl6_f3, t.hl6_f4],
      image: 'from-emerald-500 to-teal-600',
    },
    {
      title: t.hl7_title,
      subtitle: t.hl7_sub,
      description: t.hl7_desc,
      features: [t.hl7_f1, t.hl7_f2, t.hl7_f3, t.hl7_f4],
      image: 'from-yellow-500 to-orange-500',
    },
    {
      title: t.hl8_title,
      subtitle: t.hl8_sub,
      description: t.hl8_desc,
      features: [t.hl8_f1, t.hl8_f2, t.hl8_f3, t.hl8_f4],
      image: 'from-cyan-500 to-sky-600',
    },
    {
      title: t.hl9_title,
      subtitle: t.hl9_sub,
      description: t.hl9_desc,
      features: [t.hl9_f1, t.hl9_f2, t.hl9_f3, t.hl9_f4],
      image: 'from-blue-600 to-blue-800',
    },
    {
      title: t.hl10_title,
      subtitle: t.hl10_sub,
      description: t.hl10_desc,
      features: [t.hl10_f1, t.hl10_f2, t.hl10_f3, t.hl10_f4],
      image: 'from-slate-500 to-gray-700',
    },
    {
      title: t.hl11_title,
      subtitle: t.hl11_sub,
      description: t.hl11_desc,
      features: [t.hl11_f1, t.hl11_f2, t.hl11_f3, t.hl11_f4],
      image: 'from-blue-500 to-cyan-500',
      featured: true,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.hl_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.hl_heading_2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.hl_subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                (highlight as typeof highlight & { featured?: boolean }).featured
                  ? 'border-2 border-blue-400 dark:border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between transition-colors ${
                  (highlight as typeof highlight & { featured?: boolean }).featured
                    ? 'hover:bg-blue-100/50 dark:hover:bg-blue-900/20'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 text-left flex-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${highlight.image} flex-shrink-0`} />
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h3>
                      {(highlight as typeof highlight & { featured?: boolean }).featured && (
                        <span className="text-xs font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-full">
                          Our Offer
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                      {highlight.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  } ${
                    (highlight as typeof highlight & { featured?: boolean }).featured
                      ? 'text-blue-500'
                      : 'text-gray-400'
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className={`px-6 sm:px-8 py-6 sm:py-8 border-t ${
                  (highlight as typeof highlight & { featured?: boolean }).featured
                    ? 'border-blue-200 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                }`}>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlight.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${highlight.image} flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t.hl_experience}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
            {t.hl_watch_demo}
          </button>
        </div>
      </div>
    </section>
  );
}

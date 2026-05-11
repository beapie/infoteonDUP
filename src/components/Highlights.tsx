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
      image: 'from-purple-500 to-pink-500',
    },
    {
      title: t.hl3_title,
      subtitle: t.hl3_sub,
      description: t.hl3_desc,
      features: [t.hl3_f1, t.hl3_f2, t.hl3_f3, t.hl3_f4],
      image: 'from-orange-500 to-red-500',
    },
    {
      title: t.hl4_title,
      subtitle: t.hl4_sub,
      description: t.hl4_desc,
      features: [t.hl4_f1, t.hl4_f2, t.hl4_f3, t.hl4_f4],
      image: 'from-green-500 to-teal-500',
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
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4 sm:gap-6 text-left flex-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${highlight.image} flex-shrink-0`} />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                      {highlight.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 sm:px-8 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
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

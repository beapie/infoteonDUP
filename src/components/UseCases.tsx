import { useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function UseCases() {
  const [selectedUseCase, setSelectedUseCase] = useState('real-estate');
  const [showWidget, setShowWidget] = useState(false);
  const { t } = useLanguage();

  const useCases = [
    { id: 'real-estate', label: t.uc_real_estate, color: 'border-blue-500 text-blue-400' },
    { id: 'hr', label: t.uc_hr, color: 'border-purple-500 text-purple-400' },
    { id: 'retail', label: t.uc_retail, color: 'border-pink-500 text-pink-400' },
    { id: 'legal', label: t.uc_legal, color: 'border-orange-500 text-orange-400' },
    { id: 'sales', label: t.uc_sales, color: 'border-cyan-500 text-cyan-400' },
    { id: 'services', label: t.uc_services, color: 'border-green-500 text-green-400' },
    { id: 'hospitality', label: t.uc_hospitality, color: 'border-yellow-500 text-yellow-400' },
    { id: 'education', label: t.uc_education, color: 'border-red-500 text-red-400' },
    { id: 'healthcare', label: t.uc_healthcare, color: 'border-indigo-500 text-indigo-400' },
  ];

  const images: Record<string, string> = {
    'real-estate': 'from-blue-500/20 to-cyan-500/20',
    'hr': 'from-purple-500/20 to-pink-500/20',
    'retail': 'from-pink-500/20 to-rose-500/20',
    'legal': 'from-orange-500/20 to-amber-500/20',
    'sales': 'from-cyan-500/20 to-blue-500/20',
    'services': 'from-green-500/20 to-emerald-500/20',
    'hospitality': 'from-yellow-500/20 to-orange-500/20',
    'education': 'from-red-500/20 to-pink-500/20',
    'healthcare': 'from-indigo-500/20 to-purple-500/20',
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t.uc_label}</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white mb-4">
            {t.uc_heading_1}
            <br />
            {t.uc_heading_2}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setSelectedUseCase(useCase.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 font-semibold text-sm sm:text-base transition-all duration-300 ${
                    selectedUseCase === useCase.id
                      ? `${useCase.color} bg-opacity-10 border-current`
                      : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                  }`}
                >
                  {useCase.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl" />

            <div className={`relative bg-gradient-to-br ${images[selectedUseCase]} rounded-3xl overflow-hidden border border-gray-700/50 aspect-square sm:aspect-auto sm:h-96 flex items-center justify-center group`}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40" />

              <div className="relative text-center space-y-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/30 mx-auto flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-3xl sm:text-5xl">👨‍💼</span>
                  </div>
                </div>

                <div>
                  <p className="text-white text-sm font-medium opacity-90">{t.uc_mockup}</p>
                  <p className="text-gray-300 text-xs opacity-75">{t.uc_dashboard}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowWidget(true)}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <Play size={16} className="fill-white" />
              {t.uc_hear}
            </button>

            {showWidget && (
              <div className="absolute inset-0 rounded-3xl bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold mb-4">{t.uc_widget_title}</p>
                  <p className="text-gray-300 text-sm mb-6">{t.uc_widget_sub}</p>
                  <button
                    onClick={() => setShowWidget(false)}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  >
                    {t.uc_close}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

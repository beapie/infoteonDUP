import { Upload, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturesAdvanced() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.fa1_title,
      description: t.fa1_desc,
      items: [t.fa1_i1, t.fa1_i2, t.fa1_i3],
      icon: Upload,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-600/10 to-cyan-500/10',
    },
    {
      title: t.fa2_title,
      description: t.fa2_desc,
      items: [t.fa2_i1, t.fa2_i2, t.fa2_i3],
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-600/10 to-pink-500/10',
    },
    {
      title: t.fa3_title,
      description: t.fa3_desc,
      items: [t.fa3_i1, t.fa3_i2, t.fa3_i3],
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-600/10 to-red-500/10',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t.fa_label}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.fa_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.fa_heading_2}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-black rounded-2xl border border-gray-700 dark:border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom right, rgb(59, 130, 246, 0.1), rgb(34, 197, 94, 0.1))`}} />

                <div className="relative p-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

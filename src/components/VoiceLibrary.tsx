import { Play, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VoiceLibrary() {
  const { t } = useLanguage();

  const agents = [
    {
      name: 'Marcus',
      language: 'English (US)',
      personality: t.vl_m_personality,
      industry: t.vl_m_industry,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Ellie',
      language: 'English (UK)',
      personality: t.vl_e_personality,
      industry: t.vl_e_industry,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Alex',
      language: 'English (US)',
      personality: t.vl_a_personality,
      industry: t.vl_a_industry,
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Rachel',
      language: 'Spanish',
      personality: t.vl_r_personality,
      industry: t.vl_r_industry,
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Zyan',
      language: 'English (AU)',
      personality: t.vl_z_personality,
      industry: t.vl_z_industry,
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      name: 'Clara',
      language: 'French',
      personality: t.vl_c_personality,
      industry: t.vl_c_industry,
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.vl_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.vl_heading_2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.vl_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agent.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <User className="w-8 h-8 text-white" />
                  </div>

                  <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all group-hover:scale-110">
                    <Play size={16} className="text-gray-700 dark:text-gray-200 ml-0.5" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{agent.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{t.vl_language}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{agent.language}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{t.vl_personality}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{agent.personality}</span>
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${agent.gradient} text-white text-xs font-semibold`}>
                  {agent.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
            {t.vl_explore}
          </button>
        </div>
      </div>
    </section>
  );
}

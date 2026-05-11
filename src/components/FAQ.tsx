import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    { question: t.faq1_q, answer: t.faq1_a },
    { question: t.faq2_q, answer: t.faq2_a },
    { question: t.faq3_q, answer: t.faq3_a },
    { question: t.faq4_q, answer: t.faq4_a },
    { question: t.faq5_q, answer: t.faq5_a },
    { question: t.faq6_q, answer: t.faq6_a },
    { question: t.faq7_q, answer: t.faq7_a },
    { question: t.faq8_q, answer: t.faq8_a },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.faq_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.faq_heading_2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.faq_subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>

                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-blue-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {t.faq_still}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t.faq_still_sub}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
            {t.faq_contact}
          </button>
        </div>
      </div>
    </section>
  );
}

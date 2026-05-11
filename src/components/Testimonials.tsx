import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: t.test1_role,
      company: 'TechStart Inc.',
      content: t.test1_content,
      rating: 5,
      image: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Michael Chen',
      role: t.test2_role,
      company: 'CloudScale',
      content: t.test2_content,
      rating: 5,
      image: 'from-purple-400 to-purple-600',
    },
    {
      name: 'Emily Rodriguez',
      role: t.test3_role,
      company: 'GrowthLabs',
      content: t.test3_content,
      rating: 5,
      image: 'from-pink-400 to-pink-600',
    },
    {
      name: 'David Park',
      role: t.test4_role,
      company: 'RetailPro',
      content: t.test4_content,
      rating: 5,
      image: 'from-orange-400 to-orange-600',
    },
    {
      name: 'Lisa Thompson',
      role: t.test5_role,
      company: 'FinanceFirst',
      content: t.test5_content,
      rating: 5,
      image: 'from-cyan-400 to-cyan-600',
    },
    {
      name: 'James Wilson',
      role: t.test6_role,
      company: 'Enterprise Solutions',
      content: t.test6_content,
      rating: 5,
      image: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.test_heading_1}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.test_heading_2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.test_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200 dark:text-blue-800" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.image} flex-shrink-0`} />

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

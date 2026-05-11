import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt' | 'es';

export interface Translations {
  // Header
  nav_login: string;
  nav_watch_demo: string;
  nav_check_demo: string;

  // Hero
  hero_badge: string;
  hero_heading_1: string;
  hero_heading_2: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_ai_active: string;
  hero_handling_calls: string;
  hero_agent_speech: string;
  hero_live: string;

  // Features
  features_heading_1: string;
  features_heading_2: string;
  features_subtitle: string;
  features_learn_more: string;
  feat1_title: string;
  feat1_desc: string;
  feat2_title: string;
  feat2_desc: string;
  feat3_title: string;
  feat3_desc: string;
  feat4_title: string;
  feat4_desc: string;

  // FeaturesAdvanced
  fa_label: string;
  fa_heading_1: string;
  fa_heading_2: string;
  fa1_title: string;
  fa1_desc: string;
  fa1_i1: string;
  fa1_i2: string;
  fa1_i3: string;
  fa2_title: string;
  fa2_desc: string;
  fa2_i1: string;
  fa2_i2: string;
  fa2_i3: string;
  fa3_title: string;
  fa3_desc: string;
  fa3_i1: string;
  fa3_i2: string;
  fa3_i3: string;

  // HowItWorks
  hiw_label: string;
  hiw_heading_1: string;
  hiw_heading_2: string;
  hiw_stat1: string;
  hiw_stat1_label: string;
  hiw_stat2_label: string;
  hiw_stat3: string;
  hiw_stat3_label: string;
  hiw_watch_demo: string;

  // Highlights
  hl_heading_1: string;
  hl_heading_2: string;
  hl_subtitle: string;
  hl_watch_demo: string;
  hl_experience: string;
  hl1_title: string;
  hl1_sub: string;
  hl1_desc: string;
  hl1_f1: string;
  hl1_f2: string;
  hl1_f3: string;
  hl1_f4: string;
  hl2_title: string;
  hl2_sub: string;
  hl2_desc: string;
  hl2_f1: string;
  hl2_f2: string;
  hl2_f3: string;
  hl2_f4: string;
  hl3_title: string;
  hl3_sub: string;
  hl3_desc: string;
  hl3_f1: string;
  hl3_f2: string;
  hl3_f3: string;
  hl3_f4: string;
  hl4_title: string;
  hl4_sub: string;
  hl4_desc: string;
  hl4_f1: string;
  hl4_f2: string;
  hl4_f3: string;
  hl4_f4: string;

  // Statistics
  stat1_label: string;
  stat2_label: string;
  stat3_label: string;
  stat4_label: string;
  stats_cta: string;
  stats_cta_part2: string;
  stats_cta_part3: string;

  // UseCases
  uc_label: string;
  uc_heading_1: string;
  uc_heading_2: string;
  uc_real_estate: string;
  uc_hr: string;
  uc_retail: string;
  uc_legal: string;
  uc_sales: string;
  uc_services: string;
  uc_hospitality: string;
  uc_education: string;
  uc_healthcare: string;
  uc_mockup: string;
  uc_dashboard: string;
  uc_hear: string;
  uc_widget_title: string;
  uc_widget_sub: string;
  uc_close: string;

  // VoiceLibrary
  vl_heading_1: string;
  vl_heading_2: string;
  vl_subtitle: string;
  vl_language: string;
  vl_personality: string;
  vl_explore: string;
  vl_m_personality: string;
  vl_m_industry: string;
  vl_e_personality: string;
  vl_e_industry: string;
  vl_a_personality: string;
  vl_a_industry: string;
  vl_r_personality: string;
  vl_r_industry: string;
  vl_z_personality: string;
  vl_z_industry: string;
  vl_c_personality: string;
  vl_c_industry: string;

  // Testimonials
  test_heading_1: string;
  test_heading_2: string;
  test_subtitle: string;
  test1_content: string;
  test1_role: string;
  test2_content: string;
  test2_role: string;
  test3_content: string;
  test3_role: string;
  test4_content: string;
  test4_role: string;
  test5_content: string;
  test5_role: string;
  test6_content: string;
  test6_role: string;

  // FAQ
  faq_heading_1: string;
  faq_heading_2: string;
  faq_subtitle: string;
  faq_still: string;
  faq_still_sub: string;
  faq_contact: string;
  faq1_q: string;
  faq1_a: string;
  faq2_q: string;
  faq2_a: string;
  faq3_q: string;
  faq3_a: string;
  faq4_q: string;
  faq4_a: string;
  faq5_q: string;
  faq5_a: string;
  faq6_q: string;
  faq6_a: string;
  faq7_q: string;
  faq7_a: string;
  faq8_q: string;
  faq8_a: string;

  // Compliance
  comp_badge: string;
  comp_heading_1: string;
  comp_heading_2: string;
  comp_subtitle: string;
  comp_f1_title: string;
  comp_f1_desc: string;
  comp_f2_title: string;
  comp_f2_desc: string;
  comp_f3_title: string;
  comp_f3_desc: string;
  comp_f4_title: string;
  comp_f4_desc: string;
  comp_certs_title: string;
  comp_certs_sub: string;
  comp_cert2: string;
  comp_cert4: string;

  // Footer
  footer_desc: string;
  footer_platform: string;
  footer_solutions: string;
  footer_support: string;
  footer_legal: string;
  footer_copyright: string;
  footer_cta_heading: string;
  footer_cta_sub: string;
  footer_watch_demo: string;
  footer_schedule: string;
  footer_p1: string;
  footer_p2: string;
  footer_p3: string;
  footer_p4: string;
  footer_p5: string;
  footer_p6: string;
  footer_s1: string;
  footer_s2: string;
  footer_s3: string;
  footer_s4: string;
  footer_s5: string;
  footer_s6: string;
  footer_legal1: string;
  footer_legal2: string;
  footer_legal3: string;
  footer_legal4: string;
}

const en: Translations = {
  nav_login: 'Login',
  nav_watch_demo: 'Watch Demo',
  nav_check_demo: 'Check Demo',

  hero_badge: 'Now with GPT-4 and Advanced Voice Models',
  hero_heading_1: 'Your AI Voice Agent for',
  hero_heading_2: '24/7 Sales, Support, and Outreach',
  hero_subtitle: 'Deploy intelligent AI voice agents that handle calls, qualify leads, schedule meetings, and integrate seamlessly with your CRM. Scale your communication without scaling your team.',
  hero_cta: 'Watch Demo',
  hero_ai_active: 'AI Agent Active',
  hero_handling_calls: 'Handling 247 calls/day',
  hero_agent_speech: '"Hi, this is Marcus from INFOTEON. I noticed you inquired about our enterprise plan. I\'d love to help schedule a demo. Are you available this Thursday at 2 PM?"',
  hero_live: 'Live transcription • Sentiment: Positive • Lead: Qualified',

  features_heading_1: 'Everything You Need to',
  features_heading_2: 'Scale Communication',
  features_subtitle: 'Deploy AI voice agents that work around the clock to handle calls, qualify leads, and drive revenue',
  features_learn_more: 'Learn more',
  feat1_title: 'Smart Outbound Campaigns',
  feat1_desc: 'Launch AI-powered calling campaigns that reach thousands of prospects. Automatically qualify leads, schedule meetings, and follow up based on conversation outcomes.',
  feat2_title: 'Answer & Qualify Calls 24/7',
  feat2_desc: 'Never miss a lead again. Your AI agent answers every call instantly, qualifies prospects, answers questions, and routes high-value leads to your team.',
  feat3_title: 'Full CRM + API Integration',
  feat3_desc: 'Seamlessly connect with Salesforce, HubSpot, Pipedrive, and 100+ platforms. Sync call data, update records, and trigger workflows automatically.',
  feat4_title: 'Complete Call Intelligence',
  feat4_desc: 'Access full call history with transcripts, recordings, sentiment analysis, and AI-generated summaries. Track performance metrics and optimize conversion rates.',

  fa_label: 'Features',
  fa_heading_1: "Here's What Powers Your",
  fa_heading_2: 'AI Sales Rep',
  fa1_title: 'Smart Outbound Campaigns',
  fa1_desc: 'Reach every lead, perfectly timed & personalized.',
  fa1_i1: 'Upload leads',
  fa1_i2: 'Auto timezones',
  fa1_i3: 'Schedule drops',
  fa2_title: 'Answer & Qualify Calls 24/7',
  fa2_desc: 'Turn inbound calls into opportunity, automatically',
  fa2_i1: 'Auto-reply',
  fa2_i2: 'Screen calls',
  fa2_i3: 'Capture data',
  fa3_title: 'Full CRM + API Integration',
  fa3_desc: 'Connect your systems, automate entire sales flow.',
  fa3_i1: 'Sync tools',
  fa3_i2: 'Trigger workflows',
  fa3_i3: 'Auto-update',

  hiw_label: 'How It Works',
  hiw_heading_1: 'What if your best sales rep was an',
  hiw_heading_2: 'AI that never sleeps?',
  hiw_stat1: '24/7',
  hiw_stat1_label: 'Always Available',
  hiw_stat2_label: 'Uptime',
  hiw_stat3: '10x',
  hiw_stat3_label: 'More Capacity',
  hiw_watch_demo: 'Watch Demo',

  hl_heading_1: 'Answer calls, qualify leads, and book',
  hl_heading_2: 'appointments 24/7',
  hl_subtitle: 'with AI voice agents',
  hl_watch_demo: 'Watch Demo',
  hl_experience: 'Experience the power of INFOTEON AI voice agents in action',
  hl1_title: 'Answer Calls 24/7',
  hl1_sub: 'Never miss a lead again',
  hl1_desc: 'Your AI voice agent answers every incoming call instantly, handling initial customer inquiries, scheduling appointments, and qualifying leads without any human intervention. Available around the clock, every single day.',
  hl1_f1: 'Instant call pickup',
  hl1_f2: 'Natural conversation flow',
  hl1_f3: 'Lead qualification',
  hl1_f4: 'Appointment scheduling',
  hl2_title: 'Qualify Leads Automatically',
  hl2_sub: 'Smart prospect evaluation',
  hl2_desc: 'Advanced AI algorithms evaluate prospects in real-time, assessing fit, budget, decision-making authority, and timeline. Your sales team receives pre-qualified leads ready to close, saving hours of manual qualification work.',
  hl2_f1: 'Real-time qualification',
  hl2_f2: 'Budget assessment',
  hl2_f3: 'Authority detection',
  hl2_f4: 'Timeline evaluation',
  hl3_title: 'Book Appointments Instantly',
  hl3_sub: 'Seamless calendar integration',
  hl3_desc: 'AI agents directly integrate with your calendar systems to check availability and book appointments in real-time. No back-and-forth emails or phone calls. Prospects get instant confirmation with meeting details.',
  hl3_f1: 'Calendar sync',
  hl3_f2: 'Instant booking',
  hl3_f3: 'Timezone handling',
  hl3_f4: 'Reminder notifications',
  hl4_title: 'Conversational Intelligence',
  hl4_sub: 'Every interaction matters',
  hl4_desc: 'Full call transcripts, sentiment analysis, and AI-generated summaries give you complete visibility into every customer interaction. Learn what resonates with prospects and continuously improve your messaging and strategy.',
  hl4_f1: 'Full transcripts',
  hl4_f2: 'Sentiment analysis',
  hl4_f3: 'Key insights',
  hl4_f4: 'Performance metrics',

  stat1_label: 'Active Users',
  stat2_label: 'Calls Handled',
  stat3_label: 'Satisfaction Rate',
  stat4_label: 'Deals Closed',
  stats_cta: 'Join hundreds of businesses using AI voice agents to scale communication,',
  stats_cta_part2: ' qualify more leads',
  stats_cta_part3: ', and\n            close more deals — all without hiring.',

  uc_label: 'Use-Cases',
  uc_heading_1: 'Built for Small Business',
  uc_heading_2: 'Owners, Agencies, and SaaS Founders',
  uc_real_estate: 'Real Estate',
  uc_hr: 'Human Resources',
  uc_retail: 'Retail',
  uc_legal: 'Legal',
  uc_sales: 'Sales Teams',
  uc_services: 'Services/Utilities',
  uc_hospitality: 'Hospitality',
  uc_education: 'Education',
  uc_healthcare: 'Healthcare',
  uc_mockup: 'Professional Mockup',
  uc_dashboard: 'Interactive Dashboard',
  uc_hear: 'Hear the Agent in Action',
  uc_widget_title: 'Audio Widget Placeholder',
  uc_widget_sub: 'Insert your audio widget code here',
  uc_close: 'Close',

  vl_heading_1: 'Meet Your',
  vl_heading_2: 'AI Voice Agents',
  vl_subtitle: 'Choose from our diverse library of AI voices, each trained for specific industries and conversation styles',
  vl_language: 'Language:',
  vl_personality: 'Personality:',
  vl_explore: 'Explore All Voices',
  vl_m_personality: 'Professional & Persuasive',
  vl_m_industry: 'Sales & Business Development',
  vl_e_personality: 'Friendly & Empathetic',
  vl_e_industry: 'Customer Support',
  vl_a_personality: 'Energetic & Dynamic',
  vl_a_industry: 'Marketing & Outreach',
  vl_r_personality: 'Warm & Helpful',
  vl_r_industry: 'Healthcare & Wellness',
  vl_z_personality: 'Confident & Technical',
  vl_z_industry: 'Tech & SaaS',
  vl_c_personality: 'Elegant & Professional',
  vl_c_industry: 'Luxury & Retail',

  test_heading_1: 'Loved by',
  test_heading_2: 'Teams Worldwide',
  test_subtitle: 'See how companies are scaling their communication and driving revenue with AI voice agents',
  test1_content: 'INFOTEON has transformed our outbound sales process. We went from making 50 calls a day to 500, with better qualification rates. The AI agents sound incredibly natural and our team can focus on closing deals instead of cold calling.',
  test1_role: 'VP of Sales',
  test2_content: 'The 24/7 support coverage is a game-changer. Our customers get instant responses at any hour, and the AI handles 80% of inquiries without human intervention. Customer satisfaction scores have never been higher.',
  test2_role: 'Customer Success Director',
  test3_content: 'As a startup, we needed enterprise-level communication without the enterprise cost. INFOTEON gave us that. The ROI was positive within the first month, and the CRM integration made everything seamless.',
  test3_role: 'Founder & CEO',
  test4_content: 'Implementation was surprisingly easy, and the results were immediate. We reduced response times by 95% and our agents handle routine inquiries so our team can focus on complex customer needs.',
  test4_role: 'Operations Manager',
  test5_content: 'The analytics and insights we get from call transcripts are invaluable. We learn what prospects care about, refine our messaging, and the AI gets smarter with every conversation.',
  test5_role: 'Marketing Director',
  test6_content: 'The compliance and security features gave us confidence to use INFOTEON with sensitive client data. SOC 2 and HIPAA compliance out of the box was exactly what we needed.',
  test6_role: 'Head of Business Development',

  faq_heading_1: 'Frequently Asked',
  faq_heading_2: 'Questions',
  faq_subtitle: 'Everything you need to know about INFOTEON AI voice agents',
  faq_still: 'Still have questions?',
  faq_still_sub: "Our team is here to help. Reach out and we'll get back to you within 24 hours.",
  faq_contact: 'Contact Support',
  faq1_q: 'How quickly can I set up my AI voice agent?',
  faq1_a: 'You can have your first AI agent up and running in under 10 minutes. Simply sign up, choose a voice from our library, configure your conversation flows, and connect your CRM. No technical expertise required.',
  faq2_q: 'Does the AI sound natural and human-like?',
  faq2_a: 'Yes! Our AI voice agents use advanced neural text-to-speech technology powered by GPT-4 and state-of-the-art voice models. Most people cannot tell the difference between our AI agents and human representatives.',
  faq3_q: 'What happens if the AI cannot answer a question?',
  faq3_a: 'Our AI agents are smart enough to recognize when they need human assistance. They can seamlessly transfer calls to your team, schedule callbacks, or collect information for follow-up. You have complete control over escalation rules.',
  faq4_q: 'How does pricing work?',
  faq4_a: 'We offer flexible pricing based on call volume and features. Start with our 3-day free trial with no credit card required. After that, plans start at $99/month for up to 500 calls. Enterprise plans with custom features and volume discounts are available.',
  faq5_q: 'Can I integrate with my existing CRM?',
  faq5_a: 'Absolutely! We offer native integrations with Salesforce, HubSpot, Pipedrive, Zoho, and 100+ other platforms. We also provide a robust REST API for custom integrations. All call data, transcripts, and outcomes sync automatically.',
  faq6_q: 'Is my data secure and compliant?',
  faq6_a: 'Yes. We take security seriously with SOC 2 Type II, HIPAA, and PCI DSS compliance. All data is encrypted at rest and in transit using AES-256 encryption. We conduct regular penetration testing and maintain comprehensive audit logs.',
  faq7_q: "Can I customize the AI agent's responses?",
  faq7_a: "Yes! You have full control over your agent's knowledge base, conversation flows, and responses. You can train it on your specific products, services, and brand voice. The AI learns from every conversation and gets smarter over time.",
  faq8_q: 'What languages are supported?',
  faq8_a: 'We currently support English (US, UK, AU), Spanish, French, German, Portuguese, Italian, and 20+ other languages. New languages are added regularly. Each voice is trained by native speakers for authentic pronunciation.',

  comp_badge: 'Enterprise-Grade Security',
  comp_heading_1: 'Your Data is',
  comp_heading_2: 'Safe & Secure',
  comp_subtitle: 'We take security seriously. Our platform is built with enterprise-grade security measures and complies with major industry standards',
  comp_f1_title: 'Penetration Testing',
  comp_f1_desc: 'Regular security audits by third-party experts',
  comp_f2_title: 'SSO & SAML',
  comp_f2_desc: 'Enterprise-grade single sign-on integration',
  comp_f3_title: 'Audit Logs',
  comp_f3_desc: 'Complete activity tracking and monitoring',
  comp_f4_title: 'End-to-End Encryption',
  comp_f4_desc: 'AES-256 encryption for data at rest and in transit',
  comp_certs_title: 'Compliance Certifications',
  comp_certs_sub: 'We maintain the highest standards of compliance to ensure your data is protected and your business meets regulatory requirements',
  comp_cert2: 'HIPAA Compliant',
  comp_cert4: 'GDPR Ready',

  footer_desc: 'Transform your business communication with AI voice agents that work 24/7 to handle calls, qualify leads, and drive revenue.',
  footer_platform: 'Platform',
  footer_solutions: 'Solutions',
  footer_support: 'Support',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 INFOTEON, LLC. All rights reserved.',
  footer_cta_heading: 'Your AI evolution starts with a single decision.',
  footer_cta_sub: 'Join the AI wave and ride it to success. Catch the wave or watch it pass.',
  footer_watch_demo: 'Watch Demo',
  footer_schedule: 'Schedule a Call',
  footer_p1: 'Multi-language',
  footer_p2: 'Crystal Voice',
  footer_p3: 'Blast Performance',
  footer_p4: 'Multi-sessions',
  footer_p5: 'Command & Control',
  footer_p6: 'Private Telecom Network',
  footer_s1: 'Sales Teams',
  footer_s2: 'Customer Support',
  footer_s3: 'Marketing',
  footer_s4: 'Intelligent KPIs',
  footer_s5: 'Business Intelligence',
  footer_s6: 'AI Forensics',
  footer_legal1: 'Privacy Policy',
  footer_legal2: 'Terms of Service',
  footer_legal3: 'SLA',
  footer_legal4: 'Fair Use Policy',
};

const pt: Translations = {
  nav_login: 'Entrar',
  nav_watch_demo: 'Ver Demo',
  nav_check_demo: 'Ver Demo',

  hero_badge: 'Agora com GPT-4 e Modelos de Voz Avançados',
  hero_heading_1: 'Seu Agente de Voz IA para',
  hero_heading_2: 'Vendas, Suporte e Prospecção 24/7',
  hero_subtitle: 'Implante agentes de voz IA inteligentes que atendem chamadas, qualificam leads, agendam reuniões e integram perfeitamente ao seu CRM. Escale sua comunicação sem aumentar sua equipe.',
  hero_cta: 'Ver Demo',
  hero_ai_active: 'Agente IA Ativo',
  hero_handling_calls: 'Atendendo 247 chamadas/dia',
  hero_agent_speech: '"Olá, aqui é Marcus da INFOTEON. Notei que você se interessou pelo nosso plano empresarial. Gostaria de ajudar a agendar uma demonstração. Você está disponível nesta quinta-feira às 14h?"',
  hero_live: 'Transcrição ao vivo • Sentimento: Positivo • Lead: Qualificado',

  features_heading_1: 'Tudo que Você Precisa para',
  features_heading_2: 'Escalar a Comunicação',
  features_subtitle: 'Implante agentes de voz IA que trabalham 24 horas por dia para atender chamadas, qualificar leads e gerar receita',
  features_learn_more: 'Saiba mais',
  feat1_title: 'Campanhas Outbound Inteligentes',
  feat1_desc: 'Lance campanhas de ligação com IA que alcançam milhares de prospects. Qualifique leads automaticamente, agende reuniões e faça follow-up com base nos resultados das conversas.',
  feat2_title: 'Atenda e Qualifique Chamadas 24/7',
  feat2_desc: 'Nunca perca um lead novamente. Seu agente IA atende cada chamada instantaneamente, qualifica prospects, responde perguntas e encaminha leads de alto valor para sua equipe.',
  feat3_title: 'Integração Completa com CRM + API',
  feat3_desc: 'Conecte-se perfeitamente ao Salesforce, HubSpot, Pipedrive e mais de 100 plataformas. Sincronize dados de chamadas, atualize registros e acione fluxos de trabalho automaticamente.',
  feat4_title: 'Inteligência Completa de Chamadas',
  feat4_desc: 'Acesse o histórico completo de chamadas com transcrições, gravações, análise de sentimentos e resumos gerados por IA. Acompanhe métricas de desempenho e otimize as taxas de conversão.',

  fa_label: 'Funcionalidades',
  fa_heading_1: 'O que Impulsiona Seu',
  fa_heading_2: 'Representante de Vendas IA',
  fa1_title: 'Campanhas Outbound Inteligentes',
  fa1_desc: 'Alcance cada lead, no momento certo e de forma personalizada.',
  fa1_i1: 'Carregar leads',
  fa1_i2: 'Fusos automáticos',
  fa1_i3: 'Agendar disparos',
  fa2_title: 'Atenda e Qualifique Chamadas 24/7',
  fa2_desc: 'Transforme chamadas inbound em oportunidade, automaticamente.',
  fa2_i1: 'Resposta automática',
  fa2_i2: 'Triagem de chamadas',
  fa2_i3: 'Captura de dados',
  fa3_title: 'Integração Completa com CRM + API',
  fa3_desc: 'Conecte seus sistemas, automatize todo o fluxo de vendas.',
  fa3_i1: 'Sincronizar ferramentas',
  fa3_i2: 'Acionar fluxos',
  fa3_i3: 'Atualização automática',

  hiw_label: 'Como Funciona',
  hiw_heading_1: 'E se seu melhor representante de vendas fosse uma',
  hiw_heading_2: 'IA que nunca dorme?',
  hiw_stat1: '24/7',
  hiw_stat1_label: 'Sempre Disponível',
  hiw_stat2_label: 'Disponibilidade',
  hiw_stat3: '10x',
  hiw_stat3_label: 'Mais Capacidade',
  hiw_watch_demo: 'Ver Demo',

  hl_heading_1: 'Atenda chamadas, qualifique leads e agende',
  hl_heading_2: 'compromissos 24/7',
  hl_subtitle: 'com agentes de voz IA',
  hl_watch_demo: 'Ver Demo',
  hl_experience: 'Experimente o poder dos agentes de voz IA da INFOTEON em ação',
  hl1_title: 'Atenda Chamadas 24/7',
  hl1_sub: 'Nunca perca um lead novamente',
  hl1_desc: 'Seu agente de voz IA atende cada chamada instantaneamente, gerenciando consultas iniciais, agendando compromissos e qualificando leads sem qualquer intervenção humana. Disponível a qualquer hora, todos os dias.',
  hl1_f1: 'Atendimento imediato',
  hl1_f2: 'Conversa natural',
  hl1_f3: 'Qualificação de leads',
  hl1_f4: 'Agendamento de compromissos',
  hl2_title: 'Qualifique Leads Automaticamente',
  hl2_sub: 'Avaliação inteligente de prospects',
  hl2_desc: 'Algoritmos de IA avançados avaliam prospects em tempo real, analisando compatibilidade, orçamento, autoridade de decisão e cronograma. Sua equipe de vendas recebe leads pré-qualificados prontos para fechar.',
  hl2_f1: 'Qualificação em tempo real',
  hl2_f2: 'Avaliação de orçamento',
  hl2_f3: 'Detecção de autoridade',
  hl2_f4: 'Avaliação de cronograma',
  hl3_title: 'Agende Compromissos Instantaneamente',
  hl3_sub: 'Integração perfeita com agenda',
  hl3_desc: 'Os agentes IA integram-se diretamente aos seus sistemas de calendário para verificar disponibilidade e agendar compromissos em tempo real. Sem e-mails ou telefonemas intermediários. Os prospects recebem confirmação imediata.',
  hl3_f1: 'Sincronização de calendário',
  hl3_f2: 'Agendamento instantâneo',
  hl3_f3: 'Gestão de fusos horários',
  hl3_f4: 'Notificações de lembrete',
  hl4_title: 'Inteligência Conversacional',
  hl4_sub: 'Cada interação importa',
  hl4_desc: 'Transcrições completas de chamadas, análise de sentimentos e resumos gerados por IA oferecem visibilidade total de cada interação com o cliente. Descubra o que ressoa com os prospects e melhore continuamente sua estratégia.',
  hl4_f1: 'Transcrições completas',
  hl4_f2: 'Análise de sentimentos',
  hl4_f3: 'Insights principais',
  hl4_f4: 'Métricas de desempenho',

  stat1_label: 'Usuários Ativos',
  stat2_label: 'Chamadas Atendidas',
  stat3_label: 'Taxa de Satisfação',
  stat4_label: 'Negócios Fechados',
  stats_cta: 'Junte-se a centenas de empresas usando agentes de voz IA para escalar a comunicação,',
  stats_cta_part2: ' qualificar mais leads',
  stats_cta_part3: ', e\n            fechar mais negócios — tudo sem contratar.',

  uc_label: 'Casos de Uso',
  uc_heading_1: 'Criado para Pequenos Empresários,',
  uc_heading_2: 'Agências e Fundadores de SaaS',
  uc_real_estate: 'Imóveis',
  uc_hr: 'Recursos Humanos',
  uc_retail: 'Varejo',
  uc_legal: 'Jurídico',
  uc_sales: 'Equipes de Vendas',
  uc_services: 'Serviços/Utilities',
  uc_hospitality: 'Hospitalidade',
  uc_education: 'Educação',
  uc_healthcare: 'Saúde',
  uc_mockup: 'Mockup Profissional',
  uc_dashboard: 'Painel Interativo',
  uc_hear: 'Ouça o Agente em Ação',
  uc_widget_title: 'Widget de Áudio',
  uc_widget_sub: 'Insira o código do seu widget de áudio aqui',
  uc_close: 'Fechar',

  vl_heading_1: 'Conheça Seus',
  vl_heading_2: 'Agentes de Voz IA',
  vl_subtitle: 'Escolha em nossa diversificada biblioteca de vozes IA, cada uma treinada para setores e estilos de conversa específicos',
  vl_language: 'Idioma:',
  vl_personality: 'Personalidade:',
  vl_explore: 'Explorar Todas as Vozes',
  vl_m_personality: 'Profissional e Persuasivo',
  vl_m_industry: 'Vendas e Desenvolvimento de Negócios',
  vl_e_personality: 'Amigável e Empático',
  vl_e_industry: 'Suporte ao Cliente',
  vl_a_personality: 'Energético e Dinâmico',
  vl_a_industry: 'Marketing e Prospecção',
  vl_r_personality: 'Calorosa e Prestativa',
  vl_r_industry: 'Saúde e Bem-estar',
  vl_z_personality: 'Confiante e Técnico',
  vl_z_industry: 'Tecnologia e SaaS',
  vl_c_personality: 'Elegante e Profissional',
  vl_c_industry: 'Luxo e Varejo',

  test_heading_1: 'Amado por',
  test_heading_2: 'Equipes no Mundo Todo',
  test_subtitle: 'Veja como as empresas estão escalando sua comunicação e gerando receita com agentes de voz IA',
  test1_content: 'A INFOTEON transformou nosso processo de vendas outbound. Passamos de 50 ligações por dia para 500, com melhores taxas de qualificação. Os agentes IA soam incrivelmente naturais e nossa equipe pode focar em fechar negócios.',
  test1_role: 'VP de Vendas',
  test2_content: 'A cobertura de suporte 24/7 é revolucionária. Nossos clientes obtêm respostas instantâneas a qualquer hora, e a IA lida com 80% das consultas sem intervenção humana. Os índices de satisfação nunca foram tão altos.',
  test2_role: 'Diretor de Sucesso do Cliente',
  test3_content: 'Como startup, precisávamos de comunicação de nível empresarial sem o custo empresarial. A INFOTEON nos deu isso. O ROI foi positivo no primeiro mês e a integração com CRM tornou tudo perfeito.',
  test3_role: 'Fundadora e CEO',
  test4_content: 'A implementação foi surpreendentemente fácil e os resultados foram imediatos. Reduzimos os tempos de resposta em 95% e nossos agentes lidam com consultas rotineiras para que nossa equipe possa focar em necessidades complexas.',
  test4_role: 'Gerente de Operações',
  test5_content: 'As análises e insights que obtemos das transcrições de chamadas são inestimáveis. Aprendemos o que os prospects valorizam, refinamos nossa mensagem e a IA fica mais inteligente a cada conversa.',
  test5_role: 'Diretora de Marketing',
  test6_content: 'Os recursos de conformidade e segurança nos deram confiança para usar a INFOTEON com dados sensíveis de clientes. A conformidade SOC 2 e HIPAA incluída foi exatamente o que precisávamos.',
  test6_role: 'Chefe de Desenvolvimento de Negócios',

  faq_heading_1: 'Perguntas',
  faq_heading_2: 'Frequentes',
  faq_subtitle: 'Tudo que você precisa saber sobre os agentes de voz IA da INFOTEON',
  faq_still: 'Ainda tem dúvidas?',
  faq_still_sub: 'Nossa equipe está aqui para ajudar. Entre em contato e responderemos em até 24 horas.',
  faq_contact: 'Contatar Suporte',
  faq1_q: 'Com que rapidez posso configurar meu agente de voz IA?',
  faq1_a: 'Você pode ter seu primeiro agente IA funcionando em menos de 10 minutos. Basta se cadastrar, escolher uma voz da nossa biblioteca, configurar os fluxos de conversa e conectar seu CRM. Nenhuma expertise técnica necessária.',
  faq2_q: 'A IA soa natural e humana?',
  faq2_a: 'Sim! Nossos agentes de voz IA usam tecnologia avançada de conversão de texto em fala baseada em GPT-4 e modelos de voz de última geração. A maioria das pessoas não consegue distinguir entre nossos agentes IA e representantes humanos.',
  faq3_q: 'O que acontece se a IA não conseguir responder uma pergunta?',
  faq3_a: 'Nossos agentes IA são inteligentes o suficiente para reconhecer quando precisam de assistência humana. Eles podem transferir chamadas perfeitamente para sua equipe, agendar retornos ou coletar informações para follow-up.',
  faq4_q: 'Como funciona o preço?',
  faq4_a: 'Oferecemos preços flexíveis baseados no volume de chamadas e recursos. Comece com nosso teste gratuito de 3 dias sem necessidade de cartão de crédito. Depois, os planos começam em $99/mês para até 500 chamadas.',
  faq5_q: 'Posso integrar com meu CRM existente?',
  faq5_a: 'Absolutamente! Oferecemos integrações nativas com Salesforce, HubSpot, Pipedrive, Zoho e mais de 100 outras plataformas. Também fornecemos uma API REST robusta para integrações personalizadas.',
  faq6_q: 'Meus dados são seguros e conformes?',
  faq6_a: 'Sim. Levamos a segurança a sério com conformidade SOC 2 Type II, HIPAA e PCI DSS. Todos os dados são criptografados em repouso e em trânsito usando criptografia AES-256.',
  faq7_q: 'Posso personalizar as respostas do agente IA?',
  faq7_a: 'Sim! Você tem controle total sobre a base de conhecimento, fluxos de conversa e respostas do agente. Pode treiná-lo em seus produtos, serviços e voz de marca específicos. A IA aprende com cada conversa.',
  faq8_q: 'Quais idiomas são suportados?',
  faq8_a: 'Atualmente suportamos Inglês (EUA, Reino Unido, Austrália), Espanhol, Francês, Alemão, Português, Italiano e mais de 20 outros idiomas. Novos idiomas são adicionados regularmente.',

  comp_badge: 'Segurança de Nível Empresarial',
  comp_heading_1: 'Seus Dados Estão',
  comp_heading_2: 'Seguros e Protegidos',
  comp_subtitle: 'Levamos a segurança a sério. Nossa plataforma é construída com medidas de segurança de nível empresarial e está em conformidade com os principais padrões do setor',
  comp_f1_title: 'Testes de Penetração',
  comp_f1_desc: 'Auditorias de segurança regulares por especialistas terceirizados',
  comp_f2_title: 'SSO & SAML',
  comp_f2_desc: 'Integração de login único de nível empresarial',
  comp_f3_title: 'Logs de Auditoria',
  comp_f3_desc: 'Rastreamento e monitoramento completo de atividades',
  comp_f4_title: 'Criptografia de Ponta a Ponta',
  comp_f4_desc: 'Criptografia AES-256 para dados em repouso e em trânsito',
  comp_certs_title: 'Certificações de Conformidade',
  comp_certs_sub: 'Mantemos os mais altos padrões de conformidade para garantir que seus dados estejam protegidos e seu negócio atenda aos requisitos regulatórios',
  comp_cert2: 'Compatível com HIPAA',
  comp_cert4: 'Pronto para GDPR',

  footer_desc: 'Transforme a comunicação do seu negócio com agentes de voz IA que trabalham 24/7 para atender chamadas, qualificar leads e gerar receita.',
  footer_platform: 'Plataforma',
  footer_solutions: 'Soluções',
  footer_support: 'Suporte',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 INFOTEON, LLC. Todos os direitos reservados.',
  footer_cta_heading: 'Sua evolução com IA começa com uma única decisão.',
  footer_cta_sub: 'Entre na onda da IA e navegue até o sucesso. Pegue a onda ou deixe-a passar.',
  footer_watch_demo: 'Ver Demo',
  footer_schedule: 'Agendar uma Chamada',
  footer_p1: 'Multi-idioma',
  footer_p2: 'Voz Cristalina',
  footer_p3: 'Alto Desempenho',
  footer_p4: 'Multi-sessões',
  footer_p5: 'Comando e Controle',
  footer_p6: 'Rede Telecom Privada',
  footer_s1: 'Equipes de Vendas',
  footer_s2: 'Suporte ao Cliente',
  footer_s3: 'Marketing',
  footer_s4: 'KPIs Inteligentes',
  footer_s5: 'Inteligência de Negócios',
  footer_s6: 'Forense de IA',
  footer_legal1: 'Política de Privacidade',
  footer_legal2: 'Termos de Serviço',
  footer_legal3: 'SLA',
  footer_legal4: 'Política de Uso Justo',
};

const es: Translations = {
  nav_login: 'Iniciar sesión',
  nav_watch_demo: 'Ver Demo',
  nav_check_demo: 'Ver Demo',

  hero_badge: 'Ahora con GPT-4 y Modelos de Voz Avanzados',
  hero_heading_1: 'Tu Agente de Voz IA para',
  hero_heading_2: 'Ventas, Soporte y Alcance 24/7',
  hero_subtitle: 'Despliega agentes de voz IA inteligentes que gestionan llamadas, califican leads, programan reuniones y se integran perfectamente con tu CRM. Escala tu comunicación sin aumentar tu equipo.',
  hero_cta: 'Ver Demo',
  hero_ai_active: 'Agente IA Activo',
  hero_handling_calls: 'Gestionando 247 llamadas/día',
  hero_agent_speech: '"Hola, soy Marcus de INFOTEON. Vi que consultó sobre nuestro plan empresarial. Me encantaría ayudarle a programar una demostración. ¿Está disponible este jueves a las 2 PM?"',
  hero_live: 'Transcripción en vivo • Sentimiento: Positivo • Lead: Calificado',

  features_heading_1: 'Todo lo que Necesitas para',
  features_heading_2: 'Escalar la Comunicación',
  features_subtitle: 'Despliega agentes de voz IA que trabajan las 24 horas para gestionar llamadas, calificar leads y generar ingresos',
  features_learn_more: 'Saber más',
  feat1_title: 'Campañas Outbound Inteligentes',
  feat1_desc: 'Lanza campañas de llamadas con IA que alcanzan miles de prospectos. Califica leads automáticamente, programa reuniones y da seguimiento según los resultados de cada conversación.',
  feat2_title: 'Atiende y Califica Llamadas 24/7',
  feat2_desc: 'Nunca pierdas un lead. Tu agente IA responde cada llamada al instante, califica prospectos, responde preguntas y dirige los leads de alto valor a tu equipo.',
  feat3_title: 'Integración Completa CRM + API',
  feat3_desc: 'Conéctate sin problemas con Salesforce, HubSpot, Pipedrive y más de 100 plataformas. Sincroniza datos de llamadas, actualiza registros y activa flujos de trabajo automáticamente.',
  feat4_title: 'Inteligencia Completa de Llamadas',
  feat4_desc: 'Accede al historial completo de llamadas con transcripciones, grabaciones, análisis de sentimientos y resúmenes generados por IA. Mide el rendimiento y optimiza las tasas de conversión.',

  fa_label: 'Funcionalidades',
  fa_heading_1: 'Lo que Impulsa a Tu',
  fa_heading_2: 'Representante de Ventas IA',
  fa1_title: 'Campañas Outbound Inteligentes',
  fa1_desc: 'Alcanza cada lead, en el momento justo y de forma personalizada.',
  fa1_i1: 'Cargar leads',
  fa1_i2: 'Zonas horarias automáticas',
  fa1_i3: 'Programar envíos',
  fa2_title: 'Atiende y Califica Llamadas 24/7',
  fa2_desc: 'Convierte llamadas entrantes en oportunidades, automáticamente.',
  fa2_i1: 'Respuesta automática',
  fa2_i2: 'Filtrar llamadas',
  fa2_i3: 'Capturar datos',
  fa3_title: 'Integración Completa CRM + API',
  fa3_desc: 'Conecta tus sistemas y automatiza todo el flujo de ventas.',
  fa3_i1: 'Sincronizar herramientas',
  fa3_i2: 'Activar flujos',
  fa3_i3: 'Actualización automática',

  hiw_label: 'Cómo Funciona',
  hiw_heading_1: '¿Y si tu mejor vendedor fuera una',
  hiw_heading_2: 'IA que nunca duerme?',
  hiw_stat1: '24/7',
  hiw_stat1_label: 'Siempre Disponible',
  hiw_stat2_label: 'Disponibilidad',
  hiw_stat3: '10x',
  hiw_stat3_label: 'Más Capacidad',
  hiw_watch_demo: 'Ver Demo',

  hl_heading_1: 'Atiende llamadas, califica leads y agenda',
  hl_heading_2: 'citas 24/7',
  hl_subtitle: 'con agentes de voz IA',
  hl_watch_demo: 'Ver Demo',
  hl_experience: 'Experimenta el poder de los agentes de voz IA de INFOTEON en acción',
  hl1_title: 'Atiende Llamadas 24/7',
  hl1_sub: 'Nunca pierdas un lead',
  hl1_desc: 'Tu agente de voz IA responde cada llamada entrante al instante, gestionando consultas iniciales, agendando citas y calificando leads sin ninguna intervención humana. Disponible a cualquier hora, todos los días.',
  hl1_f1: 'Atención inmediata',
  hl1_f2: 'Conversación natural',
  hl1_f3: 'Calificación de leads',
  hl1_f4: 'Agendamiento de citas',
  hl2_title: 'Califica Leads Automáticamente',
  hl2_sub: 'Evaluación inteligente de prospectos',
  hl2_desc: 'Algoritmos de IA avanzados evalúan prospectos en tiempo real, analizando compatibilidad, presupuesto, autoridad de decisión y cronograma. Tu equipo de ventas recibe leads precalificados listos para cerrar.',
  hl2_f1: 'Calificación en tiempo real',
  hl2_f2: 'Evaluación de presupuesto',
  hl2_f3: 'Detección de autoridad',
  hl2_f4: 'Evaluación de cronograma',
  hl3_title: 'Agenda Citas al Instante',
  hl3_sub: 'Integración perfecta con tu calendario',
  hl3_desc: 'Los agentes IA se integran directamente con tus sistemas de calendario para verificar disponibilidad y agendar citas en tiempo real. Sin correos o llamadas de ida y vuelta. Los prospectos reciben confirmación inmediata.',
  hl3_f1: 'Sincronización de calendario',
  hl3_f2: 'Agendamiento instantáneo',
  hl3_f3: 'Gestión de zonas horarias',
  hl3_f4: 'Notificaciones de recordatorio',
  hl4_title: 'Inteligencia Conversacional',
  hl4_sub: 'Cada interacción importa',
  hl4_desc: 'Transcripciones completas de llamadas, análisis de sentimientos y resúmenes generados por IA te dan visibilidad total de cada interacción con el cliente. Descubre qué resuena con los prospectos y mejora tu estrategia continuamente.',
  hl4_f1: 'Transcripciones completas',
  hl4_f2: 'Análisis de sentimientos',
  hl4_f3: 'Insights clave',
  hl4_f4: 'Métricas de rendimiento',

  stat1_label: 'Usuarios Activos',
  stat2_label: 'Llamadas Gestionadas',
  stat3_label: 'Tasa de Satisfacción',
  stat4_label: 'Negocios Cerrados',
  stats_cta: 'Únete a cientos de empresas que usan agentes de voz IA para escalar la comunicación,',
  stats_cta_part2: ' calificar más leads',
  stats_cta_part3: ', y\n            cerrar más negocios — todo sin contratar.',

  uc_label: 'Casos de Uso',
  uc_heading_1: 'Creado para Pequeños Empresarios,',
  uc_heading_2: 'Agencias y Fundadores de SaaS',
  uc_real_estate: 'Inmobiliaria',
  uc_hr: 'Recursos Humanos',
  uc_retail: 'Retail',
  uc_legal: 'Legal',
  uc_sales: 'Equipos de Ventas',
  uc_services: 'Servicios/Utilities',
  uc_hospitality: 'Hospitalidad',
  uc_education: 'Educación',
  uc_healthcare: 'Salud',
  uc_mockup: 'Mockup Profesional',
  uc_dashboard: 'Panel Interactivo',
  uc_hear: 'Escucha al Agente en Acción',
  uc_widget_title: 'Widget de Audio',
  uc_widget_sub: 'Inserta aquí el código de tu widget de audio',
  uc_close: 'Cerrar',

  vl_heading_1: 'Conoce a Tus',
  vl_heading_2: 'Agentes de Voz IA',
  vl_subtitle: 'Elige de nuestra diversa biblioteca de voces IA, cada una entrenada para sectores y estilos de conversación específicos',
  vl_language: 'Idioma:',
  vl_personality: 'Personalidad:',
  vl_explore: 'Explorar Todas las Voces',
  vl_m_personality: 'Profesional y Persuasivo',
  vl_m_industry: 'Ventas y Desarrollo de Negocios',
  vl_e_personality: 'Amigable y Empático',
  vl_e_industry: 'Soporte al Cliente',
  vl_a_personality: 'Enérgico y Dinámico',
  vl_a_industry: 'Marketing y Alcance',
  vl_r_personality: 'Cálido y Servicial',
  vl_r_industry: 'Salud y Bienestar',
  vl_z_personality: 'Seguro y Técnico',
  vl_z_industry: 'Tecnología y SaaS',
  vl_c_personality: 'Elegante y Profesional',
  vl_c_industry: 'Lujo y Retail',

  test_heading_1: 'Amado por',
  test_heading_2: 'Equipos en Todo el Mundo',
  test_subtitle: 'Descubre cómo las empresas escalan su comunicación y generan ingresos con agentes de voz IA',
  test1_content: 'INFOTEON ha transformado nuestro proceso de ventas outbound. Pasamos de 50 llamadas al día a 500, con mejores tasas de calificación. Los agentes IA suenan increíblemente naturales y nuestro equipo puede centrarse en cerrar negocios.',
  test1_role: 'VP de Ventas',
  test2_content: 'La cobertura de soporte 24/7 es revolucionaria. Nuestros clientes obtienen respuestas instantáneas a cualquier hora, y la IA gestiona el 80% de las consultas sin intervención humana. Las puntuaciones de satisfacción nunca habían sido tan altas.',
  test2_role: 'Director de Éxito del Cliente',
  test3_content: 'Como startup, necesitábamos comunicación a nivel empresarial sin el costo empresarial. INFOTEON nos lo dio. El ROI fue positivo en el primer mes y la integración con CRM hizo todo perfecto.',
  test3_role: 'Fundadora y CEO',
  test4_content: 'La implementación fue sorprendentemente fácil y los resultados fueron inmediatos. Redujimos los tiempos de respuesta un 95% y nuestros agentes gestionan consultas rutinarias para que el equipo se enfoque en necesidades complejas.',
  test4_role: 'Gerente de Operaciones',
  test5_content: 'Los análisis e insights que obtenemos de las transcripciones de llamadas son invaluables. Aprendemos qué valoran los prospectos, refinamos nuestro mensaje y la IA se vuelve más inteligente con cada conversación.',
  test5_role: 'Directora de Marketing',
  test6_content: 'Las funciones de cumplimiento y seguridad nos dieron confianza para usar INFOTEON con datos sensibles de clientes. El cumplimiento SOC 2 e HIPAA incluido fue exactamente lo que necesitábamos.',
  test6_role: 'Jefe de Desarrollo de Negocios',

  faq_heading_1: 'Preguntas',
  faq_heading_2: 'Frecuentes',
  faq_subtitle: 'Todo lo que necesitas saber sobre los agentes de voz IA de INFOTEON',
  faq_still: '¿Aún tienes preguntas?',
  faq_still_sub: 'Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos en 24 horas.',
  faq_contact: 'Contactar Soporte',
  faq1_q: '¿Cuánto tiempo lleva configurar mi agente de voz IA?',
  faq1_a: 'Puedes tener tu primer agente IA funcionando en menos de 10 minutos. Solo regístrate, elige una voz de nuestra biblioteca, configura los flujos de conversación y conecta tu CRM. No se requiere experiencia técnica.',
  faq2_q: '¿La IA suena natural y humana?',
  faq2_a: '¡Sí! Nuestros agentes de voz IA utilizan tecnología avanzada de conversión de texto a voz impulsada por GPT-4 y modelos de voz de última generación. La mayoría de las personas no puede distinguir entre nuestros agentes IA y representantes humanos.',
  faq3_q: '¿Qué pasa si la IA no puede responder una pregunta?',
  faq3_a: 'Nuestros agentes IA son lo suficientemente inteligentes para reconocer cuándo necesitan asistencia humana. Pueden transferir llamadas sin problemas a tu equipo, programar devoluciones de llamada o recopilar información para seguimiento.',
  faq4_q: '¿Cómo funciona el precio?',
  faq4_a: 'Ofrecemos precios flexibles basados en volumen de llamadas y funciones. Comienza con nuestra prueba gratuita de 3 días sin tarjeta de crédito. Después, los planes comienzan en $99/mes para hasta 500 llamadas.',
  faq5_q: '¿Puedo integrarme con mi CRM existente?',
  faq5_a: '¡Absolutamente! Ofrecemos integraciones nativas con Salesforce, HubSpot, Pipedrive, Zoho y más de 100 otras plataformas. También proporcionamos una API REST robusta para integraciones personalizadas.',
  faq6_q: '¿Mis datos están seguros y en cumplimiento?',
  faq6_a: 'Sí. Nos tomamos la seguridad en serio con cumplimiento SOC 2 Tipo II, HIPAA y PCI DSS. Todos los datos se cifran en reposo y en tránsito usando cifrado AES-256.',
  faq7_q: '¿Puedo personalizar las respuestas del agente IA?',
  faq7_a: '¡Sí! Tienes control total sobre la base de conocimiento, flujos de conversación y respuestas de tu agente. Puedes entrenarlo en tus productos, servicios y voz de marca específicos. La IA aprende de cada conversación.',
  faq8_q: '¿Qué idiomas son compatibles?',
  faq8_a: 'Actualmente soportamos Inglés (EE.UU., Reino Unido, Australia), Español, Francés, Alemán, Portugués, Italiano y más de 20 otros idiomas. Se añaden nuevos idiomas regularmente.',

  comp_badge: 'Seguridad de Nivel Empresarial',
  comp_heading_1: 'Tus Datos Están',
  comp_heading_2: 'Seguros y Protegidos',
  comp_subtitle: 'Nos tomamos la seguridad en serio. Nuestra plataforma está construida con medidas de seguridad de nivel empresarial y cumple con los principales estándares de la industria',
  comp_f1_title: 'Pruebas de Penetración',
  comp_f1_desc: 'Auditorías de seguridad regulares por expertos externos',
  comp_f2_title: 'SSO & SAML',
  comp_f2_desc: 'Integración de inicio de sesión único de nivel empresarial',
  comp_f3_title: 'Registros de Auditoría',
  comp_f3_desc: 'Seguimiento y monitoreo completo de actividades',
  comp_f4_title: 'Cifrado de Extremo a Extremo',
  comp_f4_desc: 'Cifrado AES-256 para datos en reposo y en tránsito',
  comp_certs_title: 'Certificaciones de Cumplimiento',
  comp_certs_sub: 'Mantenemos los más altos estándares de cumplimiento para garantizar que tus datos estén protegidos y tu negocio cumpla con los requisitos regulatorios',
  comp_cert2: 'Compatible con HIPAA',
  comp_cert4: 'Listo para GDPR',

  footer_desc: 'Transforma la comunicación de tu negocio con agentes de voz IA que trabajan 24/7 para gestionar llamadas, calificar leads y generar ingresos.',
  footer_platform: 'Plataforma',
  footer_solutions: 'Soluciones',
  footer_support: 'Soporte',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 INFOTEON, LLC. Todos los derechos reservados.',
  footer_cta_heading: 'Tu evolución con IA comienza con una sola decisión.',
  footer_cta_sub: 'Únete a la ola de la IA y llévala al éxito. Súbete a la ola o deja que pase.',
  footer_watch_demo: 'Ver Demo',
  footer_schedule: 'Programar una Llamada',
  footer_p1: 'Multi-idioma',
  footer_p2: 'Voz Cristalina',
  footer_p3: 'Alto Rendimiento',
  footer_p4: 'Multi-sesiones',
  footer_p5: 'Comando y Control',
  footer_p6: 'Red Telecom Privada',
  footer_s1: 'Equipos de Ventas',
  footer_s2: 'Soporte al Cliente',
  footer_s3: 'Marketing',
  footer_s4: 'KPIs Inteligentes',
  footer_s5: 'Inteligencia de Negocios',
  footer_s6: 'Forense de IA',
  footer_legal1: 'Política de Privacidad',
  footer_legal2: 'Términos de Servicio',
  footer_legal3: 'SLA',
  footer_legal4: 'Política de Uso Justo',
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const t = language === 'en' ? en : language === 'pt' ? pt : es;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

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
  hl5_title: string;
  hl5_sub: string;
  hl5_desc: string;
  hl5_f1: string;
  hl5_f2: string;
  hl5_f3: string;
  hl5_f4: string;
  hl6_title: string;
  hl6_sub: string;
  hl6_desc: string;
  hl6_f1: string;
  hl6_f2: string;
  hl6_f3: string;
  hl6_f4: string;
  hl7_title: string;
  hl7_sub: string;
  hl7_desc: string;
  hl7_f1: string;
  hl7_f2: string;
  hl7_f3: string;
  hl7_f4: string;
  hl8_title: string;
  hl8_sub: string;
  hl8_desc: string;
  hl8_f1: string;
  hl8_f2: string;
  hl8_f3: string;
  hl8_f4: string;
  hl9_title: string;
  hl9_sub: string;
  hl9_desc: string;
  hl9_f1: string;
  hl9_f2: string;
  hl9_f3: string;
  hl9_f4: string;
  hl10_title: string;
  hl10_sub: string;
  hl10_desc: string;
  hl10_f1: string;
  hl10_f2: string;
  hl10_f3: string;
  hl10_f4: string;
  hl11_title: string;
  hl11_sub: string;
  hl11_desc: string;
  hl11_f1: string;
  hl11_f2: string;
  hl11_f3: string;
  hl11_f4: string;

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

  hero_badge: 'AI That Calls Back in Under 60 Seconds',
  hero_heading_1: 'Stop Losing Revenue to',
  hero_heading_2: 'Missed Calls & Slow Follow-Up',
  hero_subtitle: "Infoteon's AI voice agents answer every call, qualify every lead, and book every appointment — 24/7 — so your sales team only talks to buyers who are ready to close.",
  hero_cta: 'Watch Demo',
  hero_ai_active: 'AI Agent Active',
  hero_handling_calls: 'Handling 247 calls/day',
  hero_agent_speech: '"Hi, I\'m calling from Infoteon — you requested more information about our plans. I have a couple of quick questions to point you in the right direction. Do you have 90 seconds?"',
  hero_live: 'Live transcription • Sentiment: Positive • Lead: Qualified',

  features_heading_1: 'Four Ways Businesses',
  features_heading_2: 'Win More Revenue with Infoteon',
  features_subtitle: 'Every feature is built around one goal: turning phone conversations into booked meetings, closed deals, and happier customers — without adding headcount.',
  features_learn_more: 'Learn more',
  feat1_title: 'Instant Lead Qualification',
  feat1_desc: 'The AI calls back form submissions within 60 seconds, asks budget, authority, and timeline questions, and routes only serious buyers to a human closer. Bad-fit leads are logged with reasons — your team never wastes time on cold prospects.',
  feat2_title: 'Appointment Setting on Autopilot',
  feat2_desc: 'Interested prospects disappear when booking requires voicemail or back-and-forth messages. Infoteon checks your calendar, proposes open slots, confirms the meeting, and sends reminders — converting intent into revenue before it goes cold.',
  feat3_title: 'Outbound Re-Engagement Campaigns',
  feat3_desc: 'Stale leads, no-shows, and lost deals are untapped pipeline. The AI dials your CRM lists, handles the repetitive first-touch work, overcomes common objections, and hands off only warm opportunities — keeping your SDRs focused on closing.',
  feat4_title: 'After-Hours Call Coverage',
  feat4_desc: 'Every missed call after 5 PM is a lead your competitor may answer. Infoteon captures caller details, logs structured messages, and routes urgent cases in real time — so no inquiry slips through, even when your team is offline.',

  fa_label: 'Platform Features',
  fa_heading_1: 'The Intelligence Behind Every',
  fa_heading_2: 'Revenue-Generating Call',
  fa1_title: 'AI Knowledge Base',
  fa1_desc: 'Train the agent on your real business — no generic answers.',
  fa1_i1: 'Upload pricing & policies',
  fa1_i2: 'Connect your SOPs & FAQs',
  fa1_i3: 'Consistent, accurate responses',
  fa2_title: 'Post-Call Analytics',
  fa2_desc: 'Every call becomes actionable business intelligence.',
  fa2_i1: 'Transcripts & sentiment scores',
  fa2_i2: 'Objections & competitor mentions',
  fa2_i3: 'Improve scripts from real data',
  fa3_title: 'Smart Call Transfer',
  fa3_desc: 'AI handles the routine — humans close the important calls.',
  fa3_i1: 'Live transfer to your team',
  fa3_i2: 'Escalate high-value leads',
  fa3_i3: 'Reduce unnecessary interruptions',

  hiw_label: 'How It Works',
  hiw_heading_1: 'What if every missed call was',
  hiw_heading_2: 'automatically converted into revenue?',
  hiw_stat1: '<60s',
  hiw_stat1_label: 'Callback Speed',
  hiw_stat2_label: 'Uptime',
  hiw_stat3: '10x',
  hiw_stat3_label: 'More Conversations',
  hiw_watch_demo: 'Watch Demo',

  hl_heading_1: 'From missed call to booked meeting —',
  hl_heading_2: 'automatically',
  hl_subtitle: 'See exactly how Infoteon turns phone traffic into predictable revenue for your business.',
  hl_watch_demo: 'Watch Demo',
  hl_experience: 'See Infoteon AI voice agents handle a real qualification call',
  hl1_title: 'Never Miss a Revenue Opportunity',
  hl1_sub: 'Every call answered, every lead captured',
  hl1_desc: 'Missed calls are the easiest revenue leak to fix. Infoteon answers 100% of inbound calls instantly — capturing caller details, understanding intent, and routing every inquiry to the right outcome. No voicemail, no lost leads, no follow-up that never happens.',
  hl1_f1: 'Zero missed calls, 24/7',
  hl1_f2: 'Structured lead capture',
  hl1_f3: 'Intent-based routing',
  hl1_f4: 'CRM logging on every call',
  hl2_title: 'Your Salespeople Only Talk to Buyers',
  hl2_sub: 'AI qualifies — humans close',
  hl2_desc: 'Stop paying your sales team to screen weak leads. Infoteon qualifies every prospect by budget, authority, timeline, and fit before a human gets involved. Hot leads transfer live, warm leads get booked, and bad-fit leads are logged with reasons — giving your team a clear, prioritized pipeline.',
  hl2_f1: 'Budget & authority screening',
  hl2_f2: 'Timeline qualification',
  hl2_f3: 'Live transfer for hot leads',
  hl2_f4: 'Disqualification logging',
  hl3_title: 'A Fuller Calendar Without the Admin Work',
  hl3_sub: 'Booked meetings while you sleep',
  hl3_desc: 'Delays of more than five minutes can reduce conversions by 30-50%. Infoteon qualifies the prospect, checks your live calendar, proposes available times, confirms the booking, and sends reminders — all in one conversation. Fewer no-shows, more revenue opportunities created.',
  hl3_f1: 'Real-time calendar sync',
  hl3_f2: 'Instant booking confirmation',
  hl3_f3: 'Automated reminders',
  hl3_f4: 'No-show reduction',
  hl4_title: 'Turn Every Call into a Business Decision',
  hl4_sub: 'Post-call intelligence that improves revenue',
  hl4_desc: 'Valuable business intelligence is hidden inside your phone conversations — objections, competitor mentions, pricing confusion, and moments where deals are won or lost. Infoteon surfaces all of it: transcripts, sentiment scores, recurring patterns, and coaching signals so you improve faster.',
  hl4_f1: 'Full call transcripts',
  hl4_f2: 'Objection & sentiment analysis',
  hl4_f3: 'Coaching & script improvement',
  hl4_f4: 'Campaign performance metrics',
  hl5_title: 'AI Call Center — Handle Volume Without Adding Staff',
  hl5_sub: 'Scale inbound and outbound without scaling headcount',
  hl5_desc: 'Traditional call centers have fixed staffing costs while call volume changes all day. Infoteon acts as the first layer — answering, identifying intent, completing routine workflows, and escalating only exceptions to your staff. Up to 80% of interactions are rule-based and can be handled entirely by the AI.',
  hl5_f1: 'Tier-1 ticket deflection',
  hl5_f2: 'Reduced hold times',
  hl5_f3: 'Lower cost per contact',
  hl5_f4: 'Consistent coverage across time zones',
  hl6_title: 'AI Customer Support — Resolve Routine Requests Instantly',
  hl6_sub: 'Free your team from repetitive questions',
  hl6_desc: 'Most support teams are not overwhelmed by complex problems — they are overwhelmed by the same questions every day: order status, invoices, return policies, rescheduling, and basic troubleshooting. Infoteon handles these instantly, escalating only when human judgment is truly needed.',
  hl6_f1: 'Instant answers to repeat questions',
  hl6_f2: 'CRM and helpdesk integration',
  hl6_f3: 'Automated refunds and rescheduling',
  hl6_f4: 'Escalation only for complex cases',
  hl7_title: 'AI Dispatch Assistant — Turn Every Service Call into a Booked Job',
  hl7_sub: 'For home services, field teams, and repair businesses',
  hl7_desc: 'For field service businesses, dispatch is where revenue and customer experience break down. Calls get missed, jobs are booked slowly, and customers go to competitors — especially after hours. Infoteon answers calls, captures job details, checks technician availability, books the job, and sends ETAs automatically.',
  hl7_f1: 'After-hours job booking',
  hl7_f2: 'Technician availability check',
  hl7_f3: 'Emergency triage and routing',
  hl7_f4: 'Automated ETA and confirmations',
  hl8_title: 'Smart AI-to-Human Transfer — The Best of Both Worlds',
  hl8_sub: 'Automation efficiency plus human reassurance in the same call',
  hl8_desc: 'The AI answers first, handles repetitive questions, qualifies the caller, and transfers only the right calls to your team. This hybrid model means your staff stays focused on conversations where judgment, empathy, or closing ability matter — while customers never feel stuck with automation.',
  hl8_f1: 'Context passed on every transfer',
  hl8_f2: 'Trigger-based escalation rules',
  hl8_f3: 'Shorter average handle time',
  hl8_f4: 'Human reassurance when it counts',
  hl9_title: 'AI Knowledge Base — Consistent, Accurate Answers Every Time',
  hl9_sub: 'Trained on your real business, not generic information',
  hl9_desc: 'A voice agent is only as good as what it knows. Upload your pricing, policies, service menus, SOPs, FAQs, legal disclaimers, and technical documents. Infoteon uses your actual content as its source of truth — eliminating inconsistent answers, policy errors, and guesswork across every customer interaction.',
  hl9_f1: 'Upload PDFs, website, pricing sheets',
  hl9_f2: 'Business-specific answers only',
  hl9_f3: 'Policy and compliance accuracy',
  hl9_f4: 'Update knowledge without rebuilding the agent',
  hl10_title: 'Post-Call Analysis — Your Phone Becomes a Data Source',
  hl10_sub: 'Stop guessing what customers want',
  hl10_desc: 'Every conversation contains signals most businesses never see: objections, competitor mentions, pricing confusion, and moments where interest spikes or drops. Infoteon turns every call into a structured data point — transcripts, sentiment scores, topic clusters, and coaching flags that help you improve revenue, messaging, and operations continuously.',
  hl10_f1: 'Transcripts and sentiment on every call',
  hl10_f2: 'Recurring objection identification',
  hl10_f3: 'Sales coaching signals',
  hl10_f4: 'Campaign and script optimization data',
  hl11_title: 'One Complete Package — Everything Your Business Needs',
  hl11_sub: 'Done-for-you AI phone coverage, managed end to end',
  hl11_desc: 'We offer one package that includes AI answering, appointment setting, lead qualification, customer support, and outbound campaigns — fully managed for your business. Many small businesses need better phone coverage and automation but do not want to build or manage the technology themselves. We handle all of it.',
  hl11_f1: 'AI answering & lead qualification',
  hl11_f2: 'Appointment setting & outbound campaigns',
  hl11_f3: 'Customer support coverage',
  hl11_f4: 'Fully managed — no technical setup needed',

  stat1_label: 'Active Businesses',
  stat2_label: 'Calls Handled',
  stat3_label: 'Satisfaction Rate',
  stat4_label: 'Revenue Recovered',
  stats_cta: 'Hundreds of businesses are turning missed calls into booked meetings,',
  stats_cta_part2: ' qualified pipelines',
  stats_cta_part3: ', and closed revenue — without adding a single headcount.',

  uc_label: 'Use-Cases',
  uc_heading_1: 'Every Industry Has Calls to Answer',
  uc_heading_2: 'and Revenue to Recover',
  uc_real_estate: 'Real Estate',
  uc_hr: 'Human Resources',
  uc_retail: 'Retail',
  uc_legal: 'Legal',
  uc_sales: 'Sales Teams',
  uc_services: 'Field Services',
  uc_hospitality: 'Hospitality',
  uc_education: 'Education',
  uc_healthcare: 'Healthcare',
  uc_mockup: 'Live Agent Dashboard',
  uc_dashboard: 'Real-time call intelligence',
  uc_hear: 'Hear the Agent in Action',
  uc_widget_title: 'Audio Widget Placeholder',
  uc_widget_sub: 'Insert your audio widget code here',
  uc_close: 'Close',

  vl_heading_1: 'Meet Your',
  vl_heading_2: 'AI Voice Agents',
  vl_subtitle: 'Each agent is trained for a specific industry and conversation style — so every caller gets an experience that feels like it was built for them',
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

  test_heading_1: 'Real Results from',
  test_heading_2: 'Real Businesses',
  test_subtitle: 'Owners, operators, and founders share what changed after deploying Infoteon AI voice agents.',
  test1_content: 'We were losing leads every weekend and after hours. Infoteon now answers every call, qualifies the prospect, and books them directly into our calendar. Our sales team shows up Monday with a full pipeline — no cold prospects, just people ready to talk.',
  test1_role: 'Owner, Home Services Company',
  test2_content: 'We tried to hire a receptionist to handle appointment calls. The cost, training, and turnover were exhausting. Infoteon replaced all of that — it books consultations, sends reminders, and cut our no-show rate by nearly half.',
  test2_role: 'Founder, Medical Aesthetics Clinic',
  test3_content: 'Our SDRs were spending 60% of their day on cold first-touch calls. After deploying Infoteon for outbound re-engagement, they only pick up the phone for warm opportunities. Pipeline velocity improved within the first two weeks.',
  test3_role: 'VP of Sales, B2B SaaS',
  test4_content: 'Dispatch was our bottleneck — missed calls, slow booking, technicians sitting idle. Infoteon answers every service call, captures job details, checks technician availability, and books the job. We increased booked jobs by 30% in the first month.',
  test4_role: 'Operations Director, Field Services',
  test5_content: 'The post-call analytics changed how we run our business. We can see exactly where leads drop off, which objections come up most, and which scripts convert. Every week we get smarter without guessing.',
  test5_role: 'Marketing Director, Consulting Firm',
  test6_content: 'We launched a white-label AI voice service for our agency clients using Infoteon. We now offer appointment setting, lead qualification, and after-hours coverage as a managed service. It added over $4,000 in monthly recurring revenue per client.',
  test6_role: 'Founder, Digital Marketing Agency',

  faq_heading_1: 'Frequently Asked',
  faq_heading_2: 'Questions',
  faq_subtitle: 'Everything you need to know about putting Infoteon to work for your business',
  faq_still: 'Still have questions?',
  faq_still_sub: "Our team is here to help. Reach out and we'll get back to you within 24 hours.",
  faq_contact: 'Contact Support',
  faq1_q: 'How fast does the AI call back a new lead?',
  faq1_a: 'Under 60 seconds. When a form submission or inbound inquiry comes in, Infoteon triggers an immediate callback. Speed is the biggest driver of conversion — leads contacted within a minute are far more likely to convert than those reached an hour later.',
  faq2_q: 'Will my customers know they are talking to an AI?',
  faq2_a: 'Our agents use advanced neural voice models that sound natural and professional. Most callers do not distinguish them from a human representative. If your business prefers transparency, you can configure the agent to introduce itself as an AI assistant.',
  faq3_q: 'What happens when a lead is too complex for the AI to handle?',
  faq3_a: 'Infoteon is built for hybrid workflows. When a caller needs human judgment — an upset customer, a high-value lead, or a complex issue — the AI transfers the call live to the right person on your team, with full context already captured.',
  faq4_q: 'How does the AI know our pricing, policies, and services?',
  faq4_a: 'You train it using the Knowledge Base feature. Upload your website, pricing sheets, SOPs, FAQs, and any internal documents. The AI uses that content as its source of truth — so every answer reflects your actual business, not generic information.',
  faq5_q: 'Can it connect to our CRM and calendar?',
  faq5_a: 'Yes. Infoteon integrates with Salesforce, HubSpot, Pipedrive, Zoho, Google Calendar, and 100+ other tools. Every call outcome — lead status, booking, disqualification reason — syncs automatically without any manual entry.',
  faq6_q: 'Is this only for inbound calls, or can it do outbound too?',
  faq6_a: 'Both. You can use Infoteon to answer inbound calls 24/7 and to run outbound campaigns against your CRM lists — re-engaging stale leads, calling back no-shows, or running first-touch telemarketing sequences. The same agent, two directions.',
  faq7_q: 'How quickly can we go live?',
  faq7_a: 'Most businesses are live within one day. Connect your phone number, upload your knowledge base, configure your qualification questions and calendar rules, and launch. No technical expertise required — our onboarding team walks you through every step.',
  faq8_q: 'What languages does the AI support?',
  faq8_a: 'Infoteon supports English, Spanish, Portuguese, French, German, Italian, and 20+ other languages. Each voice is built by native speakers for natural pronunciation. You can deploy separate agents per language or let the AI detect and adapt automatically.',

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

  footer_desc: 'Stop losing revenue to missed calls. Infoteon AI voice agents qualify leads, book appointments, and recover revenue — 24/7.',
  footer_platform: 'Platform',
  footer_solutions: 'Solutions',
  footer_support: 'Support',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 Infoteon, LLC. All rights reserved.',
  footer_cta_heading: 'Your next booked meeting is one missed call away.',
  footer_cta_sub: "Every hour without Infoteon is revenue your competitor might answer. Start today.",
  footer_watch_demo: 'Watch Demo',
  footer_schedule: 'Schedule a Call',
  footer_p1: 'Multi-language',
  footer_p2: 'Crystal Voice',
  footer_p3: 'Blast Performance',
  footer_p4: 'Multi-sessions',
  footer_p5: 'Command & Control',
  footer_p6: 'Private Telecom Network',
  footer_s1: 'Lead Qualification',
  footer_s2: 'Appointment Setting',
  footer_s3: 'Outbound Campaigns',
  footer_s4: 'Call Center Automation',
  footer_s5: 'Dispatch & Field Services',
  footer_s6: 'White-Label Agency',
  footer_legal1: 'Privacy Policy',
  footer_legal2: 'Terms of Service',
  footer_legal3: 'SLA',
  footer_legal4: 'Fair Use Policy',
};

const pt: Translations = {
  nav_login: 'Entrar',
  nav_watch_demo: 'Ver Demo',
  nav_check_demo: 'Ver Demo',

  hero_badge: 'IA que Liga de Volta em Menos de 60 Segundos',
  hero_heading_1: 'Pare de Perder Receita com',
  hero_heading_2: 'Chamadas Perdidas e Follow-Up Lento',
  hero_subtitle: 'Os agentes de voz IA da Infoteon atendem cada chamada, qualificam cada lead e agendam cada consulta — 24/7 — para que sua equipe de vendas fale apenas com compradores prontos para fechar.',
  hero_cta: 'Ver Demo',
  hero_ai_active: 'Agente IA Ativo',
  hero_handling_calls: 'Atendendo 247 chamadas/dia',
  hero_agent_speech: '"Olá, estou ligando da Infoteon — você solicitou mais informações sobre nossos planos. Tenho algumas perguntas rápidas para te direcionar corretamente. Você tem 90 segundos?"',
  hero_live: 'Transcrição ao vivo • Sentimento: Positivo • Lead: Qualificado',

  features_heading_1: 'Quatro Formas de Empresas',
  features_heading_2: 'Ganhar Mais Receita com o Infoteon',
  features_subtitle: 'Cada funcionalidade foi criada em torno de um objetivo: transformar conversas telefônicas em reuniões agendadas, negócios fechados e clientes mais satisfeitos — sem contratar mais pessoas.',
  features_learn_more: 'Saiba mais',
  feat1_title: 'Qualificação Instantânea de Leads',
  feat1_desc: 'A IA liga de volta para formulários enviados em 60 segundos, faz perguntas sobre orçamento, autoridade e prazo, e encaminha apenas compradores sérios para um humano fechar. Leads desqualificados são registrados com motivos — sua equipe nunca perde tempo com prospects frios.',
  feat2_title: 'Agendamento Automático de Consultas',
  feat2_desc: 'Prospects interessados somem quando agendar exige caixa postal ou trocas de mensagens. A Infoteon verifica sua agenda, propõe horários disponíveis, confirma a reunião e envia lembretes — convertendo intenção em receita antes que esfrie.',
  feat3_title: 'Campanhas de Reengajamento Outbound',
  feat3_desc: 'Leads parados, no-shows e negócios perdidos são pipeline inexplorado. A IA liga para suas listas no CRM, lida com o trabalho repetitivo de primeiro contato, supera objeções comuns e passa apenas oportunidades quentes para seus SDRs focarem em fechar.',
  feat4_title: 'Cobertura de Chamadas Fora do Horário',
  feat4_desc: 'Cada chamada perdida depois das 17h é um lead que seu concorrente pode atender. A Infoteon captura dados do chamador, registra mensagens estruturadas e encaminha casos urgentes em tempo real — para nenhuma consulta escapar, mesmo quando sua equipe está offline.',

  fa_label: 'Funcionalidades da Plataforma',
  fa_heading_1: 'A Inteligência por Trás de Cada',
  fa_heading_2: 'Chamada que Gera Receita',
  fa1_title: 'Base de Conhecimento IA',
  fa1_desc: 'Treine o agente com seu negócio real — sem respostas genéricas.',
  fa1_i1: 'Carregue preços e políticas',
  fa1_i2: 'Conecte seus SOPs e FAQs',
  fa1_i3: 'Respostas consistentes e precisas',
  fa2_title: 'Análise Pós-Chamada',
  fa2_desc: 'Cada chamada vira inteligência de negócio acionável.',
  fa2_i1: 'Transcrições e pontuações de sentimento',
  fa2_i2: 'Objeções e menções a concorrentes',
  fa2_i3: 'Melhore scripts com dados reais',
  fa3_title: 'Transferência Inteligente de Chamadas',
  fa3_desc: 'A IA lida com a rotina — humanos fecham as chamadas importantes.',
  fa3_i1: 'Transferência ao vivo para sua equipe',
  fa3_i2: 'Escalar leads de alto valor',
  fa3_i3: 'Reduzir interrupções desnecessárias',

  hiw_label: 'Como Funciona',
  hiw_heading_1: 'E se cada chamada perdida fosse',
  hiw_heading_2: 'automaticamente convertida em receita?',
  hiw_stat1: '<60s',
  hiw_stat1_label: 'Velocidade de Retorno',
  hiw_stat2_label: 'Disponibilidade',
  hiw_stat3: '10x',
  hiw_stat3_label: 'Mais Conversas',
  hiw_watch_demo: 'Ver Demo',

  hl_heading_1: 'Da chamada perdida à reunião agendada —',
  hl_heading_2: 'automaticamente',
  hl_subtitle: 'Veja exatamente como a Infoteon transforma tráfego telefônico em receita previsível para o seu negócio.',
  hl_watch_demo: 'Ver Demo',
  hl_experience: 'Veja agentes de voz IA da Infoteon gerenciando uma chamada de qualificação real',
  hl1_title: 'Nunca Perca uma Oportunidade de Receita',
  hl1_sub: 'Cada chamada atendida, cada lead capturado',
  hl1_desc: 'Chamadas perdidas são o vazamento de receita mais fácil de corrigir. A Infoteon atende 100% das chamadas inbound instantaneamente — capturando dados do chamador, entendendo a intenção e encaminhando cada consulta para o resultado certo. Sem caixa postal, sem leads perdidos.',
  hl1_f1: 'Zero chamadas perdidas, 24/7',
  hl1_f2: 'Captura estruturada de leads',
  hl1_f3: 'Roteamento baseado em intenção',
  hl1_f4: 'Registro no CRM em cada chamada',
  hl2_title: 'Seus Vendedores Falam Apenas com Compradores',
  hl2_sub: 'IA qualifica — humanos fecham',
  hl2_desc: 'Pare de pagar sua equipe de vendas para filtrar leads fracos. A Infoteon qualifica cada prospect por orçamento, autoridade, prazo e fit antes de um humano se envolver. Leads quentes são transferidos ao vivo, leads mornos são agendados, e leads inadequados são registrados com motivos.',
  hl2_f1: 'Triagem de orçamento e autoridade',
  hl2_f2: 'Qualificação de prazo',
  hl2_f3: 'Transferência ao vivo para leads quentes',
  hl2_f4: 'Registro de desqualificação',
  hl3_title: 'Agenda Cheia Sem o Trabalho Administrativo',
  hl3_sub: 'Reuniões agendadas enquanto você dorme',
  hl3_desc: 'Atrasos de mais de cinco minutos podem reduzir conversões em 30-50%. A Infoteon qualifica o prospect, verifica sua agenda em tempo real, propõe horários disponíveis, confirma o agendamento e envia lembretes — tudo em uma única conversa.',
  hl3_f1: 'Sincronização de agenda em tempo real',
  hl3_f2: 'Confirmação instantânea de agendamento',
  hl3_f3: 'Lembretes automáticos',
  hl3_f4: 'Redução de no-shows',
  hl4_title: 'Transforme Cada Chamada em uma Decisão de Negócio',
  hl4_sub: 'Inteligência pós-chamada que melhora a receita',
  hl4_desc: 'Inteligência valiosa de negócios está escondida dentro das suas conversas telefônicas — objeções, menções a concorrentes, confusão sobre preços e momentos onde negócios são ganhos ou perdidos. A Infoteon traz tudo à tona: transcrições, pontuações de sentimento, padrões recorrentes e sinais de coaching.',
  hl4_f1: 'Transcrições completas de chamadas',
  hl4_f2: 'Análise de objeções e sentimento',
  hl4_f3: 'Melhoria de scripts e coaching',
  hl4_f4: 'Métricas de desempenho de campanhas',
  hl5_title: 'Central de Atendimento IA — Lide com Volume Sem Contratar Mais',
  hl5_sub: 'Escale inbound e outbound sem aumentar a equipe',
  hl5_desc: 'Centrais de atendimento tradicionais têm custos fixos de pessoal enquanto o volume de chamadas muda ao longo do dia. A Infoteon atua como primeira camada — respondendo, identificando intenção, completando fluxos rotineiros e escalando apenas exceções para sua equipe. Até 80% das interações são baseadas em regras e podem ser tratadas totalmente pela IA.',
  hl5_f1: 'Deflexão de tickets nível 1',
  hl5_f2: 'Tempos de espera reduzidos',
  hl5_f3: 'Menor custo por contato',
  hl5_f4: 'Cobertura consistente em fusos horários',
  hl6_title: 'Suporte ao Cliente IA — Resolva Solicitações Rotineiras Instantaneamente',
  hl6_sub: 'Libere sua equipe de perguntas repetitivas',
  hl6_desc: 'A maioria das equipes de suporte não está sobrecarregada por problemas complexos — está sobrecarregada pelas mesmas perguntas todo dia: status de pedidos, faturas, políticas de devolução, reagendamentos e troubleshooting básico. A Infoteon resolve tudo isso instantaneamente, escalando apenas quando o julgamento humano é realmente necessário.',
  hl6_f1: 'Respostas instantâneas para perguntas repetidas',
  hl6_f2: 'Integração com CRM e helpdesk',
  hl6_f3: 'Reembolsos e reagendamentos automáticos',
  hl6_f4: 'Escalada apenas para casos complexos',
  hl7_title: 'Assistente de Despacho IA — Transforme Cada Chamada de Serviço em um Trabalho Agendado',
  hl7_sub: 'Para serviços domésticos, equipes de campo e empresas de reparos',
  hl7_desc: 'Para empresas de serviços de campo, o despacho é onde receita e experiência do cliente entram em colapso. Chamadas são perdidas, trabalhos são agendados lentamente e clientes vão para concorrentes — especialmente fora do horário. A Infoteon atende chamadas, captura detalhes do trabalho, verifica disponibilidade do técnico, agenda o trabalho e envia ETAs automaticamente.',
  hl7_f1: 'Agendamento de trabalhos fora do horário',
  hl7_f2: 'Verificação de disponibilidade do técnico',
  hl7_f3: 'Triagem e roteamento de emergências',
  hl7_f4: 'ETA e confirmações automáticas',
  hl8_title: 'Transferência Inteligente IA-Humano — O Melhor dos Dois Mundos',
  hl8_sub: 'Eficiência da automação mais segurança humana na mesma chamada',
  hl8_desc: 'A IA responde primeiro, lida com perguntas repetitivas, qualifica o chamador e transfere apenas as chamadas certas para sua equipe. Esse modelo híbrido mantém sua equipe focada em conversas onde julgamento, empatia ou capacidade de fechamento importam — enquanto os clientes nunca ficam presos na automação.',
  hl8_f1: 'Contexto passado em cada transferência',
  hl8_f2: 'Regras de escalada baseadas em gatilhos',
  hl8_f3: 'Menor tempo médio de atendimento',
  hl8_f4: 'Segurança humana quando importa',
  hl9_title: 'Base de Conhecimento IA — Respostas Consistentes e Precisas Sempre',
  hl9_sub: 'Treinada no seu negócio real, não em informações genéricas',
  hl9_desc: 'Um agente de voz só é tão bom quanto o que sabe. Carregue seus preços, políticas, menus de serviço, SOPs, FAQs, isenções legais e documentos técnicos. A Infoteon usa seu conteúdo real como fonte de verdade — eliminando respostas inconsistentes, erros de política e adivinhações em cada interação com o cliente.',
  hl9_f1: 'Carregue PDFs, site, tabelas de preços',
  hl9_f2: 'Apenas respostas específicas do negócio',
  hl9_f3: 'Precisão de políticas e conformidade',
  hl9_f4: 'Atualize o conhecimento sem reconstruir o agente',
  hl10_title: 'Análise Pós-Chamada — Seu Telefone Vira uma Fonte de Dados',
  hl10_sub: 'Pare de adivinhar o que os clientes querem',
  hl10_desc: 'Cada conversa contém sinais que a maioria das empresas nunca vê: objeções, menções a concorrentes, confusão sobre preços e momentos onde o interesse aumenta ou cai. A Infoteon transforma cada chamada em um dado estruturado — transcrições, pontuações de sentimento, clusters de tópicos e sinais de coaching que ajudam a melhorar receita, mensagens e operações continuamente.',
  hl10_f1: 'Transcrições e sentimento em cada chamada',
  hl10_f2: 'Identificação de objeções recorrentes',
  hl10_f3: 'Sinais de coaching de vendas',
  hl10_f4: 'Dados de otimização de campanhas e scripts',
  hl11_title: 'Um Pacote Completo — Tudo que Seu Negócio Precisa',
  hl11_sub: 'Cobertura telefônica IA completa, gerenciada do início ao fim',
  hl11_desc: 'Oferecemos um pacote que inclui atendimento IA, agendamento de consultas, qualificação de leads, suporte ao cliente e campanhas outbound — totalmente gerenciado para o seu negócio. Muitas pequenas empresas precisam de melhor cobertura telefônica e automação, mas não querem construir ou gerenciar a tecnologia elas mesmas. Cuidamos de tudo.',
  hl11_f1: 'Atendimento IA e qualificação de leads',
  hl11_f2: 'Agendamento e campanhas outbound',
  hl11_f3: 'Cobertura de suporte ao cliente',
  hl11_f4: 'Totalmente gerenciado — sem configuração técnica necessária',

  stat1_label: 'Empresas Ativas',
  stat2_label: 'Chamadas Atendidas',
  stat3_label: 'Taxa de Satisfação',
  stat4_label: 'Receita Recuperada',
  stats_cta: 'Centenas de empresas estão convertendo chamadas perdidas em reuniões agendadas,',
  stats_cta_part2: ' pipelines qualificados',
  stats_cta_part3: ', e receita fechada — sem contratar uma única pessoa.',

  uc_label: 'Casos de Uso',
  uc_heading_1: 'Todo Setor Tem Chamadas para Atender',
  uc_heading_2: 'e Receita para Recuperar',
  uc_real_estate: 'Imóveis',
  uc_hr: 'Recursos Humanos',
  uc_retail: 'Varejo',
  uc_legal: 'Jurídico',
  uc_sales: 'Equipes de Vendas',
  uc_services: 'Serviços de Campo',
  uc_hospitality: 'Hospitalidade',
  uc_education: 'Educação',
  uc_healthcare: 'Saúde',
  uc_mockup: 'Painel do Agente ao Vivo',
  uc_dashboard: 'Inteligência de chamadas em tempo real',
  uc_hear: 'Ouça o Agente em Ação',
  uc_widget_title: 'Widget de Áudio',
  uc_widget_sub: 'Insira o código do seu widget de áudio aqui',
  uc_close: 'Fechar',

  vl_heading_1: 'Conheça Seus',
  vl_heading_2: 'Agentes de Voz IA',
  vl_subtitle: 'Cada agente é treinado para um setor e estilo de conversa específicos — para que cada chamador receba uma experiência que parece ter sido feita para ele',
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

  test_heading_1: 'Resultados Reais de',
  test_heading_2: 'Empresas Reais',
  test_subtitle: 'Donos, operadores e fundadores compartilham o que mudou após implantar os agentes de voz IA da Infoteon.',
  test1_content: 'Estávamos perdendo leads todo fim de semana e fora do horário. A Infoteon agora atende cada chamada, qualifica o prospect e agenda diretamente na nossa agenda. Nossa equipe de vendas chega na segunda com um pipeline cheio — sem prospects frios, só pessoas prontas para conversar.',
  test1_role: 'Dono, Empresa de Serviços Domésticos',
  test2_content: 'Tentamos contratar uma recepcionista para atender chamadas de agendamento. O custo, treinamento e rotatividade eram exaustivos. A Infoteon substituiu tudo isso — agenda consultas, envia lembretes e reduziu nossa taxa de no-show em quase metade.',
  test2_role: 'Fundador, Clínica de Estética Médica',
  test3_content: 'Nossos SDRs passavam 60% do dia em chamadas frias de primeiro contato. Após implantar a Infoteon para reengajamento outbound, eles só atendem o telefone para oportunidades quentes. A velocidade do pipeline melhorou nas primeiras duas semanas.',
  test3_role: 'VP de Vendas, SaaS B2B',
  test4_content: 'O despacho era nosso gargalo — chamadas perdidas, agendamento lento, técnicos parados. A Infoteon atende cada chamada de serviço, captura detalhes do trabalho, verifica disponibilidade do técnico e agenda o serviço. Aumentamos os trabalhos agendados em 30% no primeiro mês.',
  test4_role: 'Diretor de Operações, Serviços de Campo',
  test5_content: 'As análises pós-chamada mudaram como gerimos o negócio. Vemos exatamente onde os leads desistem, quais objeções surgem mais e quais scripts convertem. Toda semana ficamos mais inteligentes sem precisar adivinhar.',
  test5_role: 'Diretora de Marketing, Consultoria',
  test6_content: 'Lançamos um serviço de voz IA white-label para nossos clientes de agência usando a Infoteon. Agora oferecemos agendamento de consultas, qualificação de leads e cobertura fora do horário como serviço gerenciado. Isso adicionou mais de $4.000 em receita recorrente mensal por cliente.',
  test6_role: 'Fundador, Agência de Marketing Digital',

  faq_heading_1: 'Perguntas',
  faq_heading_2: 'Frequentes',
  faq_subtitle: 'Tudo que você precisa saber para colocar a Infoteon para trabalhar no seu negócio',
  faq_still: 'Ainda tem dúvidas?',
  faq_still_sub: 'Nossa equipe está aqui para ajudar. Entre em contato e responderemos em até 24 horas.',
  faq_contact: 'Contatar Suporte',
  faq1_q: 'Com que rapidez a IA liga de volta para um novo lead?',
  faq1_a: 'Em menos de 60 segundos. Quando um formulário é enviado ou uma consulta inbound chega, a Infoteon aciona um retorno imediato. Velocidade é o maior driver de conversão — leads contactados em um minuto convertem muito mais do que os alcançados uma hora depois.',
  faq2_q: 'Meus clientes vão saber que estão falando com uma IA?',
  faq2_a: 'Nossos agentes usam modelos de voz neural avançados que soam naturais e profissionais. A maioria dos chamadores não os distingue de um representante humano. Se seu negócio prefere transparência, você pode configurar o agente para se apresentar como assistente de IA.',
  faq3_q: 'O que acontece quando um lead é complexo demais para a IA lidar?',
  faq3_a: 'A Infoteon foi criada para fluxos de trabalho híbridos. Quando um chamador precisa de julgamento humano — um cliente insatisfeito, um lead de alto valor ou um problema complexo — a IA transfere a chamada ao vivo para a pessoa certa na sua equipe, com todo o contexto já capturado.',
  faq4_q: 'Como a IA aprende sobre nossos preços, políticas e serviços?',
  faq4_a: 'Você a treina usando o recurso Base de Conhecimento. Carregue seu site, tabelas de preços, SOPs, FAQs e qualquer documento interno. A IA usa esse conteúdo como fonte de verdade — para que cada resposta reflita seu negócio real, não informações genéricas.',
  faq5_q: 'Pode se conectar ao nosso CRM e agenda?',
  faq5_a: 'Sim. A Infoteon integra com Salesforce, HubSpot, Pipedrive, Zoho, Google Calendar e mais de 100 outras ferramentas. Cada resultado de chamada — status do lead, agendamento, motivo de desqualificação — sincroniza automaticamente sem entrada manual.',
  faq6_q: 'Isso é apenas para chamadas inbound, ou faz outbound também?',
  faq6_a: 'Ambos. Você pode usar a Infoteon para atender chamadas inbound 24/7 e para rodar campanhas outbound nas suas listas de CRM — reengajando leads parados, ligando de volta para no-shows ou rodando sequências de telemarketing de primeiro contato. O mesmo agente, duas direções.',
  faq7_q: 'Com que rapidez podemos entrar ao vivo?',
  faq7_a: 'A maioria das empresas entra ao vivo em um dia. Conecte seu número de telefone, carregue sua base de conhecimento, configure suas perguntas de qualificação e regras de agenda, e lance. Nenhuma expertise técnica necessária — nossa equipe de onboarding te guia em cada etapa.',
  faq8_q: 'Quais idiomas a IA suporta?',
  faq8_a: 'A Infoteon suporta Inglês, Espanhol, Português, Francês, Alemão, Italiano e mais de 20 outros idiomas. Cada voz é construída por falantes nativos para pronúncia natural. Você pode implantar agentes separados por idioma ou deixar a IA detectar e adaptar automaticamente.',

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

  footer_desc: 'Pare de perder receita com chamadas perdidas. Os agentes de voz IA da Infoteon qualificam leads, agendam consultas e recuperam receita — 24/7.',
  footer_platform: 'Plataforma',
  footer_solutions: 'Soluções',
  footer_support: 'Suporte',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 Infoteon, LLC. Todos os direitos reservados.',
  footer_cta_heading: 'Sua próxima reunião agendada está a uma chamada perdida de distância.',
  footer_cta_sub: 'Cada hora sem a Infoteon é receita que seu concorrente pode estar respondendo. Comece hoje.',
  footer_watch_demo: 'Ver Demo',
  footer_schedule: 'Agendar uma Chamada',
  footer_p1: 'Multi-idioma',
  footer_p2: 'Voz Cristalina',
  footer_p3: 'Alto Desempenho',
  footer_p4: 'Multi-sessões',
  footer_p5: 'Comando e Controle',
  footer_p6: 'Rede Telecom Privada',
  footer_s1: 'Qualificação de Leads',
  footer_s2: 'Agendamento de Consultas',
  footer_s3: 'Campanhas Outbound',
  footer_s4: 'Automação de Call Center',
  footer_s5: 'Despacho e Serviços de Campo',
  footer_s6: 'Agência White-Label',
  footer_legal1: 'Política de Privacidade',
  footer_legal2: 'Termos de Serviço',
  footer_legal3: 'SLA',
  footer_legal4: 'Política de Uso Justo',
};

const es: Translations = {
  nav_login: 'Iniciar sesión',
  nav_watch_demo: 'Ver Demo',
  nav_check_demo: 'Ver Demo',

  hero_badge: 'IA que Devuelve Llamadas en Menos de 60 Segundos',
  hero_heading_1: 'Deja de Perder Ingresos por',
  hero_heading_2: 'Llamadas Perdidas y Seguimiento Lento',
  hero_subtitle: 'Los agentes de voz IA de Infoteon responden cada llamada, califican cada lead y agendan cada cita — 24/7 — para que tu equipo de ventas solo hable con compradores listos para cerrar.',
  hero_cta: 'Ver Demo',
  hero_ai_active: 'Agente IA Activo',
  hero_handling_calls: 'Gestionando 247 llamadas/día',
  hero_agent_speech: '"Hola, llamo de Infoteon — solicitaste más información sobre nuestros planes. Tengo un par de preguntas rápidas para orientarte mejor. ¿Tienes 90 segundos?"',
  hero_live: 'Transcripción en vivo • Sentimiento: Positivo • Lead: Calificado',

  features_heading_1: 'Cuatro Formas en que las Empresas',
  features_heading_2: 'Ganan Más Ingresos con Infoteon',
  features_subtitle: 'Cada función fue creada con un único objetivo: convertir conversaciones telefónicas en reuniones agendadas, negocios cerrados y clientes más satisfechos — sin aumentar el equipo.',
  features_learn_more: 'Saber más',
  feat1_title: 'Calificación Instantánea de Leads',
  feat1_desc: 'La IA devuelve la llamada a formularios enviados en 60 segundos, hace preguntas sobre presupuesto, autoridad y plazo, y dirige solo a compradores serios hacia un cierre humano. Los leads no aptos se registran con motivos — tu equipo nunca pierde tiempo con prospectos fríos.',
  feat2_title: 'Agendamiento de Citas en Piloto Automático',
  feat2_desc: 'Los prospectos interesados desaparecen cuando agendar requiere buzón de voz o mensajes de ida y vuelta. Infoteon verifica tu calendario, propone horarios disponibles, confirma la reunión y envía recordatorios — convirtiendo intención en ingresos antes de que se enfríe.',
  feat3_title: 'Campañas de Reactivación Outbound',
  feat3_desc: 'Los leads inactivos, no-shows y negocios perdidos son pipeline sin explotar. La IA llama a tus listas del CRM, hace el trabajo repetitivo de primer contacto, supera objeciones comunes y entrega solo oportunidades calientes — manteniendo a tus SDRs enfocados en cerrar.',
  feat4_title: 'Cobertura de Llamadas Fuera del Horario',
  feat4_desc: 'Cada llamada perdida después de las 5 PM es un lead que tu competidor podría responder. Infoteon captura datos del llamante, registra mensajes estructurados y enruta casos urgentes en tiempo real — para que ninguna consulta se escape, incluso cuando tu equipo está offline.',

  fa_label: 'Funcionalidades de la Plataforma',
  fa_heading_1: 'La Inteligencia Detrás de Cada',
  fa_heading_2: 'Llamada que Genera Ingresos',
  fa1_title: 'Base de Conocimiento IA',
  fa1_desc: 'Entrena al agente con tu negocio real — sin respuestas genéricas.',
  fa1_i1: 'Sube precios y políticas',
  fa1_i2: 'Conecta tus SOPs y FAQs',
  fa1_i3: 'Respuestas consistentes y precisas',
  fa2_title: 'Análisis Post-Llamada',
  fa2_desc: 'Cada llamada se convierte en inteligencia empresarial accionable.',
  fa2_i1: 'Transcripciones y puntuaciones de sentimiento',
  fa2_i2: 'Objeciones y menciones de competidores',
  fa2_i3: 'Mejora scripts con datos reales',
  fa3_title: 'Transferencia Inteligente de Llamadas',
  fa3_desc: 'La IA maneja la rutina — los humanos cierran las llamadas importantes.',
  fa3_i1: 'Transferencia en vivo a tu equipo',
  fa3_i2: 'Escalar leads de alto valor',
  fa3_i3: 'Reducir interrupciones innecesarias',

  hiw_label: 'Cómo Funciona',
  hiw_heading_1: '¿Y si cada llamada perdida fuera',
  hiw_heading_2: 'convertida automáticamente en ingresos?',
  hiw_stat1: '<60s',
  hiw_stat1_label: 'Velocidad de Respuesta',
  hiw_stat2_label: 'Disponibilidad',
  hiw_stat3: '10x',
  hiw_stat3_label: 'Más Conversaciones',
  hiw_watch_demo: 'Ver Demo',

  hl_heading_1: 'De llamada perdida a reunión agendada —',
  hl_heading_2: 'automáticamente',
  hl_subtitle: 'Mira exactamente cómo Infoteon convierte el tráfico telefónico en ingresos predecibles para tu negocio.',
  hl_watch_demo: 'Ver Demo',
  hl_experience: 'Mira agentes de voz IA de Infoteon gestionando una llamada de calificación real',
  hl1_title: 'Nunca Pierdas una Oportunidad de Ingresos',
  hl1_sub: 'Cada llamada respondida, cada lead capturado',
  hl1_desc: 'Las llamadas perdidas son la fuga de ingresos más fácil de solucionar. Infoteon responde el 100% de las llamadas entrantes al instante — capturando datos del llamante, entendiendo la intención y enrutando cada consulta hacia el resultado correcto. Sin buzón de voz, sin leads perdidos.',
  hl1_f1: 'Cero llamadas perdidas, 24/7',
  hl1_f2: 'Captura estructurada de leads',
  hl1_f3: 'Enrutamiento basado en intención',
  hl1_f4: 'Registro en CRM en cada llamada',
  hl2_title: 'Tus Vendedores Solo Hablan con Compradores',
  hl2_sub: 'La IA califica — los humanos cierran',
  hl2_desc: 'Deja de pagar a tu equipo de ventas para filtrar leads débiles. Infoteon califica cada prospecto por presupuesto, autoridad, plazo y compatibilidad antes de que un humano intervenga. Los leads calientes se transfieren en vivo, los tibios se agendan, y los no aptos se registran con motivos.',
  hl2_f1: 'Filtro de presupuesto y autoridad',
  hl2_f2: 'Calificación de plazo',
  hl2_f3: 'Transferencia en vivo para leads calientes',
  hl2_f4: 'Registro de descalificación',
  hl3_title: 'Un Calendario Más Lleno Sin el Trabajo Administrativo',
  hl3_sub: 'Reuniones agendadas mientras duermes',
  hl3_desc: 'Los retrasos de más de cinco minutos pueden reducir las conversiones un 30-50%. Infoteon califica al prospecto, verifica tu calendario en tiempo real, propone horarios disponibles, confirma la cita y envía recordatorios — todo en una sola conversación.',
  hl3_f1: 'Sincronización de calendario en tiempo real',
  hl3_f2: 'Confirmación instantánea de cita',
  hl3_f3: 'Recordatorios automáticos',
  hl3_f4: 'Reducción de no-shows',
  hl4_title: 'Convierte Cada Llamada en una Decisión Empresarial',
  hl4_sub: 'Inteligencia post-llamada que mejora los ingresos',
  hl4_desc: 'Inteligencia empresarial valiosa está oculta dentro de tus conversaciones telefónicas — objeciones, menciones de competidores, confusión sobre precios y momentos donde los negocios se ganan o se pierden. Infoteon lo saca todo a la superficie: transcripciones, puntuaciones de sentimiento, patrones recurrentes y señales de coaching.',
  hl4_f1: 'Transcripciones completas de llamadas',
  hl4_f2: 'Análisis de objeciones y sentimiento',
  hl4_f3: 'Mejora de scripts y coaching',
  hl4_f4: 'Métricas de rendimiento de campañas',
  hl5_title: 'Call Center IA — Maneja el Volumen Sin Contratar Más Personal',
  hl5_sub: 'Escala entrantes y salientes sin aumentar el equipo',
  hl5_desc: 'Los call centers tradicionales tienen costos fijos de personal mientras el volumen de llamadas cambia todo el día. Infoteon actúa como primera capa — respondiendo, identificando intención, completando flujos rutinarios y escalando solo excepciones a tu equipo. Hasta el 80% de las interacciones son basadas en reglas y pueden ser manejadas totalmente por la IA.',
  hl5_f1: 'Deflexión de tickets de nivel 1',
  hl5_f2: 'Tiempos de espera reducidos',
  hl5_f3: 'Menor costo por contacto',
  hl5_f4: 'Cobertura consistente en zonas horarias',
  hl6_title: 'Soporte al Cliente IA — Resuelve Solicitudes Rutinarias al Instante',
  hl6_sub: 'Libera a tu equipo de preguntas repetitivas',
  hl6_desc: 'La mayoría de los equipos de soporte no están abrumados por problemas complejos — están abrumados por las mismas preguntas todos los días: estado de pedidos, facturas, políticas de devolución, reprogramaciones y soporte técnico básico. Infoteon resuelve todo esto al instante, escalando solo cuando el juicio humano es realmente necesario.',
  hl6_f1: 'Respuestas instantáneas a preguntas repetidas',
  hl6_f2: 'Integración con CRM y helpdesk',
  hl6_f3: 'Reembolsos y reprogramaciones automáticas',
  hl6_f4: 'Escalada solo para casos complejos',
  hl7_title: 'Asistente de Despacho IA — Convierte Cada Llamada de Servicio en un Trabajo Agendado',
  hl7_sub: 'Para servicios del hogar, equipos de campo y empresas de reparación',
  hl7_desc: 'Para empresas de servicios de campo, el despacho es donde los ingresos y la experiencia del cliente se rompen. Las llamadas se pierden, los trabajos se agendan lentamente y los clientes se van a la competencia — especialmente fuera del horario. Infoteon responde llamadas, captura detalles del trabajo, verifica disponibilidad del técnico, agenda el trabajo y envía ETAs automáticamente.',
  hl7_f1: 'Agendamiento de trabajos fuera del horario',
  hl7_f2: 'Verificación de disponibilidad del técnico',
  hl7_f3: 'Triaje y enrutamiento de emergencias',
  hl7_f4: 'ETAs y confirmaciones automáticas',
  hl8_title: 'Transferencia Inteligente IA-Humano — Lo Mejor de Ambos Mundos',
  hl8_sub: 'Eficiencia de automatización más seguridad humana en la misma llamada',
  hl8_desc: 'La IA responde primero, maneja preguntas repetitivas, califica al llamante y transfiere solo las llamadas correctas a tu equipo. Este modelo híbrido mantiene a tu equipo enfocado en conversaciones donde el juicio, la empatía o la capacidad de cierre importan — mientras los clientes nunca se sienten atrapados en la automatización.',
  hl8_f1: 'Contexto pasado en cada transferencia',
  hl8_f2: 'Reglas de escalada basadas en disparadores',
  hl8_f3: 'Menor tiempo promedio de manejo',
  hl8_f4: 'Seguridad humana cuando importa',
  hl9_title: 'Base de Conocimiento IA — Respuestas Consistentes y Precisas Siempre',
  hl9_sub: 'Entrenada en tu negocio real, no en información genérica',
  hl9_desc: 'Un agente de voz solo es tan bueno como lo que sabe. Sube tus precios, políticas, menús de servicio, SOPs, FAQs, exenciones legales y documentos técnicos. Infoteon usa tu contenido real como fuente de verdad — eliminando respuestas inconsistentes, errores de política y suposiciones en cada interacción con el cliente.',
  hl9_f1: 'Sube PDFs, sitio web, tablas de precios',
  hl9_f2: 'Solo respuestas específicas del negocio',
  hl9_f3: 'Precisión de políticas y cumplimiento',
  hl9_f4: 'Actualiza el conocimiento sin reconstruir el agente',
  hl10_title: 'Análisis Post-Llamada — Tu Teléfono se Convierte en una Fuente de Datos',
  hl10_sub: 'Deja de adivinar qué quieren los clientes',
  hl10_desc: 'Cada conversación contiene señales que la mayoría de las empresas nunca ven: objeciones, menciones de competidores, confusión sobre precios y momentos donde el interés sube o baja. Infoteon convierte cada llamada en un punto de datos estructurado — transcripciones, puntuaciones de sentimiento, clusters de temas y señales de coaching que ayudan a mejorar ingresos, mensajes y operaciones continuamente.',
  hl10_f1: 'Transcripciones y sentimiento en cada llamada',
  hl10_f2: 'Identificación de objeciones recurrentes',
  hl10_f3: 'Señales de coaching de ventas',
  hl10_f4: 'Datos de optimización de campañas y scripts',
  hl11_title: 'Un Paquete Completo — Todo lo que Tu Negocio Necesita',
  hl11_sub: 'Cobertura telefónica IA completa, gestionada de principio a fin',
  hl11_desc: 'Ofrecemos un paquete que incluye respuesta IA, agendamiento de citas, calificación de leads, soporte al cliente y campañas salientes — completamente gestionado para tu negocio. Muchas pequeñas empresas necesitan mejor cobertura telefónica y automatización pero no quieren construir ni gestionar la tecnología ellas mismas. Nos encargamos de todo.',
  hl11_f1: 'Respuesta IA y calificación de leads',
  hl11_f2: 'Agendamiento y campañas salientes',
  hl11_f3: 'Cobertura de soporte al cliente',
  hl11_f4: 'Completamente gestionado — sin configuración técnica necesaria',

  stat1_label: 'Empresas Activas',
  stat2_label: 'Llamadas Gestionadas',
  stat3_label: 'Tasa de Satisfacción',
  stat4_label: 'Ingresos Recuperados',
  stats_cta: 'Cientos de empresas están convirtiendo llamadas perdidas en reuniones agendadas,',
  stats_cta_part2: ' pipelines calificados',
  stats_cta_part3: ', e ingresos cerrados — sin contratar una sola persona.',

  uc_label: 'Casos de Uso',
  uc_heading_1: 'Cada Sector Tiene Llamadas que Responder',
  uc_heading_2: 'e Ingresos que Recuperar',
  uc_real_estate: 'Inmobiliaria',
  uc_hr: 'Recursos Humanos',
  uc_retail: 'Retail',
  uc_legal: 'Legal',
  uc_sales: 'Equipos de Ventas',
  uc_services: 'Servicios de Campo',
  uc_hospitality: 'Hospitalidad',
  uc_education: 'Educación',
  uc_healthcare: 'Salud',
  uc_mockup: 'Panel del Agente en Vivo',
  uc_dashboard: 'Inteligencia de llamadas en tiempo real',
  uc_hear: 'Escucha al Agente en Acción',
  uc_widget_title: 'Widget de Audio',
  uc_widget_sub: 'Inserta aquí el código de tu widget de audio',
  uc_close: 'Cerrar',

  vl_heading_1: 'Conoce a Tus',
  vl_heading_2: 'Agentes de Voz IA',
  vl_subtitle: 'Cada agente está entrenado para un sector y estilo de conversación específicos — para que cada llamante reciba una experiencia que parece hecha para él',
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

  test_heading_1: 'Resultados Reales de',
  test_heading_2: 'Empresas Reales',
  test_subtitle: 'Propietarios, operadores y fundadores comparten lo que cambió después de desplegar los agentes de voz IA de Infoteon.',
  test1_content: 'Estábamos perdiendo leads cada fin de semana y fuera del horario. Infoteon ahora responde cada llamada, califica al prospecto y lo agenda directamente en nuestro calendario. Nuestro equipo de ventas llega el lunes con un pipeline lleno — sin prospectos fríos, solo personas listas para hablar.',
  test1_role: 'Propietario, Empresa de Servicios del Hogar',
  test2_content: 'Intentamos contratar una recepcionista para manejar las llamadas de citas. El costo, entrenamiento y rotación eran agotadores. Infoteon reemplazó todo eso — agenda consultas, envía recordatorios y redujo nuestra tasa de no-show casi a la mitad.',
  test2_role: 'Fundador, Clínica de Estética Médica',
  test3_content: 'Nuestros SDRs pasaban el 60% del día en llamadas frías de primer contacto. Después de desplegar Infoteon para reactivación outbound, solo toman el teléfono para oportunidades calientes. La velocidad del pipeline mejoró en las primeras dos semanas.',
  test3_role: 'VP de Ventas, SaaS B2B',
  test4_content: 'El despacho era nuestro cuello de botella — llamadas perdidas, agendamiento lento, técnicos sin trabajo. Infoteon responde cada llamada de servicio, captura detalles del trabajo, verifica disponibilidad del técnico y agenda el trabajo. Aumentamos los trabajos agendados un 30% en el primer mes.',
  test4_role: 'Director de Operaciones, Servicios de Campo',
  test5_content: 'Los análisis post-llamada cambiaron cómo dirigimos el negocio. Podemos ver exactamente dónde los leads abandonan, qué objeciones surgen más y qué scripts convierten. Cada semana nos volvemos más inteligentes sin adivinar.',
  test5_role: 'Directora de Marketing, Consultoría',
  test6_content: 'Lanzamos un servicio de voz IA white-label para nuestros clientes de agencia usando Infoteon. Ahora ofrecemos agendamiento de citas, calificación de leads y cobertura fuera del horario como servicio gestionado. Añadió más de $4,000 en ingresos recurrentes mensuales por cliente.',
  test6_role: 'Fundador, Agencia de Marketing Digital',

  faq_heading_1: 'Preguntas',
  faq_heading_2: 'Frecuentes',
  faq_subtitle: 'Todo lo que necesitas saber para poner Infoteon a trabajar en tu negocio',
  faq_still: '¿Aún tienes preguntas?',
  faq_still_sub: 'Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos en 24 horas.',
  faq_contact: 'Contactar Soporte',
  faq1_q: '¿Qué tan rápido devuelve la llamada la IA a un nuevo lead?',
  faq1_a: 'En menos de 60 segundos. Cuando llega un formulario enviado o una consulta entrante, Infoteon activa una devolución de llamada inmediata. La velocidad es el mayor impulsor de conversión — los leads contactados en un minuto convierten mucho más que los alcanzados una hora después.',
  faq2_q: '¿Mis clientes sabrán que están hablando con una IA?',
  faq2_a: 'Nuestros agentes usan modelos de voz neural avanzados que suenan naturales y profesionales. La mayoría de los llamantes no los distingue de un representante humano. Si tu negocio prefiere transparencia, puedes configurar el agente para que se presente como asistente de IA.',
  faq3_q: '¿Qué pasa cuando un lead es demasiado complejo para que la IA lo maneje?',
  faq3_a: 'Infoteon está diseñado para flujos de trabajo híbridos. Cuando un llamante necesita juicio humano — un cliente molesto, un lead de alto valor o un problema complejo — la IA transfiere la llamada en vivo a la persona correcta en tu equipo, con todo el contexto ya capturado.',
  faq4_q: '¿Cómo aprende la IA sobre nuestros precios, políticas y servicios?',
  faq4_a: 'La entrenas usando la función Base de Conocimiento. Sube tu sitio web, tablas de precios, SOPs, FAQs y cualquier documento interno. La IA usa ese contenido como fuente de verdad — para que cada respuesta refleje tu negocio real, no información genérica.',
  faq5_q: '¿Puede conectarse a nuestro CRM y calendario?',
  faq5_a: 'Sí. Infoteon se integra con Salesforce, HubSpot, Pipedrive, Zoho, Google Calendar y más de 100 otras herramientas. Cada resultado de llamada — estado del lead, cita, motivo de descalificación — se sincroniza automáticamente sin entrada manual.',
  faq6_q: '¿Esto es solo para llamadas entrantes, o también hace salientes?',
  faq6_a: 'Ambos. Puedes usar Infoteon para responder llamadas entrantes 24/7 y para ejecutar campañas salientes en tus listas de CRM — reactivando leads inactivos, devolviendo llamadas a no-shows o ejecutando secuencias de telemarketing de primer contacto. El mismo agente, dos direcciones.',
  faq7_q: '¿Con qué rapidez podemos lanzar?',
  faq7_a: 'La mayoría de las empresas están en vivo en un día. Conecta tu número de teléfono, sube tu base de conocimiento, configura tus preguntas de calificación y reglas de calendario, y lanza. No se requiere experiencia técnica — nuestro equipo de onboarding te guía en cada paso.',
  faq8_q: '¿Qué idiomas soporta la IA?',
  faq8_a: 'Infoteon soporta Inglés, Español, Portugués, Francés, Alemán, Italiano y más de 20 otros idiomas. Cada voz está construida por hablantes nativos para pronunciación natural. Puedes desplegar agentes separados por idioma o dejar que la IA detecte y se adapte automáticamente.',

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

  footer_desc: 'Deja de perder ingresos por llamadas perdidas. Los agentes de voz IA de Infoteon califican leads, agendan citas y recuperan ingresos — 24/7.',
  footer_platform: 'Plataforma',
  footer_solutions: 'Soluciones',
  footer_support: 'Soporte',
  footer_legal: 'Legal',
  footer_copyright: '© 2026 Infoteon, LLC. Todos los derechos reservados.',
  footer_cta_heading: 'Tu próxima reunión agendada está a una llamada perdida de distancia.',
  footer_cta_sub: 'Cada hora sin Infoteon es un ingreso que tu competidor podría estar respondiendo. Empieza hoy.',
  footer_watch_demo: 'Ver Demo',
  footer_schedule: 'Programar una Llamada',
  footer_p1: 'Multi-idioma',
  footer_p2: 'Voz Cristalina',
  footer_p3: 'Alto Rendimiento',
  footer_p4: 'Multi-sesiones',
  footer_p5: 'Comando y Control',
  footer_p6: 'Red Telecom Privada',
  footer_s1: 'Calificación de Leads',
  footer_s2: 'Agendamiento de Citas',
  footer_s3: 'Campañas Outbound',
  footer_s4: 'Automatización de Call Center',
  footer_s5: 'Despacho y Servicios de Campo',
  footer_s6: 'Agencia White-Label',
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

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Highlights from './components/Highlights';
import FeaturesAdvanced from './components/FeaturesAdvanced';
import Features from './components/Features';
import UseCases from './components/UseCases';
import VoiceLibrary from './components/VoiceLibrary';
import Statistics from './components/Statistics';
import Compliance from './components/Compliance';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SLA from './components/SLA';
import FairUsePolicy from './components/FairUsePolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/privacy-policy') {
      setCurrentPage('privacy');
    } else if (path === '/terms-of-service') {
      setCurrentPage('terms');
    } else if (path === '/sla') {
      setCurrentPage('sla');
    } else if (path === '/fair-use-policy') {
      setCurrentPage('fairuse');
    } else {
      setCurrentPage('home');
    }
  }, []);

  return (
    <LanguageProvider>
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        {currentPage === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'terms' ? (
          <TermsOfService />
        ) : currentPage === 'sla' ? (
          <SLA />
        ) : currentPage === 'fairuse' ? (
          <FairUsePolicy />
        ) : (
          <>
            <Hero />
            <HowItWorks />
            <Highlights />
            <FeaturesAdvanced />
            <Features />
            <UseCases />
            <VoiceLibrary />
            <Statistics />
            <Compliance />
            <Testimonials />
            <FAQ />
          </>
        )}
        <Footer />
      </div>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

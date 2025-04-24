import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

// Lazy loaded components
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const SpecializedSolutions = lazy(() => import('./components/SpecializedSolutions'));
const ComplementarySolutions = lazy(() => import('./components/ComplementarySolutions'));
const LicensesSection = lazy(() => import('./components/LicensesSection'));
const LeadershipSection = lazy(() => import('./components/LeadershipSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <LeadershipSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <SpecializedSolutions />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <ComplementarySolutions />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <LicensesSection />
        </Suspense>
        <ProcessSection />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

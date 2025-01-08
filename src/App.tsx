// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BoostSales from './components/BoostSales/BoostSales';
import ConversionSection from './components/ConversionSection/ConversionSection';
import SocialProof from './components/SocialProof/SocialProof';
import RevenueCounter from './components/RevenueCounter/RevenueCounter';
import Testimonials from './components/Testimonials/Testimonials';
import PricingTable from './components/PricingTable/PricingTable';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import FAQs from './components/FAQs/FAQs';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer'; // Import Footer
import TermsOfService from './components/TermsOfService'; // Import Terms of Service component
import PrivacyPolicy from './components/PrivacyPolicy'; // Import Privacy Policy component

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-soft-cream">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BoostSales />
                <SocialProof id="social-proof" />
                <ConversionSection />
                <RevenueCounter />
                <Testimonials />
                <WhyChooseUs />
                <PricingTable id="pricing-table" />
                <FAQs />
                <ContactSection id="contact-section" />
              </>
            }
          />
          <Route path="/terms-of-service" element={<TermsOfService />} />{' '}
          {/* New route for terms of service */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{' '}
          {/* New route for privacy policy */}
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
};

export default App;

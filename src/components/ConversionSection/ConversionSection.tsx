// src/components/ConversionSection/ConversionSection.tsx
import React from 'react';
import Button from '../Button/Button';
import './ConversionSection.css';

const ConversionSection: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-table');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-16 px-6 md:px-12 bg-hot-pink text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
          Ready to Elevate Your Beauty Business?
        </h2>
        <p className="text-xl mb-12 text-white">
          It's time to take your beauty business to the next level. With a
          high-converting website, you'll capture more leads, secure more
          bookings, and build a brand that stands out. Let's make your vision a
          reality.
        </p>
        <Button
          variant="dark"
          size="lg"
          className="hover:bg-black text-white glow-button"
          onClick={scrollToPricing}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default ConversionSection;

// src/components/Hero/Hero.tsx
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import RainOfEmojis from '../RainOfEmojis/RainOfEmojis'; // Import the new component

const professions = [
  'Beauty Professionals',
  'Makeup Artists',
  'Lash Techs',
  'Nail Artists',
  'Salon Techs',
  'Estheticians',
  'Spa Therapists',
];

const Hero: React.FC = () => {
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000); // Change profession every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToBoostSales = () => {
    const boostSalesSection = document.getElementById('boost-sales');
    if (boostSalesSection) {
      boostSalesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-soft-cream px-6 md:px-12">
      <RainOfEmojis /> {/* Add the emoji rain effect */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-elegant-gray mb-6">
          High-Converting Websites for{' '}
          <span className="text-hot-pink">{professions[professionIndex]}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-elegant-gray">
          Transform your online presence into a client-attracting powerhouse
          💄✨ Elevate your beauty business with stunning, sales-driven websites
          that turn visitors into loyal customers.
        </p>
        <Button
          variant="dark"
          size="lg"
          className="mb-12"
          onClick={scrollToBoostSales}
        >
          Boost Your Beauty Sales
        </Button>

        <div className="animate-bounce">
          <span role="img" aria-label="Scroll down" className="text-4xl">
            👇
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

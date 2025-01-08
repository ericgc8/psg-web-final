// src/components/WhyChooseUs/WhyChooseUs.tsx
import React from 'react';
import Button from '../Button/Button';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-soft-cream text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-elegant-gray">
        Still on the Fence?
      </h2>
      <p className="text-xl mb-8 text-gray-600">
        Listen up, beauty boss! 💁‍♀️ In today's fast-paced digital world, your
        online presence is EVERYTHING. Without a website that speaks for your
        brand, you're basically invisible to potential clients.
      </p>
      <p className="text-lg mb-6 text-gray-600">
        Let’s face it: When was the last time you booked a service without
        checking out their website first? Thought so. Your clients are doing the
        same!
      </p>
      <p className="text-lg mb-6 text-gray-600">
        Your competition is out there, already killing the game with websites
        that convert visitors into loyal clients. Can you afford to get left
        behind?
      </p>
      <p className="text-lg mb-6 text-gray-600">
        Here’s the truth: A great website isn’t just a luxury – it’s the
        backbone of a thriving business.
      </p>
      <p className="text-lg mb-6 text-gray-600">
        With Pro Service Growth, you're not just getting a stunning website;
        you're investing in a 24/7 sales machine that works while you sleep,
        driving bookings and helping your business grow.
      </p>
      <p className="text-lg mb-6 text-gray-600">
        So, what’s holding you back? It’s time to stop second-guessing and start
        investing in the future of your beauty business. Let’s level up and show
        the world what you’re made of! 🚀
      </p>
      <Button
        variant="dark"
        size="lg"
        onClick={() =>
          window.scrollTo({
            top: document.getElementById('pricing-table')?.offsetTop || 0,
            behavior: 'smooth',
          })
        }
      >
        Check Our Pricing Plans
      </Button>
    </section>
  );
};

export default WhyChooseUs;

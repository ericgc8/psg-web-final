// src/components/RevenueCounter/RevenueCounter.tsx
import React, { useEffect, useState } from 'react';

const RevenueCounter: React.FC = () => {
  const [revenue, setRevenue] = useState<number>(0);

  useEffect(() => {
    const targetRevenue = 1150000; // $1.75M
    const increment = targetRevenue / 200; // Adjust speed of increment

    const interval = setInterval(() => {
      setRevenue((prev) => {
        if (prev + increment >= targetRevenue) {
          clearInterval(interval);
          return targetRevenue;
        }
        return Math.round(prev + increment);
      });
    }, 50); // Adjust timing for smoother animation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-soft-cream text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-elegant-gray">
        Revenue Generated for Our Clients
      </h2>
      <p className="text-xl mb-8 text-gray-600">
        We've helped our clients generate over:
      </p>
      <h3 className="text-5xl font-bold text-hot-pink mb-4">
        ${revenue.toLocaleString()}
      </h3>
      <p className="text-lg text-gray-600">
        Join us and see how we can help elevate your beauty business!
      </p>
    </section>
  );
};

export default RevenueCounter;

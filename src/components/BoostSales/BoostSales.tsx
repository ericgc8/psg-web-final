// src/components/BoostSales/BoostSales.tsx
import React from 'react';

interface CardProps {
  title: string;
  caption: string;
}

const Card: React.FC<CardProps> = ({ title, caption }) => (
  <div className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 flex flex-col h-full"> {/* Removed shadow and added hover effect */}
    <h3 className="text-xl font-serif font-bold text-elegant-gray mb-4">
      {title}
    </h3>
    <p className="text-gray-600 flex-grow">{caption}</p>
  </div>
);

const ProcessStep: React.FC<{
  number: number;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <div className="flex items-start mb-8 last:mb-0">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-hot-pink text-white flex items-center justify-center font-bold text-xl mr-4">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-serif font-bold text-elegant-gray mb-2">
        {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BoostSales: React.FC = () => {
  const cards = [
    {
      title: 'Booking Magnet Design',
      caption:
        "Your digital storefront reimagined: Websites that don't just look beautiful, but actively attract and convert your ideal clients with irresistible visual storytelling and seamless booking experiences. Turn browsers into believers, and believers into repeat customers. 🧲💫",
    },
    {
      title: 'Sales Acceleration Platform',
      caption:
        "More than just a website—a strategic revenue engine designed to transform casual browsers into loyal, high-paying clients. Watch your booking rates soar with intelligent design that understands your beauty business's unique conversion dynamics. 💰🔥",
    },
    {
      title: 'Conversion Catalyst',
      caption:
        "Websites engineered to turn browsers into booked clients, with strategic design that speaks directly to your ideal customer's desires. 💸✨",
    },
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description:
        'We start by understanding your business and goals to ensure the website fits your needs.',
    },
    {
      title: 'Design',
      description:
        'We craft a design that reflects your brand and is focused on driving conversions.',
    },
    {
      title: 'Build',
      description:
        "Our team builds the website with attention to detail, ensuring it's fast, responsive, and user-friendly.",
    },
    {
      title: 'Launch',
      description:
        'Once everything is perfect, we launch your website and set it up to convert visitors into clients.',
    },
  ];

  return (
    <section id="boost-sales" className="py-16 px-6 md:px-12 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-elegant-gray mb-6 text-center">
          Unlock Your Business Potential with a Sales-Driven Website
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Transform your digital storefront into a booking magnet 💎💅 Our
          precision-crafted websites don't just look stunning—they strategically
          convert browsers into loyal clients. Experience the power of a website
          that works as hard as you do. 💖🚀
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} caption={card.caption} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-elegant-gray mb-6 text-center">
            Our Process: 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We've made the process of getting your dream website easy! Here's
            how we work:
          </p>
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostSales;

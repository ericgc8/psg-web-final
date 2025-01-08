// src/components/PricingTable/PricingTable.tsx
import React from 'react';
import './ribbon.css';

interface PricingTableProps {
  id?: string; // Make id optional
}

const PricingTable: React.FC<PricingTableProps> = ({ id }) => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      setupFee: '$69',
      features: [
        'Fully customized website tailored to your brand',
        '3 customizable pages (e.g., Home, Services, Contact)',
        'Basic SEO Optimization',
        'Social media integration (Instagram, Facebook, TikTok)',
        'Mobile-friendly and responsive design',
        'Online booking system with appointment notifications',
        '3 months of hosting for FREE',
      ],
      link: 'https://buy.stripe.com/eVa8xx9Kie4d9qM4gm', // Stripe link for Starter
    },
    {
      name: 'Pro',
      price: '$899',
      setupFee: '$69',
      features: [
        'Everything in the Starter package, plus:',
        '5 customizable pages (e.g., Home, Services, Portfolio, About, Contact)',
        'Advanced SEO Optimization (Keyword research, image optimization)',
        'Priority support with a 24-hour response guarantee',
        'Portfolio gallery to showcase your best work',
        'Monthly website performance reports',
        'Integration with email marketing tools (Mailchimp, ConvertKit)',
        'Pop-up feature for promotions or mailing list sign-ups',
        '6 months of hosting for FREE',
      ],
      link: 'https://buy.stripe.com/9AQ9BBe0y6BLbyU8wD', // Stripe link for Pro
    },
    {
      name: 'Custom',
      price: 'Contact Us for Price',
      setupFee: '',
      features: [
        'Tailored solutions based on your specific needs.',
        'Contact us for a personalized quote.',
      ],
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="py-16 px-6 md:px-12 bg-soft-cream text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-elegant-gray">
        Our Pricing Plans
      </h2>
      <p className="text-xl mb-8 text-gray-600">
        Choose the plan that best suits your beauty business. Whether you're
        just starting or looking for a more advanced solution, we've got you
        covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg shadow-lg p-6 flex flex-col h-full ${
              plan.name === 'Pro' ? 'relative' : ''
            }`}
          >
            {plan.name === 'Pro' && (
              <div className="absolute top-0 right-0 ribbon">Most Popular</div>
            )}
            <h3 className="text-xl font-bold mb-4 text-hot-pink">
              {plan.name}
            </h3>
            <p className="text-2xl font-semibold mb-4">{plan.price}</p>

            <ul className="mb-4 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            {plan.name === 'Custom' ? (
              <button
                className="mt-auto bg-hot-pink text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300"
                onClick={scrollToContact} // Scroll to Contact section
              >
                Contact Us
              </button>
            ) : (
              <a href={plan.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-auto bg-hot-pink text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
                  Choose Plan
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;

// src/components/ContactSection/ContactSection.tsx
import React from 'react';
import Button from '../Button/Button';

interface ContactSectionProps {
  id?: string; // Make id optional
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  
  const typeformLink = "https://mjp836kxygm.typeform.com/to/u6WxM287"; // Typeform link

  return (
    <section id={id} className="py-16 px-6 md:px-12 bg-soft-cream text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-elegant-gray">
        Get in Touch with Us!
      </h2>
      <p className="text-xl mb-8 text-gray-600">
        Have questions or ready to start your journey with Pro Service Growth?
        We're here to help! Reach out to us, and let's discuss how we can
        elevate your beauty business.
      </p>
      <a href={typeformLink} target="_blank" rel="noopener noreferrer">
        <Button variant="dark" size="lg">
          Fill Out Our Intake Form
        </Button>
      </a>
    </section>
  );
};

export default ContactSection;

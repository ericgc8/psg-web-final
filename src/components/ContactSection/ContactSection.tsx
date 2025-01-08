// src/components/ContactSection/ContactSection.tsx
import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal'; // Import the Modal component

interface ContactSectionProps {
  id?: string; // Make id optional
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

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
      <Button
        variant="dark"
        size="lg"
        onClick={handleOpenModal} // Open modal on button click
      >
        Send Us a Message
      </Button>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ContactSection;

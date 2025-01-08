// src/components/Modal.tsx
import React from 'react';
import './Modal.css'; // Create this CSS file for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div data-tf-live="01JH3ASSAZK87PJYWTSEHGK3FE"></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
};

export default Modal;

// src/components/Header/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation(); // Get current location

  const showLinks = location.pathname === '/'; // Show links only if on root route

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-lg font-bold text-hot-pink"
          onClick={scrollToTop}
        >
          Pro Service Growth
        </Link>
        <ul className="flex space-x-4">
          {showLinks && (
            <>
              <li>
                <button
                  onClick={() => scrollToSection('social-proof')}
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing-table')}
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-section')}
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// src/components/Footer/Footer.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // Get current location

  const showLinks = location.pathname === '/'; // Show links only if on root route

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  };

  return (
    <footer className="bg-white shadow mt-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
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
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#social-proof"
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="#pricing-table"
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#contact-section"
                  className="text-gray-600 hover:text-hot-pink"
                >
                  Contact
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="text-center py-2 text-gray-600">
        © {currentYear} Pro Service Growth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

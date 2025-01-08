// src/components/Header/NavLink.tsx
import React from 'react';
import { Link } from 'react-scroll';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="font-serif text-gray-800 hover:text-hot-pink transition-colors cursor-pointer relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-hot-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  );
};

export default NavLink;

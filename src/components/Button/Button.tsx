// src/components/Button/Button.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles =
    'rounded-md font-medium transition-all duration-300 ease-in-out';

  const variantStyles = {
    primary:
      'bg-hot-pink text-white hover:bg-hot-pink-dark focus:ring-2 focus:ring-offset-2 focus:ring-hot-pink',
    secondary: 'bg-elegant-gray text-soft-cream hover:bg-opacity-80',
    outline:
      'border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-white',
    dark: 'bg-black text-white hover:bg-hot-pink hover:text-white', // New dark variant
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;

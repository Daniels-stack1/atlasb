import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-atlas-orange text-white hover:bg-atlas-orangeDark shadow-lg shadow-atlas-orange/20 border border-transparent",
    secondary: "bg-atlas-text text-white hover:bg-black border border-transparent",
    outline: "bg-transparent border-2 border-atlas-text/10 text-atlas-text hover:border-atlas-text hover:bg-transparent",
    ghost: "bg-transparent text-atlas-text hover:bg-atlas-text/5 border border-transparent"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
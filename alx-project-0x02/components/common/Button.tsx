import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  size = 'medium', 
  shape = 'rounded-md', 
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer transition-colors duration-200';

  const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-offset-2';

  const buttonClasses = `
    font-medium
    ${sizeClasses[size]}
    ${shape}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${focusClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
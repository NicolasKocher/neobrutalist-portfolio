
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ children, className = '', shadowColor = 'shadow-black', as: Component = 'div' }) => {
  return (
    <Component 
        className={`bg-white p-6 md:p-8 border-2 border-black ${shadowColor} transition-all duration-200 ease-out transform-gpu hover:shadow-none hover:translate-x-2 hover:translate-y-2 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Card;

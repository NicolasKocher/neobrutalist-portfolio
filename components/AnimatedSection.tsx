
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

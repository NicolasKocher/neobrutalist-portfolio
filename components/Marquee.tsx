import React from 'react';

interface MarqueeProps {
  items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const marqueeItems = [...items, ...items]; // Double for seamless loop

  return (
    <div className="relative flex overflow-x-hidden bg-black text-white border-y-4 border-black -rotate-2 transform-gpu">
      <div className="py-4 animate-marquee whitespace-nowrap flex">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xl md:text-3xl mx-6 font-black tracking-tight">{item.toUpperCase()}</span>
            <span className="text-yellow-300 text-3xl font-mono">*</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
import React, { useState } from 'react';
import Card from './Card';

interface ExperienceCardProps {
  job: {
    role: string;
    company: string;
    period: string;
    description: string;
    logo: string;
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={toggleExpansion}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpansion()}
      aria-expanded={isExpanded}
      className="group focus:outline-none"
    >
      <Card 
        as="article" 
        shadowColor="shadow-[8px_8px_0px_#facc15]" 
        className="cursor-pointer group-focus:shadow-[8px_8px_0px_#0ea5e9]"
      >
          <div className="flex flex-col md:flex-row justify-between md:items-center w-full gap-4">
              <div className="flex-grow flex items-center gap-4">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-14 h-14 object-contain shrink-0 border-2 border-black p-1 bg-white"/>
                  <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{job.role}</h3>
                      <h4 className="text-xl md:text-2xl font-bold text-blue-600">{job.company}</h4>
                  </div>
              </div>
              <div className="flex items-center justify-between md:justify-end w-full md:w-auto shrink-0">
                <p className="font-mono text-sm md:text-base text-gray-600">{job.period}</p>
                <div 
                    className="flex items-center justify-center h-10 w-10 ml-4 rounded-full border-2 border-black"
                    aria-hidden="true"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 transition-transform duration-300 transform-gpu ${isExpanded ? 'rotate-90' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
              </div>
          </div>

          <div 
            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}
            aria-hidden={!isExpanded}
          >
              <div className="overflow-hidden">
                <p className="text-base md:text-lg pt-6 border-t-2 border-dashed border-black">
                  {job.description}
                </p>
              </div>
          </div>
      </Card>
    </div>
  );
};

export default ExperienceCard;
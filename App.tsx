import React from 'react';
import Card from './components/Card';
import Marquee from './components/Marquee';
import AnimatedSection from './components/AnimatedSection';
import Header from './components/Header';
import ExperienceCard from './components/ExperienceCard';

const experienceData = [
  {
    role: "Software Developer (Working Student)",
    company: "insert effect GmbH",
    period: "Mar 2025 - Present",
    description: "I develop full-stack solutions from scratch and support projects from the initial idea to deployment. My focus is on modern web and mobile technologies like Angular, React Native, and Flutter, supplemented by TypeScript and Tailwind. In addition to development, I integrate CMS systems like Directus, conduct code reviews, and work closely with the team in agile processes according to Scrum. Regular deployments to staging and production systems are as much a part of my daily routine as using modern developer tools like GitHub, Claude Code, and Cursor.",
    logo: "https://i.imgur.com/x07om2c.jpeg"
  },
  {
    role: "Software Development Intern",
    company: "adesso SE",
    period: "Sep 2024 - Feb 2025",
    description: "My practical semester at adesso SE was particularly valuable as I learned firsthand how agile work with Scrum really functions in daily practice. By taking on various roles—from Requirements Engineer to Product Owner to Scrum Master and Software Engineer—I gained a comprehensive insight into the entire lifecycle of an IT project. I not only learned about modern technologies and development processes but also experienced teamwork in a dynamic environment. This internship was my entry into real, team-oriented work and has had a lasting impact on my work style.",
    logo: "https://i.imgur.com/v16z1BS.png"
  },
  {
    role: "Front-End Web Developer (Working Student)",
    company: "paxray",
    period: "Feb 2024 - Jul 2024",
    description: "At paxray, I worked as a working student on modern web solutions in a practical setting. My focus was on developing reusable components with Svelte and implementing flexible styling concepts for various applications. In an agile team, I learned to develop with a user-centric approach and to further build my front-end skills in a real project context.",
    logo: "https://i.imgur.com/e585f6E.png"
  },
  {
    role: "Front-End Web Developer (Working Student)",
    company: "Fraunhofer IIS",
    period: "Oct 2023 - Feb 2024",
    description: "At Fraunhofer IIS, I independently developed an internal web application. I used modern web technologies such as HTML, CSS, JavaScript, and TypeScript, as well as React for a component-based architecture. A key focus was the integration of REST APIs and the clean processing of backend data. Through a focus on user-friendliness and clear interfaces, I was able to deepen my technical skills and apply them in a practical way.",
    logo: "https://i.imgur.com/dK3yB3l.jpeg"
  },
];

const educationData = [
  {
    degree: "Bachelor of Science - BS, Medieninformatik",
    institution: "Technische Hochschule Nürnberg Georg Simon Ohm",
    period: "Feb 2022 - 2026",
  },
  {
    degree: "Bachelor of Science - BS, Informatik",
    institution: "Technische Hochschule Nürnberg Georg Simon Ohm",
    period: "Oct 2020 - Feb 2022",
    details: "Switched to Media Informatics"
  }
];

const skills = ["TypeScript", "Angular", "React", "Svelte", "Flutter", "React Native", "Node.js", "Tailwind CSS", "Scrum", "Git"];

const App: React.FC = () => {
  return (
    <div className="font-sans text-black overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-12 md:py-24 space-y-20 md:space-y-32 pt-24 md:pt-32">
        
        {/* Hero Section */}
        <AnimatedSection>
          <section id="hero" className="min-h-[60vh] flex flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">NICOLAS KOCHER</h1>
            <div className="mt-4 md:mt-6 border-2 border-black bg-white p-4 max-w-4xl shadow-[8px_8px_0px_#facc15]">
              <h2 className="text-xl md:text-3xl font-bold">
                <span className="text-blue-600">Software Developer</span> @ insert effect GmbH
              </h2>
            </div>
          </section>
        </AnimatedSection>

        <Marquee items={skills} />

        {/* About Section */}
        <AnimatedSection>
          <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight lg:col-span-1">ABOUT ME</h2>
            <Card className="lg:col-span-2" shadowColor="shadow-[8px_8px_0px_#0ea5e9]">
              <p className="text-lg md:text-xl font-normal leading-relaxed">
                I'm an aspiring software developer with a passion for modern technologies and agile methods. My focus is on creating innovative and user-friendly web and mobile applications that provide real-world value.
              </p>
              <br/>
              <p className="text-lg md:text-xl font-normal leading-relaxed">
                With hands-on experience in frameworks like Angular, React, Svelte, and Flutter, I enjoy building full-stack solutions and collaborating in dynamic team environments to bring ideas to life.
              </p>
            </Card>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <section id="experience">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">EXPERIENCE</h2>
            <div className="space-y-8">
              {experienceData.map((job, index) => (
                <AnimatedSection key={index}>
                    <ExperienceCard job={job} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
            <section id="skills">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">SKILLS</h2>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {skills.map(skill => (
                        <div key={skill} className="bg-white text-base md:text-lg font-bold border-2 border-black py-2 px-4 shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-default">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection>
            <section id="education">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">EDUCATION</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <AnimatedSection key={index}>
                           <Card shadowColor="shadow-[8px_8px_0px_#0ea5e9]">
                                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                                <p className="text-xl text-gray-700 mt-1">{edu.institution}</p>
                                <p className="font-mono text-sm text-gray-500 mt-4">{edu.period}</p>
                                {edu.details && <p className="text-base text-gray-600 mt-3 italic">{edu.details}</p>}
                           </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </AnimatedSection>

        {/* Footer / Contact */}
        <footer id="contact" className="text-center py-16">
            <AnimatedSection>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12">LET'S CONNECT</h2>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                  <a 
                      href="https://www.linkedin.com/in/nicolaskocher/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold bg-yellow-300 text-black border-2 border-black py-4 px-8 shadow-[8px_8px_0px_#000] transition-all hover:shadow-none hover:translate-x-2 hover:translate-y-2 active:bg-yellow-400"
                  >
                      LinkedIn
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                  </a>
                  <a 
                      href="https://github.com/NicolasKocher" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold bg-green-300 text-black border-2 border-black py-4 px-8 shadow-[8px_8px_0px_#000] transition-all hover:shadow-none hover:translate-x-2 hover:translate-y-2 active:bg-green-400"
                  >
                      GitHub
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.778.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z"/>
                      </svg>
                  </a>
                  <a 
                      href="mailto:nicokocher1999@gmail.com" 
                      className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold bg-rose-300 text-black border-2 border-black py-4 px-8 shadow-[8px_8px_0px_#000] transition-all hover:shadow-none hover:translate-x-2 hover:translate-y-2 active:bg-rose-400"
                  >
                      Email
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </a>
                </div>
            </AnimatedSection>
        </footer>
      </main>
    </div>
  );
};

export default App;
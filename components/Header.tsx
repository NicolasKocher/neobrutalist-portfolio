import React, { useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-amber-50/80 backdrop-blur-sm border-b-2 border-black z-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#hero" className="font-mono text-3xl font-black tracking-tight">
              NK.
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="font-mono text-lg font-bold hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Nav Button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden z-50 flex flex-col h-12 w-12 justify-center items-center group"
              aria-label="Open navigation menu"
            >
                <div className={`${isMenuOpen ? "rotate-45 translate-y-3" : ""} h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`}></div>
                <div className={`${isMenuOpen ? "opacity-0" : ""} h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`}></div>
                <div className={`${isMenuOpen ? "-rotate-45 -translate-y-3" : ""} h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-amber-50 z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
            {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={handleLinkClick} className="font-mono text-4xl font-bold py-4 hover:text-blue-600 transition-colors">
                    {link.name}
                </a>
            ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
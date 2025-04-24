import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#" 
          className={`flex items-center space-x-2 font-bold text-xl ${
            isScrolled ? 'text-emerald-700' : 'text-white'
          }`}
          aria-label="Impacto Sustentable"
        >
          <img 
            src={isScrolled ? "/l-v.svg" : "/l-b.svg"} 
            alt="Logo" 
            className="h-8 w-8" 
          />
          <span className="uppercase">Impacto Sustentable</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('servicios')}
            className={`${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-gray-200'
            } transition-colors`}
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('soluciones')}
            className={`${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-gray-200'
            } transition-colors`}
          >
            Soluciones
          </button>
          <button 
            onClick={() => scrollToSection('proceso')}
            className={`${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-gray-200'
            } transition-colors`}
          >
            Proceso
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="btn-primary"
          >
            ¡Contacte ahora!
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${
            isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-gray-200'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('soluciones')}
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
            >
              Soluciones
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn-primary"
            >
              ¡Contacte ahora!
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

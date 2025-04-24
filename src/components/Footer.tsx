import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/l-b.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Impacto Sustentable</span>
            </div>
            <p className="text-emerald-100 mb-4">
              Transformamos desafíos ambientales en ventajas competitivas para empresas en Colombia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/consultoriaimpactosustentable" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/consultoriaimpactosustentable" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Permisos de vertimientos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Concesión de aguas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Aprovechamiento forestal
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Estudios de Impacto Ambiental
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Planes de manejo ambiental
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Sistemas de Gestión Ambiental
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-300" />
                <a 
                  href="https://wa.me/573145033601" 
                  className="text-emerald-100 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +57 314 5033 601
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-300" />
                <a 
                  href="mailto:gerencia@impactosustentable.com" 
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  gerencia@impactosustentable.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 pt-6 text-center text-emerald-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Impacto Sustentable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

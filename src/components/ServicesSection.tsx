import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Droplets, Waves, TreePine } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Droplets className="h-12 w-12 text-emerald-600" />,
      title: "Permisos de vertimientos",
      description: "Gestión integral de permisos para el vertimiento de aguas residuales, cumpliendo con la normativa ambiental colombiana y garantizando la protección de los recursos hídricos.",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Waves className="h-12 w-12 text-emerald-600" />,
      title: "Concesión de aguas",
      description: "Asesoría especializada en la obtención de concesiones para el aprovechamiento de aguas superficiales y subterráneas, asegurando el uso sostenible del recurso hídrico.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <TreePine className="h-12 w-12 text-emerald-600" />,
      title: "Aprovechamiento forestal",
      description: "Trámites para la obtención de permisos de aprovechamiento forestal, incluyendo planes de manejo y compensación que garantizan la sostenibilidad de los recursos forestales.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding bg-emerald-50" id="servicios">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <h2 className="section-title text-center">
          Soluciones que generan valor
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Trámites ambientales gestionados con profesionalismo y conforme a las normativas colombianas vigentes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-700">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                >
                  Solicitar información
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

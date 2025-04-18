import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, FileCheck, Factory, Building } from 'lucide-react';

const LicensesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-600" />,
      title: "Identificación de permisos necesarios",
      description: "Análisis detallado de su operación para determinar exactamente qué permisos ambientales requiere según la normativa colombiana vigente."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-emerald-600" />,
      title: "Elaboración de documentación técnica",
      description: "Desarrollo profesional de todos los documentos requeridos por las autoridades ambientales, garantizando su aprobación."
    },
    {
      icon: <Building className="h-6 w-6 text-emerald-600" />,
      title: "Trámite y seguimiento ante autoridad ambiental",
      description: "Gestión completa del proceso de solicitud y seguimiento hasta la obtención de los permisos y licencias requeridos."
    },
    {
      icon: <Factory className="h-6 w-6 text-emerald-600" />,
      title: "Cumplimiento legal en Colombia",
      description: "Aseguramos que su empresa cumpla con todas las normativas ambientales aplicables, evitando sanciones y optimizando su operación."
    }
  ];

  return (
    <section className="section-padding bg-emerald-50">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Asesoría en licencias y permisos ambientales
            </h2>
            <p className="text-gray-600 mb-6">
              Acompañamiento experto para empresas agrícolas, pecuarias y PYMEs manufactureras.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mr-4 mt-1">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-700 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-8"
            >
              Solicitar asesoría
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Asesoría ambiental profesional"
              className="rounded-xl shadow-lg w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="font-semibold">
                +3 años convirtiendo desafíos ambientales en oportunidades de negocio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;

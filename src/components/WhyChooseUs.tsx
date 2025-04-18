import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Award, Shield, BarChart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-emerald-600" />,
      title: "Referente en soluciones ambientales",
      description: "Impacto Sustentable se ha posicionado como referente en la implementación de soluciones ambientales con resultados medibles."
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-600" />,
      title: "Relaciones personalizadas",
      description: "A diferencia de grandes corporaciones, nuestra propuesta de valor se basa en relaciones personalizadas que generan beneficios tangibles."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
      title: "Sostenibilidad rentable",
      description: "Demostramos que la sostenibilidad se traduce en reducción de costos operativos, cumplimiento normativo y mejora reputacional."
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-600" />,
      title: "Enfoque ROI",
      description: "Nuestro enfoque ROI convierte cada proyecto en una inversión rentable y sostenible."
    }
  ];

  return (
    <section className="section-padding bg-white" id="por-que-elegirnos">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <h2 className="section-title text-center mb-12">
          ¿Por qué más empresas confían en nosotros?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="card p-6 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-emerald-50 rounded-full">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

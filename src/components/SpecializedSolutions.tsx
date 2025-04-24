import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Droplet, Recycle, ClipboardList, FileCode, BadgeCheck, FileSearch, Sun } from 'lucide-react';

const SpecializedSolutions: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      title: "Estudios de Impacto Ambiental (EIA), Diagnósticos Ambientales (DA)",
      description: "Evaluaciones exhaustivas para identificar, predecir y mitigar los impactos ambientales de proyectos, cumpliendo con los requisitos legales y optimizando recursos."
    },
    {
      icon: <Droplet className="h-8 w-8 text-emerald-600" />,
      title: "Planes de uso eficiente y ahorro del agua",
      description: "Estrategias personalizadas para optimizar el consumo de agua, reducir costos operativos y cumplir con la normativa ambiental colombiana."
    },
    {
      icon: <Recycle className="h-8 w-8 text-emerald-600" />,
      title: "Plan de gestión integral de residuos sólidos",
      description: "Sistemas completos para la gestión adecuada de residuos, desde la generación hasta la disposición final, maximizando el aprovechamiento y minimizando impactos."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-emerald-600" />,
      title: "Planes de manejo ambiental",
      description: "Documentos técnicos que establecen las acciones para prevenir, mitigar, corregir o compensar los impactos ambientales generados por actividades productivas."
    },
    {
      icon: <FileCode className="h-8 w-8 text-emerald-600" />,
      title: "Formulación de proyectos",
      description: "Desarrollo de propuestas ambientales estratégicas con enfoque en resultados medibles y retorno de inversión para su organización."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-emerald-600" />,
      title: "Sistemas de Gestión Ambiental (SGA)",
      description: "Implementación de sistemas basados en ISO 14001 que mejoran el desempeño ambiental y generan ventajas competitivas para su empresa."
    },
    {
      icon: <FileSearch className="h-8 w-8 text-emerald-600" />,
      title: "Asesoría en trámites y licencias ante Corporaciones Ambientales (CARs)",
      description: "Acompañamiento especializado en la gestión de permisos y licencias ambientales ante las autoridades competentes en Colombia."
    },
    {
      icon: <Sun className="h-8 w-8 text-emerald-600" />,
      title: "Energías renovables",
      description: "Consultoría para la implementación de sistemas de energía renovable que reducen costos operativos y mejoran la huella ambiental de su organización."
    }
  ];

  return (
    <section className="section-padding bg-white" id="soluciones">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <h2 className="section-title text-center">
          Soluciones especializadas con alto retorno de inversión
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Servicios de gestión ambiental diseñados para generar valor tangible para su empresa
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="card p-6 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-2 bg-emerald-100 rounded-lg inline-block mb-4">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-emerald-700">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedSolutions;

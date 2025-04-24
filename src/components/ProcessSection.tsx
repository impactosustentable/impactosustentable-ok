import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, FileText, Cog, BarChart2, RefreshCw, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Diagnóstico inicial",
      description: "Evaluación exhaustiva de su situación actual y necesidades específicas"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Plan de acción personalizado",
      description: "Diseño de estrategias a medida con objetivos claros y medibles"
    },
    {
      icon: <Cog className="h-8 w-8 text-white" />,
      title: "Implementación estratégica",
      description: "Ejecución profesional de las soluciones con mínimo impacto en su operación"
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-white" />,
      title: "Medición de resultados",
      description: "Seguimiento y análisis de indicadores clave de desempeño"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-white" />,
      title: "Optimización continua",
      description: "Mejora constante basada en datos y nuevas oportunidades"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Cumplimiento de objetivos",
      description: "Logro de metas ambientales y empresariales con resultados tangibles"
    }
  ];

  return (
    <section className="section-padding bg-emerald-700" id="proceso">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Nuestro Proceso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-emerald-600/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-5 -left-5 bg-emerald-800 p-3 rounded-full">
                {step.icon}
              </div>
              <div className="pt-6 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-emerald-50">
                  {step.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 text-5xl font-bold text-emerald-500/20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

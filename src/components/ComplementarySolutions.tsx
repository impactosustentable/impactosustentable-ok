import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, FileText, HelpCircle } from 'lucide-react';

const ComplementarySolutions: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "Educación y sensibilización ambiental",
      description: "Programas formativos para empleados y stakeholders que promueven una cultura de sostenibilidad y mejoran el compromiso con los objetivos ambientales de la organización."
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Informes ambientales",
      description: "Elaboración de reportes técnicos que documentan el desempeño ambiental de su empresa, facilitando la toma de decisiones y el cumplimiento de requisitos legales."
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-white" />,
      title: "Asesorías generales",
      description: "Consultoría especializada para resolver dudas específicas y proporcionar orientación estratégica en materia ambiental adaptada a las necesidades de su organización."
    }
  ];

  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-800/80"></div>
      
      <div 
        ref={ref}
        className={`container-custom relative z-10 ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          Soluciones complementarias de alto impacto
        </h2>
        <p className="text-center text-emerald-50 max-w-3xl mx-auto mb-12">
          Servicios adicionales que potencian su estrategia ambiental y maximizan resultados
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-emerald-700/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-emerald-600 p-3 rounded-full inline-block mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {solution.title}
              </h3>
              <p className="text-emerald-50">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplementarySolutions;

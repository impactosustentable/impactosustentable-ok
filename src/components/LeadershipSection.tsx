import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Target, TrendingUp, Users } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Experiencia técnica",
      description: "Conocimiento profundo de normativas y mejores prácticas ambientales"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Visión estratégica",
      description: "Enfoque en resultados medibles y retorno de inversión"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Soluciones integrales",
      description: "Más allá del cumplimiento legal, maximizamos el ROI ambiental"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/80"></div>
      
      <div 
        ref={ref}
        className={`container-custom relative z-10 ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Liderazgo con resultados comprobados
          </h2>
          <p className="text-lg md:text-xl text-emerald-50">
            Impacto Sustentable combina experiencia técnica con visión estratégica. Cada solución busca no solo cumplimiento legal, sino maximización del ROI ambiental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-600/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-emerald-600 p-3 rounded-full inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-emerald-50">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-emerald-50 to-emerald-100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/70"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            TRANSFORMAMOS DESAFÍOS AMBIENTALES EN VENTAJAS COMPETITIVAS
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-50 mb-8">
            Soluciones ambientales estratégicas que generan valor real para su empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg"
            >
              ¡CONTACTE AHORA!
            </button>
            
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg"
            >
              Conozca nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';
import { sendEmail } from '../utils/emailService';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
}

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(result.error || 'Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-white" id="contacto">
      <div 
        ref={ref}
        className={`container-custom ${inView ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Impacto Sustentable
            </h2>
            <p className="text-xl font-semibold text-emerald-600 mb-4">
              CONVIERTA SU COMPROMISO AMBIENTAL EN UNA VENTAJA COMPETITIVA
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
                  Contáctenos
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">WhatsApp / Teléfono</p>
                      <a 
                        href="https://wa.me/573145033601" 
                        className="text-emerald-700 font-medium hover:text-emerald-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +57 314 5033 601
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Correo electrónico</p>
                      <a 
                        href="mailto:gerencia@impactosustentable.com" 
                        className="text-emerald-700 font-medium hover:text-emerald-600 transition-colors"
                      >
                        gerencia@impactosustentable.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Instagram className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Instagram</p>
                      <a 
                        href="https://www.instagram.com/consultoriaimpactosustentable" 
                        className="text-emerald-700 font-medium hover:text-emerald-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @consultoriaimpactosustentable
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Facebook className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Facebook</p>
                      <a 
                        href="https://www.facebook.com/consultoriaimpactosustentable" 
                        className="text-emerald-700 font-medium hover:text-emerald-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @consultoriaimpactosustentable
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-emerald-100 rounded-lg">
                  <p className="text-emerald-700 font-medium">
                    +3 años convirtiendo desafíos ambientales en oportunidades de negocio
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
                  Solicite su diagnóstico
                </h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto con usted a la brevedad.
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    {submitError}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Su nombre"
                      {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Su correo electrónico"
                      {...register('email', { 
                        required: 'Este campo es obligatorio',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Dirección de correo inválida'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Su número de teléfono"
                      {...register('phone', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="¿En qué podemos ayudarle?"
                      {...register('message', { required: 'Este campo es obligatorio' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="captcha" className="block text-gray-700 font-medium mb-1">
                      Verificación de seguridad: ¿Cuánto es 3 + 6? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="captcha"
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Ingrese la respuesta"
                      {...register('captcha', { 
                        required: 'Este campo es obligatorio',
                        validate: value => value === '9' || 'La respuesta es incorrecta'
                      })}
                    />
                    {errors.captcha && (
                      <p className="mt-1 text-red-500 text-sm">{errors.captcha.message}</p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full mt-6 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar mensaje
                    </span>
                  )}
                </button>
                
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Al hacer clic está de acuerdo con nuestras <Link to="/politicas-de-privacidad" className="text-emerald-600 hover:underline">políticas de privacidad</Link> y <Link to="/terminos-y-condiciones" className="text-emerald-600 hover:underline">términos y condiciones</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

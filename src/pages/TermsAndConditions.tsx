import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-4xl bg-white p-8 rounded-xl shadow-sm">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a la página principal
        </Link>
        
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Términos y Condiciones</h1>
        
        <div className="prose prose-emerald max-w-none">
          <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
          
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web de Impacto Sustentable (en adelante, "el Sitio"), usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestro sitio web ni nuestros servicios.
          </p>
          
          <h2>2. Uso del sitio</h2>
          <p>
            Usted acepta utilizar el Sitio solo para fines legales y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute del Sitio por parte de terceros. Queda prohibido el uso del Sitio de cualquier manera que pueda causar daño, deshabilitar, sobrecargar o deteriorar el Sitio o interferir con el uso del Sitio por parte de terceros.
          </p>
          
          <h2>3. Propiedad intelectual</h2>
          <p>
            Todo el contenido incluido en el Sitio, como texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de Impacto Sustentable o de sus proveedores de contenido y está protegido por las leyes colombianas e internacionales de derechos de autor y propiedad intelectual.
          </p>
          <p>
            Queda prohibida la reproducción, distribución, modificación, exhibición pública, comunicación pública o cualquier otra explotación del contenido del Sitio sin el consentimiento previo por escrito de Impacto Sustentable.
          </p>
          
          <h2>4. Servicios y contratación</h2>
          <p>
            La información sobre nuestros servicios presentada en el Sitio es meramente informativa. La contratación de nuestros servicios estará sujeta a la firma de un contrato específico que establecerá los términos y condiciones particulares aplicables a cada caso.
          </p>
          <p>
            Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento sin previo aviso.
          </p>
          
          <h2>5. Formularios de contacto</h2>
          <p>
            Al utilizar nuestros formularios de contacto, usted garantiza que la información proporcionada es precisa, completa y actualizada. Nos reservamos el derecho de rechazar o eliminar cualquier solicitud que contenga información falsa, ofensiva o inapropiada.
          </p>
          <p>
            El uso de nuestros formularios de contacto implica su consentimiento para el tratamiento de sus datos personales de acuerdo con nuestra Política de Privacidad.
          </p>
          
          <h2>6. Limitación de responsabilidad</h2>
          <p>
            En la medida máxima permitida por la ley aplicable, Impacto Sustentable no será responsable por daños directos, indirectos, incidentales, consecuentes, especiales, punitivos o ejemplares, incluyendo, pero no limitado a, daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles, resultantes de:
          </p>
          <ul>
            <li>El uso o la imposibilidad de usar el Sitio.</li>
            <li>Cualquier cambio realizado en el Sitio o cualquier suspensión o cese temporal o permanente del Sitio.</li>
            <li>El acceso no autorizado o la alteración de sus transmisiones o datos.</li>
            <li>Las declaraciones o conductas de terceros en el Sitio.</li>
            <li>Cualquier otro asunto relacionado con el Sitio.</li>
          </ul>
          
          <h2>7. Indemnización</h2>
          <p>
            Usted acepta defender, indemnizar y mantener indemne a Impacto Sustentable, sus directores, empleados y agentes, de y contra cualquier reclamación, responsabilidad, daño, pérdida y gasto, incluyendo honorarios legales razonables, que surjan de o estén relacionados con su uso del Sitio, cualquier violación de estos Términos y Condiciones, o cualquier violación de los derechos de un tercero.
          </p>
          
          <h2>8. Enlaces a sitios de terceros</h2>
          <p>
            Nuestro Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. No tenemos control sobre el contenido de esos sitios y no asumimos ninguna responsabilidad por ellos ni por cualquier pérdida o daño que pueda surgir de su uso. La inclusión de enlaces a otros sitios web no implica una recomendación o respaldo del contenido de estos sitios.
          </p>
          
          <h2>9. Modificaciones de los términos</h2>
          <p>
            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos y Condiciones en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso con al menos 30 días de anticipación antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material será determinado a nuestra sola discreción.
          </p>
          <p>
            Al continuar accediendo o utilizando nuestro Sitio después de que esas revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, deje de usar el Sitio.
          </p>
          
          <h2>10. Ley aplicable y jurisdicción</h2>
          <p>
            Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República de Colombia, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja en relación con estos Términos y Condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes de Colombia.
          </p>
          
          <h2>11. Divisibilidad</h2>
          <p>
            Si alguna disposición de estos Términos y Condiciones se considera inválida, ilegal o inaplicable por cualquier motivo, dicha disposición se considerará separable de estos Términos y Condiciones y no afectará la validez y aplicabilidad de las disposiciones restantes.
          </p>
          
          <h2>12. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos en:
          </p>
          <p>
            Correo electrónico: <a href="mailto:gerencia@impactosustentable.com" className="text-emerald-600">gerencia@impactosustentable.com</a><br />
            Teléfono: <a href="tel:+573145033601" className="text-emerald-600">+57 314 5033 601</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

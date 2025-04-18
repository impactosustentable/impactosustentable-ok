import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom max-w-4xl bg-white p-8 rounded-xl shadow-sm">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a la página principal
        </Link>
        
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Política de Privacidad</h1>
        
        <div className="prose prose-emerald max-w-none">
          <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
          
          <h2>1. Introducción</h2>
          <p>
            Impacto Sustentable (en adelante, "nosotros", "nuestra", "nuestro" o "la Empresa") se compromete a proteger la privacidad de los datos personales que recopilamos de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando utiliza nuestro sitio web y servicios.
          </p>
          
          <h2>2. Información que recopilamos</h2>
          <p>Podemos recopilar los siguientes tipos de información:</p>
          <ul>
            <li><strong>Información personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que usted nos proporcione voluntariamente a través de nuestros formularios de contacto o comunicaciones.</li>
            <li><strong>Información de uso:</strong> Datos sobre cómo interactúa con nuestro sitio web, incluyendo páginas visitadas, tiempo de permanencia y patrones de navegación.</li>
            <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, proveedor de servicios de Internet, páginas de referencia/salida, sistema operativo, fecha/hora y datos de clickstream.</li>
          </ul>
          
          <h2>3. Cómo utilizamos su información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
            <li>Procesar y responder a sus consultas y solicitudes.</li>
            <li>Enviar información sobre nuestros servicios, actualizaciones y promociones (con su consentimiento).</li>
            <li>Cumplir con obligaciones legales y regulatorias.</li>
            <li>Detectar, prevenir y abordar problemas técnicos o de seguridad.</li>
            <li>Realizar análisis y estudios para mejorar nuestros servicios.</li>
          </ul>
          
          <h2>4. Base legal para el tratamiento</h2>
          <p>Procesamos sus datos personales de acuerdo con la Ley 1581 de 2012 (Ley de Protección de Datos Personales de Colombia) y sus decretos reglamentarios, basándonos en las siguientes bases legales:</p>
          <ul>
            <li>Su consentimiento explícito.</li>
            <li>La necesidad de ejecutar un contrato con usted o tomar medidas a petición suya antes de celebrar un contrato.</li>
            <li>El cumplimiento de una obligación legal.</li>
            <li>Nuestros intereses legítimos, siempre que no prevalezcan sus derechos y libertades fundamentales.</li>
          </ul>
          
          <h2>5. Compartir información</h2>
          <p>No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información en las siguientes circunstancias:</p>
          <ul>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio y sitio web.</li>
            <li>Para cumplir con la ley, regulaciones, procesos legales o solicitudes gubernamentales.</li>
            <li>Para proteger los derechos, la propiedad o la seguridad de Impacto Sustentable, nuestros clientes u otros.</li>
            <li>En relación con una fusión, venta de activos empresariales, financiación o adquisición de todo o parte de nuestro negocio.</li>
            <li>Con su consentimiento o según sus instrucciones.</li>
          </ul>
          
          <h2>6. Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o destrucción. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
          </p>
          
          <h2>7. Sus derechos</h2>
          <p>De acuerdo con la ley colombiana de protección de datos, usted tiene los siguientes derechos:</p>
          <ul>
            <li>Derecho a conocer, actualizar y rectificar sus datos personales.</li>
            <li>Derecho a solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
            <li>Derecho a ser informado sobre el uso que se ha dado a sus datos personales.</li>
            <li>Derecho a presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.</li>
            <li>Derecho a revocar la autorización y/o solicitar la supresión de sus datos cuando el tratamiento no respete los principios, derechos y garantías constitucionales y legales.</li>
            <li>Derecho a acceder gratuitamente a sus datos personales que hayan sido objeto de tratamiento.</li>
          </ul>
          
          <h2>8. Retención de datos</h2>
          <p>
            Conservaremos su información personal solo durante el tiempo necesario para cumplir con los fines para los que la recopilamos, incluido el cumplimiento de requisitos legales, contables o de informes.
          </p>
          
          <h2>9. Cambios a esta política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y, si los cambios son significativos, le proporcionaremos un aviso más destacado.
          </p>
          
          <h2>10. Contacto</h2>
          <p>
            Si tiene preguntas o inquietudes sobre esta Política de Privacidad o el tratamiento de sus datos personales, contáctenos en:
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

export default PrivacyPolicy;

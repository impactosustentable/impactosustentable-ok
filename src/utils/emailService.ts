import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Verify CAPTCHA
    if (data.captcha !== '9') {
      return { 
        success: false, 
        error: 'La respuesta del CAPTCHA es incorrecta. Por favor, intente nuevamente.' 
      };
    }
    
    // Initialize EmailJS with your public key
    emailjs.init("Y3V4V8cAzBK60q_Cl"); // Your actual public key
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message,
      to_email: "consultoriaimpactosustentable@gmail.com"
    };
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_d0n6nfc", // Your actual EmailJS service ID
      "template_yrdean4", // Your actual EmailJS template ID
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.' 
    };
  }
};

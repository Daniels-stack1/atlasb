import React, { useState } from 'react';
import { Button } from './ui/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds if desired, or let it persist until new action
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="py-24 bg-atlas-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Card Container */}
        <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side - Banner on Mobile, Left Column on Desktop */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1974&auto=format&fit=crop" 
                alt="Construction crane" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-atlas-text/20 lg:bg-transparent"></div>
              
              {/* Desktop Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg hidden lg:block">
                <p className="font-heading font-bold text-lg text-atlas-text">"Atlas es sinónimo de excelencia."</p>
                <p className="text-xs text-atlas-textLight mt-1 font-bold uppercase tracking-wide">Architectural Digest</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 p-8 lg:p-12 lg:pl-16 flex flex-col justify-center">
              <div className="text-center lg:text-left mb-8">
                <span className="text-atlas-orange font-bold uppercase tracking-wider text-xs mb-3 block">Contacto</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-atlas-text mb-4">
                  Inicia tu Proyecto.
                </h2>
                <p className="text-atlas-textLight text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                  Hagamos realidad tu visión. Residencial o comercial, estamos listos para construir.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center animate-in fade-in duration-300">
                  <p className="font-heading font-bold text-2xl mb-2">¡Mensaje enviado!</p>
                  <p className="text-sm mb-6">Gracias por contactarnos. Nuestro equipo revisará tu solicitud y nos pondremos en contacto contigo lo antes posible.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="text-sm font-bold text-green-700 underline hover:text-green-900 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-bold uppercase text-atlas-text ml-4">Nombre</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-5 py-3.5 rounded-full bg-atlas-bg border focus:ring-0 outline-none transition-all font-medium text-atlas-text placeholder-gray-400 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-atlas-orange'}`}
                          placeholder="Juan Pérez"
                        />
                        {errors.name && <p className="text-red-500 text-xs ml-4 mt-1 font-medium">{errors.name}</p>}
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-bold uppercase text-atlas-text ml-4">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-5 py-3.5 rounded-full bg-atlas-bg border focus:ring-0 outline-none transition-all font-medium text-atlas-text placeholder-gray-400 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-atlas-orange'}`}
                          placeholder="hola@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs ml-4 mt-1 font-medium">{errors.email}</p>}
                     </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-atlas-text ml-4">Mensaje</label>
                    <textarea 
                      id="message" 
                      rows={3} 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-3xl bg-atlas-bg border focus:ring-0 outline-none transition-all font-medium text-atlas-text placeholder-gray-400 resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-atlas-orange'}`}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs ml-4 mt-1 font-medium">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex justify-center lg:justify-start">
                    <Button type="submit" size="lg" className="w-full sm:w-auto px-12" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </div>
                </form>
              )}
            </div>

        </div>
      </div>
    </section>
  );
};
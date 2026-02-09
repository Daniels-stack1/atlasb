import React from 'react';
import { Home, Building2, Store, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (destination: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Home className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Reformas Integrales",
      description: "Transformación completa. Cocinas, baños y acabados."
    },
    {
      icon: <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Obra Nueva",
      description: "Construcción desde cero. De cimientos a entrega."
    },
    {
      icon: <Store className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Locales y Oficinas",
      description: "Diseño funcional para potenciar tu negocio."
    }
  ];

  return (
    <section id="services" className="py-16 bg-atlas-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
           <div className="max-w-xl">
              <span className="text-atlas-orange font-bold uppercase tracking-wider text-[10px] lg:text-xs mb-2 block">Nuestros Servicios</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-atlas-text leading-tight">
                Construimos tu futuro.
              </h2>
           </div>
           <button 
             onClick={() => onNavigate('portfolio')}
             className="group hidden md:flex items-center gap-2 text-atlas-text font-bold text-sm hover:text-atlas-orange transition-colors"
           >
             Ver proyectos
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-atlas-orange group-hover:text-white transition-all">
               <ArrowUpRight size={16} />
             </div>
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-6 rounded-[1.5rem] hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[180px]">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-atlas-orange w-5 h-5" />
              </div>
              
              <div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-atlas-bg rounded-xl flex items-center justify-center text-atlas-text mb-4 group-hover:bg-atlas-orange group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-heading text-lg lg:text-xl font-bold text-atlas-text mb-2">{service.title}</h3>
                <p className="text-atlas-textLight text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-3 rounded-full bg-white text-atlas-text text-sm font-bold shadow-sm border border-gray-100 w-full"
            >
              Ver proyectos
            </button>
        </div>
      </div>
    </section>
  );
};
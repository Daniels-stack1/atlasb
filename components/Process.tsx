import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      desc: "Análisis"
    },
    {
      id: "02",
      title: "Planning",
      desc: "Estrategia"
    },
    {
      id: "03",
      title: "Execution",
      desc: "Construcción"
    },
    {
      id: "04",
      title: "Delivery",
      desc: "Entrega"
    }
  ];

  return (
    <section className="py-12 bg-white rounded-t-[2rem] lg:rounded-t-[3rem] mt-0 lg:mt-12 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-atlas-orange font-bold uppercase tracking-wider text-[10px] lg:text-xs">El Proceso</span>
          <h2 className="font-heading text-2xl lg:text-4xl font-extrabold text-atlas-text mt-1 max-w-3xl mx-auto">
            Cuatro pasos simples.
          </h2>
        </div>

        {/* Forced 4 columns row on all screens */}
        <div className="grid grid-cols-4 gap-2 lg:gap-4">
          {steps.map((step) => (
            <div key={step.id} className="bg-atlas-bg p-3 lg:p-5 rounded-xl lg:rounded-[1.5rem] hover:bg-atlas-text hover:text-white transition-all duration-300 group cursor-default min-h-[100px] lg:min-h-[200px] flex flex-col justify-center lg:justify-between items-center lg:items-start text-center lg:text-left">
              <div className="w-full">
                <span className="text-2xl lg:text-4xl font-heading font-extrabold text-black/10 group-hover:text-white/20 mb-1 lg:mb-3 block tracking-tighter">
                  {step.id}
                </span>
                <h3 className="text-xs lg:text-lg font-bold mb-0 lg:mb-2 font-heading leading-tight">{step.title}</h3>
              </div>
              <p className="hidden lg:block text-sm opacity-70 leading-relaxed font-medium text-balance">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
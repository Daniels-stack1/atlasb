import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden rounded-t-[3rem] -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="flex text-atlas-orange gap-1 mb-8">
                   {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
               </div>
               <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-atlas-text leading-tight mb-8">
                   "Desde el diseño hasta la ejecución, Atlas superó todas nuestras expectativas."
               </h2>
               <div>
                 <p className="font-bold text-xl text-atlas-text">Carlos Rodríguez</p>
                 <p className="text-atlas-textLight">Reforma Integral en Eixample</p>
               </div>
               
               <div className="flex gap-4 mt-12">
                 <button className="w-14 h-14 border border-atlas-text/10 rounded-full flex items-center justify-center hover:bg-atlas-text hover:text-white transition-colors">
                   ←
                 </button>
                 <button className="w-14 h-14 bg-atlas-text text-white rounded-full flex items-center justify-center hover:bg-atlas-orange hover:text-white transition-colors border border-transparent">
                   →
                 </button>
               </div>
             </div>

             <div className="relative h-[500px]">
               <div className="absolute inset-0 bg-atlas-bg rounded-[3rem] transform rotate-2"></div>
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                 alt="Happy Client" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
               />
             </div>
        </div>
      </div>
    </section>
  );
};
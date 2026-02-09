import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (destination: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Background Image (Visible only on small screens) */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-atlas-bg"></div>
      </div>

      <div className="relative z-10 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 z-10 lg:pr-8 text-white lg:text-atlas-text">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 lg:bg-white border border-white/20 lg:border-atlas-text/5 text-atlas-orange text-[10px] lg:text-xs font-bold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md lg:backdrop-blur-none">
                <Star size={12} fill="currentColor" />
                <span>Construcción Premium</span>
              </div>
              
              <h1 className="font-heading text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Enfocados en un diseño excepcional y una <br/>
                <span className="text-white/50 lg:text-atlas-text/30">ejecución impecable.</span>
              </h1>
              
              <p className="font-body text-base lg:text-lg text-gray-300 lg:text-atlas-textLight mb-8 max-w-lg leading-relaxed">
                Transformamos espacios con una precisión meticulosa. Desde complejos comerciales hasta residencias privadas, construimos el futuro con solidez.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group w-full sm:w-auto justify-center" onClick={() => onNavigate('portfolio')}>
                  Explorar Trabajos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => onNavigate('#services')}
                  className="border-white/20 text-white hover:bg-white hover:text-atlas-text lg:border-atlas-text/10 lg:text-atlas-text lg:hover:border-atlas-text lg:hover:bg-transparent w-full sm:w-auto justify-center"
                >
                  Nuestros Servicios
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3].map((i) => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 lg:border-atlas-bg overflow-hidden bg-gray-200">
                       <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="Client" className="w-full h-full object-cover" />
                     </div>
                   ))}
                   <div className="w-10 h-10 rounded-full border-2 border-white/10 lg:border-atlas-bg bg-atlas-text text-white flex items-center justify-center text-xs font-bold">
                     +2k
                   </div>
                </div>
                <div className="text-sm font-medium">
                  <span className="font-bold block text-white lg:text-atlas-text">Confiado por líderes</span>
                  <span className="text-gray-400 lg:text-atlas-textLight">En toda Barcelona</span>
                </div>
              </div>
            </div>

            {/* Image Composition - Hidden on Mobile to save space */}
            <div className="hidden lg:block lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-3">
                 {/* Main large image with chamfered corner */}
                 <div className="col-span-2 relative group">
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-[2rem] z-10"></div>
                   <img 
                     src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                     alt="Construction Site"
                     className="w-full h-[360px] object-cover rounded-[2rem] clip-chamfer-br shadow-xl"
                   />
                   
                   {/* Floating badge */}
                   <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-lg z-20 max-w-[200px]">
                      <p className="font-heading font-bold text-3xl text-atlas-text mb-0.5">20+</p>
                      <p className="text-xs text-atlas-textLight font-medium">Años liderando el sector.</p>
                   </div>
                 </div>

                 {/* Secondary images */}
                 <div className="mt-2">
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                      alt="Planning"
                      className="w-full h-[200px] object-cover rounded-[1.5rem] shadow-lg"
                    />
                 </div>
                 <div className="mt-2 relative">
                    <div className="absolute -top-3 -right-3 w-16 h-16 bg-atlas-orange rounded-full flex items-center justify-center text-white font-bold transform rotate-12 z-20 shadow-lg border-4 border-atlas-bg text-sm">
                      Top 1%
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                      alt="Engineer"
                      className="w-full h-[200px] object-cover rounded-[1.5rem] rounded-tr-none shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
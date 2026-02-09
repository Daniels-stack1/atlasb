import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-atlas-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-atlas-text mb-6 tracking-tight">
            Cimentado en Experiencia. <br/>
            <span className="text-atlas-text/40">Guiado por Calidad.</span>
          </h2>
          <p className="text-atlas-textLight text-lg max-w-2xl mx-auto leading-relaxed">
            Con raíces profundas en Barcelona, aportamos un enfoque práctico y centrado en el cliente. Cada dato refleja nuestro compromiso.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Main Large Card */}
          <div className="lg:col-span-2 row-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full min-h-[400px]">
            <div className="flex justify-between items-start">
               <div className="w-14 h-14 bg-atlas-bg rounded-2xl flex items-center justify-center">
                 <ShieldCheck className="text-atlas-text w-7 h-7" />
               </div>
               <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                 Verificado
               </div>
            </div>
            <div>
              <h3 className="text-7xl font-heading font-extrabold text-atlas-text mb-4 tracking-tighter">1600k+</h3>
              <p className="text-xl font-bold text-atlas-text mb-2">Proyectos Seguros</p>
              <p className="text-atlas-textLight leading-relaxed">
                Hemos gestionado más de un millón y medio de horas de trabajo sin incidentes graves, priorizando siempre la seguridad del equipo.
              </p>
            </div>
          </div>

          {/* Tech Card */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-atlas-orange/10 rounded-xl flex items-center justify-center mb-6">
               <Zap className="text-atlas-orange w-6 h-6" />
            </div>
            <h4 className="font-heading text-xl font-bold text-atlas-text mb-2">Tecnología Moderna</h4>
            <p className="text-sm text-atlas-textLight">BIM y Drones para precisión milimétrica.</p>
          </div>

          {/* Success Rate */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-heading font-extrabold text-atlas-text mb-2">98%</div>
            <p className="font-bold text-atlas-text text-sm">Entregas a Tiempo</p>
          </div>

          {/* Revenue/Value Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-8">
             <div className="hidden sm:flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-atlas-bg"></div>
                <div className="w-12 h-12 rounded-full bg-atlas-text"></div>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-atlas-text/20"></div>
             </div>
             <div>
                <h3 className="text-4xl font-heading font-extrabold text-atlas-text mb-2">25M+</h3>
                <p className="font-bold text-atlas-text">Valor Gestionado (EUR)</p>
                <p className="text-sm text-atlas-textLight mt-2">En proyectos residenciales de lujo este año.</p>
             </div>
             <div className="ml-auto bg-atlas-bg p-4 rounded-full">
                <TrendingUp className="w-6 h-6 text-atlas-text" />
             </div>
          </div>

           {/* Team Card */}
           <div className="bg-atlas-text p-8 rounded-[2rem] shadow-lg text-white flex flex-col justify-between">
             <Users className="w-8 h-8 text-atlas-orange mb-4" />
             <div>
               <h4 className="font-heading text-lg font-bold">Ingenieros</h4>
               <p className="text-white/60 text-sm mt-1">Equipo certificado.</p>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};
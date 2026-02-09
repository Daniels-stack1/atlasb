import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (destination: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-12 lg:pt-20 pb-8 border-t border-atlas-text/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-20">
          
          <div className="lg:col-span-5 space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-atlas-text rounded-lg grid grid-cols-2 gap-1 p-1.5">
                    <div className="bg-atlas-orange rounded-sm"></div>
                    <div className="bg-white rounded-tr-sm"></div>
                    <div className="bg-white rounded-bl-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                </div>
                <span className="font-heading text-2xl font-extrabold text-atlas-text tracking-tight">Atlas Builders</span>
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-atlas-text max-w-sm leading-tight">
              Construyendo calidad y confianza.
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-atlas-bg flex items-center justify-center text-atlas-text hover:bg-atlas-orange hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-atlas-bg flex items-center justify-center text-atlas-text hover:bg-atlas-orange hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-atlas-bg flex items-center justify-center text-atlas-text hover:bg-atlas-orange hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-base font-bold mb-4 text-atlas-text">Empresa</h4>
              <ul className="space-y-3 text-atlas-textLight font-medium text-sm">
                <li><button onClick={() => onNavigate('#about')} className="hover:text-atlas-orange transition-colors">Sobre Nosotros</button></li>
                <li><button onClick={() => onNavigate('#services')} className="hover:text-atlas-orange transition-colors">Nuestros Servicios</button></li>
                <li><button onClick={() => onNavigate('portfolio')} className="hover:text-atlas-orange transition-colors">Proyectos</button></li>
                <li><a href="#" className="hover:text-atlas-orange transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-base font-bold mb-4 text-atlas-text">Servicios</h4>
              <ul className="space-y-3 text-atlas-textLight font-medium text-sm">
                <li><button onClick={() => onNavigate('#services')} className="hover:text-atlas-orange transition-colors">Reformas</button></li>
                <li><button onClick={() => onNavigate('#services')} className="hover:text-atlas-orange transition-colors">Obra Nueva</button></li>
                <li><button onClick={() => onNavigate('#services')} className="hover:text-atlas-orange transition-colors">Diseño</button></li>
                <li><button onClick={() => onNavigate('#services')} className="hover:text-atlas-orange transition-colors">Comercial</button></li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
               <h4 className="font-heading text-base font-bold mb-4 text-atlas-text">Contacto</h4>
               <ul className="space-y-3 text-atlas-textLight font-medium text-sm">
                <li>Barcelona, ES</li>
                <li><a href="mailto:info@atlas.es" className="hover:text-atlas-orange">info@atlas.es</a></li>
                <li><a href="tel:+34930000000" className="hover:text-atlas-orange">+34 930 00 00</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-atlas-text/5 flex flex-col md:flex-row justify-between items-center text-atlas-textLight text-xs font-medium">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Atlas Builders.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-atlas-text">Privacidad</a>
            <a href="#" className="hover:text-atlas-text">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
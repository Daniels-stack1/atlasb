import React from 'react';
import { ArrowLeft, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface PortfolioProps {
  onBack: () => void;
}

const projects = [
  {
    id: 1,
    title: "Residencia Villa Mar",
    category: "Residencial",
    location: "Sitges, Barcelona",
    image: "https://images.unsplash.com/photo-1600596542815-e32cb5313824?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 2,
    title: "Oficinas TechHub",
    category: "Comercial",
    location: "22@, Barcelona",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Loft Industrial",
    category: "Reforma",
    location: "Poblenou, Barcelona",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: 4,
    title: "Casa de Campo",
    category: "Obra Nueva",
    location: "Empordà, Girona",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: 5,
    title: "Boutique Hotel",
    category: "Comercial",
    location: "Gótico, Barcelona",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop",
    year: "2021"
  },
  {
    id: 6,
    title: "Penthouse Diagonal",
    category: "Reforma Lujo",
    location: "Diagonal, Barcelona",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    year: "2021"
  }
];

export const Portfolio: React.FC<PortfolioProps> = ({ onBack }) => {
  return (
    <div className="bg-atlas-bg min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <button 
              onClick={onBack}
              className="inline-flex items-center text-sm font-bold text-atlas-textLight hover:text-atlas-orange mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Inicio
            </button>
            <h1 className="font-heading text-4xl lg:text-6xl font-extrabold text-atlas-text tracking-tight">
              Trabajos Seleccionados
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-bold text-atlas-text border border-atlas-text/5">Todos</span>
            <span className="px-4 py-2 bg-transparent rounded-full text-sm font-medium text-atlas-textLight hover:bg-white transition-colors cursor-pointer">Residencial</span>
            <span className="px-4 py-2 bg-transparent rounded-full text-sm font-medium text-atlas-textLight hover:bg-white transition-colors cursor-pointer">Comercial</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-atlas-text z-20">
                  {project.year}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                   <span className="text-atlas-orange text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                   <h3 className="font-heading text-2xl font-bold text-atlas-text group-hover:text-atlas-orange transition-colors">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-atlas-text/10 flex items-center justify-center group-hover:bg-atlas-text group-hover:text-white transition-colors">
                   <ArrowRight size={16} />
                </div>
              </div>
              <div className="flex items-center mt-2 text-atlas-textLight text-sm font-medium">
                <MapPin size={14} className="mr-1" />
                {project.location}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-atlas-textLight mb-6">¿Tienes un proyecto en mente?</p>
          <Button size="lg" onClick={() => { onBack(); setTimeout(() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
            Hablemos de tu proyecto
          </Button>
        </div>

      </div>
    </div>
  );
};
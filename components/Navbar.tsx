import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigate: (destination: string) => void;
  currentView: 'home' | 'portfolio';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: 'home' }, // Maps to 'home' view
    { name: 'Nosotros', href: '#about' }, // Maps to ID
    { name: 'Servicios', href: '#services' }, // Maps to ID
    { name: 'Proyectos', href: 'portfolio' }, // Maps to 'portfolio' view
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-atlas-bg/80 backdrop-blur-xl border-b border-atlas-text/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-atlas-text p-2 rounded-lg">
               {/* Abstract geometric icon */}
               <div className="w-5 h-5 grid grid-cols-2 gap-1">
                 <div className="bg-atlas-orange rounded-sm"></div>
                 <div className="bg-white rounded-tr-lg"></div>
                 <div className="bg-white rounded-bl-lg"></div>
                 <div className="bg-white rounded-sm"></div>
               </div>
            </div>
            <span className="font-heading text-2xl font-extrabold text-atlas-text tracking-tight">Atlas Builders</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2 bg-white px-2 py-2 rounded-full shadow-sm border border-atlas-text/5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  (currentView === 'portfolio' && link.href === 'portfolio') || (currentView === 'home' && link.href === 'home') 
                    ? 'bg-atlas-text text-white' 
                    : 'text-atlas-text/70 hover:text-atlas-text hover:bg-atlas-bg'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-4 bg-atlas-text/10 mx-2"></div>
            <button className="p-2 text-atlas-text hover:text-atlas-orange transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
          
          <div className="hidden md:block">
             <Button size="sm" onClick={() => onNavigate('#about')}>Pedir Presupuesto</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-atlas-text p-2 bg-white rounded-full shadow-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-atlas-bg border-t border-atlas-text/5 absolute w-full h-screen z-50">
          <div className="px-6 pt-8 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-4 text-xl font-heading font-bold text-atlas-text border-b border-atlas-text/5"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8">
              <Button fullWidth size="lg" onClick={() => { onNavigate('#about'); setIsOpen(false); }}>Solicitar Presupuesto</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
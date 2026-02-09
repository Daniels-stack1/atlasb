import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');

  const handleNavigate = (destination: string) => {
    if (destination === 'portfolio') {
      setCurrentView('portfolio');
      window.scrollTo(0, 0);
    } else if (destination === 'home') {
      setCurrentView('home');
      window.scrollTo(0, 0);
    } else if (destination.startsWith('#')) {
      setCurrentView('home');
      // Timeout to allow the home view to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(destination);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-atlas-bg text-atlas-text font-body selection:bg-atlas-orange selection:text-white">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      {currentView === 'home' ? (
        <main>
          <Hero onNavigate={handleNavigate} />
          <Stats />
          <Services onNavigate={handleNavigate} />
          <Contact />
        </main>
      ) : (
        <Portfolio onBack={() => handleNavigate('home')} />
      )}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
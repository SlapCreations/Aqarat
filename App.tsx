
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import StepsSection from './components/StepsSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'buying' | 'selling'>('buying');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero onStartBuying={() => setActiveView('buying')} onStartSelling={() => setActiveView('selling')} />
        
        <PainPoints />

        <div id="guia" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Seu Caminho Personalizado</h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveView('buying')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeView === 'buying' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Quero Comprar
              </button>
              <button
                onClick={() => setActiveView('selling')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeView === 'selling' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Quero Vender
              </button>
            </div>
          </div>

          <StepsSection type={activeView} />
        </div>

        <BenefitsSection />

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

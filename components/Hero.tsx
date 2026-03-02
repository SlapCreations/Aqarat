
import React from 'react';

interface HeroProps {
  onStartBuying: () => void;
  onStartSelling: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartBuying, onStartSelling }) => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=60&w=1200" 
          alt="Modern Architecture Background" 
          width="1200"
          height="800"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Brand Logo in Hero */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl ring-4 ring-white/10 hover:rotate-3 transition-transform duration-500">
              <span className="text-white font-black text-5xl">A</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            O seu Processo no Imobiliário começa agora!
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Perdido/a entre papeladas, impostos e visitas? Nós guiamos o seu caminho, seja para encontrar a casa dos teus sonhos ou vender o seu imóvel pelo melhor preço.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#guia"
              onClick={onStartBuying}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105"
            >
              Quero Comprar Casa
            </a>
            <a 
              href="#guia"
              onClick={onStartSelling}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:scale-105 border-2 border-transparent"
            >
              Quero Vender Imóvel
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Apoio 100% Personalizado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Sem Custos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

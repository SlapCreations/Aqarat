
import React from 'react';

const Header: React.FC = () => {
  const whatsappLink = "https://wa.me/351932019755?text=Olá! Vi o site da Aqarat e gostaria de solicitar uma consultoria grátis.";

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tighter">Aqarat</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#guia" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Guia Passo-a-Passo</a>
          <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Vantagens</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md inline-block"
          >
            Consultoria Grátis
          </a>
        </nav>

        <button className="md:hidden text-slate-600 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "Excesso de Burocracia",
      description: "Documentação infinita, impostos (IMT, Selo) e requisitos legais que parecem um quebra-cabeças.",
      icon: "📄"
    },
    {
      title: "Medo de um Mau Negócio",
      description: "Incerteza sobre o valor real de mercado. Estarei a pagar a mais ou a vender por menos?",
      icon: "📉"
    },
    {
      title: "Perda de Tempo",
      description: "Visitas que não correspondem às fotos, chamadas que ninguém atende e anúncios desatualizados.",
      icon: "⏳"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Sente-se sobrecarregado/a?</h2>
          <p className="text-slate-600">Comprar ou vender um imóvel é uma das decisões financeiras mais importantes de uma vida e que leva a imensas dúvidas. Mas não tem de tomar essa decisão sozinho/a.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{pain.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

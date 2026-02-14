
import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Interlocutor Único",
      desc: "Não lida com 10 agências diferentes. Um/a único/a consultor/a coordena todo o seu processo.",
      icon: "🤝"
    },
    {
      title: "Negociação",
      desc: "Temos a experiência para defender os seus interesses",
      icon: "💎"
    },
    {
      title: "Sinergia Ativa",
      desc: "Acesso a Advogados, Solicitadores e Parceiros de Crédito Bancário.",
      icon: "🌐"
    },
    {
      title: "Tranquilidade Total",
      desc: "Resolvemos os problemas antes de eles chegarem até si. Menos stress, mais e melhores resultados.",
      icon: "🧘"
    }
  ];

  const whatsappLink = "https://wa.me/351932019755?text=Olá! Gostaria de agendar uma reunião de consultoria imobiliária.";

  return (
    <section id="beneficios" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Vantagem Exclusiva</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Porquê trabalhar com Consultores Dedicados?</h2>
          <p className="text-slate-400 text-lg">Trabalhar em exclusividade de serviço significa que o seu sucesso é a nossa única prioridade.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{b.icon}</div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Pronto/a para dar o primeiro passo com segurança?</h3>
            <p className="text-blue-100">Agende uma reunião de consultoria gratuita e sem compromisso.</p>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95 inline-block text-center"
          >
            Agendar Reunião Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

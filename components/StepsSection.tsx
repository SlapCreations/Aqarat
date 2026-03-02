
import React from 'react';

interface StepsSectionProps {
  type: 'buying' | 'selling';
}

const StepsSection: React.FC<StepsSectionProps> = ({ type }) => {
  const buyerSteps = [
    { title: "Definição de Orçamento", desc: "Análise da sua capacidade financeira e pré-aprovação de crédito, se necessário." },
    { title: "Procura Estratégica", desc: "Acedemos ao mercado aberto e a imóveis fora do mercado (off-market)." },
    { title: "Visitas Qualificadas", desc: "Acompanhamento técnico para identificar defeitos e potencial do imóvel." },
    { title: "Proposta e Negociação", desc: "Argumentação profissional para conseguir o melhor preço de compra." },
    { title: "CPCV", desc: "Contrato Promessa de Compra e Venda com validação jurídica total." },
    { title: "Escritura", desc: "O ato final onde a chave passa oficialmente para as suas mãos." }
  ];

  const sellerSteps = [
    { title: "Avaliação Profissional", desc: "Estudo de mercado comparativo para definir o preço certo de venda." },
    { title: "Preparação e Marketing", desc: "Reportagem fotográfica, vídeo e Home Staging para valorizar o imóvel." },
    { title: "Divulgação Máxima", desc: "Anúncios nos portais nacionais e internacionais de topo." },
    { title: "Gestão de Visitas", desc: "Filtragem de potenciais compradores para evitar curiosos." },
    { title: "Análise de Propostas", desc: "Apoio na escolha da melhor oferta (condições vs. preço)." },
    { title: "Escritura e Entrega", desc: "Finalização do processo com segurança jurídica e fiscal." }
  ];

  const steps = type === 'buying' ? buyerSteps : sellerSteps;

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h4 className="text-xl font-bold text-blue-600 mb-2">Passo {index + 1}</h4>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
                
                <div className="z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-white">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;

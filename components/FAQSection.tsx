
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`mt-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed py-2 whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Como é que a Aqarat me ajuda a comprar casa?",
      answer: "A Aqarat atua como o seu braço direito. Desde a definição do orçamento e procura estratégica (incluindo imóveis off-market), até à negociação e validação jurídica de toda a documentação. O nosso objetivo é que compre com total segurança e pelo melhor preço possível."
    },
    {
      question: "Quais são os custos de utilizar os vossos serviços?",
      answer: "A nossa consultoria inicial é totalmente gratuita. Trabalhamos com um modelo focado no sucesso do cliente. No caso de venda, só existe remuneração no ato da concretização do negócio. No caso de compra, o nosso serviço é partilhado com as imobiliárias vendedoras, o que significa que tem especialistas a defender os seus interesses sem custos acrescidos no preço do imóvel."
    },
    {
      question: "Quais são os principais impostos na compra de um imóvel em Portugal?",
      answer: "Os impostos principais são o IMT (Imposto Municipal sobre as Transmissões Onerosas de Imóveis) e o Imposto Selo. O valor varia consoante o preço do imóvel, a sua localização e se será para habitação própria ou secundária. O nosso assistente AI pode ajudá-lo/a a fazer uma estimativa rápida destes valores."
    },
    {
      question: "Porquê ter um/a consultor/a dedicado/a em vez de contactar várias agências?",
      answer: "Ter um/a interlocutor/a único/a poupa-lhe dezenas de horas de chamadas e visitas inúteis. O/A seu/sua consultor(a) Aqarat filtra o mercado por si, coordena visitas com todas as agências e garante que a informação que recebe é imparcial. É a diferença entre ser apenas mais um contacto numa base de dados e ter um/a profissional dedicado/a ao seu interesse."
    },
    {
      question: "O que é o Contrato Promessa de Compra e Venda (CPCV)?",
      answer: "O CPCV é um contrato legal que formaliza a intenção de compra e venda. Nele constam o preço, o valor do sinal (10% do valor do imóvel), a data prevista para a escritura e as condições do negócio. É um passo crucial que garante proteção jurídica a ambas as partes antes do ato final."
    },
    {
      question: "A Aqarat ajuda com o financiamento bancário?",
      answer: "Sim. Temos parcerias com intermediários de crédito certificados pelo Banco de Portugal que ajudam os nossos clientes a encontrar as melhores taxas de mercado e a agilizar todo o processo de aprovação bancária."
    }
  ];

  const whatsappNumber = "351932019755";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Dúvidas Comuns</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Perguntas Frequentes</h2>
            <p className="text-slate-600 mt-4">Tudo o que precisa saber para navegar no mercado imobiliário com clareza.</p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-12 text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-700 font-medium mb-4">Ainda tem dúvidas?</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline inline-flex items-center gap-2"
            >
              Fale connosco Agora! (Paulo & Nia)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

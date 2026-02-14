
import React, { useState } from 'react';

interface ModalContent {
  title: string;
  body: React.ReactNode;
}

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);
  const instagramLink = "https://www.instagram.com/funun.al_gharb.aqarat/";
  const facebookLink = "https://www.facebook.com/profile.php?id=61576175741350";

  const closeModal = () => setActiveModal(null);

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal({
      title: "Política de Privacidade",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>A Aqarat valoriza a sua privacidade. Esta política explica como recolhemos e tratamos os seus dados ao utilizar a nossa plataforma de Consultoria.</p>
          <div>
            <h6 className="font-bold text-slate-900">Dados Recolhidos:</h6>
            <p>Recolhemos dados de identificação (nome, e-mail, telefone) apenas quando preenche formulários de contacto ou cria uma conta.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Finalidade:</h6>
            <p>Os dados servem para processar pedidos de informação sobre imóveis, enviar alertas de novas propriedades (se autorizado) e melhorar a experiência de navegação.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Partilha de Dados:</h6>
            <p>Podemos partilhar os seus dados com agentes imobiliários ou proprietários parceiros para responder aos seus pedidos de visita ou compra. Não vendemos dados a terceiros.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Direitos do Utilizador:</h6>
            <p>Tem o direito de aceder, retificar ou solicitar a eliminação dos seus dados a qualquer momento através do e-mail: <a href="mailto:paulo.lsilva@remax.pt" className="text-blue-600 underline">paulo.lsilva@remax.pt</a></p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Segurança:</h6>
            <p>Utilizamos protocolos HTTPS e alojamento seguro (Vercel) para proteger as suas informações.</p>
          </div>
        </div>
      )
    });
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal({
      title: "Termos de Uso",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Ao aceder ao website Aqarat, o utilizador concorda com os seguintes termos:</p>
          <div>
            <h6 className="font-bold text-slate-900">Objeto:</h6>
            <p>A plataforma funciona como uma consultoria imobiliária digital, atuando como intermediária de informação.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Veracidade da Informação:</h6>
            <p>Embora nos esforcemos por manter os dados atualizados, não garantimos a disponibilidade imediata ou a exatidão absoluta de preços, áreas, taxas e outros custos de acordo com as questões colocadas de cada usuário. Podem ser alterados sem aviso prévio.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Responsabilidade:</h6>
            <p>A Aqarat não se responsabiliza por danos decorrentes de falhas técnicas ou por decisões de investimento baseadas exclusivamente no conteúdo do site. Recomendamos sempre a verificação presencial.</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Propriedade Intelectual:</h6>
            <p>Todo o design, logótipos e imagens (salvo as de parceiros) são propriedade da Aqarat.</p>
          </div>
        </div>
      )
    });
  };

  const openCookies = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal({
      title: "Política de Cookies",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>O nosso website utiliza cookies para melhorar a sua experiência de navegação.</p>
          <div>
            <h6 className="font-bold text-slate-900">O que são cookies?</h6>
            <p>Pequenos ficheiros de texto guardados no seu navegador que ajudam a lembrar as suas preferências de pesquisa (ex: zona geográfica ou filtros de preço).</p>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Tipos de Cookies que utilizamos:</h6>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Necessários:</strong> Essenciais para o funcionamento do site (ex: login).</li>
              <li><strong>Analíticos:</strong> Utilizamos ferramentas como Google Analytics ou Vercel Analytics para perceber quantas pessoas nos visitam e quais os imóveis mais populares.</li>
              <li><strong>Funcionais:</strong> Guardam as suas pesquisas recentes para facilitar o uso posterior.</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-slate-900">Como desativar:</h6>
            <p>Pode gerir ou bloquear cookies nas definições do seu navegador (Chrome, Safari, Firefox, etc.). Note que a desativação pode afetar algumas funcionalidades do site.</p>
          </div>
        </div>
      )
    });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-black text-slate-800 tracking-tighter">Aqarat</span>
            </div>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              O seu parceiro de confiança para navegar no mercado imobiliário português. Especialistas em facilitar vidas e realizar sonhos através de um serviço de consultoria imobiliária de elite.
            </p>
            <div className="flex gap-4">
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group"
                aria-label="Facebook"
              >
                <span className="text-slate-600 font-bold text-xs group-hover:text-white">Fb</span>
              </a>
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all group"
                aria-label="Instagram"
              >
                <span className="text-slate-600 font-bold text-xs group-hover:text-white">Ig</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Navegação</h5>
            <ul className="space-y-4">
              <li><a href="#guia" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Comprar Casa</a></li>
              <li><a href="#guia" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Vender Imóvel</a></li>
              <li><a href="#beneficios" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Vantagens Consultor</a></li>
              <li><a href="#faq" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">FAQ</a></li>
              <li><a href="#ia" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Assistente Virtual</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contactos</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <span className="flex-shrink-0">📍</span> Olhão, Portugal
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <span className="flex-shrink-0">✉️</span> 
                  <a href="mailto:nidia.palma@remax.pt" className="hover:text-blue-600 transition-colors">nidia.palma@remax.pt</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm pl-7">
                  <a href="mailto:paulo.lsilva@remax.pt" className="hover:text-blue-600 transition-colors">paulo.lsilva@remax.pt</a>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <span className="flex-shrink-0">📞</span> 
                  <a href="tel:+351962858607" className="hover:text-blue-600 transition-colors">+351 962 858 607</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm pl-7">
                  <a href="tel:+351932019755" className="hover:text-blue-600 transition-colors">+351 932 019 755</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 by Aqarat - Todos os direitos reservados. Licença AMI: 12206
          </p>
          <div className="flex gap-6">
            <button onClick={openPrivacy} className="text-slate-500 text-xs hover:text-slate-900 transition-colors">Privacidade</button>
            <button onClick={openTerms} className="text-slate-500 text-xs hover:text-slate-900 transition-colors">Termos de Uso</button>
            <button onClick={openCookies} className="text-slate-500 text-xs hover:text-slate-900 transition-colors">Cookies</button>
          </div>
        </div>
      </div>

      {/* Modal implementation */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={closeModal}>
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-900">{activeModal.title}</h3>
              <button 
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors text-slate-400 hover:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              {activeModal.body}
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

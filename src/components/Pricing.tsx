import { Check, ShieldCheck, Lock, Zap } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 px-4 md:px-8 text-white" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, rgb(31, 41, 55), rgb(17, 24, 39), rgb(17, 24, 39))" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Eu preciso ser <span className="text-[#C2FF73]">sincero</span> com
              você...
            </h2>
            <p className="text-gray-400 text-lg">
              Depois de ler o{" "}
              <strong className="text-white agrandir-font" style={{ fontFamily: "'PPAgrandirText-Bold', system-ui, sans-serif", fontWeight: 700 }}>Do Zero ao Começo</strong>, você:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Entende Onde Está",
              "Sabe O Próximo Passo",
              "Decide Com Clareza",
              "Reduz Erros Básicos",
              "Ganha Segurança",
              "Organiza A Rotina",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 p-4 rounded-lg"
              >
                <div className="text-[#C2FF73]">
                  <Check size={20} className="stroke-[3]" />
                </div>
                <span className="font-medium text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-transparent border-l-4 border-[#C2FF73] p-6 rounded-r-lg">
            <h3 className="text-2xl font-bold text-white mb-1">
              Não fica fácil.
            </h3>
            <h3 className="text-2xl font-bold text-[#C2FF73] mb-2">
              Mas fica organizado.
            </h3>
            <p className="text-sm tracking-widest uppercase text-gray-500 font-medium">
              E A ORGANIZAÇÃO MUDA TUDO.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Chegou a hora de tirar seu negócio
              <br />
              do papel
              <br />
              do jeito certo!
            </h3>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative z-10">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold mb-1">
                <span
                  style={{
                    fontFamily: 'PPAgrandirText-Bold, system-ui, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Do Zero
                </span>{" "}
                <span
                  className="text-[#C2FF73]"
                  style={{
                    fontFamily: 'PPAgrandirText-Bold, system-ui, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  ao Começo
                </span>
              </h4>
              <p className="text-gray-500 font-medium">Guia Completo Digital</p>
            </div>

            <div className="text-center mb-8">
              <p className="text-sm text-gray-400 line-through mb-1">
                De R$97,00
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-gray-600 text-sm font-medium">
                  Por apenas
                </span>
                <span className="text-4xl font-black text-gray-900">
                  R$47,90
                </span>
              </div>
              <p className="text-xs text-[#C2FF73] font-bold uppercase tracking-wider mt-2">
                Pagamento Único
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="text-[#C2FF73] min-w-[18px] mt-0.5" size={18} />
                  <span>E-book completo <span className="agrandir-font" style={{ fontFamily: "'PPAgrandirText-Bold', system-ui, sans-serif", fontWeight: 700 }}>Do Zero ao Começo</span></span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="text-[#C2FF73] min-w-[18px] mt-0.5" size={18} />
                  <span>Conteúdo direto, prático e aplicável</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="text-[#C2FF73] min-w-[18px] mt-0.5" size={18} />
                  <span>Ordem real para começar um negócio</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="text-[#C2FF73] min-w-[18px] mt-0.5" size={18} />
                  <span>Estrutura mínima para não quebrar</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="text-[#C2FF73] min-w-[18px] mt-0.5" size={18} />
                  <span>Linguagem simples, sem termos técnicos</span>
                </li>
              </>
            </ul>

            <a 
              href="https://pay.hotmart.com/U104025029F?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#C2FF73] hover:bg-[#C2FF73/90] text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg mb-4 text-center"
            >
              ACESSE O MATERIAL EXCLUSIVO
            </a>

            <div className="flex justify-center gap-4 text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              <div className="flex items-center gap-1">
                <Lock size={12} />
                Compra Segura
              </div>
              <div className="flex items-center gap-1">
                <Zap size={12} />
                Acesso Imediato
              </div>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="mt-4 bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex gap-4 items-start">
            <div className="text-[#C2FF73] mt-1">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm mb-1">
                Garantia Incondicional
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                Acesse com tranquilidade. Se o conteúdo não fizer sentido, basta
                interromper o uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

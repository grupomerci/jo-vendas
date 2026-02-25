import { Check, X, ArrowRight } from "lucide-react";

export const TargetAudience = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-lg font-bold tracking-widest uppercase text-black/990 mb-2">
            Alinhamento de Expectativa
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O <span className="agrandir-font" style={{ fontFamily: "'PPAgrandirText-Bold', system-ui, sans-serif", fontWeight: 700 }}>Do Zero ao Começo</span> é para você?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Este material não é para todo mundo. Veja se ele se encaixa no seu momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-gray-300">
          {/* Left Column - YES */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C2FF73]"></div>
            <h3 className="text-xl font-bold mb-2">Para você que...</h3>
            <p className="text-gray-500 text-sm mb-8">
              Busca organização e crescimento.
            </p>

            <ul className="space-y-4">
              {[
                "Se sente perdida tentando empreender, faz muita coisa, mas no fundo não sabe se está indo para o caminho certo.",
                "Já começou a vender, mas não sabe se está tendo lucro ou só trabalhando demais para pouco retorno.",
                "Abriu CNPJ, conta PJ ou começou como MEI sem entender direito o que estava fazendo e hoje sente que tomou decisões no escuro.",
                'Mistura dinheiro pessoal com o do negócio e vive com a sensação de que o dinheiro "some".',
                "Trabalha muito, se esforça, mas sente que está sempre apagando incêndio em vez de construir algo sólido.",
                "Sabe que precisa se organizar, mas não sabe por onde começar sem gastar dinheiro que não tem.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] text-[#C2FF73]">
                    <Check size={20} />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - NO */}
          <div className="p-8 md:p-12 relative bg-gray-50/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <h3 className="text-xl font-bold mb-2">NÃO é para você que...</h3>
            <p className="text-gray-500 text-sm mb-8">Busca atalhos mágicos.</p>

            <ul className="space-y-4">
              {[
                "Acredita que o tempo, sozinho, vai resolver a bagunça do negócio, mesmo repetindo os mesmos erros.",
                "Prefere culpar o mercado, o cliente ou a crise sem assumir a responsabilidade de organizar o básico.",
                "Não está disposta a olhar para números, mesmo sabendo que eles dizem a verdade.",
                'Quer fórmula mágica, dinheiro rápido ou atalhos para "ficar rica" empreendendo.',
                "Acha que empreender é só vender e que organização financeira é detalhe.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] text-red-500">
                    <X size={20} />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-[#C2FF73/10]max-w-2xl mx-auto">
            <p className="text-sm text-gray-700 font-medium">
              Se você sente que "tá tudo meio embolado", mas quer organizar o
              começo para não quebrar lá na frente, este guia é para você.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg border border-gray-700"
            >
              ACESSAR MATERIAL EXCLUSIVO
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { BookOpen, Calculator, Target, CheckCircle2 } from "lucide-react";

export const Content = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">
            Conteúdo Programático
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você vai encontrar no Guia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chega de teoria solta. Eu condensei tudo em 3 pilares para você ler,
            entender e aplicar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-300 transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <BookOpen size={24} strokeWidth={1.3} />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Estrutura & Começo</h3>
            <p className="text-sm text-gray-500 mb-6">
              A base para não construir um castelo de areia.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>O Ponto Zero real (não é o CNPJ)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Estrutura mínima viável</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Identidade e Posicionamento</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-300 transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
              <Calculator size={24} strokeWidth={1.3} />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Dinheiro & Lucro</h3>
            <p className="text-sm text-gray-500 mb-6">
              Para parar de trabalhar de graça sem saber.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Preço certo (sem achismo)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Separando PF de PJ</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Entendendo Lucro vs. Faturamento</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-300 transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <Target size={24} strokeWidth={1.3} />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Cliente & Rotina</h3>
            <p className="text-sm text-gray-500 mb-6">
              Como vender para quem paga e se organizar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Quem atender (e quem demitir)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Planejamento de 90 dias</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  size={16}
                  className="text-lime-500 mt-0.5"
                  strokeWidth={1.3}
                />
                <span>Tradução do "Empreendedorês"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-md">
            <h4 className="font-bold text-gray-900 mb-2">BÔNUS INCLUSOS</h4>
            <p className="text-sm text-gray-500">
              Conteúdos extras sobre Marketing, Atendimento e Solução de
              Problemas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              Marketing Intencional
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              Atendimento Diferenciado
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              Gestão de Crise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

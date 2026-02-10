import { CheckCircle, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/high-building.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#131A28]/90 z-0"></div>

      <div className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-semibold uppercase tracking-wider">
              <span>• Guia Prático</span>
              <span>• Sem Romantização</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Tire seu <br />
              negócio do <br />
              papel{" "}
              <span className="text-lime-400">
                do jeito <br /> certo
              </span>
            </h1>

            <p className="text-gray-200 text-lg max-w-lg">
              Um guia prático para organizar o início, evitar erros caros e
              começar com segurança, mesmo com pouco dinheiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                ACESSAR MATERIAL EXCLUSIVO
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-lime-400" />
                <span>100% Prático</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-lime-400" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-lime-400" />
                <span>Compra Segura</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lime-400/20 rounded-full blur-[100px] -z-10"></div>

            {/* Book Mockup */}
            <div className="relative w-[300px] h-[400px] bg-gray-900 rounded-r-2xl shadow-2xl border-l-8 border-lime-900 transform rotate-y-12 rotate-3 hover:rotate-0 transition-all duration-500 group cursor-pointer">
              {/* Book Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-lime-900 to-lime-800 rounded-l-sm z-20"></div>

              {/* Book Cover Content */}
              <div className="absolute inset-0 ml-8 bg-zinc-800 rounded-r-md overflow-hidden flex flex-col p-6 border-t border-r border-b border-gray-700">
                <div className="w-full h-1 bg-lime-400 mb-4"></div>
                <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight">
                    Você não <br /> começa do zero
                  </h3>
                  <p className="text-xs text-gray-400">
                    O guia para tirar seu negócio do papel sem romantismo e sem
                    perder tempo nem dinheiro.
                  </p>
                </div>
                <div className="w-full h-12 bg-lime-400 mt-auto flex items-center justify-center">
                  <span className="font-bold text-black text-xs">
                    DO ZERO AO COMEÇO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

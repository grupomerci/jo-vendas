import { CheckCircle, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'AGrandir-Dynamic';
        src: url('/src/assets/fonts/PPAgrandirText-Bold.otf') format('opentype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen h-fit flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#131A28]/90 z-0" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto max-md:mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Conteúdo */}
          <div className="space-y-6 text-center lg:text-left w-full">

            {/* Badge */}
            <div className="inline-flex mx-auto lg:mx-0 items-center gap-2 px-4 py-1.5 rounded-full border border-[#C2FF73]/30 bg-[#C2FF73]/10 text-[#C2FF73] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#C2FF73] rounded-full animate-pulse" />
              <span>Guia prático • Sem romantização</span>
            </div>

            {/* Título */}
            <h1 
              className="text-5xl sm:text-5xl lg:text-6xl font-extrabold text-white max-md:mt-8"
            >
              Tire seu negócio do papel{" "}
              <span className="bg-gradient-to-r from-[#C2FF73] to-[#558925] bg-clip-text text-transparent">
                do jeito certo
              </span>
            </h1>

            {/* Descrição */}
            <p className="text-gray-300 max-md:mt-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
              Um guia prático para organizar o início, evitar erros caros e começar com segurança, mesmo com pouco dinheiro.
            </p>

            {/* CTA */}
            <a 
              href="https://pay.hotmart.com/U104025029F?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-md:mt-12 sm:w-auto mx-auto lg:mx-0 bg-[#C2FF73] hover:bg-[#C2FF73]/90 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_0_25px_rgba(194,255,115,0.25)]"
            >
              ACESSAR MATERIAL EXCLUSIVO
              <ArrowRight size={20} />
            </a>

            {/* Divider */}
            <hr className="border-[#C2FF73]/20" />

            {/* Benefícios */}
            <div className="flex flex-row justify-center lg:justify-start gap-4 text-sm max-md:text-xs text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#C2FF73]" />
                <span>100% Prático</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#C2FF73]" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C2FF73]" />
                <span>Compra Segura</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <img
              src="/img-home.png"
              alt="Do Zero ao Começo - Guia Prático"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
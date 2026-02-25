import { useEffect } from "react";
import { Instagram } from "lucide-react";

export const Footer = () => {
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
    <footer className="bg-gradient-to-r from-[#0B1220] via-[#0E1627] to-[#0B1220] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-8">
        
        {/* Logo + Instagram */}
        <div className="flex items-center justify-between w-full">
          <div className="bg-white/15 backdrop-blur px-6 py-4 rounded-lg">
            <span 
              className="text-white text-2xl agrandir-font"
              style={{ 
                fontFamily: "'PPAgrandirText-Bold', system-ui, sans-serif",
                fontWeight: 700
              }}
            >
              Do Zero ao Começo
            </span>
          </div>
          
          <a
            href="https://www.instagram.com/jorg1nho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Divisória */}
        <div className="w-full border-t border-white/10"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/60 flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© 2026 Do Zero ao Começo.</span>
          <span className="hidden md:inline-block w-1 h-1 bg-white/40 rounded-full"></span>
          <span>Todos os direitos reservados.</span>
        </div>

      </div>
    </footer>
  );
};
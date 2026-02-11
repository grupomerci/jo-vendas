export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0B1220] via-[#0E1627] to-[#0B1220] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Badge */}
        <div className="bg-white/15 backdrop-blur px-6 py-4 rounded-lg">
          <span 
            className="text-white font-extrabold text-2xl"
            style={{ 
              fontFamily: 'AGrandir-Dynamic, system-ui, sans-serif', 
              fontWeight: 800 
            }}
          >
            Do Zero ao Começo
          </span>
        </div>

        {/* Texto + Links */}
        <div className="text-center md:text-right space-y-4">
          <p className="text-sm text-white/60">
            © 2026 Do Zero ao Começo.
            <br className="mb-2"/>
            Todos os direitos reservados.
          </p>

          <div className="flex gap-4 justify-center md:justify-end text-[13px] text-white/60">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Políticas de Privacidade
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
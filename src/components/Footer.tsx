export const Footer = () => {
  return (
    <footer className="bg-[#0F1115] text-white py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="bg-gray-800 py-2 px-4 rounded">
          <span className="font-bold text-white">
            Do Zero <span className="text-lime-400">ao Começo</span>
          </span>
        </div>

        <div className="text-center md:text-right space-y-2">
          <p className="text-gray-500 text-sm">
            © 2026 Do Zero ao Começo.
            <br className="md:hidden" /> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

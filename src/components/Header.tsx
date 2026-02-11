export const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent border-b border-white/10">
      <div className="max-w-6xl mx-auto py-6 px-4 md:px-8 flex justify-between items-center">
        <div 
          className="font-extrabold -ml-16 max-lg:ml-0 text-xl md:text-2xl tracking-tight"
          style={{ 
            fontFamily: 'AGrandir-Dynamic, system-ui, sans-serif', 
            fontWeight: 800 
          }}
        >
          <span className="text-white">Do Zero </span>
          <span className="text-[#C2FF73]">ao Começo</span>
        </div>
      </div>
    </header>
  );
};

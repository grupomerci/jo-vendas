export const Author = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Author Image Placeholder */}
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <img
              src="/IMG_1777.JPG (1).jpeg"
              alt="Jorge Martínez Jr"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-0 w-full px-6 z-20 text-center">
              <p className="font-bold text-white mb-1">Jorge Martínez Jr</p>
              <p className="text-xs text-white/80 uppercase tracking-wider">
                Estrategista de Negócios
              </p>
            </div>
          </div>
          {/* Decorative element behind */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C2FF73/20] rounded-2xl -z-10"></div>
          {/* Decorative element behind */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C2FF73/20] rounded-2xl -z-10"></div>
        </div>

        <div className="w-full md:w-2/3 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Muito prazer,{" "}
              <span className="text-[#C2FF73]">Jorge Martínez Jr</span>
            </h2>

            <div className="flex items-center gap-4 border-l-4 border-[#C2FF73] pl-6 py-1">
              <p className="text-xl font-medium text-gray-200">
                Sou empresário contábil e estrategista de negócios.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              O{" "}
              <strong
                className="text-white"
                style={{
                  fontFamily: 'PPAgrandirText-Bold, system-ui, sans-serif',
                  fontWeight: 700,
                }}
              >
                Do Zero ao Começo
              </strong>{" "}
              nasceu
              porque eu vi, na prática, gente boa desistindo achando que o
              problema era falta de talento quando, na verdade, ninguém nunca
              mostrou o caminho real do começo.
            </p>
            <p>
              Neste guia, eu te mostro a ordem certa para tirar seu negócio do
              papel,{" "}
              <strong className="text-white">
                sem romantizar o empreendedorismo
              </strong>
              .
            </p>
            <p>
              É o material que eu gostaria que tivessem colocado na minha mão
              quando tudo ainda estava confuso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

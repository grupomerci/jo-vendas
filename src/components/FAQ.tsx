import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "O que é o <span class='agrandir-font' style='font-family: \"PPAgrandirText-Bold\", system-ui, sans-serif; font-weight: 700'>Do Zero ao Começo</span>?",
    answer:
      "É um e-book prático que mostra a ordem real para estruturar um negócio no início, sem romantização e sem promessas irreais.",
  },
  {
    question: "Para quem esse material é indicado?",
    answer:
      "Para quem está começando a empreender ou já começou, mas sente tudo confuso e quer organizar o básico antes de tentar crescer.",
  },
  {
    question: "Preciso ter CNPJ para aproveitar o conteúdo?",
    answer:
      "Não. O material serve tanto para quem ainda não formalizou quanto para quem já tem CNPJ ou MEI.",
  },
  {
    question: "Esse conteúdo é muito técnico?",
    answer:
      "Não. Tudo é explicado em linguagem simples, direta e fácil de entender.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer:
      "Sim. Serve para negócios de produto, serviço, autônomos, MEI e pequenas empresas.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C2FF7320] rounded-full text-[#C2FF73] mb-4 bg-white shadow">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-[#C2FF73/50]"
            >
              <button
                className="w-full flex items-center justify-between p-3 md:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.question }}></span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#C2FF73]" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-3 md:p-5 pt-4 md:pt-4 text-gray-600 bg-white border-t border-gray-100">
                  <span className="text-xs md:text-base">{item.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Pronto para organizar seu negócio do jeito certo?
          </p>
          <a 
            href="https://pay.hotmart.com/U104025029F?checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#C2FF73] hover:bg-[#C2FF73] hover:text-black text-[#C2FF73] font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            ACESSAR MATERIAL EXCLUSIVO
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

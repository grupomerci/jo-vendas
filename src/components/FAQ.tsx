import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "O que é o Do Zero ao Começo?",
    answer:
      "É um guia prático e direto para quem quer começar um negócio ou organizar um que já existe, focado nos 3 pilares essenciais: Estrutura, Finanças e Clientes.",
  },
  {
    question: "Para quem esse material é indicado?",
    answer:
      "Para empreendedores iniciantes, profissionais liberais, autônomos e quem quer transformar uma ideia em um negócio real sem perder tempo.",
  },
  {
    question: "Preciso ter CNPJ para aproveitar o conteúdo?",
    answer:
      "Não. O guia aborda justamente o 'Ponto Zero', ajudando você a decidir o melhor momento para formalizar seu negócio e como fazer isso.",
  },
  {
    question: "Esse conteúdo é muito técnico?",
    answer:
      "Zero técnico. A linguagem é simples, direta e feita para quem não é da área contábil ou administrativa.",
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer:
      "Sim, os princípios de organização, precificação e vendas se aplicam a serviços, produtos físicos e negócios digitais.",
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
          <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full text-lime-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-lime-400/50"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-lime-500" size={20} />
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
                <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

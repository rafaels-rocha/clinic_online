import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "O sistema Clínica online é seguro?",
    answer: "Sim, o Clínica online utiliza tecnologia de ponta em segurança, incluindo criptografia de dados, backups automáticos e está em conformidade com todas as regulamentações de proteção de dados da área médica."
  },
  {
    question: "Existe taxa de implantação e treinamento?",
    answer: "Não há taxa de implantação. O treinamento inicial está incluído em todos os planos, e oferecemos suporte contínuo para garantir que sua equipe aproveite ao máximo nossa plataforma."
  },
  {
    question: "Em caso de cancelamento, o Clínica online tem contrato de fidelidade?",
    answer: "Não exigimos contrato de fidelidade. Você pode cancelar seu plano a qualquer momento, sem multas ou taxas adicionais."
  },
  {
    question: "Como funciona a migração do banco de dados do meu sistema atual para o Clínica online?",
    answer: "Nossa equipe especializada realiza todo o processo de migração, garantindo a transferência segura e completa dos seus dados. O processo é supervisionado e validado em cada etapa."
  },
  {
    question: "Posso acessar o Clínica online do meu celular?",
    answer: "Sim, o Clínica online possui um aplicativo móvel disponível para iOS e Android, permitindo acesso seguro a todas as funcionalidades principais do sistema de qualquer lugar."
  },
  {
    question: "O Clínica online tem suporte técnico?",
    answer: "Sim, oferecemos suporte técnico 24/7 através de chat, e-mail e telefone. Nossa equipe está sempre pronta para ajudar com qualquer questão ou dúvida."
  }
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F7F9FA]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[#2C3E50] font-medium">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#f97316]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#f97316]" />
                  )}
                </button>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
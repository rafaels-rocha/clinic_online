import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  included: boolean;
  text: string;
}

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  features: PricingFeature[];
}

export function PricingSection() {
  const [isYearly] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "AUTÔNOMO",
      monthlyPrice: "R$ 189",
      features: [
        { included: true, text: "Agendamento" },
        { included: true, text: "Cadastros" },
        { included: true, text: "Módulo Médico simples" },
        { included: false, text: "Módulo de anamnese prévia" },
        { included: false, text: "Controle de estoque" },
        { included: false, text: "Relatórios" },
        { included: false, text: "Possibilidade de glossas de convênio" },
      ]
    },
    {
      name: "LITE",
      monthlyPrice: "R$ 289",
      features: [
        { included: true, text: "Agendamento" },
        { included: true, text: "Cadastros" },
        { included: true, text: "Módulo Médico simples" },
        { included: true, text: "Módulo de anamnese prévia" },
        { included: true, text: "Controle de estoque" },
        { included: true, text: "Relatórios" },
        { included: false, text: "Possibilidade de glossas de convênio" },
      ]
    },
    {
      name: "FISIO / MED",
      monthlyPrice: "R$ 389",
      features: [
        { included: true, text: "Agendamento" },
        { included: true, text: "Cadastros" },
        { included: true, text: "Módulo Médico simples" },
        { included: true, text: "Módulo de anamnese prévia" },
        { included: true, text: "Controle de estoque" },
        { included: true, text: "Relatórios" },
        { included: true, text: "Possibilidade de glossas de convênio" },
      ]
    }
  ];

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2C3E50]">
            Consulte o melhor plano <span className="text-[#f97316]">para você</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-[#2C3E50] mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-[#2C3E50]">
                  {plan.monthlyPrice}
                </span>
                <span className="text-gray-500 ml-2">/{isYearly ? 'ano' : 'mês'}</span>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${feature.included ? 'text-[#98EBBB]' : 'text-gray-300'}`} />
                    <span className={feature.included ? 'text-gray-600' : 'text-gray-400'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 rounded-full border-2 border-[#98EBBB] text-[#2C3E50] font-medium hover:bg-[#98EBBB] hover:text-white transition-colors animate-pulse">
                Teste grátis
              </button>
            </div>
          ))}
        </div>
           
       
      </div>

    
    </section>
    
  );
}
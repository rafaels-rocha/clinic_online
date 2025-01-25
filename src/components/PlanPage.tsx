import React, { useState } from 'react';
import { Check, X, Heart, Menu, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


import { NavBarSection } from './NavBarSection';
import { FooterSection } from './FooterSection';
import { WhatsAppButton } from './WhatsAppButton';

export function PlanPage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    
    const plans = [
    {
      name: "AUTÔNOMO",
      monthlyPrice: "R$149",
      description: "Ideal para clínicas pequenas iniciando a jornada digital",
      features: [
        { category: "Gestão de Agenda", items: [
          { included: true, text: "Agenda online" },
          { included: true, text: "Confirmação automática via WhatsApp" },
          { included: true, text: "Lembretes de consulta" },
          { included: true, text: "Bloqueio de horários" },
          { included: false, text: "Agendamento online para pacientes" }
        ]},
        { category: "Prontuário e Atendimento", items: [
          { included: true, text: "Prontuário eletrônico básico" },
          { included: true, text: "Cadastro de pacientes" },
          { included: true, text: "Histórico de atendimentos" },
          { included: false, text: "Telemedicina" },
          { included: false, text: "Prescrição digital" }
        ]},
        { category: "Financeiro", items: [
          { included: true, text: "Controle financeiro básico" },
          { included: true, text: "Relatórios simples" },
          { included: false, text: "Integração com sistemas fiscais" },
          { included: false, text: "Gestão de convênios" }
        ]},
        { category: "Suporte", items: [
          { included: true, text: "Suporte por email" },
          { included: true, text: "Base de conhecimento" },
          { included: false, text: "Suporte prioritário" },
          { included: false, text: "Treinamento personalizado" }
        ]}
      ],
      limits: "Até 2 profissionais"
    },
    {
      name: "LITE",
      monthlyPrice: "R$299",
      description: "Perfeito para clínicas em crescimento",
      highlight: true,
      features: [
        { category: "Gestão de Agenda", items: [
          { included: true, text: "Todas as features do plano Básico" },
          { included: true, text: "Agendamento online para pacientes" },
          { included: true, text: "Agenda compartilhada" },
          { included: true, text: "Gestão de salas e equipamentos" },
          { included: true, text: "Múltiplas unidades" }
        ]},
        { category: "Prontuário e Atendimento", items: [
          { included: true, text: "Prontuário eletrônico avançado" },
          { included: true, text: "Telemedicina" },
          { included: true, text: "Prescrição digital" },
          { included: true, text: "Módulo de exames" },
          { included: true, text: "Integração com laboratórios" }
        ]},
        { category: "Financeiro", items: [
          { included: true, text: "Gestão financeira completa" },
          { included: true, text: "Relatórios personalizados" },
          { included: true, text: "Gestão de convênios" },
          { included: true, text: "Controle de comissões" }
        ]},
        { category: "Suporte", items: [
          { included: true, text: "Suporte por email e chat" },
          { included: true, text: "Treinamento básico" },
          { included: false, text: "Suporte prioritário 24/7" },
          { included: false, text: "Gestor de conta dedicado" }
        ]}
      ],
      limits: "Até 5 profissionais"
    },
    {
      name: "FISIO / MED",
      monthlyPrice: "R$599",
      description: "Solução completa para grandes clínicas",
      features: [
        { category: "Gestão de Agenda", items: [
          { included: true, text: "Todas as features do plano Profissional" },
          { included: true, text: "API de integração" },
          { included: true, text: "Personalização de marca" },
          { included: true, text: "Aplicativo personalizado" },
          { included: true, text: "Integrações personalizadas" }
        ]},
        { category: "Prontuário e Atendimento", items: [
          { included: true, text: "Prontuário eletrônico personalizado" },
          { included: true, text: "BI Clínico" },
          { included: true, text: "Protocolos personalizados" },
          { included: true, text: "Certificações digitais" },
          { included: true, text: "Integração com equipamentos médicos" }
        ]},
        { category: "Financeiro", items: [
          { included: true, text: "Dashboard analítico avançado" },
          { included: true, text: "Business Intelligence" },
          { included: true, text: "Gestão multi-clínica" },
          { included: true, text: "Relatórios customizados" }
        ]},
        { category: "Suporte", items: [
          { included: true, text: "Suporte prioritário 24/7" },
          { included: true, text: "Gestor de conta dedicado" },
          { included: true, text: "Treinamento personalizado" },
          { included: true, text: "SLA garantido" }
        ]}
      ],
      limits: "Profissionais ilimitados"
    }
  ];

  return (
      <div className="min-h-screen bg-gray-50">
        <NavBarSection bgColor="bg-[white]" bgButton="bg-[#98EBBB]"/>
     

      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">
              Escolha o plano ideal para sua clínica
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Compare nossos planos e encontre a solução perfeita para suas necessidades
            </p>

          
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.highlight 
                    ? 'ring-2 ring-[#f97316] shadow-xl' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-[#2C3E50]">
                        { plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 ml-2">/{'mês'}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{plan.limits}</p>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-full font-medium mb-8 transition-colors ${
                  plan.highlight
                    ? 'bg-[#f97316] text-white hover:bg-[#ea580c]'
                    : 'bg-[#98EBBB] text-[#2C3E50] hover:bg-[#7ad3a0]'
                }`}>
                  Começar agora
                </button>

                <div className="space-y-6">
                  {plan.features.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="font-semibold text-[#2C3E50] mb-3">{category.category}</h4>
                      <div className="space-y-3">
                        {category.items.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-gray-600' : 'text-gray-400'}>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              Precisa de um plano personalizado para sua clínica?
            </p>
            <button className="bg-[#2C3E50] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Fale com nossa equipe
            </button>
          </div>
        </div>
      </div>
      <FooterSection/>
      <WhatsAppButton />
    </div>
  );
}
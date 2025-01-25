
import { ArrowRight, Clock, Calendar, FileText, Database, Lock, MessageSquare } from 'lucide-react';

import { WhatsAppButton } from './WhatsAppButton';
import { NavBarSection } from './NavBarSection';
import { FooterSection } from './FooterSection';

const services = [
  {
    icon: <Clock className="w-12 h-12 text-[#f97316]" />,
    title: "Atendimento 24/7",
    description: "Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana. Nossa equipe está sempre pronta para ajudar com qualquer questão, garantindo que seu sistema funcione sem interrupções. Inclui suporte via chat, email e telefone com tempo de resposta garantido.",
    features: [
      "Suporte técnico 24/7 via chat, email e telefone",
      "Tempo de resposta garantido em até 15 minutos",
      "Equipe especializada em todas as funcionalidades",
      "Monitoramento proativo do sistema"
    ]
  },
  {
    icon: <Calendar className="w-12 h-12 text-[#f97316]" />,
    title: "Agendamento Inteligente",
    description: "Sistema avançado de agendamento que otimiza sua agenda e reduz faltas. Permite agendamento online, confirmações automáticas via SMS/WhatsApp e gestão eficiente de horários com análise inteligente de disponibilidade.",
    features: [
      "Agendamento online integrado ao seu site",
      "Confirmações automáticas via SMS/WhatsApp",
      "Sistema de lista de espera inteligente",
      "Histórico completo de agendamentos",
      "Relatórios de ocupação e cancelamentos"
    ]
  },
  {
    icon: <FileText className="w-12 h-12 text-[#f97316]" />,
    title: "Prontuário Eletrônico",
    description: "Prontuário eletrônico completo e personalizado para cada especialidade. Inclui anamnese estruturada, evolução clínica, prescrição digital e integração com exames laboratoriais.",
    features: [
      "Templates personalizados por especialidade",
      "Assinatura digital em conformidade com CFM",
      "Anexo de exames e documentos",
      "Histórico completo do paciente",
      "Integração com laboratórios"
    ]
  },
  {
    icon: <Database className="w-12 h-12 text-[#f97316]" />,
    title: "Gestão Administrativa",
    description: "Controle financeiro completo, gestão de estoque e relatórios gerenciais detalhados. Acompanhe o desempenho da sua clínica em tempo real com dashboards personalizados.",
    features: [
      "Controle financeiro com múltiplas formas de pagamento",
      "Gestão de convênios e tabelas de preços",
      "Controle de estoque e fornecedores",
      "Relatórios gerenciais customizáveis",
      "Integração com sistemas contábeis"
    ]
  },
  {
    icon: <Lock className="w-12 h-12 text-[#f97316]" />,
    title: "Segurança e Compliance",
    description: "Máxima segurança dos dados com criptografia de ponta a ponta e conformidade com LGPD e regulamentações do setor de saúde. Backup automático em nuvem e controle de acessos.",
    features: [
      "Criptografia de dados em conformidade com LGPD",
      "Backup automático em nuvem",
      "Controle de acesso por níveis de permissão",
      "Registro de auditoria completo",
      "Certificações de segurança"
    ]
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-[#f97316]" />,
    title: "Comunicação com Pacientes",
    description: "Sistema integrado de comunicação que mantém contato próximo com seus pacientes. Inclui lembretes automáticos, pesquisas de satisfação e canal direto para dúvidas.",
    features: [
      "Lembretes automáticos de consultas",
      "Pesquisas de satisfação pós-atendimento",
      "Canal direto para dúvidas via WhatsApp",
      "Campanhas de marketing personalizadas",
      "Portal do paciente para acesso a resultados"
    ]
  }
];

export function ServicesPage() {


  return (
    <div className="min-h-screen bg-gray-50">
     <NavBarSection bgColor="bg-[#98EBBB]" bgButton="bg-white"/>

      <div className="bg-[#98EBBB] py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#2C3E50] text-center mb-6">
            Nossos Serviços Completos
          </h1>
          <p className="text-[#2C3E50] text-center max-w-2xl mx-auto mb-12">
            Explore nossa gama completa de funcionalidades projetadas para otimizar sua clínica e melhorar a experiência dos seus pacientes.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection/>

      <WhatsAppButton />
    </div>
  );
}
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">Política de Privacidade</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-3">1. Informações que coletamos</h2>
              <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Informações pessoais (nome, e-mail, telefone)</li>
                <li>Informações de saúde</li>
                <li>Dados de pagamento</li>
                <li>Histórico de consultas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-3">2. Como usamos suas informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos</li>
                <li>Enviar notificações importantes</li>
                <li>Personalizar sua experiência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-3">3. Proteção de dados</h2>
              <p>Implementamos medidas de segurança rigorosas para proteger suas informações, incluindo:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Criptografia de ponta a ponta</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo</li>
                <li>Backups regulares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-3">4. Seus direitos</h2>
              <p>Você tem direito a:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir informações imprecisas</li>
                <li>Solicitar a exclusão de dados</li>
                <li>Optar por não receber comunicações de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#2C3E50] mb-3">5. Contato</h2>
              <p>Para questões sobre privacidade, entre em contato:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: privacy@Clínica online.com</li>
                <li>Telefone: (555) 123-4567</li>
                <li>Endereço: 123 Healthcare Ave, Medical City</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Última atualização: 1 de Março de 2024
            </p>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
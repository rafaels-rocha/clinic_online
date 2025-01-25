import React from 'react';
import { Users,Percent,Download,ShieldCheck } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
              alt="Doctor with medical device"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-[#98EBBB] p-4 rounded-2xl shadow-lg">
              <p className="text-[#2C3E50] font-bold">95% de aprovação</p>
            </div> */}
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
              A solução que sua clínica precisa
            </h2>
            <p className="text-gray-600 mb-8">
            Nossa plataforma foi criada para otimizar processos, reduzir a burocracia e oferecer praticidade no dia a dia. Com recursos que vão desde a organização de agendas até o suporte completo para suas operações, você terá tudo o que precisa para focar no atendimento ao paciente e no crescimento do seu negócio.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <Users className="w-8 h-8 text-[#f97316]" />
                <div>
                  <div className="text-2xl font-bold text-[#2C3E50]">+10K</div>
                  <div className="text-base text-gray-600">de clientes ativos</div>
                  {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#f97316] h-2 rounded-full w-[98%]"></div>
                  </div> */}
                  {/* <div className="text-sm text-gray-600 mt-1">98% de aprovação</div> */}
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <ShieldCheck  className="w-8 h-8 text-[#f97316]" />
                <div>
                  <div className="text-2xl font-bold text-[#2C3E50]">100%</div>
                  <div className="text-base text-gray-600">seguro e confiável</div>
                  {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#f97316] h-2 rounded-full w-[98%]"></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">98% de aprovação</div> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Download  className="w-10 h-8 text-[#f97316]" />
                <div>
                  <div className="text-2xl font-bold text-[#2C3E50]">Atualizações</div>
                  <div className="text-base text-gray-600">constantes e inclusas</div>
                 
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Percent className="w-8 h-8 text-[#f97316]" />
                <div>
                <div className="text-2xl font-bold text-[#2C3E50]">98%</div>
                <div className="text-base text-gray-600 mt-1"> de aprovação</div>
                {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#f97316] h-2 rounded-full w-[98%]"></div>
                </div> */}
                
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
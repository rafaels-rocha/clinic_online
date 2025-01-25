

import {BadgeDollarSign,HandCoins,MoveUpRight } from 'lucide-react';


export function IndicationSection() {
  return (

    <section className="py-20 bg-gradient-to-b from-[#98EBBB] to-white overflow-hidden">

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">


          <div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
              Sobre a indicação
            </h2>
            <p className="text-gray-600 mb-8">
            Gostou da nossa solução? Agora você pode indicar o sistema para outros profissionais e ganhar benefícios exclusivos. Quanto mais indicações, mais vantagens para você e sua clínica. É simples, prático e todo mundo sai ganhando!
            </p>


          </div>
          <div className="relative  ">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Doctor with medical device"
                className=" md:w-5/6 h-[300px] object-cover bg-white p-2 rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center justify-center my-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50]">
            Por que fazer parte?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-11/12 mt-12 mx-auto">
          <div className="flex flex-col items-center text-center">
            <BadgeDollarSign  className="w-10 h-10 text-[#f97316] mb-2" />
            <h2 className="text-lg font-medium text-[#2C3E50]">Descontos exclusivos para cada indicação</h2>
            <p className="text-sm text-gray-600 break-words overflow-wrap break-word">
            Ganhe descontos especiais em sua mensalidade a cada novo usuário indicado. Quanto mais indicações, mais descontos você recebe!
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <HandCoins  className="w-10 h-10 text-[#f97316] mb-2" />
            <h2 className="text-lg font-medium text-[#2C3E50]">Ganho de cashback</h2>
            <p className="text-sm text-gray-600 break-words overflow-wrap break-word">
            Ganhe recompensas em dcashback para usar em sua assinatura, toda vez que você indicar um novo cliente
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MoveUpRight    className="w-10 h-10 text-[#f97316] mb-2" />
            <h2 className="text-lg font-medium text-[#2C3E50]">Upgrade para um plano superior</h2>
            <p className="text-sm text-gray-600 break-words overflow-wrap break-word">
            Com cada nova indicação, você pode ser promovido para um plano superior, com mais funcionalidades e vantagens exclusivas
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
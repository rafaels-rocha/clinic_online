import React from 'react';

const testimonials = [
  {
    name: "AMANDA",
    role: "Dentista",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&q=80&w=100",
    testimonial: "Implementar esse sistema foi a melhor decisão para minha clínica. A organização dos agendamentos e a facilidade no gerenciamento transformaram nosso dia a dia. Agora, consigo dedicar mais tempo aos pacientes e menos às tarefas administrativas."
  },
  {
    name: "JOÃO",
    role: "Clínico Geral",

    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&q=80&w=100",
    testimonial: "O sistema é intuitivo e fácil de usar. A integração de funcionalidades agilizou nossos processos e reduziu erros. A equipe toda se adaptou rapidamente, e os resultados já aparecem na satisfação dos pacientes."
  },
  {
    name: "MARIA",
    role: "Pediatra",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1374&auto=format&fit=crop&q=80&w=100",
    testimonial: "Com a solução, conseguimos otimizar o atendimento e melhorar a experiência dos nossos pacientes. O suporte técnico sempre nos atende com agilidade, e as atualizações constantes mostram o compromisso com a melhoria contínua."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Feedback dos clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Descubra como estamos transformando a gestão de clínicas e otimizando o dia a dia de profissionais de saúde por meio das experiências e opiniões de quem já confia em nossa solução.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[#98EBBB] hover:shadow-lg transition-shadow"
            >
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#98EBBB] mb-4"
              />
              <h4 className="font-bold text-xl text-[#2C3E50] mb-1">
                {testimonial.name}
              </h4>
              <p className="text-[#f97316] text-sm mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
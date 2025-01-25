import React, { useState, useRef, useEffect } from 'react';
import { Clock, Users, Shield, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { Link } from 'react-router-dom';

export const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#f97316]" />,
    title: "Serviço 24/7",
    description: "Suporte completo e atendimento disponível 24 horas por dia, 7 dias por semana"
  },
  {
    icon: <Users className="w-8 h-8 text-[#f97316]" />,
    title: "Usuários",
    description: "Gerenciamento eficiente de múltiplos usuários com diferentes níveis de acesso"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#f97316]" />,
    title: "Segurança",
    description: "Proteção avançada de dados e conformidade com normas de segurança"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#f97316]" />,
    title: "Agendamento",
    description: "Sistema inteligente de agendamento com lembretes automáticos"
  },
  {
    icon: <Users className="w-8 h-8 text-[#f97316]" />,
    title: "Colaboração",
    description: "Ferramentas para colaboração eficiente entre equipes médicas"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#f97316]" />,
    title: "Backup",
    description: "Backup automático e recuperação de dados em tempo real"
  },
  
];

export function FeaturesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const pageCount = Math.ceil(features.length / itemsPerPage);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const distance = currentX - startX;
    setSwipeDistance(distance);
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    setIsSwiping(false);

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0 && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      } else if (swipeDistance < 0 && currentPage < pageCount - 1) {
        setCurrentPage(prev => prev + 1);
      }
    }
    setSwipeDistance(0);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const nextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className="py-20 bg-[#98EBBB] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2C3E50]">
            NOSSAS <span className="text-[#f97316]">FUNCIONALIDADES</span>
          </h2>
          <p className="text-[#2C3E50] mt-2 max-w-2xl mx-auto">
            Explore nossa gama completa de recursos projetados para otimizar sua clínica
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10 transition-opacity duration-300 lg:flex hidden items-center justify-center ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div 
            ref={containerRef}
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(calc(-${currentPage * 100}% + ${isSwiping ? swipeDistance : 0}px))`,
              }}
            >
              <div className="flex w-full ">
                {features.slice().map((feature, index) => (
                  <div 
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                  >
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={nextPage}
            disabled={currentPage === pageCount - 1}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10 transition-opacity duration-300 lg:flex hidden items-center justify-center ${currentPage === pageCount - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-[#2C3E50] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/servicos"
            className="inline-flex items-center space-x-2 bg-white text-[#2C3E50] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            <span>Conheça todas nossas funcionalidades</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
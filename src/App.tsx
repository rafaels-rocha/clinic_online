import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SolutionSection } from './components/SolutionSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { IndicationSection } from './components/IndicationSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { PlanPage } from './components/PlanPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { NavBarSection } from './components/NavBarSection';
import { ScrollToTop } from './components/ScrollToTop';
import { FooterSection } from './components/FooterSection';

const HomePage = () => {

  return (
    <div className="min-h-screen">
     <NavBarSection bgColor="bg-[#98EBBB]" bgButton="bg-white"/>
      
  

      {/* Hero Section */}
      <header className="bg-[#98EBBB] pb-10">

        <div className="container mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 text-[#2C3E50]">SISTEMA DE GESTÃO PARA CONSULTÓRIOS, CLÍNICAS E MAIS</h1>
            <p className="text-lg mb-8 text-[#2C3E50] opacity-80">
            Revitalize a administração do seu consultório com o Somar, nosso Sistema em Nuvem. Agende consultas, gerencie finanças, estoque e prontuários eletrônicos de maneira integrada e eficiente. Descubra a modernidade com Somar - a chave para a gestão inteligente. Transforme-se agora!
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#2C3E50] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Teste agora
              </button>
              <button className="text-[#2C3E50] underline font-medium">
                Leia mais
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-2 rounded-3xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2791&ixlib=rb-4.0.3"
                alt="Healthcare Professional"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <SolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <IndicationSection />
      <PricingSection />
      <FAQSection />

     <FooterSection/>
      <WhatsAppButton />
    </div>
    
  );
};
const App = () => {
  return (
    <Router basename='/clinic_online'>
        <ScrollToTop />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/servicos" element={<ServicesPage />} />
        
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/planos" element={<PlanPage />} />
      </Routes>
    </Router>
  );
};
export default App;
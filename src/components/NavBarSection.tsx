import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
type NavBarSectionProps = {
  bgColor: string;// Prop para definir a cor de fundo
  bgButton: string; 
};
export function NavBarSection({ bgColor, bgButton }: NavBarSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <div>
      <div className="bg-white py-2 border-b">
        <div className="container mx-auto px-6 flex justify-end items-center space-x-4">
          <a href='#' className="text-sm text-gray-600">Pesquisar</a>
          <a href='#' className="text-sm text-gray-600">Área do cliente</a>
        </div>
      </div>

      <nav className={`${bgColor} sticky top-0 z-50 shadow-md`}>

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-[#2C3E50]" />
              <span className="text-2xl font-bold text-[#2C3E50]">Clínica online</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors">Home</Link>
              <Link to="/servicos" className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors">Serviços</Link>
              <Link to="/planos" className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors">Planos</Link>
              <Link to="/contato" className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors">Contato</Link>
              <button className={`${bgButton} text-[#2C3E50] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors`}>
                Teste agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#2C3E50]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/servicos" 
                  className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVIÇOS
                </Link>
                <Link 
                  to="/contato" 
                  className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTATO
                </Link>
                <Link 
                  to="/planos" 
                  className="text-[#2C3E50] font-medium hover:text-[#f97316] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PLANOS
                </Link>
                <button className= {`${bgButton} text-[#2C3E50] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors w-full`}>
                  Teste agora
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

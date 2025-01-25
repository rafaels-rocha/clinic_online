import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart,  } from 'lucide-react';

export function FooterSection() {
   
    return (
        <footer className="bg-[#0c1821] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-6 h-6 text-[#98EBBB]" />
                <span className="text-xl font-bold">Clínica online</span>
              </div>
              <p className="text-gray-400">Fornecer serviços de saúde de qualidade para um futuro mais saudável.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#98EBBB]">About Us</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Services</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Doctors</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#98EBBB]">General Medicine</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Cardiology</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Pediatrics</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Emergency Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#98EBBB]">(75) 9 9992-4885</a></li>
                <li><a href="#" className="hover:text-[#98EBBB]">Alagoinhas-BA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Clínica online. Direitos reservados. | <Link to="/privacy" className="hover:text-[#98EBBB]">Política de privacidade</Link></p>
          </div>
        </div>
      </footer>
    );
}
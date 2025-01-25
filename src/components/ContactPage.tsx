import React, { useState } from 'react';
import { Heart, Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';
import { NavBarSection } from './NavBarSection';
import { FooterSection } from './FooterSection';

export function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavBarSection bgColor="bg-[white]" bgButton="bg-[#98EBBB]" />

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">Entre em Contato</h1>
              <p className="text-gray-600">Estamos aqui para ajudar. Entre em contato conosco.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#98EBBB]">
                  <Phone className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Telefone</h3>
                <p className="text-gray-600">(75) 9992-4885</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#98EBBB]">
                  <Mail className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Email</h3>
                <p className="text-gray-600">contato@clinicaonline.com</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#98EBBB]">
                  <MapPin className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Endereço</h3>
                <p className="text-gray-600">Alagoinhas - BA</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insira seu Nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98EBBB] focus:border-transparent outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insira um E-mail válido"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98EBBB] focus:border-transparent outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Insira seu assunto aqui"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98EBBB] focus:border-transparent outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#98EBBB] focus:border-transparent outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#2C3E50] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterSection/>

      <WhatsAppButton />
    </div>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg h-full transform transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#2C3E50] text-center mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}
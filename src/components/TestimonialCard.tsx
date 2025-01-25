import React from 'react';

interface TestimonialCardProps {
  name: string;
  image: string;
  testimonial: string;
}

export function TestimonialCard({ name, image, testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 rounded-full object-cover border-2 border-[#98EBBB] mb-4"
      />
      <h4 className="font-bold text-[#2C3E50] mb-2">{name}</h4>
      <p className="text-gray-600 text-sm">{testimonial}</p>
    </div>
  );
}
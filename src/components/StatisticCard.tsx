import React from 'react';

interface StatisticCardProps {
  icon: string;
  value: string;
  label: string;
  percentage: string;
}

export function StatisticCard({ icon, value, label, percentage }: StatisticCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2 text-[#f97316] mb-1">
        <span>{icon}</span>
        <span className="font-bold">{value}</span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-[#f97316] h-2 rounded-full" 
          style={{ width: percentage }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{percentage} de aprovação</p>
    </div>
  );
}
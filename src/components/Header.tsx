import React from 'react';
import { Activity } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Activity className="w-12 h-12 text-orange-500 mr-3" />
        <h1 className="text-4xl font-bold text-gray-800">Calculadora IMC</h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Descubra seu Índice de Massa Corporal e veja sua classificação de forma visual e divertida!
      </p>
    </header>
  );
}
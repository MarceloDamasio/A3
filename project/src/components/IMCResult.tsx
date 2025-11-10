import React from 'react';
import { IMCResult as IMCResultType } from '../types/imc';
import { Heart, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface IMCResultProps {
  result: IMCResultType | null;
}

export function IMCResult({ result }: IMCResultProps) {
  if (!result) return null;

  const getStatusIcon = () => {
    if (result.value < 18.5) return <TrendingDown className="w-6 h-6" />;
    if (result.value >= 18.5 && result.value < 25) return <Heart className="w-6 h-6" />;
    if (result.value >= 25 && result.value < 30) return <TrendingUp className="w-6 h-6" />;
    return <Minus className="w-6 h-6" />;
  };

  const getBoneco = () => {
    const size = result.value < 18.5 ? 'text-4xl' : 
                 result.value < 25 ? 'text-5xl' : 
                 result.value < 30 ? 'text-6xl' : 'text-7xl';
    
    return (
      <div className={`${size} mb-4 animate-bounce`}>
        {result.icon}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Seu Resultado</h3>
        
        {getBoneco()}
        
        <div className="mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className={`${result.color} mr-2`}>
              {getStatusIcon()}
            </span>
            <span className="text-4xl font-bold text-gray-800 dark:text-white">
              {result.value}
            </span>
          </div>
          <p className={`text-xl font-semibold ${result.color} mb-2`}>
            {result.category}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs mx-auto leading-relaxed">
            {result.description}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tabela de Referência IMC</h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <div>Abaixo 18,5: Magreza</div>
            <div className="text-green-600 dark:text-green-400 font-medium">18,5 - 24,9: Saudável</div>
            <div>25,0 - 29,9: Sobrepeso</div>
            <div>30,0 - 34,9: Obesidade I</div>
            <div>35,0 - 39,9: Obesidade II</div>
            <div>Acima 40,0: Obesidade III</div>
          </div>
        </div>
      </div>
    </div>
  );
}
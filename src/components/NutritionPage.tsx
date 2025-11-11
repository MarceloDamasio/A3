import React from 'react';
import { IMCResultType } from '../types/imc';
import { getNutritionRecommendation } from '../utils/nutritionRecommendations';
import { Target, CheckCircle, XCircle, Lightbulb, AlertTriangle } from 'lucide-react';

interface NutritionPageProps {
  currentIMC: IMCResultType | null;
}

export function NutritionPage({ currentIMC }: NutritionPageProps) {
  if (!currentIMC) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-center">
        <div className="text-6xl mb-4">🍎</div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Recomendações Nutricionais
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Para receber recomendações personalizadas de alimentação, primeiro calcule seu IMC na aba "Calcular".
        </p>
        <div className="bg-cyan-50 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-cyan-800 dark:text-blue-200 text-sm">
            💡 Suas recomendações serão baseadas no seu IMC atual
          </p>
        </div>
      </div>
    );
  }

  const recommendation = getNutritionRecommendation(currentIMC.value);

  return (
    <div className="space-y-6">
      {/* Header com IMC atual */}
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 dark:from-blue-600 dark:to-blue-700 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Seu Plano Nutricional</h2>
            <p className="opacity-90">Baseado no seu IMC atual: {currentIMC.value}</p>
          </div>
          <div className="text-4xl">
            {recommendation.icon}
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Target className="w-6 h-6 text-cyan-500 dark:text-blue-400 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Objetivo: {recommendation.goal}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {recommendation.description}
        </p>
      </div>

      {/* Alimentos Recomendados */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Alimentos Recomendados</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommendation.foods.recommended.map((food, index) => (
            <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{food}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Alimentos a Evitar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <XCircle className="w-6 h-6 text-red-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Alimentos a Evitar</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommendation.foods.avoid.map((food, index) => (
            <div key={index} className="flex items-center p-3 bg-red-50 dark:bg-red-900 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{food}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dicas Importantes */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Dicas Importantes</h3>
        </div>
        <div className="space-y-3">
          {recommendation.tips.map((tip, index) => (
            <div key={index} className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aviso Médico*/}
      <div className="bg-cyan-50 dark:bg-blue-900 border border-cyan-200 dark:border-blue-700 p-6 rounded-2xl">
        <div className="flex items-center mb-3">
          <AlertTriangle className="w-6 h-6 text-cyan-600 dark:text-blue-400 mr-3" />
          <h4 className="font-bold text-cyan-800 dark:text-blue-200">Importante</h4>
        </div>
        <p className="text-cyan-700 dark:text-blue-300 text-sm leading-relaxed">
          Estas são recomendações gerais baseadas no seu IMC. Para um plano alimentar personalizado e seguro, 
          consulte sempre um nutricionista ou médico especializado. Cada pessoa tem necessidades únicas que 
          devem ser avaliadas individualmente.
        </p>
      </div>
    </div>
  );
}
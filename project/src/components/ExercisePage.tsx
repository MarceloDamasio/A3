import React from 'react';
import { IMCResult } from '../types/imc';
import { getExerciseRecommendation } from '../utils/exerciseRecommendations';
import { Target, Heart, Dumbbell, Zap, Clock, Calendar, AlertTriangle } from 'lucide-react';

interface ExercisePageProps {
  currentIMC: IMCResult | null;
}

export function ExercisePage({ currentIMC }: ExercisePageProps) {
  if (!currentIMC) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-center">
        <div className="text-6xl mb-4">🏋️</div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Plano de Exercícios Personalizado
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Para receber um plano de exercícios personalizado, primeiro calcule seu IMC na página "Calculadora".
        </p>
        <div className="bg-cyan-50 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-cyan-800 dark:text-blue-200 text-sm">
            💡 Seu plano será baseado no seu IMC atual e objetivos
          </p>
        </div>
      </div>
    );
  }

  const recommendation = getExerciseRecommendation(currentIMC.value);

  return (
    <div className="space-y-6">
      {/* Header com IMC atual */}
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 dark:from-blue-600 dark:to-blue-700 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Seu Plano de Exercícios</h2>
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

      {/* Frequência e Duração */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-3">
            <Calendar className="w-5 h-5 text-cyan-500 dark:text-blue-400 mr-2" />
            <h4 className="font-bold text-gray-800 dark:text-white">Frequência</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{recommendation.frequency}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-3">
            <Clock className="w-5 h-5 text-cyan-500 dark:text-blue-400 mr-2" />
            <h4 className="font-bold text-gray-800 dark:text-white">Duração</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{recommendation.duration}</p>
        </div>
      </div>

      {/* Exercícios Cardiovasculares */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Heart className="w-6 h-6 text-red-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Exercícios Cardiovasculares</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommendation.exercises.cardio.map((exercise, index) => (
            <div key={index} className="flex items-center p-3 bg-red-50 dark:bg-red-900 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{exercise}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exercícios de Força */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Dumbbell className="w-6 h-6 text-blue-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Exercícios de Força</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommendation.exercises.strength.map((exercise, index) => (
            <div key={index} className="flex items-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{exercise}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exercícios de Flexibilidade */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Zap className="w-6 h-6 text-purple-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Flexibilidade e Mobilidade</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommendation.exercises.flexibility.map((exercise, index) => (
            <div key={index} className="flex items-center p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{exercise}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dicas Importantes */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Target className="w-6 h-6 text-green-500 mr-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Dicas Importantes</h3>
        </div>
        <div className="space-y-3">
          {recommendation.tips.map((tip, index) => (
            <div key={index} className="flex items-start p-3 bg-green-50 dark:bg-green-900 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aviso Médico */}
      <div className="bg-cyan-50 dark:bg-blue-900 border border-cyan-200 dark:border-blue-700 p-6 rounded-2xl">
        <div className="flex items-center mb-3">
          <AlertTriangle className="w-6 h-6 text-cyan-600 dark:text-blue-400 mr-3" />
          <h4 className="font-bold text-cyan-800 dark:text-blue-200">Importante</h4>
        </div>
        <p className="text-cyan-700 dark:text-blue-300 text-sm leading-relaxed">
          Estas são recomendações gerais baseadas no seu IMC. Antes de iniciar qualquer programa de exercícios, 
          consulte um médico e um educador físico qualificado. Cada pessoa tem limitações e necessidades específicas 
          que devem ser avaliadas individualmente para garantir segurança e eficácia.
        </p>
      </div>
    </div>
  );
}
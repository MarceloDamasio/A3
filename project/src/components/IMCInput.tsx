import React from 'react';
import { Scale, Ruler } from 'lucide-react';

interface IMCInputProps {
  weight: string;
  height: string;
  onWeightChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onCalculate: () => void;
  isValid: boolean;
}

export function IMCInput({ 
  weight, 
  height, 
  onWeightChange, 
  onHeightChange, 
  onCalculate, 
  isValid 
}: IMCInputProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Calcule seu IMC
      </h2>
      
      <div className="space-y-6">
        <div className="relative">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Peso (kg)
          </label>
          <div className="relative">
            <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => onWeightChange(e.target.value)}
              placeholder="Ex: 70"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Altura (cm)
          </label>
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              placeholder="Ex: 175"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <button
          onClick={onCalculate}
          disabled={!isValid}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform ${
            isValid
              ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 dark:from-blue-600 dark:to-blue-700 hover:from-cyan-500 hover:to-cyan-600 dark:hover:from-blue-700 dark:hover:to-blue-800 hover:scale-105 shadow-lg'
              : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
          }`}
        >
          Calcular IMC
        </button>
      </div>
    </div>
  );
}
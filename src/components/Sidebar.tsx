import React from 'react';
import { Calculator, History, Apple, Dumbbell, Calendar } from 'lucide-react';

interface SidebarProps {
  activePage: 'calculator' | 'nutrition' | 'exercises' | 'agenda';
  onPageChange: (page: 'calculator' | 'nutrition' | 'exercises' | 'agenda') => void;
  historyCount: number;
}

export function Sidebar({ activePage, onPageChange, historyCount }: SidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 shadow-lg h-screen fixed left-0 top-0 z-10">
      <div className="p-6 bg-gradient-to-b from-cyan-200 to-cyan-300 dark:from-blue-800 dark:to-blue-900">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Health App</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Sua saúde em primeiro lugar</p>
      </div>
      
      <nav className="mt-8">

        {/* CALCULADORA */}
        <button
          onClick={() => onPageChange('calculator')}
          className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 ${
            activePage === 'calculator'
              ? 'bg-cyan-100 dark:bg-blue-900 text-cyan-800 dark:text-blue-200 border-r-4 border-cyan-500 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-blue-400'
          }`}
        >
          <Calculator className="w-5 h-5 mr-3" />
          <div className="flex-1">
            <div className="font-semibold">Calculadora IMC</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Calcule e acompanhe</div>
          </div>
          {historyCount > 0 && (
            <span className="bg-cyan-500 dark:bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {historyCount}
            </span>
          )}
        </button>

        {/* EXERCÍCIOS */}
        <button
          onClick={() => onPageChange('exercises')}
          className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 ${
            activePage === 'exercises'
              ? 'bg-cyan-100 dark:bg-blue-900 text-cyan-800 dark:text-blue-200 border-r-4 border-cyan-500 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-blue-400'
          }`}
        >
          <Dumbbell className="w-5 h-5 mr-3" />
          <div className="flex-1">
            <div className="font-semibold">Exercícios</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Treinos personalizados</div>
          </div>
        </button>

        {/* ALIMENTAÇÃO */}
        <button
          onClick={() => onPageChange('nutrition')}
          className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 ${
            activePage === 'nutrition'
              ? 'bg-cyan-100 dark:bg-blue-900 text-cyan-800 dark:text-blue-200 border-r-4 border-cyan-500 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-blue-400'
          }`}
        >
          <Apple className="w-5 h-5 mr-3" />
          <div className="flex-1">
            <div className="font-semibold">Alimentação</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Dicas personalizadas</div>
          </div>
        </button>

        {/* AGENDA — NOVO */}
        <button
          onClick={() => onPageChange('agenda')}
          className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 ${
            activePage === 'agenda'
              ? 'bg-cyan-100 dark:bg-blue-900 text-cyan-800 dark:text-blue-200 border-r-4 border-cyan-500 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-blue-400'
          }`}
        >
          <Calendar className="w-5 h-5 mr-3" />
          <div className="flex-1">
            <div className="font-semibold">Agenda</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Horários & Rotina</div>
          </div>
        </button>

      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-cyan-50 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
            💡 Dica: Consulte sempre um profissional de saúde
          </p>
        </div>
      </div>
    </div>
  );
}

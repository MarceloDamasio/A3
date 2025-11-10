import React from 'react';
import { Calculator, History } from 'lucide-react';

interface TabNavigationProps {
  activeTab: 'calculator' | 'history';
  onTabChange: (tab: 'calculator' | 'history') => void;
  historyCount: number;
}

export function TabNavigation({ activeTab, onTabChange, historyCount }: TabNavigationProps) {
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 mb-8 max-w-md">
      <button
        onClick={() => onTabChange('calculator')}
        className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex-1 justify-center ${
          activeTab === 'calculator'
            ? 'bg-cyan-400 dark:bg-blue-600 text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-blue-400 hover:bg-cyan-50 dark:hover:bg-gray-700'
        }`}
      >
        <Calculator className="w-5 h-5 mr-2" />
        Calcular
      </button>
      
      <button
        onClick={() => onTabChange('history')}
        className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex-1 justify-center relative ${
          activeTab === 'history'
            ? 'bg-cyan-400 dark:bg-blue-600 text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-blue-400 hover:bg-cyan-50 dark:hover:bg-gray-700'
        }`}
      >
        <History className="w-5 h-5 mr-2" />
        Histórico
        {historyCount > 0 && (
          <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
            activeTab === 'history' 
              ? 'bg-white text-cyan-500 dark:bg-gray-200 dark:text-blue-600' 
              : 'bg-cyan-500 dark:bg-blue-600 text-white'
          }`}>
            {historyCount}
          </span>
        )}
      </button>
    </div>
  );
}
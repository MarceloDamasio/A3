import React from 'react';
import { IMCHistoryEntry } from '../types/imc';
import { Calendar, Weight, Ruler, Trash2 } from 'lucide-react';

interface IMCHistoryProps {
  history: IMCHistoryEntry[];
  onClearHistory: () => void;
  onDeleteEntry: (id: string) => void;
}

export function IMCHistory({ history, onClearHistory, onDeleteEntry }: IMCHistoryProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-center">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Nenhum cálculo ainda
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Faça seu primeiro cálculo de IMC para ver o histórico aqui!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Histórico de Cálculos
        </h2>
        <button
          onClick={onClearHistory}
          className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Limpar Tudo
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(entry.date)}
              </div>
              <button
                onClick={() => onDeleteEntry(entry.id)}
                className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Weight className="w-5 h-5 text-cyan-500 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Peso</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{entry.weight} kg</p>
                </div>
              </div>
              <div className="flex items-center">
                <Ruler className="w-5 h-5 text-cyan-500 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Altura</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{entry.height} cm</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    IMC: {entry.result.value}
                  </p>
                  <p className={`font-semibold ${entry.result.color}`}>
                    {entry.result.category}
                  </p>
                </div>
                <div className="text-3xl">
                  {entry.result.icon}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {entry.result.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
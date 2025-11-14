import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Check, X } from 'lucide-react';

interface EditableNutritionSectionProps {
  title: string;
  icon: React.ReactNode;
  nutritions: string[];
  onUpdate: (nutritions: string[]) => void;
  bgColor: string;
  dotColor: string;
}

export function EditableNutritionSection({
  title,
  icon,
  nutritions,
  onUpdate,
  bgColor,
  dotColor,
}: EditableNutritionSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  const [newNutritions , setNewNutritions] = useState('');
  const [localNutritions, setLocalNutritions] = useState(nutritions);
  
  const handleAddNutrition = () => {
      if (newNutritions.trim()) {
        const updated = [...localNutritions, newNutritions.trim()];
        setLocalNutritions(updated);
        onUpdate(updated);
        setNewNutritions('');
      }
    };
  
    const handleDeleteNutritrions = (index: number) => {
      const updated = localNutritions.filter((_, i) => i !== index);
      setLocalNutritions(updated);
      onUpdate(updated);
    };
  
    const handleStartEdit = (index: number, value: string) => {
      setEditingIndex(index);
      setEditValue(value);
    };
  
    const handleSaveEdit = (index: number) => {
      if (editValue.trim()) {
        const updated = [...localNutritions];
        updated[index] = editValue.trim();
        setLocalNutritions(updated);
        onUpdate(updated);
        setEditingIndex(null);
        setEditValue('');
      }
    };
  
    const handleCancelEdit = () => {
      setEditingIndex(null);
      setEditValue('');
    };
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`p-2 rounded-lg transition-colors ${
              isEditing
                ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
  
        <div className="space-y-3">
          {localNutritions.length === 0 ? (
            <div className="text-center py-6 text-gray-500 dark:text-gray-400">
              <p>Nenhum exercício adicionado</p>
            </div>
          ) : (
            localNutritions.map((nutrition, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 ${bgColor} rounded-lg transition-all`}
              >
                {editingIndex === index ? (
                  <div className="flex-1 flex items-center gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="flex-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="p-1 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center flex-1">
                      <div className={`w-2 h-2 ${dotColor} rounded-full mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{nutrition}</span>
                    </div>
                    {isEditing && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEdit(index, nutrition)}
                          className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteNutritrions(index)}
                          className="p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors"
                          title="Deletar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
  
          {isEditing && (
            <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
              <input
                type="text"
                value={newNutritions}
                onChange={(e) => setNewNutritions(e.target.value)}
                placeholder="Adicionar alimentos recomendados..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddNutrition()}
              />
              <button
                onClick={handleAddNutrition}
                className="p-2 bg-cyan-500 dark:bg-blue-600 text-white rounded-lg hover:bg-cyan-600 dark:hover:bg-blue-700 transition-colors"
                title="Adicionar"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
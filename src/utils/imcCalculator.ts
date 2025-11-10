import { IMCResult, IMCCategory } from '../types/imc';

export const IMC_CATEGORIES: IMCCategory[] = [
  {
    min: 0,
    max: 16,
    category: 'Magreza grave',
    description: 'Procure um médico. Pode indicar desnutrição.',
    color: 'text-red-600',
    icon: '🦴'
  },
  {
    min: 16,
    max: 17,
    category: 'Magreza moderada',
    description: 'Você está abaixo do peso ideal.',
    color: 'text-orange-500',
    icon: '🙁'
  },
  {
    min: 17,
    max: 18.5,
    category: 'Magreza leve',
    description: 'Você está um pouco abaixo do peso.',
    color: 'text-yellow-500',
    icon: '😐'
  },
  {
    min: 18.5,
    max: 25,
    category: 'Saudável',
    description: 'Parabéns! Você está no peso ideal.',
    color: 'text-green-600',
    icon: '😊'
  },
  {
    min: 25,
    max: 30,
    category: 'Sobrepeso',
    description: 'Você está acima do peso recomendado.',
    color: 'text-yellow-600',
    icon: '😕'
  },
  {
    min: 30,
    max: 35,
    category: 'Obesidade Grau I',
    description: 'Obesidade leve. Procure orientação médica.',
    color: 'text-orange-600',
    icon: '😰'
  },
  {
    min: 35,
    max: 40,
    category: 'Obesidade Grau II',
    description: 'Obesidade severa. Procure ajuda médica.',
    color: 'text-red-500',
    icon: '😨'
  },
  {
    min: 40,
    max: 100,
    category: 'Obesidade Grau III',
    description: 'Obesidade mórbida. Procure ajuda médica urgente.',
    color: 'text-red-700',
    icon: '🚨'
  }
];

export function calculateIMC(weight: number, height: number): IMCResult {
  const heightInMeters = height / 100;
  const imcValue = weight / (heightInMeters * heightInMeters);
  
  const category = IMC_CATEGORIES.find(cat => 
    imcValue >= cat.min && imcValue < cat.max
  ) || IMC_CATEGORIES[IMC_CATEGORIES.length - 1];

  return {
    value: Math.round(imcValue * 100) / 100,
    category: category.category,
    description: category.description,
    color: category.color,
    icon: category.icon
  };
}
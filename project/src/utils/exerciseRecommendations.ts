import { ExerciseRecommendation } from '../types/imc';

export function getExerciseRecommendation(imcValue: number): ExerciseRecommendation {
  if (imcValue < 18.5) {
    return {
      goal: "Ganhar Massa Muscular",
      description: "Foque em exercícios de força e resistência para ganhar massa muscular saudável e melhorar sua composição corporal.",
      exercises: {
        cardio: [
          "Caminhada leve (20-30 min)",
          "Natação recreativa",
          "Ciclismo em ritmo moderado",
          "Dança"
        ],
        strength: [
          "Musculação com pesos progressivos",
          "Flexões (adaptadas se necessário)",
          "Agachamentos com peso corporal",
          "Exercícios com elásticos",
          "Levantamento terra com halteres",
          "Desenvolvimento de ombros"
        ],
        flexibility: [
          "Yoga suave",
          "Alongamento dinâmico",
          "Pilates básico",
          "Tai Chi"
        ]
      },
      frequency: "4-5 vezes por semana",
      duration: "45-60 minutos por sessão",
      tips: [
        "Priorize exercícios de força sobre cardio excessivo",
        "Descanse adequadamente entre treinos (48h para mesmo grupo muscular)",
        "Combine exercícios com alimentação rica em proteínas",
        "Aumente gradualmente a intensidade e carga",
        "Mantenha-se hidratado durante os treinos"
      ],
      icon: "💪"
    };
  } else if (imcValue >= 18.5 && imcValue < 25) {
    return {
      goal: "Manter Condicionamento",
      description: "Mantenha um estilo de vida ativo com exercícios variados para preservar sua saúde e condicionamento físico.",
      exercises: {
        cardio: [
          "Corrida moderada",
          "Natação",
          "Ciclismo",
          "HIIT (treino intervalado)",
          "Esportes coletivos",
          "Dança aeróbica"
        ],
        strength: [
          "Musculação completa",
          "Exercícios funcionais",
          "Crossfit adaptado",
          "Calistenia",
          "Treino com kettlebell",
          "Exercícios compostos"
        ],
        flexibility: [
          "Yoga",
          "Pilates",
          "Alongamento estático",
          "Mobilidade articular"
        ]
      },
      frequency: "4-6 vezes por semana",
      duration: "45-75 minutos por sessão",
      tips: [
        "Varie os tipos de exercício para evitar monotonia",
        "Inclua pelo menos 150 min de atividade moderada por semana",
        "Combine cardio e musculação na mesma semana",
        "Pratique esportes que você goste",
        "Mantenha consistência nos treinos"
      ],
      icon: "🏃"
    };
  } else if (imcValue >= 25 && imcValue < 30) {
    return {
      goal: "Perder Peso e Tonificar",
      description: "Combine exercícios cardiovasculares com treinamento de força para queimar gordura e preservar massa muscular.",
      exercises: {
        cardio: [
          "Caminhada rápida (inclinação)",
          "Corrida leve",
          "Elíptico",
          "Natação",
          "Ciclismo",
          "HIIT de baixo impacto"
        ],
        strength: [
          "Circuito de musculação",
          "Exercícios com peso corporal",
          "Treino funcional",
          "Exercícios compostos",
          "Treino de resistência",
          "Kettlebell"
        ],
        flexibility: [
          "Yoga para iniciantes",
          "Alongamento pós-treino",
          "Pilates",
          "Relaxamento muscular"
        ]
      },
      frequency: "5-6 vezes por semana",
      duration: "45-60 minutos por sessão",
      tips: [
        "Priorize exercícios que queimem mais calorias",
        "Combine 60% cardio com 40% musculação",
        "Monitore sua frequência cardíaca",
        "Aumente gradualmente a intensidade",
        "Mantenha um déficit calórico saudável"
      ],
      icon: "🔥"
    };
  } else {
    return {
      goal: "Iniciar Atividade Física Gradual",
      description: "Comece com exercícios de baixo impacto e aumente gradualmente a intensidade. Sempre com acompanhamento profissional.",
      exercises: {
        cardio: [
          "Caminhada lenta (começar com 10-15 min)",
          "Hidroginástica",
          "Bicicleta ergométrica",
          "Exercícios na piscina",
          "Caminhada na esteira"
        ],
        strength: [
          "Exercícios sentado/apoiado",
          "Elásticos de resistência",
          "Pesos leves",
          "Exercícios isométricos",
          "Movimentos funcionais básicos"
        ],
        flexibility: [
          "Alongamento suave",
          "Yoga terapêutica",
          "Exercícios de mobilidade",
          "Relaxamento"
        ]
      },
      frequency: "3-4 vezes por semana",
      duration: "20-40 minutos por sessão",
      tips: [
        "SEMPRE consulte um médico antes de iniciar",
        "Comece devagar e aumente gradualmente",
        "Priorize exercícios de baixo impacto",
        "Monitore sinais vitais durante exercício",
        "Tenha acompanhamento de educador físico",
        "Pare se sentir dor ou desconforto",
        "Hidrate-se bem antes, durante e após"
      ],
      icon: "🚶"
    };
  }
}
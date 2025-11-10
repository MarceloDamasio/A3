import { NutritionRecommendation } from '../types/imc';

export function getNutritionRecommendation(imcValue: number): NutritionRecommendation {
  if (imcValue < 18.5) {
    return {
      goal: "Ganhar Peso Saudável",
      description: "Seu IMC indica que você está abaixo do peso ideal. Foque em ganhar massa muscular e peso de forma saudável.",
      foods: {
        recommended: [
          "Abacate e oleaginosas (castanhas, nozes, amêndoas)",
          "Peixes gordurosos (salmão, sardinha, atum)",
          "Azeite de oliva extra virgem",
          "Quinoa, aveia e cereais integrais",
          "Carnes magras e ovos",
          "Frutas calóricas (banana, manga, uva)",
          "Leguminosas (feijão, lentilha, grão-de-bico)",
          "Iogurte natural integral"
        ],
        avoid: [
          "Alimentos ultraprocessados",
          "Refrigerantes e bebidas açucaradas",
          "Frituras excessivas",
          "Doces industrializados",
          "Fast food"
        ]
      },
      tips: [
        "Faça 5-6 refeições por dia",
        "Inclua proteínas em todas as refeições",
        "Beba smoothies calóricos entre as refeições",
        "Pratique exercícios de força para ganhar massa muscular",
        "Consulte um nutricionista para um plano personalizado"
      ],
      icon: "🥑"
    };
  } else if (imcValue >= 18.5 && imcValue < 25) {
    return {
      goal: "Manter Peso Saudável",
      description: "Parabéns! Seu IMC está na faixa ideal. Mantenha uma alimentação equilibrada para preservar sua saúde.",
      foods: {
        recommended: [
          "Vegetais variados e coloridos",
          "Frutas frescas da estação",
          "Proteínas magras (frango, peixe, tofu)",
          "Cereais integrais (arroz integral, quinoa)",
          "Leguminosas (feijão, lentilha)",
          "Oleaginosas com moderação",
          "Laticínios com baixo teor de gordura",
          "Água e chás naturais"
        ],
        avoid: [
          "Excesso de açúcar refinado",
          "Alimentos ultraprocessados",
          "Frituras frequentes",
          "Bebidas alcoólicas em excesso",
          "Porções exageradas"
        ]
      },
      tips: [
        "Mantenha horários regulares para as refeições",
        "Pratique atividade física regularmente",
        "Beba pelo menos 2 litros de água por dia",
        "Inclua fibras em todas as refeições",
        "Faça check-ups regulares com profissionais de saúde"
      ],
      icon: "🥗"
    };
  } else if (imcValue >= 25 && imcValue < 30) {
    return {
      goal: "Perder Peso Gradualmente",
      description: "Seu IMC indica sobrepeso. Foque em uma alimentação balanceada e déficit calórico moderado para perda de peso saudável.",
      foods: {
        recommended: [
          "Vegetais folhosos (espinafre, rúcula, alface)",
          "Proteínas magras (peito de frango, peixe branco)",
          "Frutas com baixo índice glicêmico (maçã, pera, frutas vermelhas)",
          "Cereais integrais em porções controladas",
          "Leguminosas (fonte de fibra e proteína)",
          "Chás verde e branco (aceleram metabolismo)",
          "Água com limão",
          "Iogurte natural desnatado"
        ],
        avoid: [
          "Açúcar refinado e doces",
          "Refrigerantes e sucos industrializados",
          "Frituras e alimentos gordurosos",
          "Pães e massas refinadas",
          "Álcool",
          "Snacks processados",
          "Fast food"
        ]
      },
      tips: [
        "Reduza as porções gradualmente",
        "Mastigue devagar e saboreie a comida",
        "Beba água antes das refeições",
        "Inclua exercícios aeróbicos na rotina",
        "Durma bem (7-8 horas por noite)",
        "Controle o estresse com atividades relaxantes"
      ],
      icon: "🥒"
    };
  } else {
    return {
      goal: "Perda de Peso Supervisionada",
      description: "Seu IMC indica obesidade. É fundamental buscar acompanhamento profissional para uma perda de peso segura e eficaz.",
      foods: {
        recommended: [
          "Vegetais não amiláceos (brócolis, couve-flor, abobrinha)",
          "Proteínas magras (peixe, frango sem pele, clara de ovo)",
          "Frutas com moderação (frutas vermelhas, maçã verde)",
          "Grãos integrais em pequenas porções",
          "Leguminosas (saciam e fornecem fibras)",
          "Chás termogênicos (verde, hibisco)",
          "Água abundante",
          "Temperos naturais (gengibre, cúrcuma, canela)"
        ],
        avoid: [
          "Todos os açúcares adicionados",
          "Bebidas calóricas",
          "Alimentos fritos e gordurosos",
          "Carboidratos refinados",
          "Processados e ultraprocessados",
          "Álcool",
          "Porções grandes"
        ]
      },
      tips: [
        "PROCURE um nutricionista e endocrinologista",
        "Faça refeições pequenas e frequentes",
        "Monitore suas porções com precisão",
        "Inicie atividade física gradualmente",
        "Mantenha um diário alimentar",
        "Busque apoio psicológico se necessário",
        "Seja paciente - mudanças levam tempo"
      ],
      icon: "🥬"
    };
  }
}
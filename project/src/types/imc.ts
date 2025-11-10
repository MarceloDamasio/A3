export interface IMCResult {
  value: number;
  category: string;
  description: string;
  color: string;
  icon: string;
}

export interface IMCCategory {
  min: number;
  max: number;
  category: string;
  description: string;
  color: string;
  icon: string;
}

export interface IMCHistoryEntry {
  id: string;
  weight: number;
  height: number;
  result: IMCResult;
  date: Date;
}

export interface NutritionRecommendation {
  goal: string;
  description: string;
  foods: {
    recommended: string[];
    avoid: string[];
  };
  tips: string[];
  icon: string;
}

export interface ExerciseRecommendation {
  goal: string;
  description: string;
  exercises: {
    cardio: string[];
    strength: string[];
    flexibility: string[];
  };
  frequency: string;
  duration: string;
  tips: string[];
  icon: string;
}
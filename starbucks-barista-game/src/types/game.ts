export interface GameQuestion {
  id: number
  question: string
  choices: string // JSON string of choices
  correctIndex: number
  explanation?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  drinkId?: number | null
  createdAt: Date
  updatedAt: Date
}

export interface GameSession {
  id: number
  playerName: string
  score: number
  totalQuestions: number
  completedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface GameAttempt {
  id: number
  sessionId: number
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
  createdAt: Date
}

export interface Drink {
  id: number
  name: string
  category: string
  isSeasonal: boolean
  description?: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface Ingredient {
  id: number
  name: string
  type: string
  description?: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface RecipeStep {
  id: number
  drinkId: number
  stepOrder: number
  instruction: string
  createdAt: Date
  updatedAt: Date
}

export interface CupSize {
  id: number
  name: string
  hotVolumeOz: number
  coldVolumeOz: number
  standardShots: number
  standardPumps: number
  createdAt: Date
  updatedAt: Date
}


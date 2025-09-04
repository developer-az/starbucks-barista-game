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

// Enhanced Learning System Types
export interface LearningModule {
  id: string
  title: string
  description: string
  category: 'ingredients' | 'recipes' | 'techniques' | 'customization'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // in minutes
  prerequisites?: string[]
  isCompleted: boolean
  score?: number
}

export interface LearningStep {
  id: string
  moduleId: string
  title: string
  content: string
  type: 'instruction' | 'practice' | 'quiz' | 'interactive'
  order: number
  isCompleted: boolean
  requirements?: StepRequirement[]
}

export interface StepRequirement {
  type: 'ingredient' | 'technique' | 'timing' | 'measurement'
  description: string
  isCorrect: boolean
  userInput?: string
  expectedValue?: string
}

export interface InteractiveDrinkBuilder {
  currentDrink: DrinkInProgress
  availableIngredients: IngredientOption[]
  currentStep: number
  totalSteps: number
  feedback: string[]
  isComplete: boolean
}

export interface DrinkInProgress {
  id: string
  name: string
  targetRecipe: DrinkRecipe
  currentIngredients: SelectedIngredient[]
  cupSize: CupSize
  modifications: DrinkModification[]
}

export interface DrinkRecipe {
  id: string
  drinkId: number
  name: string
  steps: DetailedRecipeStep[]
  ingredients: RecipeIngredient[]
  techniques: string[]
  tips: string[]
}

export interface DetailedRecipeStep {
  id: string
  order: number
  instruction: string
  type: 'preparation' | 'measurement' | 'mixing' | 'finishing'
  duration?: number // in seconds
  temperature?: number // in fahrenheit
  technique?: string
  visualCue?: string
  commonMistakes?: string[]
}

export interface RecipeIngredient {
  ingredient: Ingredient
  amount: number
  unit: string
  timing: 'beginning' | 'middle' | 'end'
  temperature?: 'hot' | 'cold' | 'room_temp'
  preparation?: string
}

export interface SelectedIngredient {
  ingredient: Ingredient
  amount: number
  unit: string
  addedAt: number // step number
}

export interface IngredientOption {
  ingredient: Ingredient
  availableAmounts: number[]
  units: string[]
  isRequired: boolean
  category: 'base' | 'syrup' | 'milk' | 'topping' | 'extra'
}

export interface DrinkModification {
  id: string
  type: 'size' | 'milk' | 'syrup' | 'shots' | 'temperature' | 'extra'
  description: string
  impact: string
}

export interface LearningProgress {
  userId: string
  moduleId: string
  completedSteps: string[]
  currentStep: string
  score: number
  timeSpent: number
  attempts: number
  masteryLevel: 'novice' | 'apprentice' | 'skilled' | 'expert' | 'master'
  lastAccessed: Date
}

export interface PracticeSession {
  id: string
  type: 'guided' | 'free' | 'challenge'
  drinkId: number
  startTime: Date
  endTime?: Date
  score?: number
  mistakes: SessionMistake[]
  feedback: string[]
  nextRecommendation?: string
}

export interface SessionMistake {
  step: number
  type: 'ingredient' | 'measurement' | 'technique' | 'timing'
  description: string
  correction: string
  impact: 'minor' | 'major' | 'critical'
}





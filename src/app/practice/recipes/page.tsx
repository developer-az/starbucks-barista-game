'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DrinkRecipe, DetailedRecipeStep, RecipeIngredient, Ingredient, InteractiveDrinkBuilder, SelectedIngredient, CupSize } from '@/types/game'

const CUP_SIZES: CupSize[] = [
  {
    id: 1,
    name: 'Tall',
    hotVolumeOz: 12,
    coldVolumeOz: 12,
    standardShots: 1,
    standardPumps: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Grande',
    hotVolumeOz: 16,
    coldVolumeOz: 16,
    standardShots: 2,
    standardPumps: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Venti',
    hotVolumeOz: 20,
    coldVolumeOz: 24,
    standardShots: 2,
    standardPumps: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

const AVAILABLE_INGREDIENTS: Ingredient[] = [
  { id: 1, name: 'Signature Espresso', type: 'espresso', description: 'Rich, full-bodied espresso shots', imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: 'Vanilla Syrup', type: 'syrup', description: 'Classic vanilla sweetener', imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: 'Caramel Sauce', type: 'sauce', description: 'Rich caramel drizzle', imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: '2% Steamed Milk', type: 'milk', description: 'Perfectly steamed milk', imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: 'Whipped Cream', type: 'topping', description: 'Light, airy whipped cream', imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
]

const CARAMEL_MACCHIATO_RECIPE: DrinkRecipe = {
  id: 'caramel-macchiato',
  drinkId: 1,
  name: 'Caramel Macchiato',
  steps: [
    {
      id: 'step-1',
      order: 1,
      instruction: 'Add vanilla syrup to the cup',
      type: 'preparation',
      technique: 'Pour syrup into bottom of cup',
      visualCue: 'Syrup settles at bottom',
      commonMistakes: ['Adding syrup after milk', 'Wrong pump count']
    },
    {
      id: 'step-2', 
      order: 2,
      instruction: 'Steam milk to 150-160°F',
      type: 'preparation',
      temperature: 155,
      technique: 'Create microfoam texture',
      visualCue: 'Milk should have wet paint consistency',
      commonMistakes: ['Overheating milk', 'Not enough foam']
    },
    {
      id: 'step-3',
      order: 3,
      instruction: 'Pour steamed milk into cup',
      type: 'mixing',
      technique: 'Pour from height to mix with syrup',
      visualCue: 'Milk blends with vanilla syrup',
      commonMistakes: ['Pouring too fast', 'Not leaving room for espresso']
    },
    {
      id: 'step-4',
      order: 4,
      instruction: 'Pull espresso shots',
      type: 'preparation',
      duration: 25,
      technique: 'Extract shots directly',
      visualCue: 'Golden crema on top',
      commonMistakes: ['Over/under extraction', 'Wrong shot count']
    },
    {
      id: 'step-5',
      order: 5,
      instruction: 'Pour espresso through center of milk',
      type: 'mixing',
      technique: 'Create the "mark" on top',
      visualCue: 'Espresso creates brown mark on foam',
      commonMistakes: ['Pouring around edges', 'Mixing espresso in']
    },
    {
      id: 'step-6',
      order: 6,
      instruction: 'Top with caramel drizzle in crosshatch pattern',
      type: 'finishing',
      technique: 'Draw lines back and forth',
      visualCue: 'Even crosshatch pattern',
      commonMistakes: ['Too much caramel', 'Uneven pattern']
    }
  ],
  ingredients: [
    { ingredient: AVAILABLE_INGREDIENTS[1], amount: 4, unit: 'pumps', timing: 'beginning' },
    { ingredient: AVAILABLE_INGREDIENTS[3], amount: 1, unit: 'cup', timing: 'middle', temperature: 'hot' },
    { ingredient: AVAILABLE_INGREDIENTS[0], amount: 2, unit: 'shots', timing: 'middle' },
    { ingredient: AVAILABLE_INGREDIENTS[2], amount: 1, unit: 'drizzle', timing: 'end' }
  ],
  techniques: ['Steaming milk', 'Pulling espresso', 'Layering'],
  tips: [
    'The key to a great macchiato is not mixing the espresso into the milk',
    'Vanilla syrup goes in first to sweeten the entire drink',
    'Pour espresso through the center to create the signature "mark"'
  ]
}

export default function RecipeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedSize, setSelectedSize] = useState<CupSize>(CUP_SIZES[1]) // Default to Grande
  const [builtIngredients, setBuiltIngredients] = useState<SelectedIngredient[]>([])
  const [feedback, setFeedback] = useState<string[]>([])
  const [showStepFeedback, setShowStepFeedback] = useState(false)
  const [isStepCorrect, setIsStepCorrect] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [mistakes, setMistakes] = useState<string[]>([])

  const getCurrentStep = () => CARAMEL_MACCHIATO_RECIPE.steps[currentStep]
  const getCurrentStepIngredients = () => {
    const step = getCurrentStep()
    return CARAMEL_MACCHIATO_RECIPE.ingredients.filter(ingredient => {
      if (step.order <= 2) return ingredient.timing === 'beginning'
      if (step.order <= 5) return ingredient.timing === 'middle'
      return ingredient.timing === 'end'
    })
  }

  const handleIngredientAdd = (ingredient: Ingredient) => {
    if (showStepFeedback) return

    const stepIngredients = getCurrentStepIngredients()
    const expectedIngredient = stepIngredients[0] // For simplicity, one ingredient per step
    
    if (expectedIngredient && ingredient.id === expectedIngredient.ingredient.id) {
      // Correct ingredient
      const newIngredient: SelectedIngredient = {
        ingredient,
        amount: expectedIngredient.amount,
        unit: expectedIngredient.unit,
        addedAt: currentStep + 1
      }
      
      setBuiltIngredients([...builtIngredients, newIngredient])
      setIsStepCorrect(true)
      setFeedback([
        `✅ Perfect! ${ingredient.name} is correct for this step.`,
        `Added ${expectedIngredient.amount} ${expectedIngredient.unit} of ${ingredient.name}`
      ])
    } else {
      // Wrong ingredient
      setIsStepCorrect(false)
      const correctIngredient = expectedIngredient?.ingredient.name || 'the correct ingredient'
      setFeedback([
        `❌ Not quite right. This step requires ${correctIngredient}.`,
        `Remember: ${getCurrentStep().instruction}`
      ])
      setMistakes([...mistakes, `Step ${currentStep + 1}: Selected ${ingredient.name} instead of ${correctIngredient}`])
    }
    
    setShowStepFeedback(true)
  }

  const handleNextStep = () => {
    if (!isStepCorrect) return

    if (currentStep < CARAMEL_MACCHIATO_RECIPE.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowStepFeedback(false)
      setIsStepCorrect(false)
      setFeedback([])
    } else {
      setSessionComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setBuiltIngredients([])
    setFeedback([])
    setShowStepFeedback(false)
    setIsStepCorrect(false)
    setSessionComplete(false)
    setMistakes([])
  }

  const getScorePercentage = () => {
    const totalSteps = CARAMEL_MACCHIATO_RECIPE.steps.length
    const correctSteps = totalSteps - mistakes.length
    return Math.round((correctSteps / totalSteps) * 100)
  }

  if (sessionComplete) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/learning" className="text-starbucks-green hover:text-starbucks-darkgreen">
            ← Back to Learning
          </Link>
        </div>

        <div className="card text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-starbucks-darkgreen">
              Recipe Complete!
            </h1>
            <div className="text-6xl">
              {getScorePercentage() >= 80 ? '🎉' : getScorePercentage() >= 60 ? '👍' : '📚'}
            </div>
            <h2 className="text-2xl font-semibold text-starbucks-green">
              {selectedSize.name} Caramel Macchiato
            </h2>
          </div>

          {/* Score */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-3xl font-bold text-starbucks-green">
                {CARAMEL_MACCHIATO_RECIPE.steps.length - mistakes.length}
              </div>
              <div className="text-gray-600">Correct Steps</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-starbucks-gold">{getScorePercentage()}%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-blue-600">{mistakes.length}</div>
              <div className="text-gray-600">Areas to Review</div>
            </div>
          </div>

          {/* Recipe Summary */}
          <div className="card text-left">
            <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-4">Your {selectedSize.name} Caramel Macchiato</h3>
            <div className="space-y-2">
              {builtIngredients.map((ingredient, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">{ingredient.ingredient.name}</span>
                  <span className="text-gray-600">{ingredient.amount} {ingredient.unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mistakes Review */}
          {mistakes.length > 0 && (
            <div className="card text-left">
              <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-4">Review These Steps:</h3>
              <div className="space-y-2">
                {mistakes.map((mistake, index) => (
                  <div key={index} className="text-sm text-red-600 border-l-4 border-l-red-500 pl-3">
                    {mistake}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <button onClick={handleRestart} className="btn-primary">
              Build Another
            </button>
            <Link href="/learning" className="btn-secondary">
              Back to Learning
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const step = getCurrentStep()
  const stepIngredients = getCurrentStepIngredients()

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/learning" className="text-starbucks-green hover:text-starbucks-darkgreen">
          ← Back to Learning
        </Link>
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {CARAMEL_MACCHIATO_RECIPE.steps.length}
        </div>
      </div>

      {/* Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-starbucks-darkgreen">Interactive Recipe Builder</h2>
          <span className="text-sm font-medium text-starbucks-green">
            Building: {selectedSize.name} Caramel Macchiato
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-starbucks-green h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / CARAMEL_MACCHIATO_RECIPE.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Step */}
        <div className="card">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-starbucks-darkgreen">
                  Step {currentStep + 1}: {step.instruction}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  step.type === 'preparation' ? 'bg-blue-100 text-blue-800' :
                  step.type === 'mixing' ? 'bg-green-100 text-green-800' :
                  step.type === 'finishing' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
                </span>
              </div>
              
              {step.technique && (
                <div className="text-gray-600 mb-2">
                  <strong>Technique:</strong> {step.technique}
                </div>
              )}
              
              {step.visualCue && (
                <div className="text-blue-600 mb-2">
                  <strong>Look for:</strong> {step.visualCue}
                </div>
              )}
              
              {step.temperature && (
                <div className="text-orange-600 mb-2">
                  <strong>Temperature:</strong> {step.temperature}°F
                </div>
              )}
              
              {step.duration && (
                <div className="text-green-600 mb-2">
                  <strong>Duration:</strong> {step.duration} seconds
                </div>
              )}
            </div>

            {/* Ingredient Selection */}
            {stepIngredients.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Select the ingredient for this step:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {AVAILABLE_INGREDIENTS.map(ingredient => (
                    <button
                      key={ingredient.id}
                      onClick={() => handleIngredientAdd(ingredient)}
                      disabled={showStepFeedback}
                      className={`p-3 border-2 rounded-lg text-left transition-all ${
                        showStepFeedback ? 'cursor-not-allowed opacity-75' : 'hover:border-starbucks-green cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{ingredient.name}</div>
                          <div className="text-sm text-gray-600">{ingredient.description}</div>
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                          {ingredient.type}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Feedback */}
            {showStepFeedback && feedback.length > 0 && (
              <div className={`p-4 rounded-lg border ${
                isStepCorrect 
                  ? 'bg-green-100 border-green-200' 
                  : 'bg-red-100 border-red-200'
              }`}>
                {feedback.map((message, index) => (
                  <p key={index} className={`${
                    isStepCorrect ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {message}
                  </p>
                ))}
              </div>
            )}

            {/* Common Mistakes */}
            {step.commonMistakes && step.commonMistakes.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Common Mistakes:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {step.commonMistakes.map((mistake, index) => (
                    <li key={index}>• {mistake}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation */}
            {showStepFeedback && isStepCorrect && (
              <div className="flex justify-center">
                <button
                  onClick={handleNextStep}
                  className="btn-primary text-lg px-8 py-3"
                >
                  {currentStep === CARAMEL_MACCHIATO_RECIPE.steps.length - 1 ? 'Complete Recipe' : 'Next Step'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recipe Progress */}
        <div className="space-y-6">
          {/* Current Build */}
          <div className="card">
            <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-4">Your {selectedSize.name} Caramel Macchiato</h3>
            <div className="space-y-3">
              {builtIngredients.length === 0 ? (
                <div className="text-gray-500 text-center py-8">
                  Start building your drink by following each step
                </div>
              ) : (
                <div className="space-y-2">
                  {builtIngredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <div className="font-medium">{ingredient.ingredient.name}</div>
                        <div className="text-xs text-gray-500">Step {ingredient.addedAt}</div>
                      </div>
                      <span className="text-gray-600 font-medium">
                        {ingredient.amount} {ingredient.unit}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recipe Tips */}
          <div className="card">
            <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-3">Pro Tips</h3>
            <div className="space-y-2">
              {CARAMEL_MACCHIATO_RECIPE.tips.map((tip, index) => (
                <div key={index} className="text-sm text-gray-600 border-l-4 border-l-starbucks-gold pl-3">
                  💡 {tip}
                </div>
              ))}
            </div>
          </div>

          {/* All Steps Preview */}
          <div className="card">
            <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-3">Recipe Steps</h3>
            <div className="space-y-2">
              {CARAMEL_MACCHIATO_RECIPE.steps.map((recipeStep, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-sm ${
                    index < currentStep ? 'bg-green-100 text-green-800' :
                    index === currentStep ? 'bg-blue-100 text-blue-800 border-l-4 border-l-blue-500' :
                    'bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className="font-medium">Step {index + 1}: {recipeStep.instruction}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
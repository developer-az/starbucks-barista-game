'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LearningStep, StepRequirement, Ingredient } from '@/types/game'

const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 1,
    name: 'Blonde Espresso Roast',
    type: 'espresso',
    description: 'Light, smooth roast with subtle sweetness and citrus notes. Perfect for shaken drinks.',
    imageUrl: '/ingredients/blonde-espresso.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Signature Espresso Roast',
    type: 'espresso',
    description: 'Full-bodied with rich flavor and caramelized sugar notes. The classic choice.',
    imageUrl: '/ingredients/signature-espresso.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Brown Sugar Syrup',
    type: 'syrup',
    description: 'Sweet syrup with molasses-like complexity and warm notes.',
    imageUrl: '/ingredients/brown-sugar-syrup.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'Vanilla Syrup',
    type: 'syrup',
    description: 'Classic sweet vanilla flavor that complements many drinks.',
    imageUrl: '/ingredients/vanilla-syrup.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'Oat Milk',
    type: 'milk',
    description: 'Creamy plant-based milk with natural sweetness and rich texture.',
    imageUrl: '/ingredients/oat-milk.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: '2% Milk',
    type: 'milk',
    description: 'Standard steaming milk with balanced richness and foam capability.',
    imageUrl: '/ingredients/2-percent-milk.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

const LEARNING_STEPS: LearningStep[] = [
  {
    id: 'step-1',
    moduleId: 'ingredients-basics',
    title: 'Understanding Espresso Roasts',
    content: `
      <h3>Espresso Roasts: The Foundation of Every Drink</h3>
      <p>At Starbucks, we use two main espresso roasts, each with distinct characteristics:</p>
      
      <div class="ingredient-comparison">
        <div class="ingredient-card">
          <h4>🌟 Blonde Espresso Roast</h4>
          <ul>
            <li><strong>Flavor:</strong> Light, smooth, subtly sweet</li>
            <li><strong>Notes:</strong> Citrus, soft vanilla</li>
            <li><strong>Best for:</strong> Shaken drinks, iced beverages</li>
            <li><strong>Why:</strong> The smooth flavor pairs well with milk alternatives and syrups</li>
          </ul>
        </div>
        
        <div class="ingredient-card">
          <h4>☕ Signature Espresso Roast</h4>
          <ul>
            <li><strong>Flavor:</strong> Rich, full-bodied, caramelized</li>
            <li><strong>Notes:</strong> Caramel, sweet smoke</li>
            <li><strong>Best for:</strong> Lattes, cappuccinos, macchiatos</li>
            <li><strong>Why:</strong> The bold flavor cuts through steamed milk beautifully</li>
          </ul>
        </div>
      </div>
      
      <div class="pro-tip">
        <h4>💡 Pro Tip</h4>
        <p>When a customer orders an "extra shot," always ask if they prefer Blonde or Signature roast. This shows expertise and helps customize their drink perfectly.</p>
      </div>
    `,
    type: 'instruction',
    order: 1,
    isCompleted: false,
  },
  {
    id: 'step-2',
    moduleId: 'ingredients-basics',
    title: 'Syrup Knowledge & Applications',
    content: `
      <h3>Mastering Syrup Flavors and Usage</h3>
      <p>Syrups are what make many Starbucks drinks unique. Understanding their flavor profiles is crucial:</p>
      
      <div class="syrup-guide">
        <div class="syrup-category">
          <h4>🍯 Classic Syrups</h4>
          <ul>
            <li><strong>Vanilla:</strong> Universal sweetener, pairs with everything</li>
            <li><strong>Caramel:</strong> Rich and buttery, perfect for macchiatos</li>
            <li><strong>Hazelnut:</strong> Nutty and warm, great in lattes</li>
          </ul>
        </div>
        
        <div class="syrup-category">
          <h4>🧁 Seasonal & Specialty</h4>
          <ul>
            <li><strong>Brown Sugar:</strong> Complex sweetness with molasses notes</li>
            <li><strong>Pumpkin Spice:</strong> Warm spices with pumpkin flavor</li>
            <li><strong>Cinnamon Dolce:</strong> Sweet cinnamon with buttery finish</li>
          </ul>
        </div>
      </div>
      
      <div class="measurement-guide">
        <h4>📏 Standard Measurements</h4>
        <table>
          <tr><th>Cup Size</th><th>Pumps</th><th>Logic</th></tr>
          <tr><td>Tall (12oz)</td><td>3 pumps</td><td>Base measurement</td></tr>
          <tr><td>Grande (16oz)</td><td>4 pumps</td><td>+1 for size</td></tr>
          <tr><td>Venti (20oz)</td><td>5 pumps</td><td>+1 for size</td></tr>
        </table>
      </div>
    `,
    type: 'instruction',
    order: 2,
    isCompleted: false,
  },
  {
    id: 'step-3',
    moduleId: 'ingredients-basics',
    title: 'Interactive Ingredient Identification',
    content: 'Test your knowledge by identifying ingredients and their best uses',
    type: 'interactive',
    order: 3,
    isCompleted: false,
    requirements: [
      {
        type: 'ingredient',
        description: 'Which espresso roast is best for an Iced Brown Sugar Oatmilk Shaken Espresso?',
        isCorrect: false,
        expectedValue: 'Blonde Espresso Roast'
      },
      {
        type: 'measurement',
        description: 'How many pumps of syrup go in a Grande drink?',
        isCorrect: false,
        expectedValue: '4'
      },
      {
        type: 'ingredient',
        description: 'Which milk alternative provides the creamiest texture?',
        isCorrect: false,
        expectedValue: 'Oat Milk'
      }
    ]
  },
  {
    id: 'step-4',
    moduleId: 'ingredients-basics',
    title: 'Milk Types & Steaming Properties',
    content: `
      <h3>Understanding Milk and Alternatives</h3>
      <p>Each milk type behaves differently when steamed and affects drink taste:</p>
      
      <div class="milk-comparison">
        <div class="milk-type">
          <h4>🥛 Dairy Milks</h4>
          <ul>
            <li><strong>Whole Milk:</strong> Richest foam, creamiest texture</li>
            <li><strong>2% Milk:</strong> Standard choice, good foam stability</li>
            <li><strong>Nonfat Milk:</strong> Most foam volume, lighter taste</li>
            <li><strong>Half & Half:</strong> Extra rich, use sparingly</li>
          </ul>
        </div>
        
        <div class="milk-type">
          <h4>🌱 Plant-Based Alternatives</h4>
          <ul>
            <li><strong>Oat Milk:</strong> Naturally sweet, creamy, foams well</li>
            <li><strong>Almond Milk:</strong> Light, nutty, less foam</li>
            <li><strong>Soy Milk:</strong> Protein-rich, good for hot drinks</li>
            <li><strong>Coconut Milk:</strong> Sweet, tropical notes</li>
          </ul>
        </div>
      </div>
      
      <div class="steaming-tips">
        <h4>🌡️ Steaming Guidelines</h4>
        <ul>
          <li><strong>Temperature:</strong> 150-160°F for optimal taste</li>
          <li><strong>Texture:</strong> Microfoam like wet paint consistency</li>
          <li><strong>Timing:</strong> Start steaming immediately after pulling shots</li>
          <li><strong>Tip:</strong> Plant milks need gentler steaming to avoid curdling</li>
        </ul>
      </div>
    `,
    type: 'instruction',
    order: 4,
    isCompleted: false,
  },
  {
    id: 'step-5',
    moduleId: 'ingredients-basics',
    title: 'Final Assessment',
    content: 'Complete the ingredient mastery quiz to finish this module',
    type: 'quiz',
    order: 5,
    isCompleted: false,
    requirements: [
      {
        type: 'ingredient',
        description: 'Customer wants extra foam in their latte. Which milk is best?',
        isCorrect: false,
        expectedValue: 'Nonfat Milk'
      },
      {
        type: 'technique',
        description: 'What temperature should milk be steamed to?',
        isCorrect: false,
        expectedValue: '150-160°F'
      },
      {
        type: 'ingredient',
        description: 'Which syrup adds molasses-like complexity?',
        isCorrect: false,
        expectedValue: 'Brown Sugar Syrup'
      }
    ]
  }
]

export default function IngredientsBasicsModule() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [userAnswers, setUserAnswers] = useState<{[key: string]: string}>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('ingredients-basics-progress')
    if (saved) {
      const progress = JSON.parse(saved)
      setCompletedSteps(progress.completedSteps || [])
      setCurrentStep(progress.currentStep || 0)
    }
  }, [])

  const saveProgress = () => {
    const progress = {
      completedSteps,
      currentStep,
      lastAccessed: new Date().toISOString()
    }
    localStorage.setItem('ingredients-basics-progress', JSON.stringify(progress))
  }

  const handleStepComplete = () => {
    const stepId = LEARNING_STEPS[currentStep].id
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
    
    if (currentStep < LEARNING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
    saveProgress()
  }

  const handleAnswerSubmit = (requirementIndex: number, answer: string) => {
    const step = LEARNING_STEPS[currentStep]
    if (step.requirements) {
      const key = `${step.id}-${requirementIndex}`
      setUserAnswers({...userAnswers, [key]: answer})
      
      // Check if answer is correct
      const requirement = step.requirements[requirementIndex]
      const isCorrect = answer.toLowerCase().includes(requirement.expectedValue?.toLowerCase() || '')
      requirement.isCorrect = isCorrect
      requirement.userInput = answer
    }
    setShowFeedback(true)
  }

  const checkAllRequirementsPassed = () => {
    const step = LEARNING_STEPS[currentStep]
    return step.requirements?.every(req => req.isCorrect) || false
  }

  const currentLearningStep = LEARNING_STEPS[currentStep]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/learning" className="text-starbucks-green hover:text-starbucks-darkgreen">
          ← Back to Learning
        </Link>
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {LEARNING_STEPS.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-starbucks-darkgreen">Coffee Bean & Ingredient Fundamentals</h2>
          <span className="text-sm font-medium text-starbucks-green">
            {Math.round(((currentStep + 1) / LEARNING_STEPS.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-starbucks-green h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / LEARNING_STEPS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="card">
        <div className="space-y-6">
          {/* Step Header */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-starbucks-darkgreen">
                {currentLearningStep.title}
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentLearningStep.type === 'instruction' ? 'bg-blue-100 text-blue-800' :
                currentLearningStep.type === 'interactive' ? 'bg-green-100 text-green-800' :
                currentLearningStep.type === 'quiz' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {currentLearningStep.type.charAt(0).toUpperCase() + currentLearningStep.type.slice(1)}
              </span>
            </div>
          </div>

          {/* Step Content Display */}
          {currentLearningStep.type === 'instruction' && (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: currentLearningStep.content }} />
            </div>
          )}

          {currentLearningStep.type === 'interactive' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-700">{currentLearningStep.content}</p>
              
              {/* Interactive Requirements */}
              {currentLearningStep.requirements?.map((requirement, index) => (
                <div key={index} className="card border-l-4 border-l-starbucks-green">
                  <h4 className="font-semibold mb-3">{requirement.description}</h4>
                  
                  {requirement.type === 'ingredient' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {INGREDIENTS_DATA.filter(ing => 
                        requirement.description.toLowerCase().includes(ing.type) ||
                        requirement.description.toLowerCase().includes('espresso') && ing.type === 'espresso' ||
                        requirement.description.toLowerCase().includes('milk') && ing.type === 'milk'
                      ).map(ingredient => (
                        <button
                          key={ingredient.id}
                          onClick={() => handleAnswerSubmit(index, ingredient.name)}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${
                            userAnswers[`${currentLearningStep.id}-${index}`] === ingredient.name
                              ? requirement.isCorrect 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-red-500 bg-red-50'
                              : 'border-gray-200 hover:border-starbucks-green'
                          }`}
                        >
                          <div className="font-semibold">{ingredient.name}</div>
                          <div className="text-sm text-gray-600">{ingredient.description}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {requirement.type === 'measurement' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-4 gap-2">
                        {['2', '3', '4', '5'].map(option => (
                          <button
                            key={option}
                            onClick={() => handleAnswerSubmit(index, option)}
                            className={`p-3 border-2 rounded-lg font-semibold transition-all ${
                              userAnswers[`${currentLearningStep.id}-${index}`] === option
                                ? requirement.isCorrect 
                                  ? 'border-green-500 bg-green-50' 
                                  : 'border-red-500 bg-red-50'
                                : 'border-gray-200 hover:border-starbucks-green'
                            }`}
                          >
                            {option} pumps
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {showFeedback && userAnswers[`${currentLearningStep.id}-${index}`] && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      requirement.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {requirement.isCorrect 
                        ? '✅ Correct! ' + (requirement.description.includes('Grande') ? 'Grande drinks get 4 pumps following the standard sizing rule.' : 'Great choice!')
                        : '❌ Not quite. ' + (requirement.expectedValue ? `The correct answer is: ${requirement.expectedValue}` : 'Try again!')
                      }
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {currentLearningStep.type === 'quiz' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-700">{currentLearningStep.content}</p>
              
              {/* Quiz Questions */}
              {currentLearningStep.requirements?.map((requirement, index) => (
                <div key={index} className="card border-l-4 border-l-yellow-500">
                  <h4 className="font-semibold mb-3">Question {index + 1}: {requirement.description}</h4>
                  
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Type your answer..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAnswerSubmit(index, e.currentTarget.value)
                        }
                      }}
                    />
                    
                    {showFeedback && userAnswers[`${currentLearningStep.id}-${index}`] && (
                      <div className={`p-3 rounded-lg ${
                        requirement.isCorrect ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {requirement.isCorrect 
                          ? '✅ Excellent! You\'ve mastered this concept.'
                          : `💡 Good try! The answer we were looking for is: ${requirement.expectedValue}`
                        }
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous Step
            </button>

            {currentLearningStep.type === 'instruction' ? (
              <button
                onClick={handleStepComplete}
                className="btn-primary"
              >
                {currentStep === LEARNING_STEPS.length - 1 ? 'Complete Module' : 'Next Step'}
              </button>
            ) : (
              <button
                onClick={handleStepComplete}
                disabled={!checkAllRequirementsPassed()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === LEARNING_STEPS.length - 1 ? 'Complete Module' : 'Next Step'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Ingredient Reference */}
      <div className="card">
        <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-4">Quick Reference: Key Ingredients</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {INGREDIENTS_DATA.slice(0, 6).map(ingredient => (
            <div
              key={ingredient.id}
              className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedIngredient(ingredient)}
            >
              <div className="font-semibold text-sm">{ingredient.name}</div>
              <div className="text-xs text-gray-500 capitalize">{ingredient.type}</div>
            </div>
          ))}
        </div>
        
        {selectedIngredient && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800">{selectedIngredient.name}</h4>
            <p className="text-blue-700 text-sm">{selectedIngredient.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
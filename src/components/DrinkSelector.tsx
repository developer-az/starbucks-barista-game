'use client'

import { useState } from 'react'

interface Drink {
  id: string
  name: string
  description: string
  emoji: string
  questionCount: number
}

interface DrinkSelectorProps {
  onDrinkSelect: (drinkKey: string) => void
  onMixedMode: () => void
}

const AVAILABLE_DRINKS: Drink[] = [
  {
    id: 'iced-brown-sugar-oatmilk-shaken-espresso',
    name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
    description: 'Smooth blonde espresso shaken with brown sugar and cinnamon',
    emoji: '🥤',
    questionCount: 5
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla syrup marked with espresso',
    emoji: '☕',
    questionCount: 4
  },
  {
    id: 'pumpkin-spice-latte',
    name: 'Pumpkin Spice Latte',
    description: 'Signature espresso with pumpkin spice sauce and whipped cream',
    emoji: '🎃',
    questionCount: 3
  },
  {
    id: 'vanilla-sweet-cream-cold-brew',
    name: 'Vanilla Sweet Cream Cold Brew',
    description: 'Smooth cold brew with vanilla sweet cream',
    emoji: '🧊',
    questionCount: 3
  },
  {
    id: 'strawberry-acai-refresher',
    name: 'Strawberry Acai Refresher',
    description: 'Refreshing blend of strawberry and acai',
    emoji: '🍓',
    questionCount: 3
  }
]

export default function DrinkSelector({ onDrinkSelect, onMixedMode }: DrinkSelectorProps) {
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null)

  const handleDrinkClick = (drinkId: string) => {
    setSelectedDrink(drinkId)
    setTimeout(() => onDrinkSelect(drinkId), 300) // Small delay for visual feedback
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Choose Your Training Focus
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a specific drink to practice, or try our mixed mode for a comprehensive challenge.
        </p>
      </div>

      {/* Drink Selection Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AVAILABLE_DRINKS.map((drink) => (
          <div
            key={drink.id}
            onClick={() => handleDrinkClick(drink.id)}
            className={`game-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              selectedDrink === drink.id ? 'ring-2 ring-starbucks-green bg-starbucks-green/5' : ''
            }`}
          >
            <div className="text-center space-y-4">
              <div className="text-6xl">{drink.emoji}</div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-starbucks-darkgreen">
                  {drink.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {drink.description}
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-500">Questions:</span>
                <span className="px-2 py-1 bg-starbucks-green text-white text-sm font-medium rounded-full">
                  {drink.questionCount}
                </span>
              </div>

              {selectedDrink === drink.id && (
                <div className="text-starbucks-green font-medium">
                  Starting practice...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mixed Mode Option */}
      <div className="text-center">
        <div className="inline-block">
          <button
            onClick={onMixedMode}
            className="group relative overflow-hidden bg-gradient-to-r from-starbucks-green to-starbucks-darkgreen text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <div>Mixed Challenge Mode</div>
                <div className="text-sm opacity-90">All drinks + general knowledge</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• <strong>Specific Drink:</strong> Practice questions focused on one drink recipe</li>
          <li>• <strong>Mixed Mode:</strong> Challenge yourself with questions from all drinks and general Starbucks knowledge</li>
          <li>• <strong>Difficulty Levels:</strong> Questions range from beginner to advanced</li>
          <li>• <strong>Instant Feedback:</strong> Get explanations for each answer to improve your knowledge</li>
        </ul>
      </div>
    </div>
  )
}

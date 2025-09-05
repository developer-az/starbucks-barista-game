'use client'

import { useState } from 'react'

interface Drink {
  id: string
  name: string
  description: string
  emoji: string
  questionCount: number
  difficulty: string
  category: string
  time: string
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
    questionCount: 5,
    difficulty: 'Intermediate',
    category: 'Espresso',
    time: '3-4 min'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla syrup marked with espresso',
    emoji: '☕',
    questionCount: 4,
    difficulty: 'Intermediate',
    category: 'Espresso',
    time: '2-3 min'
  },
  {
    id: 'pumpkin-spice-latte',
    name: 'Pumpkin Spice Latte',
    description: 'Signature espresso with pumpkin spice sauce and whipped cream',
    emoji: '🎃',
    questionCount: 3,
    difficulty: 'Beginner',
    category: 'Seasonal',
    time: '2-3 min'
  },
  {
    id: 'vanilla-sweet-cream-cold-brew',
    name: 'Vanilla Sweet Cream Cold Brew',
    description: 'Smooth cold brew with vanilla sweet cream',
    emoji: '🧊',
    questionCount: 3,
    difficulty: 'Beginner',
    category: 'Cold Brew',
    time: '1-2 min'
  },
  {
    id: 'strawberry-acai-refresher',
    name: 'Strawberry Acai Refresher',
    description: 'Refreshing blend of strawberry and acai',
    emoji: '🍓',
    questionCount: 3,
    difficulty: 'Beginner',
    category: 'Refresher',
    time: '2-3 min'
  }
]

export default function DrinkSelector({ onDrinkSelect, onMixedMode }: DrinkSelectorProps) {
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null)
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null)

  const handleDrinkClick = (drinkId: string) => {
    setSelectedDrink(drinkId)
    setTimeout(() => onDrinkSelect(drinkId), 300)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="game-selection-container">
      {/* Header Section */}
      <div className="game-header">
        <div className="game-header-badge">
          <span>🎯</span>
          <span>Training Selection</span>
        </div>
        <h1 className="game-header-title">
          Choose Your <span className="text-highlight">Training Focus</span>
        </h1>
        <p className="game-header-description">
          Select a specific drink to master, or challenge yourself with our comprehensive mixed mode 
          featuring questions from all drinks and general barista knowledge.
        </p>
        <div className="game-header-stats">
          <div className="stat-item">
            <span className="stat-number">{AVAILABLE_DRINKS.length}</span>
            <span className="stat-label">Drink Options</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{AVAILABLE_DRINKS.reduce((sum, drink) => sum + drink.questionCount, 0)}+</span>
            <span className="stat-label">Total Questions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Difficulty Levels</span>
          </div>
        </div>
      </div>

      {/* Drink Selection Grid */}
      <div className="drinks-selection-grid">
        {AVAILABLE_DRINKS.map((drink) => (
          <div
            key={drink.id}
            onClick={() => handleDrinkClick(drink.id)}
            onMouseEnter={() => setHoveredDrink(drink.id)}
            onMouseLeave={() => setHoveredDrink(null)}
            className={`drink-selection-card ${
              selectedDrink === drink.id ? 'selected' : ''
            } ${hoveredDrink === drink.id ? 'hovered' : ''}`}
          >
            <div className="drink-card-header">
              <div className="drink-icon-container">
                <span className="drink-icon">{drink.emoji}</span>
              </div>
              <div className="drink-badges">
                <span className={`difficulty-badge ${getDifficultyColor(drink.difficulty)}`}>
                  {drink.difficulty}
                </span>
                <span className="category-badge">
                  {drink.category}
                </span>
              </div>
            </div>
            
            <div className="drink-card-content">
              <h3 className="drink-name">{drink.name}</h3>
              <p className="drink-description">{drink.description}</p>
              
              <div className="drink-meta-info">
                <div className="meta-item">
                  <span className="meta-icon">📝</span>
                  <span>{drink.questionCount} questions</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <span>{drink.time}</span>
                </div>
              </div>
            </div>

            {selectedDrink === drink.id && (
              <div className="selection-indicator">
                <span className="selection-icon">✨</span>
                <span>Starting practice...</span>
              </div>
            )}

            <div className="hover-overlay"></div>
          </div>
        ))}
      </div>

      {/* Mixed Mode Section */}
      <div className="mixed-mode-section">
        <div className="mixed-mode-container">
          <button onClick={onMixedMode} className="mixed-mode-button">
            <div className="mixed-mode-icon">
              <span>🎯</span>
            </div>
            <div className="mixed-mode-content">
              <h3 className="mixed-mode-title">Mixed Challenge Mode</h3>
              <p className="mixed-mode-description">
                Ultimate test combining all drinks, techniques, and barista knowledge
              </p>
              <div className="mixed-mode-features">
                <span className="feature-tag">15+ Questions</span>
                <span className="feature-tag">All Difficulty Levels</span>
                <span className="feature-tag">Comprehensive Review</span>
              </div>
            </div>
            <div className="mixed-mode-arrow">
              <span>→</span>
            </div>
          </button>
        </div>
      </div>

      {/* Training Tips */}
      <div className="training-tips">
        <div className="tips-header">
          <h3 className="tips-title">💡 Training Tips</h3>
          <p className="tips-subtitle">Maximize your learning experience</p>
        </div>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🎯</div>
            <div className="tip-content">
              <h4>Focused Practice</h4>
              <p>Start with specific drinks to build foundational knowledge</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🔄</div>
            <div className="tip-content">
              <h4>Progressive Learning</h4>
              <p>Move from beginner to advanced difficulty levels</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🏆</div>
            <div className="tip-content">
              <h4>Mixed Challenges</h4>
              <p>Test comprehensive knowledge with mixed mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  STARBUCKS_DRINKS, 
  getDrinksByCategory, 
  getSeasonalDrinks, 
  searchDrinks,
  getDrinksByDifficulty,
  getDrinksByTemperature,
  type StarbucksDrink 
} from '@/data/starbucksDrinks'

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedTemperature, setSelectedTemperature] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState<StarbucksDrink | null>(null)
  const [showSeasonalOnly, setShowSeasonalOnly] = useState(false)

  const categories = ['all', 'espresso', 'frappuccino', 'refresher', 'tea', 'cold-brew', 'seasonal']
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced']
  const temperatures = ['all', 'hot', 'cold', 'blended']

  const filteredDrinks = STARBUCKS_DRINKS.filter(drink => {
    const matchesCategory = selectedCategory === 'all' || drink.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || drink.difficulty === selectedDifficulty
    const matchesTemperature = selectedTemperature === 'all' || drink.temperature === selectedTemperature
    const matchesSearch = searchQuery === '' || 
      drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drink.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drink.ingredients.some(ingredient => 
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    const matchesSeasonal = !showSeasonalOnly || drink.isSeasonal
    
    return matchesCategory && matchesDifficulty && matchesTemperature && matchesSearch && matchesSeasonal
  })

  const handleViewRecipe = (drink: StarbucksDrink) => {
    setSelectedRecipe(drink)
  }

  const closeRecipeModal = () => {
    setSelectedRecipe(null)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'espresso': return 'bg-amber-100 text-amber-800'
      case 'frappuccino': return 'bg-blue-100 text-blue-800'
      case 'refresher': return 'bg-pink-100 text-pink-800'
      case 'tea': return 'bg-green-100 text-green-800'
      case 'cold-brew': return 'bg-purple-100 text-purple-800'
      default: return 'bg-orange-100 text-orange-800'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="recipes-container">
      {/* Page Header */}
      <div className="recipes-header">
        <div className="recipes-header-badge">
          <span>📚</span>
          <span>Recipe Library</span>
        </div>
        <h1 className="recipes-header-title">
          Master <span className="text-highlight">Starbucks Recipes</span>
        </h1>
        <p className="recipes-header-description">
          Master the art of crafting signature Starbucks beverages. Learn step-by-step recipes, 
          ingredient lists, and professional techniques used by baristas worldwide.
        </p>
        
        {/* Enhanced Stats */}
        <div className="recipes-stats">
          <div className="stat-card total-recipes">
            <div className="stat-icon">📖</div>
            <div className="stat-content">
              <div className="stat-number">{STARBUCKS_DRINKS.length}</div>
              <div className="stat-label">Total Recipes</div>
            </div>
          </div>
          <div className="stat-card categories">
            <div className="stat-icon">🗂️</div>
            <div className="stat-content">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
          <div className="stat-card seasonal">
            <div className="stat-icon">🎃</div>
            <div className="stat-content">
              <div className="stat-number">{getSeasonalDrinks().length}</div>
              <div className="stat-label">Seasonal Drinks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Controls */}
      <div className="search-filter-section">
        <div className="search-filter-card">
          {/* Search Bar */}
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search drinks, ingredients, or techniques..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="clear-search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="filter-controls">
            {/* Category Filter */}
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="filter-group">
              <label className="filter-label">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="filter-select"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Temperature Filter */}
            <div className="filter-group">
              <label className="filter-label">Temperature</label>
              <select
                value={selectedTemperature}
                onChange={(e) => setSelectedTemperature(e.target.value)}
                className="filter-select"
              >
                {temperatures.map(temperature => (
                  <option key={temperature} value={temperature}>
                    {temperature.charAt(0).toUpperCase() + temperature.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Seasonal Toggle */}
            <div className="seasonal-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={showSeasonalOnly}
                  onChange={(e) => setShowSeasonalOnly(e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-text">Seasonal Only</span>
              </label>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            Showing <span className="count-highlight">{filteredDrinks.length}</span> of {STARBUCKS_DRINKS.length} recipes
          </div>
        </div>
      </div>

      {/* Enhanced Recipes Grid */}
      <div className="recipes-grid">
        {filteredDrinks.map((drink) => (
          <div key={drink.id} className="recipe-card">
            {/* Drink Header */}
            <div className="recipe-card-header">
              <div className="drink-emoji-container">
                <span className="drink-emoji">{drink.emoji}</span>
              </div>
              {drink.isSeasonal && (
                <div className="seasonal-badge">
                  <span>🎃</span>
                  <span>SEASONAL</span>
                </div>
              )}
            </div>
            
            <div className="recipe-card-content">
              {/* Title and Description */}
              <div className="recipe-info">
                <h3 className="recipe-title">{drink.name}</h3>
                <p className="recipe-description">{drink.description}</p>
              </div>
              
              {/* Tags */}
              <div className="recipe-tags">
                <span className={`category-tag ${getCategoryColor(drink.category)}`}>
                  {drink.category.replace('-', ' ').toUpperCase()}
                </span>
                <span className={`difficulty-tag ${getDifficultyColor(drink.difficulty)}`}>
                  {drink.difficulty.toUpperCase()}
                </span>
                <span className="temperature-tag">
                  {drink.temperature.toUpperCase()}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="recipe-stats">
                <div className="stat-item">
                  <div className="stat-icon">🧪</div>
                  <div className="stat-content">
                    <div className="stat-value">{drink.ingredients.length}</div>
                    <div className="stat-name">Ingredients</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📝</div>
                  <div className="stat-content">
                    <div className="stat-value">{drink.steps.length}</div>
                    <div className="stat-name">Steps</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-content">
                    <div className="stat-value">{drink.estimatedTime}s</div>
                    <div className="stat-name">Time</div>
                  </div>
                </div>
              </div>

              {/* Nutrition Preview */}
              <div className="nutrition-preview">
                <div className="nutrition-item">
                  <span className="nutrition-label">Calories:</span>
                  <span className="nutrition-value">{drink.nutrition.calories}</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Caffeine:</span>
                  <span className="nutrition-value">{drink.nutrition.caffeine}mg</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="recipe-action-button"
                onClick={() => handleViewRecipe(drink)}
              >
                <span>View Full Recipe</span>
                <span className="action-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Recipe Detail Modal - keeping the existing modal structure but with better styling */}
      {selectedRecipe && (
        <div className="recipe-modal-overlay">
          <div className="recipe-modal">
            <div className="recipe-modal-content">
              {/* Header */}
              <div className="modal-header">
                <div className="modal-title-section">
                  <div className="modal-emoji-title">
                    <div className="modal-emoji">{selectedRecipe.emoji}</div>
                    <div className="modal-title-text">
                      <h2 className="modal-title">{selectedRecipe.name}</h2>
                      <p className="modal-subtitle">{selectedRecipe.description}</p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="modal-tags">
                    <span className={`modal-tag ${getCategoryColor(selectedRecipe.category)}`}>
                      {selectedRecipe.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className={`modal-tag ${getDifficultyColor(selectedRecipe.difficulty)}`}>
                      {selectedRecipe.difficulty.toUpperCase()}
                    </span>
                    <span className="modal-tag temperature-tag">
                      {selectedRecipe.temperature.toUpperCase()}
                    </span>
                    {selectedRecipe.isSeasonal && (
                      <span className="modal-tag seasonal-tag">
                        🎃 SEASONAL
                      </span>
                    )}
                  </div>
                </div>
                
                <button onClick={closeRecipeModal} className="modal-close-button">
                  ×
                </button>
              </div>

              {/* Quick Stats */}
              <div className="modal-stats">
                <div className="modal-stat-card">
                  <div className="modal-stat-number">{selectedRecipe.estimatedTime}s</div>
                  <div className="modal-stat-label">Prep Time</div>
                </div>
                <div className="modal-stat-card">
                  <div className="modal-stat-number">{selectedRecipe.ingredients.length}</div>
                  <div className="modal-stat-label">Ingredients</div>
                </div>
                <div className="modal-stat-card">
                  <div className="modal-stat-number">{selectedRecipe.steps.length}</div>
                  <div className="modal-stat-label">Steps</div>
                </div>
                <div className="modal-stat-card">
                  <div className="modal-stat-number">{selectedRecipe.nutrition.calories}</div>
                  <div className="modal-stat-label">Calories</div>
                </div>
              </div>

              <div className="modal-main-content">
                {/* Ingredients */}
                <div className="modal-section">
                  <h3 className="modal-section-title">Ingredients</h3>
                  <div className="ingredients-list">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="ingredient-item">
                        <div className="ingredient-info">
                          <span className="ingredient-dot"></span>
                          <span className="ingredient-name">{ingredient.name}</span>
                        </div>
                        <div className="ingredient-amount">
                          {ingredient.amount} {ingredient.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition */}
                <div className="modal-section">
                  <h3 className="modal-section-title">Nutrition (Grande)</h3>
                  <div className="nutrition-list">
                    <div className="nutrition-detail-item">
                      <span className="nutrition-detail-label">Calories</span>
                      <span className="nutrition-detail-value">{selectedRecipe.nutrition.calories}</span>
                    </div>
                    <div className="nutrition-detail-item">
                      <span className="nutrition-detail-label">Caffeine</span>
                      <span className="nutrition-detail-value">{selectedRecipe.nutrition.caffeine}mg</span>
                    </div>
                    <div className="nutrition-detail-item">
                      <span className="nutrition-detail-label">Sugar</span>
                      <span className="nutrition-detail-value">{selectedRecipe.nutrition.sugar}g</span>
                    </div>
                    <div className="nutrition-detail-item">
                      <span className="nutrition-detail-label">Fat</span>
                      <span className="nutrition-detail-value">{selectedRecipe.nutrition.fat}g</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="modal-section full-width">
                <h3 className="modal-section-title">Preparation Steps</h3>
                <div className="steps-list">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={step.id} className="step-item">
                      <div className="step-number">
                        {step.order}
                      </div>
                      <div className="step-content">
                        <p className="step-instruction">{step.instruction}</p>
                        {(step.duration || step.temperature || step.technique) && (
                          <div className="step-details">
                            {step.duration && <span className="step-detail">⏱️ {step.duration}s</span>}
                            {step.temperature && <span className="step-detail">🌡️ {step.temperature}°F</span>}
                            {step.technique && <span className="step-detail">🎯 {step.technique}</span>}
                          </div>
                        )}
                        {step.visualCue && (
                          <div className="step-visual-cue">
                            👁️ {step.visualCue}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              {selectedRecipe.tips.length > 0 && (
                <div className="modal-section full-width">
                  <h3 className="modal-section-title">Pro Tips</h3>
                  <div className="tips-grid">
                    {selectedRecipe.tips.map((tip, index) => (
                      <div key={index} className="tip-item">
                        <div className="tip-icon">💡</div>
                        <p className="tip-text">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="modal-actions">
                <button onClick={closeRecipeModal} className="modal-action-secondary">
                  Close
                </button>
                <Link
                  href="/game"
                  className="modal-action-primary"
                  onClick={closeRecipeModal}
                >
                  <span>Practice This Recipe</span>
                  <span className="action-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="recipes-cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to Perfect Your Skills?</h3>
          <p className="cta-description">
            Practice these recipes in our interactive training game and become a master barista!
          </p>
          <Link href="/game" className="cta-button">
            <span>🎯</span>
            <span>Start Training Game</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
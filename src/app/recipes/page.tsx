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

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-starbucks-darkgreen">
            Starbucks Drink Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the art of crafting signature Starbucks beverages. Learn step-by-step recipes, 
            ingredient lists, and professional techniques used by baristas worldwide.
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 text-center">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-starbucks-green">{STARBUCKS_DRINKS.length}</div>
            <div className="text-sm text-gray-600">Total Recipes</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-starbucks-green">{categories.length - 1}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-starbucks-green">{getSeasonalDrinks().length}</div>
            <div className="text-sm text-gray-600">Seasonal Drinks</div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search drinks, ingredients, or techniques..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-starbucks-green focus:border-transparent text-lg"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Temperature Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Temperature</label>
            <select
              value={selectedTemperature}
              onChange={(e) => setSelectedTemperature(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
            >
              {temperatures.map(temperature => (
                <option key={temperature} value={temperature}>
                  {temperature.charAt(0).toUpperCase() + temperature.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Seasonal Toggle */}
          <div className="flex items-end">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showSeasonalOnly}
                onChange={(e) => setShowSeasonalOnly(e.target.checked)}
                className="w-4 h-4 text-starbucks-green border-gray-300 rounded focus:ring-starbucks-green"
              />
              <span className="text-sm font-medium text-gray-700">Seasonal Only</span>
            </label>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center text-gray-600">
          Showing {filteredDrinks.length} of {STARBUCKS_DRINKS.length} recipes
        </div>
      </div>

      {/* Enhanced Recipes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDrinks.map((drink) => (
          <div key={drink.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Drink Image/Emoji */}
            <div className="aspect-video bg-gradient-to-br from-starbucks-green to-starbucks-darkgreen flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                {drink.emoji}
              </div>
              {drink.isSeasonal && (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    🎃 SEASONAL
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-starbucks-darkgreen leading-tight">
                  {drink.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{drink.description}</p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  drink.category === 'espresso' ? 'bg-amber-100 text-amber-800' :
                  drink.category === 'frappuccino' ? 'bg-blue-100 text-blue-800' :
                  drink.category === 'refresher' ? 'bg-pink-100 text-pink-800' :
                  drink.category === 'tea' ? 'bg-green-100 text-green-800' :
                  drink.category === 'cold-brew' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {drink.category.replace('-', ' ').toUpperCase()}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  drink.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  drink.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {drink.difficulty.toUpperCase()}
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  {drink.temperature.toUpperCase()}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-starbucks-green">{drink.ingredients.length}</div>
                  <div className="text-xs text-gray-500">Ingredients</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-starbucks-green">{drink.steps.length}</div>
                  <div className="text-xs text-gray-500">Steps</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-starbucks-green">{drink.estimatedTime}s</div>
                  <div className="text-xs text-gray-500">Time</div>
                </div>
              </div>

              {/* Nutrition Preview */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Calories:</span>
                  <span className="font-semibold text-starbucks-darkgreen">{drink.nutrition.calories}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Caffeine:</span>
                  <span className="font-semibold text-starbucks-darkgreen">{drink.nutrition.caffeine}mg</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="w-full bg-gradient-to-r from-starbucks-green to-starbucks-darkgreen text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => handleViewRecipe(drink)}
              >
                View Full Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedRecipe.emoji}</div>
                    <div>
                      <h2 className="text-4xl font-bold text-starbucks-darkgreen">
                        {selectedRecipe.name}
                      </h2>
                      <p className="text-lg text-gray-600 mt-2">{selectedRecipe.description}</p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                      selectedRecipe.category === 'espresso' ? 'bg-amber-100 text-amber-800' :
                      selectedRecipe.category === 'frappuccino' ? 'bg-blue-100 text-blue-800' :
                      selectedRecipe.category === 'refresher' ? 'bg-pink-100 text-pink-800' :
                      selectedRecipe.category === 'tea' ? 'bg-green-100 text-green-800' :
                      selectedRecipe.category === 'cold-brew' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {selectedRecipe.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                      selectedRecipe.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      selectedRecipe.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedRecipe.difficulty.toUpperCase()}
                    </span>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                      {selectedRecipe.temperature.toUpperCase()}
                    </span>
                    {selectedRecipe.isSeasonal && (
                      <span className="px-4 py-2 text-sm font-medium rounded-full bg-orange-100 text-orange-800">
                        🎃 SEASONAL
                      </span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={closeRecipeModal}
                  className="text-gray-400 hover:text-gray-600 text-3xl font-bold p-2 hover:bg-gray-100 rounded-full"
                >
                  ×
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-starbucks-green">{selectedRecipe.estimatedTime}s</div>
                  <div className="text-sm text-gray-600">Prep Time</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-starbucks-green">{selectedRecipe.ingredients.length}</div>
                  <div className="text-sm text-gray-600">Ingredients</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-starbucks-green">{selectedRecipe.steps.length}</div>
                  <div className="text-sm text-gray-600">Steps</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-starbucks-green">{selectedRecipe.nutrition.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ingredients */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-starbucks-darkgreen">Ingredients</h3>
                  <div className="space-y-3">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="w-3 h-3 bg-starbucks-green rounded-full"></span>
                          <span className="font-medium text-gray-800">{ingredient.name}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {ingredient.amount} {ingredient.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-starbucks-darkgreen">Nutrition (Grande)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Calories</span>
                      <span className="font-semibold text-starbucks-darkgreen">{selectedRecipe.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Caffeine</span>
                      <span className="font-semibold text-starbucks-darkgreen">{selectedRecipe.nutrition.caffeine}mg</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Sugar</span>
                      <span className="font-semibold text-starbucks-darkgreen">{selectedRecipe.nutrition.sugar}g</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Fat</span>
                      <span className="font-semibold text-starbucks-darkgreen">{selectedRecipe.nutrition.fat}g</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-starbucks-darkgreen">Preparation Steps</h3>
                <div className="space-y-4">
                  {selectedRecipe.steps.map((step, index) => (
                    <div key={step.id} className="flex space-x-4 p-4 bg-gray-50 rounded-xl">
                      <span className="flex-shrink-0 w-10 h-10 bg-starbucks-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                        {step.order}
                      </span>
                      <div className="flex-1 space-y-2">
                        <p className="text-gray-800 leading-relaxed">{step.instruction}</p>
                        {step.duration && (
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>⏱️ {step.duration}s</span>
                            {step.temperature && <span>🌡️ {step.temperature}°F</span>}
                            {step.technique && <span>🎯 {step.technique}</span>}
                          </div>
                        )}
                        {step.visualCue && (
                          <div className="text-sm text-starbucks-green font-medium">
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
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-starbucks-darkgreen">Pro Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedRecipe.tips.map((tip, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                        <p className="text-blue-800">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <button
                  onClick={closeRecipeModal}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Close
                </button>
                <Link
                  href="/game"
                  className="flex-1 bg-gradient-to-r from-starbucks-green to-starbucks-darkgreen text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={closeRecipeModal}
                >
                  Practice This Recipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <p className="text-gray-600">
          Ready to test your knowledge? Practice these recipes in our training game!
        </p>
        <Link href="/game" className="btn-primary text-lg px-8 py-4 inline-block">
          Start Training Game
        </Link>
      </div>
    </div>
  )
}
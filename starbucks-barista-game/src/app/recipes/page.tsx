'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Drink {
  id: number
  name: string
  category: string
  isSeasonal: boolean
  description: string
  imageUrl: string
  ingredients: string[]
  steps: string[]
}

const sampleDrinks: Drink[] = [
  {
    id: 1,
    name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
    category: 'Espresso',
    isSeasonal: false,
    description: 'Smooth blonde espresso shaken with brown sugar and cinnamon',
    imageUrl: '/placeholder-shaken-espresso.jpg',
    ingredients: [
      'Blonde Espresso Roast',
      'Brown Sugar Syrup',
      'Cinnamon Powder',
      'Oatmilk',
      'Ice'
    ],
    steps: [
      'Pull 2 shots of blonde espresso',
      'Add 4 pumps of brown sugar syrup to shaker',
      'Add cinnamon powder to shaker',
      'Pour hot espresso into shaker',
      'Add ice and shake vigorously',
      'Strain into cup and top with oatmilk'
    ]
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    category: 'Espresso',
    isSeasonal: false,
    description: 'Freshly steamed milk with vanilla syrup marked with espresso',
    imageUrl: '/placeholder-macchiato.jpg',
    ingredients: [
      'Espresso Roast',
      'Vanilla Syrup',
      '2% Milk',
      'Caramel Drizzle'
    ],
    steps: [
      'Add vanilla syrup to cup (3 pumps for Grande)',
      'Steam milk to 150°F with microfoam',
      'Pour steamed milk into cup',
      'Pull 2 shots of espresso',
      'Slowly pour espresso through center of milk',
      'Drizzle caramel on top in crosshatch pattern'
    ]
  },
  {
    id: 3,
    name: 'Pumpkin Spice Latte',
    category: 'Seasonal',
    isSeasonal: true,
    description: 'Signature espresso with pumpkin spice sauce and whipped cream',
    imageUrl: '/placeholder-psl.jpg',
    ingredients: [
      'Espresso Roast',
      'Pumpkin Spice Sauce',
      '2% Milk',
      'Whipped Cream',
      'Pumpkin Spice Topping'
    ],
    steps: [
      'Add pumpkin spice sauce to cup (3 pumps for Grande)',
      'Steam milk to 150°F with microfoam',
      'Pull 2 shots of espresso',
      'Pour espresso into cup',
      'Top with steamed milk',
      'Finish with whipped cream and pumpkin spice topping'
    ]
  },
  {
    id: 4,
    name: 'Vanilla Sweet Cream Cold Brew',
    category: 'Cold Brew',
    isSeasonal: false,
    description: 'Smooth cold brew with vanilla sweet cream',
    imageUrl: '/placeholder-cold-brew.jpg',
    ingredients: [
      'Cold Brew Coffee',
      'Vanilla Sweet Cream',
      'Ice'
    ],
    steps: [
      'Fill cup with ice',
      'Pour cold brew to 1/2 inch from top',
      'Top with vanilla sweet cream',
      'Stir gently to combine'
    ]
  },
  {
    id: 5,
    name: 'Strawberry Acai Refresher',
    category: 'Refresher',
    isSeasonal: false,
    description: 'Refreshing blend of strawberry and acai',
    imageUrl: '/placeholder-refresher.jpg',
    ingredients: [
      'Strawberry Acai Base',
      'Water',
      'Ice',
      'Freeze-dried Strawberries'
    ],
    steps: [
      'Fill shaker with ice',
      'Add strawberry acai base',
      'Add water to dilute',
      'Shake vigorously',
      'Pour into cup',
      'Top with freeze-dried strawberries'
    ]
  }
]

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', ...Array.from(new Set(sampleDrinks.map(drink => drink.category)))]

  const filteredDrinks = sampleDrinks.filter(drink => {
    const matchesCategory = selectedCategory === 'all' || drink.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         drink.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Starbucks Drink Recipes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master the art of crafting signature Starbucks beverages. Learn step-by-step recipes, 
          ingredient lists, and professional techniques used by baristas worldwide.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search drinks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-starbucks-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDrinks.map((drink) => (
          <div key={drink.id} className="game-card space-y-4">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-4xl">☕</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-starbucks-darkgreen">
                  {drink.name}
                </h3>
                {drink.isSeasonal && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                    Seasonal
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600">{drink.description}</p>
              
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-starbucks-green text-white text-xs font-medium rounded-full">
                  {drink.category}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-starbucks-darkgreen">Ingredients:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {drink.ingredients.slice(0, 3).map((ingredient, index) => (
                    <li key={index}>• {ingredient}</li>
                  ))}
                  {drink.ingredients.length > 3 && (
                    <li className="text-starbucks-green">+{drink.ingredients.length - 3} more</li>
                  )}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-starbucks-darkgreen">Steps:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {drink.steps.slice(0, 3).map((step, index) => (
                    <li key={index}>{index + 1}. {step}</li>
                  ))}
                  {drink.steps.length > 3 && (
                    <li className="text-starbucks-green">+{drink.steps.length - 3} more steps</li>
                  )}
                </ul>
              </div>

              <button className="w-full btn-primary text-sm py-2">
                View Full Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

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

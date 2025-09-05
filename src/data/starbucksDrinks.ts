export interface StarbucksDrink {
  id: string
  name: string
  category: 'espresso' | 'frappuccino' | 'refresher' | 'tea' | 'cold-brew' | 'seasonal'
  isSeasonal: boolean
  description: string
  emoji: string
  imageUrl: string
  ingredients: DrinkIngredient[]
  steps: RecipeStep[]
  nutrition: NutritionInfo
  customization: CustomizationOptions
  tips: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // in seconds
  temperature: 'hot' | 'cold' | 'blended'
  caffeineLevel: 'low' | 'medium' | 'high'
}

export interface DrinkIngredient {
  name: string
  amount: number
  unit: string
  type: 'base' | 'syrup' | 'milk' | 'topping' | 'extra'
  isOptional: boolean
  alternatives?: string[]
}

export interface RecipeStep {
  id: string
  order: number
  instruction: string
  duration?: number // in seconds
  temperature?: number // in fahrenheit
  technique?: string
  visualCue?: string
  commonMistakes?: string[]
}

export interface NutritionInfo {
  calories: number
  fat: number
  carbs: number
  protein: number
  caffeine: number
  sugar: number
}

export interface CustomizationOptions {
  sizes: string[]
  milkOptions: string[]
  syrupOptions: string[]
  extraShots: boolean
  decaf: boolean
  iced: boolean
  extraHot: boolean
}

export const STARBUCKS_DRINKS: StarbucksDrink[] = [
  // ESPRESSO DRINKS
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'espresso',
    isSeasonal: false,
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and finished with caramel sauce',
    emoji: '☕',
    imageUrl: '/drinks/caramel-macchiato.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Vanilla Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Caramel Drizzle', amount: 1, unit: 'drizzle', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'vanilla-syrup',
        order: 1,
        instruction: 'Add vanilla syrup to cup (3 pumps for Grande)',
        duration: 5,
        visualCue: 'Syrup should coat the bottom of the cup'
      },
      {
        id: 'steam-milk',
        order: 2,
        instruction: 'Steam milk to 150°F with microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Create microfoam by aerating milk for 3-5 seconds',
        visualCue: 'Milk should have a glossy, paint-like texture'
      },
      {
        id: 'pour-milk',
        order: 3,
        instruction: 'Pour steamed milk into cup, holding back foam with spoon',
        duration: 10,
        visualCue: 'Milk should fill cup to 1/2 inch from top'
      },
      {
        id: 'pull-espresso',
        order: 4,
        instruction: 'Pull 2 shots of espresso',
        duration: 25,
        temperature: 180,
        visualCue: 'Espresso should have golden crema on top'
      },
      {
        id: 'mark-espresso',
        order: 5,
        instruction: 'Slowly pour espresso through center of milk to create the "mark"',
        duration: 8,
        technique: 'Pour from 6 inches above cup',
        visualCue: 'Espresso should create a visible mark in the milk'
      },
      {
        id: 'caramel-drizzle',
        order: 6,
        instruction: 'Drizzle caramel sauce on top in crosshatch pattern',
        duration: 5,
        visualCue: 'Caramel should form a decorative pattern on top'
      }
    ],
    nutrition: {
      calories: 250,
      fat: 7,
      carbs: 35,
      protein: 10,
      caffeine: 150,
      sugar: 33
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk', 'Coconut Milk'],
      syrupOptions: ['Vanilla', 'Sugar-Free Vanilla', 'Extra Vanilla'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'The word "macchiato" means "marked" in Italian',
      'Always pour espresso last to maintain the layered effect',
      'Use a spoon to hold back foam when pouring milk',
      'Caramel drizzle should be applied in a crosshatch pattern'
    ],
    difficulty: 'intermediate',
    estimatedTime: 90,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  {
    id: 'iced-brown-sugar-oatmilk-shaken-espresso',
    name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
    category: 'espresso',
    isSeasonal: false,
    description: 'Smooth blonde espresso shaken with brown sugar and cinnamon, topped with oatmilk',
    emoji: '🥤',
    imageUrl: '/drinks/brown-sugar-shaken-espresso.jpg',
    ingredients: [
      { name: 'Blonde Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Brown Sugar Syrup', amount: 4, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: 'Cinnamon Powder', amount: 1, unit: 'dash', type: 'extra', isOptional: false },
      { name: 'Oatmilk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false }
    ],
    steps: [
      {
        id: 'add-syrup',
        order: 1,
        instruction: 'Add brown sugar syrup to shaker (4 pumps for Grande)',
        duration: 5,
        visualCue: 'Syrup should coat the bottom of the shaker'
      },
      {
        id: 'add-cinnamon',
        order: 2,
        instruction: 'Add cinnamon powder to shaker',
        duration: 3,
        visualCue: 'Light dusting of cinnamon powder'
      },
      {
        id: 'pull-espresso',
        order: 3,
        instruction: 'Pull 2 shots of blonde espresso',
        duration: 25,
        temperature: 180,
        visualCue: 'Blonde espresso should have lighter crema'
      },
      {
        id: 'pour-espresso',
        order: 4,
        instruction: 'Pour hot espresso into shaker',
        duration: 5,
        visualCue: 'Espresso should mix with syrup and cinnamon'
      },
      {
        id: 'add-ice',
        order: 5,
        instruction: 'Add ice to shaker (fill to top)',
        duration: 5,
        visualCue: 'Ice should fill shaker completely'
      },
      {
        id: 'shake',
        order: 6,
        instruction: 'Shake vigorously 10-20 times',
        duration: 15,
        technique: 'Hold shaker with both hands and shake side to side',
        visualCue: 'Drink should become frothy and well-mixed'
      },
      {
        id: 'strain-pour',
        order: 7,
        instruction: 'Strain into cup and top with oatmilk',
        duration: 10,
        visualCue: 'Oatmilk should create a layered effect on top'
      }
    ],
    nutrition: {
      calories: 120,
      fat: 2,
      carbs: 23,
      protein: 2,
      caffeine: 170,
      sugar: 20
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Oatmilk', 'Almond Milk', 'Soy Milk', '2% Milk'],
      syrupOptions: ['Brown Sugar', 'Extra Brown Sugar'],
      extraShots: true,
      decaf: true,
      iced: false,
      extraHot: false
    },
    tips: [
      'Blonde espresso provides a smoother, less bitter flavor',
      'Shaking creates the signature foam and texture',
      'Oatmilk adds natural sweetness and creaminess',
      'Cinnamon enhances the warm, spiced flavor profile'
    ],
    difficulty: 'intermediate',
    estimatedTime: 75,
    temperature: 'cold',
    caffeineLevel: 'high'
  },

  {
    id: 'pumpkin-spice-latte',
    name: 'Pumpkin Spice Latte',
    category: 'espresso',
    isSeasonal: true,
    description: 'Signature espresso with pumpkin spice sauce, steamed milk, and whipped cream',
    emoji: '🎃',
    imageUrl: '/drinks/pumpkin-spice-latte.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Pumpkin Spice Sauce', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false },
      { name: 'Pumpkin Spice Topping', amount: 1, unit: 'sprinkle', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-sauce',
        order: 1,
        instruction: 'Add pumpkin spice sauce to cup (3 pumps for Grande)',
        duration: 5,
        visualCue: 'Sauce should coat the bottom of the cup'
      },
      {
        id: 'steam-milk',
        order: 2,
        instruction: 'Steam milk to 150°F with microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Create microfoam for latte art potential',
        visualCue: 'Milk should have glossy, paint-like texture'
      },
      {
        id: 'pull-espresso',
        order: 3,
        instruction: 'Pull 2 shots of espresso',
        duration: 25,
        temperature: 180,
        visualCue: 'Espresso should have golden crema'
      },
      {
        id: 'combine',
        order: 4,
        instruction: 'Pour espresso into cup, then top with steamed milk',
        duration: 15,
        visualCue: 'Drink should have layered appearance'
      },
      {
        id: 'whipped-cream',
        order: 5,
        instruction: 'Top with whipped cream',
        duration: 8,
        visualCue: 'Whipped cream should form a dome on top'
      },
      {
        id: 'spice-topping',
        order: 6,
        instruction: 'Sprinkle pumpkin spice topping on whipped cream',
        duration: 5,
        visualCue: 'Even distribution of spice topping'
      }
    ],
    nutrition: {
      calories: 380,
      fat: 14,
      carbs: 52,
      protein: 14,
      caffeine: 150,
      sugar: 50
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk'],
      syrupOptions: ['Pumpkin Spice', 'Extra Pumpkin Spice'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'Available seasonally (August-November)',
      'Pumpkin spice sauce contains cinnamon, nutmeg, and clove',
      'Whipped cream adds richness and balances the spices',
      'Can be made iced for a refreshing summer version'
    ],
    difficulty: 'beginner',
    estimatedTime: 90,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  // FRAPPUCCINOS
  {
    id: 'caramel-frappuccino',
    name: 'Caramel Frappuccino',
    category: 'frappuccino',
    isSeasonal: false,
    description: 'Buttery caramel syrup blended with coffee, milk and ice, topped with whipped cream and caramel drizzle',
    emoji: '🧊',
    imageUrl: '/drinks/caramel-frappuccino.jpg',
    ingredients: [
      { name: 'Frappuccino Roast', amount: 2, unit: 'pumps', type: 'base', isOptional: false },
      { name: 'Caramel Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 2, unit: 'cups', type: 'extra', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false },
      { name: 'Caramel Drizzle', amount: 1, unit: 'drizzle', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-base',
        order: 1,
        instruction: 'Add Frappuccino roast to blender',
        duration: 5,
        visualCue: 'Coffee base should be dark and concentrated'
      },
      {
        id: 'add-syrup',
        order: 2,
        instruction: 'Add caramel syrup (3 pumps for Grande)',
        duration: 5,
        visualCue: 'Syrup should be thick and golden'
      },
      {
        id: 'add-milk',
        order: 3,
        instruction: 'Add milk to first line on cup',
        duration: 5,
        visualCue: 'Milk should reach the first line marker'
      },
      {
        id: 'add-ice',
        order: 4,
        instruction: 'Add ice to top line',
        duration: 5,
        visualCue: 'Ice should fill to the top line'
      },
      {
        id: 'blend',
        order: 5,
        instruction: 'Blend on Frappuccino setting for 30 seconds',
        duration: 30,
        technique: 'Use high-speed blending for smooth texture',
        visualCue: 'Mixture should be smooth and creamy'
      },
      {
        id: 'pour',
        order: 6,
        instruction: 'Pour into cup',
        duration: 10,
        visualCue: 'Should fill cup to rim'
      },
      {
        id: 'whipped-cream',
        order: 7,
        instruction: 'Top with whipped cream',
        duration: 8,
        visualCue: 'Whipped cream should form a dome'
      },
      {
        id: 'caramel-drizzle',
        order: 8,
        instruction: 'Drizzle caramel sauce on top',
        duration: 5,
        visualCue: 'Caramel should form decorative pattern'
      }
    ],
    nutrition: {
      calories: 380,
      fat: 15,
      carbs: 54,
      protein: 5,
      caffeine: 90,
      sugar: 54
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk'],
      syrupOptions: ['Caramel', 'Extra Caramel', 'Sugar-Free Caramel'],
      extraShots: true,
      decaf: true,
      iced: false,
      extraHot: false
    },
    tips: [
      'Frappuccino roast is a concentrated coffee base',
      'Blending creates the signature smooth, icy texture',
      'Whipped cream adds richness and visual appeal',
      'Can be made with different milk alternatives'
    ],
    difficulty: 'beginner',
    estimatedTime: 75,
    temperature: 'blended',
    caffeineLevel: 'medium'
  },

  // REFRESHERS
  {
    id: 'strawberry-acai-refresher',
    name: 'Strawberry Acai Refresher',
    category: 'refresher',
    isSeasonal: false,
    description: 'Refreshing blend of strawberry and acai flavors, hand-shaken with ice',
    emoji: '🍓',
    imageUrl: '/drinks/strawberry-acai-refresher.jpg',
    ingredients: [
      { name: 'Strawberry Acai Base', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Water', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false },
      { name: 'Freeze-dried Strawberries', amount: 1, unit: 'scoop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-ice',
        order: 1,
        instruction: 'Fill shaker with ice',
        duration: 5,
        visualCue: 'Ice should fill shaker 2/3 full'
      },
      {
        id: 'add-base',
        order: 2,
        instruction: 'Add strawberry acai base to shaker',
        duration: 5,
        visualCue: 'Base should be bright pink/red color'
      },
      {
        id: 'add-water',
        order: 3,
        instruction: 'Add water to dilute the base',
        duration: 5,
        visualCue: 'Water should lighten the color slightly'
      },
      {
        id: 'shake',
        order: 4,
        instruction: 'Shake vigorously for 10-15 seconds',
        duration: 15,
        technique: 'Hold shaker with both hands and shake side to side',
        visualCue: 'Mixture should become frothy and well-mixed'
      },
      {
        id: 'strain-pour',
        order: 5,
        instruction: 'Strain into cup',
        duration: 8,
        visualCue: 'Should fill cup to rim'
      },
      {
        id: 'add-strawberries',
        order: 6,
        instruction: 'Top with freeze-dried strawberries',
        duration: 5,
        visualCue: 'Strawberries should float on top'
      }
    ],
    nutrition: {
      calories: 90,
      fat: 0,
      carbs: 22,
      protein: 0,
      caffeine: 45,
      sugar: 20
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Coconut Milk', 'Lemonade'],
      syrupOptions: ['Strawberry Acai', 'Extra Strawberry Acai'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: false
    },
    tips: [
      'Base contains real fruit juice and acai',
      'Shaking creates the signature frothy texture',
      'Freeze-dried strawberries maintain their texture',
      'Can be made with coconut milk for creaminess'
    ],
    difficulty: 'beginner',
    estimatedTime: 45,
    temperature: 'cold',
    caffeineLevel: 'low'
  },

  // COLD BREW
  {
    id: 'vanilla-sweet-cream-cold-brew',
    name: 'Vanilla Sweet Cream Cold Brew',
    category: 'cold-brew',
    isSeasonal: false,
    description: 'Smooth cold brew coffee with vanilla sweet cream',
    emoji: '🧊',
    imageUrl: '/drinks/vanilla-sweet-cream-cold-brew.jpg',
    ingredients: [
      { name: 'Cold Brew Coffee', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Vanilla Sweet Cream', amount: 2, unit: 'oz', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false }
    ],
    steps: [
      {
        id: 'add-ice',
        order: 1,
        instruction: 'Fill cup with ice',
        duration: 5,
        visualCue: 'Ice should fill cup 2/3 full'
      },
      {
        id: 'pour-cold-brew',
        order: 2,
        instruction: 'Pour cold brew to 1/2 inch from top',
        duration: 10,
        visualCue: 'Cold brew should be dark and smooth'
      },
      {
        id: 'add-sweet-cream',
        order: 3,
        instruction: 'Top with vanilla sweet cream',
        duration: 8,
        visualCue: 'Sweet cream should float on top creating layers'
      },
      {
        id: 'stir-gently',
        order: 4,
        instruction: 'Stir gently to combine (optional)',
        duration: 5,
        technique: 'Use a gentle stirring motion',
        visualCue: 'Should create a marbled effect'
      }
    ],
    nutrition: {
      calories: 110,
      fat: 5,
      carbs: 14,
      protein: 2,
      caffeine: 185,
      sugar: 14
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Vanilla Sweet Cream', 'Regular Sweet Cream', 'Oatmilk'],
      syrupOptions: ['Vanilla', 'Extra Vanilla'],
      extraShots: false,
      decaf: true,
      iced: true,
      extraHot: false
    },
    tips: [
      'Cold brew is steeped for 20 hours for smooth flavor',
      'Vanilla sweet cream is made with heavy cream and vanilla syrup',
      'Layering creates a beautiful visual effect',
      'Can be stirred for a more uniform taste'
    ],
    difficulty: 'beginner',
    estimatedTime: 30,
    temperature: 'cold',
    caffeineLevel: 'high'
  },

  // TEA DRINKS
  {
    id: 'chai-tea-latte',
    name: 'Chai Tea Latte',
    category: 'tea',
    isSeasonal: false,
    description: 'Black tea infused with cinnamon, clove and other warming spices, combined with steamed milk',
    emoji: '🫖',
    imageUrl: '/drinks/chai-tea-latte.jpg',
    ingredients: [
      { name: 'Chai Tea Concentrate', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Cinnamon Powder', amount: 1, unit: 'sprinkle', type: 'topping', isOptional: true }
    ],
    steps: [
      {
        id: 'add-concentrate',
        order: 1,
        instruction: 'Add chai tea concentrate to cup',
        duration: 5,
        visualCue: 'Concentrate should be dark and aromatic'
      },
      {
        id: 'steam-milk',
        order: 2,
        instruction: 'Steam milk to 150°F with microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Create microfoam for latte art',
        visualCue: 'Milk should have glossy texture'
      },
      {
        id: 'combine',
        order: 3,
        instruction: 'Pour steamed milk into chai concentrate',
        duration: 15,
        visualCue: 'Should create a smooth, creamy mixture'
      },
      {
        id: 'cinnamon-topping',
        order: 4,
        instruction: 'Sprinkle cinnamon powder on top (optional)',
        duration: 5,
        visualCue: 'Light dusting of cinnamon'
      }
    ],
    nutrition: {
      calories: 240,
      fat: 7,
      carbs: 35,
      protein: 10,
      caffeine: 95,
      sugar: 35
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk'],
      syrupOptions: ['Chai Concentrate', 'Extra Chai'],
      extraShots: false,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'Chai concentrate contains black tea and warming spices',
      'Steaming milk brings out the natural sweetness',
      'Can be made iced for a refreshing version',
      'Cinnamon topping enhances the spiced flavor'
    ],
    difficulty: 'beginner',
    estimatedTime: 60,
    temperature: 'hot',
    caffeineLevel: 'medium'
  }
]

// Helper functions
export function getDrinksByCategory(category: string): StarbucksDrink[] {
  return STARBUCKS_DRINKS.filter(drink => drink.category === category)
}

export function getSeasonalDrinks(): StarbucksDrink[] {
  return STARBUCKS_DRINKS.filter(drink => drink.isSeasonal)
}

export function getDrinkById(id: string): StarbucksDrink | undefined {
  return STARBUCKS_DRINKS.find(drink => drink.id === id)
}

export function searchDrinks(query: string): StarbucksDrink[] {
  const lowercaseQuery = query.toLowerCase()
  return STARBUCKS_DRINKS.filter(drink => 
    drink.name.toLowerCase().includes(lowercaseQuery) ||
    drink.description.toLowerCase().includes(lowercaseQuery) ||
    drink.ingredients.some(ingredient => 
      ingredient.name.toLowerCase().includes(lowercaseQuery)
    )
  )
}

export function getDrinksByDifficulty(difficulty: string): StarbucksDrink[] {
  return STARBUCKS_DRINKS.filter(drink => drink.difficulty === difficulty)
}

export function getDrinksByTemperature(temperature: string): StarbucksDrink[] {
  return STARBUCKS_DRINKS.filter(drink => drink.temperature === temperature)
}

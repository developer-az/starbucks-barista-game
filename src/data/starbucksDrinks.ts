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
        id: 'prepare-cup',
        order: 1,
        instruction: 'Select appropriate cup size and verify cleanliness',
        duration: 3,
        technique: 'Check for any spots or residue, ensure cup is room temperature',
        visualCue: 'Cup should be spotless and properly sized for order',
        commonMistakes: ['Using wrong cup size', 'Not checking cup cleanliness']
      },
      {
        id: 'vanilla-syrup',
        order: 2,
        instruction: 'Add vanilla syrup using standard pump count: Tall (3), Grande (4), Venti (5)',
        duration: 5,
        technique: 'Hold bottle perpendicular, pump with consistent pressure, one pump per second',
        visualCue: 'Syrup should coat bottom evenly, approximately 1/8 inch deep',
        commonMistakes: ['Incorrect pump count', 'Uneven syrup distribution', 'Cross-contamination of pump']
      },
      {
        id: 'steam-milk',
        order: 3,
        instruction: 'Steam 2% milk to 150-160°F creating microfoam with 1/4 inch depth',
        duration: 35,
        temperature: 155,
        technique: 'Purge steam wand, submerge tip 1/2 inch, aerate for 3-5 seconds, then plunge deeper for heating',
        visualCue: 'Milk should have glossy, wet paint-like texture with no visible bubbles',
        commonMistakes: ['Over-aerating milk', 'Scalding milk above 165°F', 'Not purging steam wand', 'Large bubbles instead of microfoam']
      },
      {
        id: 'pour-milk',
        order: 4,
        instruction: 'Pour steamed milk in steady stream, holding back foam with spoon until cup is nearly full',
        duration: 12,
        technique: 'Pour from 2-3 inches above cup, maintain steady flow rate, reserve foam for final layer',
        visualCue: 'Milk should fill to 1/2 inch from rim, creating uniform color with syrup',
        commonMistakes: ['Pouring too fast', 'Not holding back foam', 'Filling cup too full']
      },
      {
        id: 'pull-espresso',
        order: 5,
        instruction: 'Extract 2 shots of espresso using 18-19g dose, 25-30 second extraction time',
        duration: 28,
        temperature: 180,
        technique: 'Ensure proper grind size, level and tamp at 30lbs pressure, start extraction immediately',
        visualCue: 'Espresso should flow like warm honey with golden crema, filling shot glass in 25-30 seconds',
        commonMistakes: ['Incorrect grind size', 'Poor tamping', 'Letting espresso sit too long', 'Under or over-extraction']
      },
      {
        id: 'mark-espresso',
        order: 6,
        instruction: 'Create the signature "mark" by pouring espresso through center of steamed milk from 6 inches above',
        duration: 10,
        technique: 'Pour in thin, steady stream through exact center, maintain consistent height',
        visualCue: 'Espresso should create distinct brown circle/dot in center of white milk foam',
        commonMistakes: ['Pouring off-center', 'Pouring too fast', 'Wrong pouring height']
      },
      {
        id: 'add-foam',
        order: 7,
        instruction: 'Top with reserved microfoam using spoon, creating 1/4 inch layer',
        duration: 8,
        technique: 'Gently spoon foam on top to maintain the marked appearance underneath',
        visualCue: 'Foam should sit uniformly on surface without disturbing the espresso mark'
      },
      {
        id: 'caramel-drizzle',
        order: 8,
        instruction: 'Apply caramel sauce in decorative crosshatch pattern using squeeze bottle',
        duration: 8,
        technique: 'Hold bottle 4 inches above, create parallel lines then perpendicular lines',
        visualCue: 'Caramel should form even grid pattern covering entire foam surface',
        commonMistakes: ['Uneven lines', 'Too much or too little sauce', 'Sauce too hot or cold']
      },
      {
        id: 'final-check',
        order: 9,
        instruction: 'Quality check: verify temperature (140-150°F), appearance, and wipe cup exterior',
        duration: 5,
        technique: 'Check for spills, proper lid if requested, ensure presentation standards',
        visualCue: 'Clean cup exterior, proper fill level, attractive caramel pattern'
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
      'The word "macchiato" means "marked" in Italian - this refers to the espresso "marking" the milk',
      'Always pour espresso last to maintain the signature layered visual effect',
      'Use a spoon to hold back foam when pouring milk - this creates the proper base for the mark',
      'Caramel drizzle should be applied in a crosshatch pattern for professional presentation',
      'Vanilla syrup count: Tall (3), Grande (4), Venti (5) - never deviate from standard',
      'Milk temperature should never exceed 165°F or it will scald and lose sweetness',
      'The espresso mark should be visible and centered - this is the drink\'s signature feature',
      'Quality microfoam is essential - large bubbles indicate poor steaming technique'
    ],
    difficulty: 'intermediate',
    estimatedTime: 120,
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
        id: 'prepare-shaker',
        order: 1,
        instruction: 'Select proper shaker size and ensure it\'s clean and dry',
        duration: 3,
        technique: 'Check shaker for any residue from previous drinks',
        visualCue: 'Clean, dry shaker ready for ingredients'
      },
      {
        id: 'add-brown-sugar-syrup',
        order: 2,
        instruction: 'Add brown sugar syrup using half-dose pumps: Tall (3), Grande (4), Venti (6)',
        duration: 5,
        technique: 'Brown sugar syrup uses half-pumps - each pump delivers half the amount of regular syrup',
        visualCue: 'Thick, amber-colored syrup coating shaker bottom',
        commonMistakes: ['Using full-dose pump', 'Incorrect count for size', 'Syrup too cold to flow properly']
      },
      {
        id: 'add-cinnamon',
        order: 3,
        instruction: 'Add cinnamon powder with 2-3 gentle shakes over syrup',
        duration: 3,
        technique: 'Light dusting - too much cinnamon will overpower and clump',
        visualCue: 'Light brown dust scattered over brown sugar syrup',
        commonMistakes: ['Too much cinnamon', 'Forgetting cinnamon entirely', 'Using old/stale cinnamon']
      },
      {
        id: 'pull-blonde-espresso',
        order: 4,
        instruction: 'Extract blonde espresso shots: Tall (2), Grande (3), Venti (4) shots',
        duration: 25,
        temperature: 180,
        technique: 'Blonde espresso extracts faster - monitor for lighter golden crema',
        visualCue: 'Lighter colored espresso with golden, slightly thinner crema than signature',
        commonMistakes: ['Over-extracting blonde espresso', 'Using signature espresso instead']
      },
      {
        id: 'combine-hot-ingredients',
        order: 5,
        instruction: 'Pour hot espresso directly into shaker to dissolve syrup and cinnamon',
        duration: 5,
        technique: 'Pour espresso while still hot to ensure proper syrup dissolution',
        visualCue: 'Hot espresso should immediately begin mixing with syrup and cinnamon',
        commonMistakes: ['Letting espresso cool before adding', 'Not ensuring proper mixing']
      },
      {
        id: 'add-ice-fill',
        order: 6,
        instruction: 'Fill shaker completely with ice to the top',
        duration: 5,
        technique: 'Pack ice firmly but not so tight that shaking becomes difficult',
        visualCue: 'Shaker should be full of ice with liquid ingredients at bottom',
        commonMistakes: ['Not enough ice', 'Ice too crushed or too large']
      },
      {
        id: 'shake-vigorously',
        order: 7,
        instruction: 'Secure lid and shake vigorously for 10-20 shakes with strong back-and-forth motion',
        duration: 15,
        technique: 'Hold both ends firmly, use full arm motion, listen for proper agitation sound',
        visualCue: 'Should hear ice and liquid moving vigorously inside shaker',
        commonMistakes: ['Not shaking long enough', 'Weak shaking motion', 'Loose lid']
      },
      {
        id: 'strain-and-top',
        order: 8,
        instruction: 'Strain entire contents into cup and top with splash of oatmilk',
        duration: 10,
        technique: 'Pour all shaker contents including foam, add oatmilk for layered effect',
        visualCue: 'Frothy, caramel-colored drink with creamy oatmilk layer on top',
        commonMistakes: ['Not emptying entire shaker', 'Too much or too little oatmilk', 'Mixing instead of layering']
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
      'Blonde espresso provides a smoother, less bitter flavor profile than signature espresso',
      'Brown sugar syrup uses half-dose pumps - each pump is half the volume of regular syrup',
      'Shaking creates the signature foam texture and helps dissolve the brown sugar syrup',
      'Oatmilk adds natural sweetness and creaminess that complements the brown sugar',
      'Cinnamon enhances the warm, spiced flavor profile - use sparingly to avoid overpowering',
      'The drink should have natural foam from shaking - no whipped cream needed',
      'Shot count increases with size: Tall (2), Grande (3), Venti (4) shots',
      'Popular modification: extra cinnamon powder or brown sugar syrup for enhanced flavor'
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
  },

  // NEW PROFESSIONAL DRINKS
  
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'espresso',
    isSeasonal: false,
    description: 'Two ristretto shots combined with whole milk steamed to microfoam consistency',
    emoji: '☕',
    imageUrl: '/drinks/flat-white.jpg',
    ingredients: [
      { name: 'Espresso Roast (Ristretto)', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Whole Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false, alternatives: ['2% Milk', 'Oatmilk'] }
    ],
    steps: [
      {
        id: 'prepare-ristretto',
        order: 1,
        instruction: 'Pull 2 ristretto shots using finer grind and shorter extraction (15-20 seconds)',
        duration: 20,
        temperature: 185,
        technique: 'Adjust grind finer than regular espresso, stop extraction early for concentrated flavor',
        visualCue: 'Ristretto should be more concentrated, darker, with thicker crema',
        commonMistakes: ['Using regular espresso timing', 'Incorrect grind adjustment', 'Over-extraction']
      },
      {
        id: 'steam-whole-milk',
        order: 2,
        instruction: 'Steam whole milk to 140°F with minimal aeration to create wet microfoam',
        duration: 30,
        temperature: 140,
        technique: 'Aerate for only 1-2 seconds, focus on heating while maintaining velvety texture',
        visualCue: 'Milk should be glossy and velvety, not fluffy - minimal visible foam',
        commonMistakes: ['Over-aerating milk', 'Overheating milk', 'Creating dry foam instead of microfoam']
      },
      {
        id: 'pour-technique',
        order: 3,
        instruction: 'Pour milk from close to surface with steady flow to integrate with espresso',
        duration: 15,
        technique: 'Start pouring from center, maintain close proximity to coffee surface',
        visualCue: 'Should create uniform brown color throughout, no distinct layers',
        commonMistakes: ['Pouring from too high', 'Pouring too fast', 'Creating visible layers']
      },
      {
        id: 'latte-art',
        order: 4,
        instruction: 'Finish with simple latte art pattern if skilled, or smooth white surface',
        duration: 8,
        technique: 'Use wrist motion to create rosetta or heart pattern',
        visualCue: 'Clean, professional appearance with minimal white foam on top'
      }
    ],
    nutrition: {
      calories: 170,
      fat: 7,
      carbs: 11,
      protein: 9,
      caffeine: 195,
      sugar: 11
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande'],
      milkOptions: ['Whole Milk', '2% Milk', 'Oatmilk', 'Soy Milk'],
      syrupOptions: [],
      extraShots: true,
      decaf: true,
      iced: false,
      extraHot: false
    },
    tips: [
      'Flat White originated in Australia/New Zealand - it\'s about the coffee, not the foam',
      'Ristretto shots provide more concentrated, sweeter espresso flavor',
      'Whole milk creates the signature creamy texture - avoid low-fat alternatives when possible',
      'The goal is integration, not layering - milk should combine with espresso',
      'Traditional Flat White only comes in smaller sizes to maintain proper coffee-to-milk ratio',
      'Perfect drink temperature should be 140-145°F for optimal taste'
    ],
    difficulty: 'advanced',
    estimatedTime: 75,
    temperature: 'hot',
    caffeineLevel: 'high'
  },

  {
    id: 'americano',
    name: 'Caffè Americano',
    category: 'espresso',
    isSeasonal: false,
    description: 'Espresso shots topped with hot water to create a rich, full-bodied coffee',
    emoji: '☕',
    imageUrl: '/drinks/americano.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Hot Water', amount: 1, unit: 'cup', type: 'base', isOptional: false }
    ],
    steps: [
      {
        id: 'heat-water',
        order: 1,
        instruction: 'Ensure hot water reservoir is at proper temperature (195-205°F)',
        duration: 5,
        temperature: 200,
        technique: 'Check water temperature with thermometer if needed',
        visualCue: 'Water should be steaming but not boiling vigorously'
      },
      {
        id: 'pull-espresso-shots',
        order: 2,
        instruction: 'Extract espresso shots directly into serving cup: Tall (2), Grande (3), Venti (4)',
        duration: 25,
        temperature: 185,
        technique: 'Use fresh, properly dosed and tamped espresso, extract to cup',
        visualCue: 'Golden crema should form on top of espresso shots',
        commonMistakes: ['Letting espresso sit before adding water', 'Incorrect shot count for size']
      },
      {
        id: 'add-hot-water',
        order: 3,
        instruction: 'Add hot water to fill cup, leaving 1/4 inch headspace',
        duration: 10,
        temperature: 200,
        technique: 'Pour water gently to preserve crema, fill to appropriate level for size',
        visualCue: 'Should maintain some crema on surface, rich brown color',
        commonMistakes: ['Water too hot destroying crema', 'Overfilling cup', 'Pouring too aggressively']
      },
      {
        id: 'stir-optional',
        order: 4,
        instruction: 'Offer to stir or leave unstirred per customer preference',
        duration: 5,
        technique: 'Gentle stirring motion if requested',
        visualCue: 'If stirred, should be uniform brown color throughout'
      }
    ],
    nutrition: {
      calories: 15,
      fat: 0,
      carbs: 3,
      protein: 1,
      caffeine: 225,
      sugar: 0
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['None (default)', 'Room for cream'],
      syrupOptions: ['None (default)', 'Vanilla', 'Hazelnut', 'Caramel'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: false
    },
    tips: [
      'Named "Americano" because American soldiers in WWII diluted espresso with hot water',
      'Always extract espresso directly into serving cup to preserve crema',
      'Water temperature is crucial - too hot destroys crema and creates bitter taste',
      'Extra shot counts: Tall (2), Grande (3), Venti Hot (4), Venti Iced (5)',
      'Perfect for customers who want strong coffee without milk',
      'Can be customized with syrups but traditionally served black'
    ],
    difficulty: 'beginner',
    estimatedTime: 45,
    temperature: 'hot',
    caffeineLevel: 'high'
  },

  {
    id: 'white-chocolate-mocha',
    name: 'White Chocolate Mocha',
    category: 'espresso',
    isSeasonal: false,
    description: 'Espresso combined with white chocolate sauce and steamed milk, topped with whipped cream',
    emoji: '☕',
    imageUrl: '/drinks/white-chocolate-mocha.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'White Chocolate Sauce', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-white-chocolate',
        order: 1,
        instruction: 'Add white chocolate sauce: Tall (3), Grande (4), Venti (5) pumps',
        duration: 5,
        technique: 'Pump sauce directly into bottom of cup, ensuring even distribution',
        visualCue: 'Thick, creamy white sauce coating cup bottom',
        commonMistakes: ['Incorrect pump count', 'Sauce too cold and thick']
      },
      {
        id: 'pull-espresso',
        order: 2,
        instruction: 'Extract espresso shots directly onto white chocolate sauce',
        duration: 25,
        temperature: 185,
        technique: 'Pour espresso directly onto sauce to help it dissolve',
        visualCue: 'Espresso should begin mixing with white chocolate, creating tan color',
        commonMistakes: ['Not extracting directly onto sauce', 'Letting espresso sit too long']
      },
      {
        id: 'steam-milk',
        order: 3,
        instruction: 'Steam milk to 150°F with light microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Create light, airy microfoam suitable for sweet drinks',
        visualCue: 'Milk should be creamy with small amount of foam',
        commonMistakes: ['Overheating milk', 'Not enough foam for whipped cream base']
      },
      {
        id: 'combine-mixture',
        order: 4,
        instruction: 'Pour steamed milk while stirring to fully dissolve white chocolate',
        duration: 10,
        technique: 'Pour steadily while gently stirring with spoon to ensure mixture',
        visualCue: 'Should be uniform light brown color throughout'
      },
      {
        id: 'add-whipped-cream',
        order: 5,
        instruction: 'Top with whipped cream dome, approximately 1/2 inch high',
        duration: 8,
        technique: 'Apply whipped cream in circular motion to create even dome',
        visualCue: 'Whipped cream should form attractive dome above rim',
        commonMistakes: ['Too much or too little whipped cream', 'Uneven application']
      }
    ],
    nutrition: {
      calories: 470,
      fat: 18,
      carbs: 61,
      protein: 15,
      caffeine: 150,
      sugar: 59
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk'],
      syrupOptions: ['White Chocolate', 'Extra White Chocolate', 'Sugar-Free White Chocolate'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'White chocolate sauce is thicker than regular syrups - ensure it\'s at proper temperature',
      'Always dissolve sauce completely to avoid clumping at bottom of cup',
      'Popular holiday modification: add peppermint syrup for Peppermint White Mocha',
      'Can be made skinny with nonfat milk and sugar-free white chocolate sauce',
      'Whipped cream is essential - drink loses appeal and taste balance without it',
      'Iced version requires extra stirring to fully dissolve sauce in cold milk'
    ],
    difficulty: 'intermediate',
    estimatedTime: 90,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  {
    id: 'pink-drink',
    name: 'Pink Drink',
    category: 'refresher',
    isSeasonal: false,
    description: 'Strawberry Açaí Refresher shaken with coconut milk for a creamy, fruity beverage',
    emoji: '🌸',
    imageUrl: '/drinks/pink-drink.jpg',
    ingredients: [
      { name: 'Strawberry Açaí Base', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Coconut Milk', amount: 0.5, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false },
      { name: 'Freeze-dried Strawberries', amount: 1, unit: 'scoop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'prepare-shaker',
        order: 1,
        instruction: 'Fill shaker with ice to appropriate line for cup size',
        duration: 5,
        technique: 'Use proper ice scoop, fill to size-specific line markings',
        visualCue: 'Ice should reach designated fill line for ordered size',
        commonMistakes: ['Using wrong amount of ice', 'Not using ice scoop']
      },
      {
        id: 'add-refresher-base',
        order: 2,
        instruction: 'Add Strawberry Açaí base to proper line: Tall (to base), Grande (to base), Venti (to base)',
        duration: 5,
        technique: 'Pour base to designated line on shaker cup',
        visualCue: 'Bright pink/red liquid should reach specified measurement line',
        commonMistakes: ['Incorrect measurement', 'Not shaking base concentrate before use']
      },
      {
        id: 'add-coconut-milk',
        order: 3,
        instruction: 'Add coconut milk to water line, replacing traditional water',
        duration: 5,
        technique: 'Shake coconut milk container first, pour to water line',
        visualCue: 'Should create pink and white marbled appearance before shaking',
        commonMistakes: ['Not shaking coconut milk first', 'Using wrong coconut milk line measurement']
      },
      {
        id: 'shake-vigorously',
        order: 4,
        instruction: 'Secure lid and shake vigorously for 10-15 shakes',
        duration: 15,
        technique: 'Hold both top and bottom, shake with strong back-and-forth motion',
        visualCue: 'Should become frothy and well-blended, uniform pink color',
        commonMistakes: ['Not shaking long enough', 'Loose lid', 'Insufficient vigor']
      },
      {
        id: 'pour-and-garnish',
        order: 5,
        instruction: 'Pour into cup and top with freeze-dried strawberries',
        duration: 8,
        technique: 'Pour entire contents, ensuring even distribution of ingredients',
        visualCue: 'Beautiful pink drink with freeze-dried strawberries floating on top',
        commonMistakes: ['Not emptying entire shaker', 'Forgetting strawberry garnish']
      }
    ],
    nutrition: {
      calories: 140,
      fat: 2.5,
      carbs: 27,
      protein: 1,
      caffeine: 45,
      sugar: 24
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Coconut Milk (standard)', 'Oatmilk', 'Almond Milk'],
      syrupOptions: ['None (standard)', 'Vanilla', 'Raspberry'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: false
    },
    tips: [
      'The Pink Drink became an Instagram phenomenon - presentation is crucial',
      'Always shake coconut milk before use as it separates naturally',
      'Freeze-dried strawberries rehydrate slightly, adding texture and flavor',
      'Popular customization: add vanilla sweet cream foam on top',
      'Perfect drink for non-coffee drinkers or those wanting lower caffeine',
      'Açaí provides antioxidants and natural fruit flavors',
      'Color should be uniform pink after shaking - if not, shake more'
    ],
    difficulty: 'beginner',
    estimatedTime: 40,
    temperature: 'cold',
    caffeineLevel: 'low'
  },

  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cold Brew',
    category: 'cold-brew',
    isSeasonal: false,
    description: 'Cold brew coffee infused with nitrogen for a smooth, creamy texture and cascading effect',
    emoji: '🌊',
    imageUrl: '/drinks/nitro-cold-brew.jpg',
    ingredients: [
      { name: 'Cold Brew Coffee', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Nitrogen Gas', amount: 1, unit: 'infusion', type: 'extra', isOptional: false }
    ],
    steps: [
      {
        id: 'prepare-cup',
        order: 1,
        instruction: 'Use clear cup to showcase cascading effect, no ice required',
        duration: 3,
        technique: 'Select appropriate size, ensure cup is clean and clear',
        visualCue: 'Clean, clear cup without any residue or spots'
      },
      {
        id: 'check-nitro-system',
        order: 2,
        instruction: 'Ensure nitro tap is properly pressurized and flowing smoothly',
        duration: 5,
        technique: 'Test tap flow, check for proper nitrogen pressure',
        visualCue: 'Tap should dispense smoothly with visible nitrogen cascade'
      },
      {
        id: 'pour-nitro',
        order: 3,
        instruction: 'Pull nitro tap fully and pour in one continuous motion to desired level',
        duration: 15,
        technique: 'Hold cup at 45-degree angle, straighten as cup fills, pull tap fully',
        visualCue: 'Should see dramatic cascading effect as nitrogen settles',
        commonMistakes: ['Not pulling tap fully', 'Stopping pour mid-stream', 'Wrong cup angle']
      },
      {
        id: 'observe-cascade',
        order: 4,
        instruction: 'Allow nitrogen cascade to settle, creating signature layered appearance',
        duration: 20,
        technique: 'Do not disturb cup while cascade settles',
        visualCue: 'Cascading bubbles should settle from top to bottom, creating creamy head'
      },
      {
        id: 'serve-immediately',
        order: 5,
        instruction: 'Serve immediately while cascade effect is visible',
        duration: 5,
        technique: 'Hand to customer while nitrogen head is still visible',
        visualCue: 'Creamy head on top with smooth, dark coffee below'
      }
    ],
    nutrition: {
      calories: 5,
      fat: 0,
      carbs: 0,
      protein: 1,
      caffeine: 280,
      sugar: 0
    },
    customization: {
      sizes: ['Tall', 'Grande'],
      milkOptions: ['None (standard)', 'Add cream on side'],
      syrupOptions: ['None (standard)', 'Vanilla (changes texture)'],
      extraShots: false,
      decaf: false,
      iced: false,
      extraHot: false
    },
    tips: [
      'Nitro is naturally sweet due to nitrogen infusion - no sugar needed',
      'Never add ice - it dilutes the coffee and disrupts nitrogen texture',
      'Cascade effect is temporary - serve immediately for best visual impact',
      'Nitrogen creates creamy mouthfeel similar to stout beer',
      'Only available in Tall and Grande sizes due to caffeine content',
      'Adding syrups will disrupt the nitrogen texture - educate customers',
      'Cold brew base is steeped for 20+ hours for smooth, less acidic flavor'
    ],
    difficulty: 'intermediate',
    estimatedTime: 50,
    temperature: 'cold',
    caffeineLevel: 'high'
  },

  {
    id: 'java-chip-frappuccino',
    name: 'Java Chip Frappuccino',
    category: 'frappuccino',
    isSeasonal: false,
    description: 'Coffee and chocolate blended with chocolate chips, milk, and ice, topped with whipped cream',
    emoji: '🍫',
    imageUrl: '/drinks/java-chip-frappuccino.jpg',
    ingredients: [
      { name: 'Frappuccino Roast', amount: 2, unit: 'pumps', type: 'base', isOptional: false },
      { name: 'Mocha Sauce', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: 'Java Chips', amount: 1, unit: 'scoop', type: 'extra', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 2, unit: 'cups', type: 'extra', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-coffee-base',
        order: 1,
        instruction: 'Add Frappuccino roast to blender: Tall (2), Grande (3), Venti (4) pumps',
        duration: 5,
        technique: 'Ensure pumps are properly primed and coffee base is fresh',
        visualCue: 'Dark coffee concentrate in bottom of blender'
      },
      {
        id: 'add-mocha-sauce',
        order: 2,
        instruction: 'Add mocha sauce: Tall (2), Grande (3), Venti (4) pumps',
        duration: 5,
        technique: 'Mocha sauce should be at proper temperature for easy blending',
        visualCue: 'Rich chocolate sauce mixing with coffee base'
      },
      {
        id: 'add-java-chips',
        order: 3,
        instruction: 'Add one scoop of java chips to blender',
        duration: 5,
        technique: 'Use designated java chip scoop, ensure chips are not stale',
        visualCue: 'Chocolate chip pieces scattered in blender mixture',
        commonMistakes: ['Wrong scoop size', 'Stale or hard chips', 'Forgetting chips entirely']
      },
      {
        id: 'add-milk',
        order: 4,
        instruction: 'Add cold milk to first line on cup measurement',
        duration: 5,
        technique: 'Fill to appropriate milk line for ordered size',
        visualCue: 'Milk should reach designated line marker'
      },
      {
        id: 'add-ice',
        order: 5,
        instruction: 'Fill to top ice line with proper ice scoop',
        duration: 5,
        technique: 'Use ice scoop, pack ice to appropriate level',
        visualCue: 'Ice should reach top measurement line'
      },
      {
        id: 'blend-properly',
        order: 6,
        instruction: 'Blend on Frappuccino setting until smooth, approximately 45 seconds',
        duration: 45,
        technique: 'Start on low, increase to high speed, ensure all chips are broken down',
        visualCue: 'Mixture should be smooth with small chocolate chip pieces throughout',
        commonMistakes: ['Under-blending leaving large chunks', 'Over-blending making it too thin']
      },
      {
        id: 'pour-and-top',
        order: 7,
        instruction: 'Pour into cup and top with whipped cream dome',
        duration: 10,
        technique: 'Pour entire blender contents, top with generous whipped cream',
        visualCue: 'Creamy chocolate drink with chocolate pieces, topped with white whipped cream'
      }
    ],
    nutrition: {
      calories: 470,
      fat: 18,
      carbs: 69,
      protein: 6,
      caffeine: 105,
      sugar: 66
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk'],
      syrupOptions: ['Mocha', 'Extra Mocha', 'White Mocha'],
      extraShots: true,
      decaf: true,
      iced: false,
      extraHot: false
    },
    tips: [
      'Java chips are specifically designed chocolate pieces that blend well',
      'Proper blending is crucial - under-blending leaves large chunks',
      'Popular modification: extra java chips for more chocolate texture',
      'Can add espresso shots for extra caffeine and coffee flavor',
      'Mocha sauce provides both chocolate flavor and color',
      'Whipped cream is essential for balancing the rich chocolate flavor'
    ],
    difficulty: 'intermediate',
    estimatedTime: 80,
    temperature: 'blended',
    caffeineLevel: 'medium'
  },

  {
    id: 'london-fog-tea-latte',
    name: 'London Fog Tea Latte',
    category: 'tea',
    isSeasonal: false,
    description: 'Earl Grey tea with vanilla syrup and steamed milk, creating a sophisticated and aromatic beverage',
    emoji: '🫖',
    imageUrl: '/drinks/london-fog.jpg',
    ingredients: [
      { name: 'Earl Grey Tea Bag', amount: 1, unit: 'bag', type: 'base', isOptional: false },
      { name: 'Hot Water', amount: 0.5, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Vanilla Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 0.75, unit: 'cup', type: 'milk', isOptional: false }
    ],
    steps: [
      {
        id: 'prepare-tea',
        order: 1,
        instruction: 'Place Earl Grey tea bag in cup and add hot water (195-205°F) to half-fill',
        duration: 5,
        temperature: 200,
        technique: 'Ensure water is at proper brewing temperature',
        visualCue: 'Tea bag should be fully submerged in hot water'
      },
      {
        id: 'steep-tea',
        order: 2,
        instruction: 'Steep tea for 3-5 minutes for optimal flavor extraction',
        duration: 240,
        technique: 'Allow proper steeping time, do not over-steep to avoid bitterness',
        visualCue: 'Water should turn golden amber color with bergamot aroma',
        commonMistakes: ['Under-steeping (weak flavor)', 'Over-steeping (bitter taste)', 'Wrong water temperature']
      },
      {
        id: 'add-vanilla-syrup',
        order: 3,
        instruction: 'Remove tea bag and add vanilla syrup: Tall (3), Grande (4), Venti (5) pumps',
        duration: 8,
        technique: 'Remove tea bag completely, squeeze gently, add syrup and stir',
        visualCue: 'Tea should be fragrant with vanilla aroma mixing with bergamot',
        commonMistakes: ['Leaving tea bag in too long', 'Incorrect syrup count']
      },
      {
        id: 'steam-milk',
        order: 4,
        instruction: 'Steam milk to 150°F with light microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Create smooth, velvety microfoam appropriate for tea lattes',
        visualCue: 'Milk should be creamy with small amount of foam',
        commonMistakes: ['Overheating milk', 'Too much foam for tea base']
      },
      {
        id: 'combine-and-serve',
        order: 5,
        instruction: 'Pour steamed milk into tea mixture, creating smooth integration',
        duration: 15,
        technique: 'Pour steadily to fill cup, leaving small amount of foam on top',
        visualCue: 'Beautiful tan color with subtle foam layer and bergamot aroma'
      }
    ],
    nutrition: {
      calories: 180,
      fat: 4.5,
      carbs: 30,
      protein: 6,
      caffeine: 40,
      sugar: 29
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Oatmilk', 'Soy Milk', 'Almond Milk'],
      syrupOptions: ['Vanilla', 'Sugar-Free Vanilla', 'Lavender (if available)'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: true
    },
    tips: [
      'Earl Grey contains bergamot oil which gives the signature citrus aroma',
      'Proper steeping time is crucial - 3-5 minutes for optimal flavor',
      'London Fog originated in Vancouver, Canada as a tea-based latte alternative',
      'Popular modification: add a half pump of lavender syrup for floral notes',
      'Can be made iced by steeping strong tea concentrate and adding cold milk',
      'Vanilla syrup complements the bergamot without overpowering the tea',
      'Quality Earl Grey tea makes a significant difference in final taste'
    ],
    difficulty: 'intermediate',
    estimatedTime: 320,
    temperature: 'hot',
    caffeineLevel: 'low'
  },

  {
    id: 'iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    category: 'espresso',
    isSeasonal: false,
    description: 'Iced version of the classic macchiato with vanilla syrup, cold milk, espresso, and caramel drizzle',
    emoji: '🧊',
    imageUrl: '/drinks/iced-caramel-macchiato.jpg',
    ingredients: [
      { name: 'Vanilla Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false },
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Caramel Drizzle', amount: 1, unit: 'drizzle', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-vanilla-syrup',
        order: 1,
        instruction: 'Add vanilla syrup to cup: Tall (3), Grande (4), Venti (6) pumps',
        duration: 5,
        technique: 'Pump syrup directly into bottom of cup',
        visualCue: 'Clear vanilla syrup coating bottom of cup',
        commonMistakes: ['Wrong pump count for size', 'Using hot drink ratios']
      },
      {
        id: 'add-cold-milk',
        order: 2,
        instruction: 'Pour cold milk to fill cup 3/4 full',
        duration: 8,
        technique: 'Pour steadily, leaving room for ice and espresso',
        visualCue: 'Milk should mix with vanilla syrup creating sweet base'
      },
      {
        id: 'fill-with-ice',
        order: 3,
        instruction: 'Fill remaining space with ice, leaving room for espresso',
        duration: 5,
        technique: 'Use ice scoop, pack ice but leave 1 inch at top',
        visualCue: 'Ice should float on milk, leaving space at rim'
      },
      {
        id: 'pull-espresso-shots',
        order: 4,
        instruction: 'Extract espresso shots: Tall (1), Grande (2), Venti (3) shots',
        duration: 25,
        temperature: 185,
        technique: 'Pull shots fresh, use immediately for best crema',
        visualCue: 'Hot espresso with golden crema ready to pour',
        commonMistakes: ['Letting espresso sit too long', 'Wrong shot count']
      },
      {
        id: 'pour-espresso-mark',
        order: 5,
        instruction: 'Slowly pour espresso through center of drink to create layered mark',
        duration: 10,
        technique: 'Pour from 6 inches above, through center in thin stream',
        visualCue: 'Espresso should create distinct mark floating on milk',
        commonMistakes: ['Pouring too fast', 'Not aiming for center', 'Disturbing layers']
      },
      {
        id: 'caramel-drizzle-pattern',
        order: 6,
        instruction: 'Create crosshatch caramel drizzle pattern on top',
        duration: 8,
        technique: 'Hold bottle 4 inches above, create grid pattern',
        visualCue: 'Even caramel grid pattern covering drink surface',
        commonMistakes: ['Uneven pattern', 'Too much caramel', 'Drizzle too thick or thin']
      }
    ],
    nutrition: {
      calories: 250,
      fat: 7,
      carbs: 37,
      protein: 10,
      caffeine: 150,
      sugar: 35
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk', 'Coconut Milk'],
      syrupOptions: ['Vanilla', 'Sugar-Free Vanilla', 'Extra Vanilla'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: false
    },
    tips: [
      'Iced version uses more vanilla syrup than hot version due to dilution',
      'Shot count differs from hot version: Tall (1), Grande (2), Venti (3)',
      'Pour espresso slowly to maintain the signature layered appearance',
      'Cold milk doesn\'t steam, so the "mark" effect relies on temperature contrast',
      'Popular summer drink - ensure ingredients are properly chilled',
      'Caramel drizzle is essential for both flavor and visual appeal',
      'Do not stir - the layered effect is the drink\'s signature feature'
    ],
    difficulty: 'intermediate',
    estimatedTime: 65,
    temperature: 'cold',
    caffeineLevel: 'medium'
  },

  // MORE ESPRESSO DRINKS
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'espresso',
    isSeasonal: false,
    description: 'Rich espresso with steamed milk and a deep layer of foam',
    emoji: '☕',
    imageUrl: '/drinks/cappuccino.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: '2% Milk', amount: 0.5, unit: 'cup', type: 'milk', isOptional: false }
    ],
    steps: [
      {
        id: 'pull-espresso',
        order: 1,
        instruction: 'Extract 2 shots of espresso into cappuccino cup',
        duration: 25,
        temperature: 185,
        technique: 'Use proper grind size and tamping pressure for optimal extraction',
        visualCue: 'Golden crema should form on top of espresso shots',
        commonMistakes: ['Over or under extraction', 'Wrong cup size']
      },
      {
        id: 'steam-milk-cappuccino',
        order: 2,
        instruction: 'Steam milk to 140°F with thick, velvety microfoam',
        duration: 35,
        temperature: 140,
        technique: 'Create more foam than a latte - aerate for 5-8 seconds for thick foam',
        visualCue: 'Milk should have thick, glossy foam that holds its shape',
        commonMistakes: ['Not enough foam', 'Overheating milk', 'Large bubbles instead of microfoam']
      },
      {
        id: 'pour-cappuccino',
        order: 3,
        instruction: 'Pour steamed milk and foam to create 1/3 espresso, 1/3 milk, 1/3 foam ratio',
        duration: 15,
        technique: 'Pour milk first, then spoon foam on top to achieve proper ratio',
        visualCue: 'Distinct layers with thick foam dome on top',
        commonMistakes: ['Wrong ratio', 'Mixing layers', 'Insufficient foam layer']
      }
    ],
    nutrition: {
      calories: 120,
      fat: 4,
      carbs: 12,
      protein: 8,
      caffeine: 150,
      sugar: 10
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Whole Milk', 'Oatmilk', 'Soy Milk'],
      syrupOptions: ['Vanilla', 'Caramel', 'Hazelnut'],
      extraShots: true,
      decaf: true,
      iced: false,
      extraHot: true
    },
    tips: [
      'Traditional cappuccino is equal parts espresso, steamed milk, and foam',
      'Foam should be thick enough to support a spoon',
      'Serve immediately while foam is at its peak',
      'Italian tradition calls for no flavoring syrups'
    ],
    difficulty: 'intermediate',
    estimatedTime: 80,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  {
    id: 'latte',
    name: 'Caffè Latte',
    category: 'espresso',
    isSeasonal: false,
    description: 'Rich espresso with steamed milk and light layer of foam',
    emoji: '☕',
    imageUrl: '/drinks/latte.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false }
    ],
    steps: [
      {
        id: 'prepare-latte-cup',
        order: 1,
        instruction: 'Use appropriate sized cup for latte',
        duration: 3,
        technique: 'Warm cup if possible for better temperature retention',
        visualCue: 'Clean, appropriately sized cup'
      },
      {
        id: 'extract-latte-espresso',
        order: 2,
        instruction: 'Pull espresso shots directly into cup',
        duration: 25,
        temperature: 185,
        technique: 'Extract shots fresh to maintain crema',
        visualCue: 'Rich golden crema on espresso surface'
      },
      {
        id: 'steam-latte-milk',
        order: 3,
        instruction: 'Steam milk to 150°F creating smooth microfoam',
        duration: 30,
        temperature: 150,
        technique: 'Aerate briefly then focus on heating, create wet microfoam',
        visualCue: 'Glossy, paint-like texture with minimal visible foam'
      },
      {
        id: 'pour-latte-art',
        order: 4,
        instruction: 'Pour milk in steady stream, finish with latte art if skilled',
        duration: 20,
        technique: 'Start from height, finish close to surface for art',
        visualCue: 'Smooth integration with optional heart or rosetta pattern'
      }
    ],
    nutrition: {
      calories: 190,
      fat: 7,
      carbs: 18,
      protein: 12,
      caffeine: 150,
      sugar: 17
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Whole Milk', 'Oatmilk', 'Soy Milk', 'Almond Milk', 'Coconut Milk'],
      syrupOptions: ['Vanilla', 'Caramel', 'Hazelnut', 'Sugar-Free Vanilla'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'Latte has more milk than cappuccino, creating creamier texture',
      'Perfect canvas for latte art due to smooth milk texture',
      'Microfoam should integrate seamlessly with espresso',
      'Most popular espresso drink worldwide'
    ],
    difficulty: 'beginner',
    estimatedTime: 85,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  {
    id: 'mocha',
    name: 'Caffè Mocha',
    category: 'espresso',
    isSeasonal: false,
    description: 'Rich espresso with chocolate syrup, steamed milk, and whipped cream',
    emoji: '🍫',
    imageUrl: '/drinks/mocha.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Chocolate Syrup', amount: 2, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-chocolate-syrup',
        order: 1,
        instruction: 'Add chocolate syrup to bottom of cup',
        duration: 5,
        technique: 'Use appropriate pump count for size',
        visualCue: 'Rich chocolate syrup coating bottom'
      },
      {
        id: 'add-espresso-mocha',
        order: 2,
        instruction: 'Extract espresso shots onto chocolate syrup',
        duration: 25,
        temperature: 185,
        technique: 'Hot espresso helps dissolve chocolate syrup',
        visualCue: 'Espresso begins mixing with chocolate'
      },
      {
        id: 'stir-mixture',
        order: 3,
        instruction: 'Stir espresso and chocolate syrup to combine',
        duration: 5,
        technique: 'Ensure complete dissolution of syrup',
        visualCue: 'Uniform chocolate-coffee color'
      },
      {
        id: 'steam-milk-mocha',
        order: 4,
        instruction: 'Steam milk to 150°F with light foam',
        duration: 30,
        temperature: 150,
        technique: 'Create less foam than cappuccino, more than latte',
        visualCue: 'Creamy milk with light foam layer'
      },
      {
        id: 'combine-mocha',
        order: 5,
        instruction: 'Pour steamed milk into chocolate espresso mixture',
        duration: 10,
        technique: 'Pour steadily to maintain temperature',
        visualCue: 'Rich brown color throughout'
      },
      {
        id: 'top-whipped-cream',
        order: 6,
        instruction: 'Top with whipped cream',
        duration: 8,
        technique: 'Create attractive dome of whipped cream',
        visualCue: 'White whipped cream dome contrasting with brown drink'
      }
    ],
    nutrition: {
      calories: 360,
      fat: 14,
      carbs: 44,
      protein: 13,
      caffeine: 95,
      sugar: 35
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk', 'Oatmilk'],
      syrupOptions: ['Chocolate', 'Dark Chocolate', 'Sugar-Free Chocolate'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'Perfect balance of coffee and chocolate flavors',
      'Popular gateway drink for non-coffee drinkers',
      'Can be made with dark chocolate for richer flavor',
      'Whipped cream is essential for authentic experience'
    ],
    difficulty: 'beginner',
    estimatedTime: 90,
    temperature: 'hot',
    caffeineLevel: 'medium'
  },

  // MORE FRAPPUCCINOS
  {
    id: 'vanilla-bean-frappuccino',
    name: 'Vanilla Bean Frappuccino',
    category: 'frappuccino',
    isSeasonal: false,
    description: 'Caffeine-free blended beverage with vanilla bean powder, milk, and ice',
    emoji: '🥤',
    imageUrl: '/drinks/vanilla-bean-frappuccino.jpg',
    ingredients: [
      { name: 'Vanilla Bean Powder', amount: 2, unit: 'scoops', type: 'base', isOptional: false },
      { name: 'Crème Frappuccino Base', amount: 1, unit: 'pump', type: 'base', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 2, unit: 'cups', type: 'extra', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-vanilla-powder',
        order: 1,
        instruction: 'Add vanilla bean powder to blender',
        duration: 5,
        technique: 'Use proper scoop size for consistent flavor',
        visualCue: 'Fine vanilla powder with visible bean specks'
      },
      {
        id: 'add-creme-base',
        order: 2,
        instruction: 'Add crème Frappuccino base',
        duration: 5,
        technique: 'Provides sweetness and texture without caffeine',
        visualCue: 'Clear syrup base in blender'
      },
      {
        id: 'add-cold-milk',
        order: 3,
        instruction: 'Add cold milk to first line',
        duration: 5,
        visualCue: 'Milk reaches appropriate measurement line'
      },
      {
        id: 'add-ice-vanilla',
        order: 4,
        instruction: 'Fill with ice to top line',
        duration: 5,
        visualCue: 'Ice packed to top measurement'
      },
      {
        id: 'blend-vanilla-bean',
        order: 5,
        instruction: 'Blend on Frappuccino setting until smooth',
        duration: 45,
        technique: 'Ensure vanilla powder is fully incorporated',
        visualCue: 'Smooth, creamy texture with vanilla specks throughout'
      },
      {
        id: 'serve-vanilla-bean',
        order: 6,
        instruction: 'Pour into cup and top with whipped cream',
        duration: 10,
        visualCue: 'Creamy white drink with whipped cream dome'
      }
    ],
    nutrition: {
      calories: 400,
      fat: 16,
      carbs: 59,
      protein: 6,
      caffeine: 0,
      sugar: 57
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Soy Milk', 'Almond Milk'],
      syrupOptions: ['Vanilla Bean', 'Extra Vanilla Bean'],
      extraShots: false,
      decaf: false,
      iced: false,
      extraHot: false
    },
    tips: [
      'Caffeine-free option perfect for any time of day',
      'Real vanilla bean creates authentic flavor and visual appeal',
      'Popular with children and non-coffee drinkers',
      'Can add espresso shots to make it caffeinated'
    ],
    difficulty: 'beginner',
    estimatedTime: 75,
    temperature: 'blended',
    caffeineLevel: 'low'
  },

  {
    id: 'strawberry-frappuccino',
    name: 'Strawberry Frappuccino',
    category: 'frappuccino',
    isSeasonal: false,
    description: 'Refreshing strawberry puree blended with milk and ice',
    emoji: '🍓',
    imageUrl: '/drinks/strawberry-frappuccino.jpg',
    ingredients: [
      { name: 'Strawberry Puree', amount: 3, unit: 'pumps', type: 'base', isOptional: false },
      { name: 'Crème Frappuccino Base', amount: 1, unit: 'pump', type: 'base', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 2, unit: 'cups', type: 'extra', isOptional: false },
      { name: 'Whipped Cream', amount: 1, unit: 'dollop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-strawberry-puree',
        order: 1,
        instruction: 'Add strawberry puree to blender',
        duration: 5,
        technique: 'Use real strawberry puree for authentic flavor',
        visualCue: 'Bright red strawberry puree in blender'
      },
      {
        id: 'add-base-strawberry',
        order: 2,
        instruction: 'Add crème base for sweetness and texture',
        duration: 5,
        visualCue: 'Clear base mixed with red puree'
      },
      {
        id: 'add-milk-strawberry',
        order: 3,
        instruction: 'Add cold milk to measurement line',
        duration: 5,
        visualCue: 'Pink mixture forming in blender'
      },
      {
        id: 'ice-strawberry',
        order: 4,
        instruction: 'Add ice to top line',
        duration: 5,
        visualCue: 'Ice covering pink mixture'
      },
      {
        id: 'blend-strawberry',
        order: 5,
        instruction: 'Blend until smooth and well combined',
        duration: 45,
        technique: 'Ensure even pink color throughout',
        visualCue: 'Smooth pink frappuccino with no ice chunks'
      },
      {
        id: 'finish-strawberry',
        order: 6,
        instruction: 'Pour and top with whipped cream',
        duration: 10,
        visualCue: 'Beautiful pink drink with white whipped cream'
      }
    ],
    nutrition: {
      calories: 370,
      fat: 15,
      carbs: 54,
      protein: 5,
      caffeine: 0,
      sugar: 52
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Coconut Milk', 'Almond Milk'],
      syrupOptions: ['Strawberry Puree', 'Extra Strawberry'],
      extraShots: false,
      decaf: false,
      iced: false,
      extraHot: false
    },
    tips: [
      'Uses real strawberry puree for natural flavor',
      'Popular summer drink with fruity taste',
      'Can blend with frozen strawberries for extra texture',
      'Naturally caffeine-free'
    ],
    difficulty: 'beginner',
    estimatedTime: 70,
    temperature: 'blended',
    caffeineLevel: 'low'
  },

  // MORE REFRESHERS
  {
    id: 'mango-dragonfruit-refresher',
    name: 'Mango Dragonfruit Refresher',
    category: 'refresher',
    isSeasonal: false,
    description: 'Tropical blend of juicy mango and dragonfruit flavors shaken with ice',
    emoji: '🥭',
    imageUrl: '/drinks/mango-dragonfruit-refresher.jpg',
    ingredients: [
      { name: 'Mango Dragonfruit Base', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Water', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false },
      { name: 'Freeze-dried Dragonfruit', amount: 1, unit: 'scoop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-ice-mango',
        order: 1,
        instruction: 'Fill shaker with ice to appropriate line',
        duration: 5,
        visualCue: 'Ice filling shaker to size-specific line'
      },
      {
        id: 'add-mango-base',
        order: 2,
        instruction: 'Add mango dragonfruit base concentrate',
        duration: 5,
        technique: 'Shake concentrate before use to ensure proper mixing',
        visualCue: 'Bright orange-pink base in shaker'
      },
      {
        id: 'add-water-mango',
        order: 3,
        instruction: 'Add water to dilute concentrate',
        duration: 5,
        visualCue: 'Color lightens as water is added'
      },
      {
        id: 'shake-mango',
        order: 4,
        instruction: 'Shake vigorously for 10-15 seconds',
        duration: 15,
        technique: 'Strong back-and-forth motion to create froth',
        visualCue: 'Mixture becomes frothy and well-blended'
      },
      {
        id: 'pour-mango',
        order: 5,
        instruction: 'Strain into cup and garnish with freeze-dried dragonfruit',
        duration: 8,
        visualCue: 'Beautiful tropical colored drink with dragonfruit pieces'
      }
    ],
    nutrition: {
      calories: 90,
      fat: 0,
      carbs: 21,
      protein: 0,
      caffeine: 45,
      sugar: 19
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Coconut Milk', 'Lemonade'],
      syrupOptions: ['Mango Dragonfruit', 'Extra Base'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: false
    },
    tips: [
      'Contains natural caffeine from green coffee extract',
      'Freeze-dried dragonfruit adds texture and visual appeal',
      'Popular tropical flavor combination',
      'Can be made with coconut milk for Dragon Drink variation'
    ],
    difficulty: 'beginner',
    estimatedTime: 40,
    temperature: 'cold',
    caffeineLevel: 'low'
  },

  {
    id: 'dragon-drink',
    name: 'Dragon Drink',
    category: 'refresher',
    isSeasonal: false,
    description: 'Mango Dragonfruit Refresher shaken with creamy coconut milk',
    emoji: '🐲',
    imageUrl: '/drinks/dragon-drink.jpg',
    ingredients: [
      { name: 'Mango Dragonfruit Base', amount: 1, unit: 'cup', type: 'base', isOptional: false },
      { name: 'Coconut Milk', amount: 0.5, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false },
      { name: 'Freeze-dried Dragonfruit', amount: 1, unit: 'scoop', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'prepare-dragon-shaker',
        order: 1,
        instruction: 'Fill shaker with ice to proper measurement',
        duration: 5,
        visualCue: 'Ice to appropriate line for cup size'
      },
      {
        id: 'add-dragon-base',
        order: 2,
        instruction: 'Add mango dragonfruit refresher base',
        duration: 5,
        technique: 'Ensure base is well-shaken before use',
        visualCue: 'Vibrant tropical color base'
      },
      {
        id: 'add-coconut-dragon',
        order: 3,
        instruction: 'Add coconut milk instead of water',
        duration: 5,
        technique: 'Shake coconut milk container first to mix',
        visualCue: 'Creamy coconut milk creating marbled effect'
      },
      {
        id: 'shake-dragon',
        order: 4,
        instruction: 'Shake vigorously to combine all ingredients',
        duration: 15,
        technique: 'Ensure coconut milk is fully incorporated',
        visualCue: 'Creamy, tropical-colored mixture'
      },
      {
        id: 'serve-dragon',
        order: 5,
        instruction: 'Pour and top with freeze-dried dragonfruit',
        duration: 8,
        visualCue: 'Creamy tropical drink with dragonfruit pieces floating'
      }
    ],
    nutrition: {
      calories: 130,
      fat: 3,
      carbs: 26,
      protein: 1,
      caffeine: 45,
      sugar: 23
    },
    customization: {
      sizes: ['Tall', 'Grande', 'Venti'],
      milkOptions: ['Coconut Milk (standard)', 'Oatmilk', 'Almond Milk'],
      syrupOptions: ['None (standard)', 'Vanilla'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: false
    },
    tips: [
      'Dragon Drink is the coconut milk version of Mango Dragonfruit Refresher',
      'Popular on social media for its beautiful color',
      'Coconut milk adds creaminess and tropical flavor',
      'Instagram-worthy presentation with dragonfruit garnish'
    ],
    difficulty: 'beginner',
    estimatedTime: 40,
    temperature: 'cold',
    caffeineLevel: 'low'
  },

  // MORE TEA DRINKS
  {
    id: 'matcha-latte',
    name: 'Iced Green Tea Latte',
    category: 'tea',
    isSeasonal: false,
    description: 'Premium matcha green tea powder with steamed milk for earthy, sweet flavor',
    emoji: '🍵',
    imageUrl: '/drinks/matcha-latte.jpg',
    ingredients: [
      { name: 'Matcha Tea Powder', amount: 2, unit: 'scoops', type: 'base', isOptional: false },
      { name: 'Classic Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: '2% Milk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Ice', amount: 1, unit: 'cup', type: 'extra', isOptional: false }
    ],
    steps: [
      {
        id: 'add-matcha-powder',
        order: 1,
        instruction: 'Add matcha powder to shaker',
        duration: 5,
        technique: 'Use proper scoops of high-quality matcha',
        visualCue: 'Bright green matcha powder in shaker'
      },
      {
        id: 'add-syrup-matcha',
        order: 2,
        instruction: 'Add classic syrup for sweetness',
        duration: 5,
        technique: 'Syrup helps dissolve matcha powder',
        visualCue: 'Clear syrup over green powder'
      },
      {
        id: 'add-small-milk-amount',
        order: 3,
        instruction: 'Add small amount of cold milk to dissolve matcha',
        duration: 5,
        technique: 'Start with small amount to create smooth paste',
        visualCue: 'Green paste forming as matcha dissolves'
      },
      {
        id: 'whisk-matcha',
        order: 4,
        instruction: 'Whisk vigorously to dissolve matcha completely',
        duration: 20,
        technique: 'Use traditional bamboo whisk or milk frother',
        visualCue: 'Smooth green mixture with no powder lumps'
      },
      {
        id: 'add-ice-milk',
        order: 5,
        instruction: 'Add ice and remaining cold milk',
        duration: 10,
        visualCue: 'Beautiful green drink over ice'
      },
      {
        id: 'final-stir-matcha',
        order: 6,
        instruction: 'Stir gently to combine all ingredients',
        duration: 5,
        visualCue: 'Uniform green color throughout'
      }
    ],
    nutrition: {
      calories: 240,
      fat: 7,
      carbs: 37,
      protein: 10,
      caffeine: 80,
      sugar: 32
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['2% Milk', 'Nonfat Milk', 'Oatmilk', 'Soy Milk', 'Almond Milk', 'Coconut Milk'],
      syrupOptions: ['Classic', 'Vanilla', 'Sugar-Free Vanilla'],
      extraShots: false,
      decaf: false,
      iced: true,
      extraHot: true
    },
    tips: [
      'High-quality matcha makes significant difference in flavor',
      'Whisk thoroughly to prevent lumps',
      'Natural caffeine from green tea leaves',
      'Popular for its antioxidant benefits and unique flavor'
    ],
    difficulty: 'intermediate',
    estimatedTime: 90,
    temperature: 'cold',
    caffeineLevel: 'medium'
  },

  // SEASONAL DRINKS
  {
    id: 'apple-crisp-oatmilk-macchiato',
    name: 'Apple Crisp Oatmilk Macchiato',
    category: 'espresso',
    isSeasonal: true,
    description: 'Espresso with apple and brown sugar flavors, topped with oatmilk and spiced apple drizzle',
    emoji: '🍎',
    imageUrl: '/drinks/apple-crisp-macchiato.jpg',
    ingredients: [
      { name: 'Espresso Roast', amount: 2, unit: 'shots', type: 'base', isOptional: false },
      { name: 'Apple Brown Sugar Syrup', amount: 3, unit: 'pumps', type: 'syrup', isOptional: false },
      { name: 'Oatmilk', amount: 1, unit: 'cup', type: 'milk', isOptional: false },
      { name: 'Spiced Apple Drizzle', amount: 1, unit: 'drizzle', type: 'topping', isOptional: false }
    ],
    steps: [
      {
        id: 'add-apple-syrup',
        order: 1,
        instruction: 'Add apple brown sugar syrup to cup',
        duration: 5,
        technique: 'Use fall seasonal syrup for authentic flavor',
        visualCue: 'Amber-colored apple syrup in cup bottom'
      },
      {
        id: 'steam-oatmilk-apple',
        order: 2,
        instruction: 'Steam oatmilk to 150°F with light microfoam',
        duration: 35,
        temperature: 150,
        technique: 'Oatmilk creates naturally sweet, creamy texture',
        visualCue: 'Creamy oatmilk with subtle foam'
      },
      {
        id: 'pour-oatmilk',
        order: 3,
        instruction: 'Pour steamed oatmilk into apple syrup',
        duration: 15,
        technique: 'Reserve small amount of foam for top layer',
        visualCue: 'Creamy caramel-colored mixture'
      },
      {
        id: 'pull-espresso-apple',
        order: 4,
        instruction: 'Extract espresso shots',
        duration: 25,
        temperature: 185,
        technique: 'Pull shots fresh for optimal flavor',
        visualCue: 'Rich golden crema on espresso'
      },
      {
        id: 'mark-apple-macchiato',
        order: 5,
        instruction: 'Create macchiato mark by pouring espresso through center',
        duration: 10,
        technique: 'Pour from height to create distinct mark',
        visualCue: 'Dark espresso mark in center of light drink'
      },
      {
        id: 'apple-drizzle',
        order: 6,
        instruction: 'Top with spiced apple drizzle in crosshatch pattern',
        duration: 8,
        technique: 'Create decorative pattern with seasonal drizzle',
        visualCue: 'Spiced apple drizzle creating autumn-themed pattern'
      }
    ],
    nutrition: {
      calories: 300,
      fat: 7,
      carbs: 56,
      protein: 8,
      caffeine: 150,
      sugar: 45
    },
    customization: {
      sizes: ['Short', 'Tall', 'Grande', 'Venti'],
      milkOptions: ['Oatmilk (signature)', '2% Milk', 'Almond Milk', 'Soy Milk'],
      syrupOptions: ['Apple Brown Sugar', 'Extra Apple Brown Sugar'],
      extraShots: true,
      decaf: true,
      iced: true,
      extraHot: true
    },
    tips: [
      'Available during fall season (August-November)',
      'Oatmilk complements apple flavors perfectly',
      'Spiced apple drizzle contains cinnamon and nutmeg',
      'Popular autumn comfort drink with warming spices'
    ],
    difficulty: 'intermediate',
    estimatedTime: 100,
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

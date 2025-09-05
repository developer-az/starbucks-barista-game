import { GameQuestion } from '@/types/game'

// Comprehensive question sets for each drink recipe
export const DRINK_QUESTIONS: Record<string, GameQuestion[]> = {
  'iced-brown-sugar-oatmilk-shaken-espresso': [
    {
      id: 1,
      question: 'Which syrup is used in the Iced Brown Sugar Oatmilk Shaken Espresso?',
      choices: JSON.stringify(['Vanilla', 'Brown Sugar', 'Caramel', 'Hazelnut']),
      correctIndex: 1,
      explanation: 'The Iced Brown Sugar Oatmilk Shaken Espresso uses brown sugar syrup, which gives it its distinctive sweet, molasses-like flavor.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      question: 'What type of espresso is used in the Iced Brown Sugar Oatmilk Shaken Espresso?',
      choices: JSON.stringify(['Dark Roast', 'Blonde Roast', 'Medium Roast', 'Decaf']),
      correctIndex: 1,
      explanation: 'Blonde espresso roast is used because it provides a smoother, less bitter flavor that complements the brown sugar syrup.',
      difficulty: 'intermediate',
      category: 'ingredient',
      drinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      question: 'How many times should you shake the Iced Brown Sugar Oatmilk Shaken Espresso?',
      choices: JSON.stringify(['5-10 times', '10-20 times', '20-30 times', 'Until tired']),
      correctIndex: 1,
      explanation: 'The drink should be shaken vigorously 10-20 times to create the signature foam and ensure proper mixing of ingredients.',
      difficulty: 'beginner',
      category: 'technique',
      drinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      question: 'What milk alternative is used in the Iced Brown Sugar Oatmilk Shaken Espresso?',
      choices: JSON.stringify(['Almond Milk', 'Oatmilk', 'Coconut Milk', 'Soy Milk']),
      correctIndex: 1,
      explanation: 'Oatmilk is used for its creamy texture and natural sweetness that pairs perfectly with the brown sugar syrup.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      question: 'What spice is added to the shaker for the Iced Brown Sugar Oatmilk Shaken Espresso?',
      choices: JSON.stringify(['Nutmeg', 'Cinnamon', 'Cardamom', 'Ginger']),
      correctIndex: 1,
      explanation: 'Cinnamon powder is added to the shaker to enhance the warm, spiced flavor profile of the drink.',
      difficulty: 'intermediate',
      category: 'ingredient',
      drinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],
  'caramel-macchiato': [
    {
      id: 6,
      question: 'What is the correct order for making a Caramel Macchiato?',
      choices: JSON.stringify([
        'Espresso first, then milk, then caramel',
        'Vanilla syrup, steamed milk, espresso, caramel drizzle',
        'Milk first, then espresso, then caramel',
        'Caramel first, then espresso, then milk'
      ]),
      correctIndex: 1,
      explanation: 'The correct order is: vanilla syrup in cup, steamed milk, espresso shots poured through the center, then caramel drizzle on top.',
      difficulty: 'intermediate',
      category: 'technique',
      drinkId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      question: 'What temperature should the milk be steamed to for a Caramel Macchiato?',
      choices: JSON.stringify(['130°F', '140°F', '150°F', '160°F']),
      correctIndex: 2,
      explanation: 'Milk should be steamed to 150°F to create the perfect microfoam texture and temperature for the drink.',
      difficulty: 'intermediate',
      category: 'technique',
      drinkId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      question: 'How many pumps of vanilla syrup does a Grande Caramel Macchiato receive?',
      choices: JSON.stringify(['2 pumps', '3 pumps', '4 pumps', '5 pumps']),
      correctIndex: 2,
      explanation: 'A Grande Caramel Macchiato receives 3 pumps of vanilla syrup, following the standard syrup ratio.',
      difficulty: 'beginner',
      category: 'measurement',
      drinkId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      question: 'What creates the signature "mark" in a Caramel Macchiato?',
      choices: JSON.stringify([
        'The caramel drizzle',
        'The espresso poured through the milk',
        'The vanilla syrup at the bottom',
        'The steamed milk foam'
      ]),
      correctIndex: 1,
      explanation: 'The word "macchiato" means "marked" in Italian, referring to the espresso being poured through the steamed milk, creating a visible mark.',
      difficulty: 'advanced',
      category: 'technique',
      drinkId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],
  'pumpkin-spice-latte': [
    {
      id: 10,
      question: 'What is the main seasonal ingredient in a Pumpkin Spice Latte?',
      choices: JSON.stringify([
        'Pumpkin Spice Sauce',
        'Pumpkin Puree',
        'Pumpkin Extract',
        'Pumpkin Pie Filling'
      ]),
      correctIndex: 0,
      explanation: 'The Pumpkin Spice Latte uses a special pumpkin spice sauce that contains cinnamon, nutmeg, and clove flavors.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      question: 'What topping is used on a Pumpkin Spice Latte?',
      choices: JSON.stringify([
        'Whipped Cream + Cinnamon',
        'Whipped Cream + Pumpkin Spice Topping',
        'Pumpkin Seeds',
        'Caramel Drizzle'
      ]),
      correctIndex: 1,
      explanation: 'A Pumpkin Spice Latte is finished with whipped cream and a special pumpkin spice topping blend.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      question: 'When is the Pumpkin Spice Latte typically available?',
      choices: JSON.stringify([
        'Year-round',
        'Fall season only',
        'Winter season only',
        'Spring and Fall'
      ]),
      correctIndex: 1,
      explanation: 'The Pumpkin Spice Latte is a seasonal drink typically available during the fall season (August-November).',
      difficulty: 'beginner',
      category: 'general',
      drinkId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],
  'vanilla-sweet-cream-cold-brew': [
    {
      id: 13,
      question: 'What is the base of a Vanilla Sweet Cream Cold Brew?',
      choices: JSON.stringify([
        'Hot Coffee',
        'Cold Brew Coffee',
        'Espresso',
        'Iced Coffee'
      ]),
      correctIndex: 1,
      explanation: 'Cold brew coffee is the base, which is brewed cold for 20 hours to create a smooth, less acidic flavor.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      question: 'What is vanilla sweet cream made from?',
      choices: JSON.stringify([
        'Heavy cream + vanilla syrup',
        '2% milk + vanilla syrup',
        'Half & half + vanilla syrup',
        'Whipped cream + vanilla extract'
      ]),
      correctIndex: 0,
      explanation: 'Vanilla sweet cream is made by combining heavy cream with vanilla syrup to create a rich, sweet topping.',
      difficulty: 'intermediate',
      category: 'ingredient',
      drinkId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      question: 'How should you pour the vanilla sweet cream on a Cold Brew?',
      choices: JSON.stringify([
        'Stir it in completely',
        'Pour it on top and let it float',
        'Mix it with the coffee first',
        'Layer it at the bottom'
      ]),
      correctIndex: 1,
      explanation: 'The vanilla sweet cream should be poured on top and allowed to float, creating a beautiful layered effect.',
      difficulty: 'intermediate',
      category: 'technique',
      drinkId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],
  'strawberry-acai-refresher': [
    {
      id: 16,
      question: 'What is the base of a Strawberry Acai Refresher?',
      choices: JSON.stringify([
        'Strawberry Acai Base',
        'Strawberry Juice',
        'Acai Berry Puree',
        'Strawberry Syrup'
      ]),
      correctIndex: 0,
      explanation: 'The drink uses a special Strawberry Acai Base that combines strawberry and acai flavors.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      question: 'What garnish is used on a Strawberry Acai Refresher?',
      choices: JSON.stringify([
        'Fresh Strawberries',
        'Freeze-dried Strawberries',
        'Strawberry Slices',
        'Acai Berries'
      ]),
      correctIndex: 1,
      explanation: 'Freeze-dried strawberries are used as garnish because they maintain their texture and don\'t dilute the drink.',
      difficulty: 'beginner',
      category: 'ingredient',
      drinkId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      question: 'How should a Strawberry Acai Refresher be prepared?',
      choices: JSON.stringify([
        'Stirred in the cup',
        'Shaken vigorously',
        'Blended with ice',
        'Mixed with a spoon'
      ]),
      correctIndex: 1,
      explanation: 'The drink should be shaken vigorously to properly mix the base with water and create the signature frothy texture.',
      difficulty: 'beginner',
      category: 'technique',
      drinkId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]
}

// General Starbucks knowledge questions
export const GENERAL_QUESTIONS: GameQuestion[] = [
  {
    id: 19,
    question: 'How many pumps of syrup does a Grande drink typically receive?',
    choices: JSON.stringify(['2 pumps', '3 pumps', '4 pumps', '5 pumps']),
    correctIndex: 2,
    explanation: 'Grande drinks typically receive 4 pumps of syrup following the 4-ounce rule (4 ounces = 1 pump).',
    difficulty: 'beginner',
    category: 'measurement',
    drinkId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 20,
    question: 'What is the standard espresso shot volume?',
    choices: JSON.stringify(['0.75 oz', '1 oz', '1.25 oz', '1.5 oz']),
    correctIndex: 1,
    explanation: 'A standard espresso shot is 1 ounce, providing the perfect concentration of flavor and caffeine.',
    difficulty: 'intermediate',
    category: 'measurement',
    drinkId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 21,
    question: 'What temperature should espresso be served at?',
    choices: JSON.stringify(['160°F', '170°F', '180°F', '190°F']),
    correctIndex: 2,
    explanation: 'Espresso should be served at 180°F to maintain optimal flavor and temperature.',
    difficulty: 'intermediate',
    category: 'technique',
    drinkId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 22,
    question: 'How long should cold brew steep?',
    choices: JSON.stringify(['8 hours', '12 hours', '20 hours', '24 hours']),
    correctIndex: 2,
    explanation: 'Cold brew should steep for 20 hours to extract the full flavor while maintaining low acidity.',
    difficulty: 'intermediate',
    category: 'technique',
    drinkId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

// Get questions for a specific drink or mixed questions
export function getQuestionsForDrink(drinkKey: string): GameQuestion[] {
  return DRINK_QUESTIONS[drinkKey] || []
}

export function getMixedQuestions(count: number = 10): GameQuestion[] {
  const allDrinkQuestions = Object.values(DRINK_QUESTIONS).flat()
  const allQuestions = [...allDrinkQuestions, ...GENERAL_QUESTIONS]
  
  // Shuffle and return requested number
  const shuffled = allQuestions.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getAllDrinkKeys(): string[] {
  return Object.keys(DRINK_QUESTIONS)
}

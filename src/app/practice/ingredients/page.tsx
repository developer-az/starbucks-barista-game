'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Ingredient, PracticeSession, SessionMistake } from '@/types/game'

const PRACTICE_INGREDIENTS: Ingredient[] = [
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
    name: 'Caramel Syrup',
    type: 'syrup',
    description: 'Rich, buttery caramel flavor perfect for macchiatos.',
    imageUrl: '/ingredients/caramel-syrup.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: 'Oat Milk',
    type: 'milk',
    description: 'Creamy plant-based milk with natural sweetness and rich texture.',
    imageUrl: '/ingredients/oat-milk.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    name: '2% Milk',
    type: 'milk',
    description: 'Standard steaming milk with balanced richness and foam capability.',
    imageUrl: '/ingredients/2-percent-milk.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: 'Almond Milk',
    type: 'milk',
    description: 'Light, nutty alternative milk with subtle almond flavor.',
    imageUrl: '/ingredients/almond-milk.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

const QUIZ_QUESTIONS = [
  {
    question: "Which espresso roast is best for an Iced Brown Sugar Oatmilk Shaken Espresso?",
    type: "ingredient",
    category: "espresso",
    correctAnswer: "Blonde Espresso Roast",
    explanation: "Blonde espresso's smooth, light flavor pairs perfectly with brown sugar syrup and oat milk in shaken drinks."
  },
  {
    question: "What type of milk creates the most microfoam for latte art?",
    type: "ingredient", 
    category: "milk",
    correctAnswer: "2% Milk",
    explanation: "2% milk has the perfect fat content to create stable microfoam while maintaining good flavor balance."
  },
  {
    question: "Which syrup adds molasses-like complexity to drinks?",
    type: "ingredient",
    category: "syrup", 
    correctAnswer: "Brown Sugar Syrup",
    explanation: "Brown sugar syrup provides deep, complex sweetness with molasses notes that enhance many beverages."
  },
  {
    question: "What plant-based milk alternative provides the creamiest texture?",
    type: "ingredient",
    category: "milk",
    correctAnswer: "Oat Milk", 
    explanation: "Oat milk naturally contains more proteins and fats that create a creamy, rich texture similar to dairy milk."
  },
  {
    question: "Which espresso roast has caramelized sugar notes?",
    type: "ingredient",
    category: "espresso",
    correctAnswer: "Signature Espresso Roast",
    explanation: "Signature espresso roast develops rich caramelized sugar notes during the roasting process."
  }
]

export default function IngredientPracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [practiceSession, setPracticeSession] = useState<PracticeSession | null>(null)
  const [mistakes, setMistakes] = useState<SessionMistake[]>([])
  const [gameCompleted, setGameCompleted] = useState(false)

  useEffect(() => {
    // Initialize practice session
    const session: PracticeSession = {
      id: `practice-${Date.now()}`,
      type: 'free',
      drinkId: 0, // Generic ingredient practice
      startTime: new Date(),
      mistakes: [],
      feedback: []
    }
    setPracticeSession(session)
  }, [])

  const getCurrentQuestionIngredients = () => {
    const question = QUIZ_QUESTIONS[currentQuestion]
    return PRACTICE_INGREDIENTS.filter(ingredient => 
      ingredient.type === question.category
    )
  }

  const handleIngredientSelect = (ingredient: Ingredient) => {
    if (showFeedback) return

    setSelectedIngredient(ingredient)
    const question = QUIZ_QUESTIONS[currentQuestion]
    const correct = ingredient.name === question.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setScore(score + 1)
    } else {
      // Track mistake
      const mistake: SessionMistake = {
        step: currentQuestion + 1,
        type: 'ingredient',
        description: `Selected ${ingredient.name} instead of ${question.correctAnswer}`,
        correction: question.explanation,
        impact: 'minor'
      }
      setMistakes([...mistakes, mistake])
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedIngredient(null)
      setShowFeedback(false)
      setIsCorrect(false)
    } else {
      // Complete practice session
      if (practiceSession) {
        const completedSession: PracticeSession = {
          ...practiceSession,
          endTime: new Date(),
          score: Math.round((score / QUIZ_QUESTIONS.length) * 100),
          mistakes: mistakes,
          feedback: [
            `You scored ${score}/${QUIZ_QUESTIONS.length} (${Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)`,
            mistakes.length === 0 ? "Perfect! No mistakes made." : `Review ${mistakes.length} areas for improvement.`
          ]
        }
        setPracticeSession(completedSession)
      }
      setGameCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedIngredient(null)
    setScore(0)
    setShowFeedback(false)
    setIsCorrect(false)
    setMistakes([])
    setGameCompleted(false)
    
    // New practice session
    const session: PracticeSession = {
      id: `practice-${Date.now()}`,
      type: 'free',
      drinkId: 0,
      startTime: new Date(),
      mistakes: [],
      feedback: []
    }
    setPracticeSession(session)
  }

  if (gameCompleted && practiceSession) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/learning" className="text-starbucks-green hover:text-starbucks-darkgreen">
            ← Back to Learning
          </Link>
        </div>

        {/* Results */}
        <div className="card text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-starbucks-darkgreen">
              Practice Complete! 
            </h1>
            <div className="text-6xl">
              {practiceSession.score && practiceSession.score >= 80 ? '🎉' : practiceSession.score && practiceSession.score >= 60 ? '👍' : '📚'}
            </div>
          </div>

          {/* Score */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-3xl font-bold text-starbucks-green">{score}</div>
              <div className="text-gray-600">Correct Answers</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-starbucks-gold">{practiceSession.score}%</div>
              <div className="text-gray-600">Final Score</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-blue-600">{mistakes.length}</div>
              <div className="text-gray-600">Areas to Review</div>
            </div>
          </div>

          {/* Feedback */}
          <div className="space-y-4">
            {practiceSession.feedback.map((feedback, index) => (
              <p key={index} className="text-lg text-gray-700">{feedback}</p>
            ))}
          </div>

          {/* Mistakes Review */}
          {mistakes.length > 0 && (
            <div className="card text-left">
              <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-4">Review These Topics:</h3>
              <div className="space-y-3">
                {mistakes.map((mistake, index) => (
                  <div key={index} className="border-l-4 border-l-yellow-500 pl-4">
                    <div className="font-medium text-yellow-800">Question {mistake.step}</div>
                    <div className="text-sm text-gray-600">{mistake.description}</div>
                    <div className="text-sm text-blue-700 mt-1">{mistake.correction}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <button onClick={handleRestart} className="btn-primary">
              Practice Again
            </button>
            <Link href="/learning" className="btn-secondary">
              Back to Learning
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const question = QUIZ_QUESTIONS[currentQuestion]
  const availableIngredients = getCurrentQuestionIngredients()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/learning" className="text-starbucks-green hover:text-starbucks-darkgreen">
          ← Back to Learning
        </Link>
        <div className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
        </div>
      </div>

      {/* Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-starbucks-darkgreen">Ingredient Knowledge Practice</h2>
          <span className="text-sm font-medium text-starbucks-green">
            Score: {score}/{QUIZ_QUESTIONS.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-starbucks-green h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="card">
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-starbucks-darkgreen mb-2">
              {question.question}
            </h3>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
              {question.category.charAt(0).toUpperCase() + question.category.slice(1)} Knowledge
            </span>
          </div>

          {/* Ingredient Options */}
          <div className="grid md:grid-cols-2 gap-4">
            {availableIngredients.map(ingredient => (
              <button
                key={ingredient.id}
                onClick={() => handleIngredientSelect(ingredient)}
                disabled={showFeedback}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  selectedIngredient?.id === ingredient.id
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : showFeedback
                      ? ingredient.name === question.correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                      : 'border-gray-200 hover:border-starbucks-green cursor-pointer'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="font-semibold text-lg">{ingredient.name}</div>
                    <div className="text-sm text-gray-600">{ingredient.description}</div>
                    <div className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                      {ingredient.type}
                    </div>
                  </div>
                  {showFeedback && (
                    <div className="ml-4">
                      {ingredient.name === question.correctAnswer ? (
                        <span className="text-green-600 text-2xl">✅</span>
                      ) : selectedIngredient?.id === ingredient.id ? (
                        <span className="text-red-600 text-2xl">❌</span>
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-lg ${
              isCorrect ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'
            }`}>
              <div className={`font-semibold mb-2 ${
                isCorrect ? 'text-green-800' : 'text-red-800'
              }`}>
                {isCorrect ? '✅ Correct!' : '❌ Not quite right'}
              </div>
              <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                {question.explanation}
              </p>
              {!isCorrect && (
                <div className="mt-2 text-sm text-red-600">
                  The correct answer is: <strong>{question.correctAnswer}</strong>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          {showFeedback && (
            <div className="flex justify-center">
              <button
                onClick={handleNextQuestion}
                className="btn-primary text-lg px-8 py-3"
              >
                {currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'Finish Practice' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Practice Tips */}
      <div className="card">
        <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-3">Practice Tips</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-starbucks-green">🎯 Focus</div>
            <p className="text-gray-600">Read ingredient descriptions carefully to understand their characteristics</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-starbucks-gold">🔄 Repetition</div>
            <p className="text-gray-600">Practice regularly to build muscle memory for ingredient recognition</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-blue-600">💡 Context</div>
            <p className="text-gray-600">Think about how each ingredient contributes to the final drink's flavor</p>
          </div>
        </div>
      </div>
    </div>
  )
}
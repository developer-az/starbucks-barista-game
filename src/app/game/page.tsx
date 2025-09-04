'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GameCard from '@/components/GameCard'
import GameProgress from '@/components/GameProgress'
import GameResults from '@/components/GameResults'
import { GameQuestion, GameSession } from '@/types/game'

export default function GamePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameSession, setGameSession] = useState<GameSession | null>(null)
  const [questions, setQuestions] = useState<GameQuestion[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [gameCompleted, setGameCompleted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Initialize game session
    const session: GameSession = {
      id: Date.now(),
      playerName: `Player_${Math.floor(Math.random() * 1000)}`,
      score: 0,
      totalQuestions: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setGameSession(session)
    
    // Load sample questions (in a real app, these would come from the database)
    const sampleQuestions: GameQuestion[] = [
      {
        id: 1,
        question: 'Which syrup is used in the Iced Brown Sugar Oatmilk Shaken Espresso?',
        choices: JSON.stringify(['Vanilla', 'Brown Sugar', 'Caramel', 'Hazelnut']),
        correctIndex: 1,
        explanation: 'The Iced Brown Sugar Oatmilk Shaken Espresso uses brown sugar syrup, which gives it its distinctive sweet, molasses-like flavor.',
        difficulty: 'beginner',
        category: 'ingredient',
        drinkId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        question: 'How many times should you shake the Iced Brown Sugar Oatmilk Shaken Espresso?',
        choices: JSON.stringify(['5-10 times', '10-20 times', '20-30 times', 'Until tired']),
        correctIndex: 1,
        explanation: 'The drink should be shaken vigorously 10-20 times to create the signature foam and ensure proper mixing of ingredients.',
        difficulty: 'beginner',
        category: 'technique',
        drinkId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        question: 'What type of espresso is used in the Iced Brown Sugar Oatmilk Shaken Espresso?',
        choices: JSON.stringify(['Dark Roast', 'Blonde Roast', 'Medium Roast', 'Decaf']),
        correctIndex: 1,
        explanation: 'Blonde espresso roast is used because it provides a smoother, less bitter flavor that complements the brown sugar syrup.',
        difficulty: 'intermediate',
        category: 'ingredient',
        drinkId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
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
        drinkId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
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
    ]
    
    setQuestions(sampleQuestions)
    if (gameSession) {
      setGameSession({ ...gameSession, totalQuestions: sampleQuestions.length })
    }
    setIsLoading(false)
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return // Prevent multiple selections
    
    setSelectedAnswer(answerIndex)
    setShowAnswer(true)
    
    const currentQuestion = questions[currentStep]
    if (answerIndex === currentQuestion.correctIndex) {
      setScore(score + 1)
      if (gameSession) {
        setGameSession({ ...gameSession, score: gameSession.score + 1 })
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    } else {
      // Game completed
      if (gameSession) {
        setGameSession({ ...gameSession, completedAt: new Date() })
      }
      setGameCompleted(true)
    }
  }

  const handleRestartGame = () => {
    setCurrentStep(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setGameCompleted(false)
    if (gameSession) {
      setGameSession({ ...gameSession, score: 0, completedAt: null })
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-starbucks-green border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-gray-600">Loading your training session...</p>
        </div>
      </div>
    )
  }

  if (gameCompleted) {
    return (
      <GameResults
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestartGame}
        onBackToHome={() => router.push('/')}
      />
    )
  }

  const currentQuestion = questions[currentStep]
  const choices = JSON.parse(currentQuestion.choices)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Game Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Barista Training Game
        </h1>
        <p className="text-lg text-gray-600">
          Test your knowledge of Starbucks drinks, recipes, and techniques
        </p>
      </div>

      {/* Progress Bar */}
      <GameProgress
        currentStep={currentStep + 1}
        totalSteps={questions.length}
        score={score}
      />

      {/* Current Question */}
      <GameCard
        question={currentQuestion}
        choices={choices}
        selectedAnswer={selectedAnswer}
        showAnswer={showAnswer}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
        currentStep={currentStep + 1}
        totalSteps={questions.length}
      />

      {/* Game Instructions */}
      <div className="card text-center space-y-4">
        <h3 className="text-lg font-semibold text-starbucks-darkgreen">How to Play</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold">1.</span> Read each question carefully
          </div>
          <div>
            <span className="font-semibold">2.</span> Select the best answer
          </div>
          <div>
            <span className="font-semibold">3.</span> Learn from the explanation
          </div>
        </div>
      </div>
    </div>
  )
}




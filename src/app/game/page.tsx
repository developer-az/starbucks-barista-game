'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GameCard from '@/components/GameCard'
import GameProgress from '@/components/GameProgress'
import GameResults from '@/components/GameResults'
import DrinkSelector from '@/components/DrinkSelector'
import { GameQuestion, GameSession } from '@/types/game'
import { getQuestionsForDrink, getMixedQuestions, getAllDrinkKeys } from '@/data/gameQuestions'

export default function GamePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameSession, setGameSession] = useState<GameSession | null>(null)
  const [questions, setQuestions] = useState<GameQuestion[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [gameMode, setGameMode] = useState<'selection' | 'playing' | 'completed'>('selection')
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null)
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
    setIsLoading(false)
  }, [])

  const handleDrinkSelect = (drinkKey: string) => {
    setSelectedDrink(drinkKey)
    const drinkQuestions = getQuestionsForDrink(drinkKey)
    setQuestions(drinkQuestions)
    setGameSession(prev => prev ? { ...prev, totalQuestions: drinkQuestions.length } : null)
    setGameMode('playing')
    setCurrentStep(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setGameCompleted(false)
  }

  const handleMixedMode = () => {
    setSelectedDrink('mixed')
    const mixedQuestions = getMixedQuestions(15) // 15 questions for mixed mode
    setQuestions(mixedQuestions)
    setGameSession(prev => prev ? { ...prev, totalQuestions: mixedQuestions.length } : null)
    setGameMode('playing')
    setCurrentStep(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setGameCompleted(false)
  }

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
      setGameMode('completed')
    }
  }

  const handleRestartGame = () => {
    setCurrentStep(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowAnswer(false)
    setGameCompleted(false)
    setGameMode('selection')
    setSelectedDrink(null)
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
        selectedDrink={selectedDrink}
      />
    )
  }

  if (gameMode === 'selection') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        <DrinkSelector
          onDrinkSelect={handleDrinkSelect}
          onMixedMode={handleMixedMode}
        />
      </div>
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
          {selectedDrink === 'mixed' 
            ? 'Mixed Challenge Mode - All drinks and general knowledge'
            : `Practicing: ${selectedDrink?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
          }
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






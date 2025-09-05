'use client'

import { useRouter } from 'next/navigation'

interface GameResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
  selectedDrink?: string | null
}

export default function GameResults({ score, totalQuestions, onRestart, selectedDrink }: GameResultsProps) {
  const router = useRouter()
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a Starbucks expert!"
    if (percentage >= 80) return "Excellent work! You know your drinks well!"
    if (percentage >= 70) return "Good job! Keep practicing to improve!"
    if (percentage >= 60) return "Not bad! Review the recipes and try again!"
    return "Keep studying! Practice makes perfect!"
  }

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-starbucks-darkgreen">
          Game Complete!
        </h2>
        <div className="text-6xl">🎉</div>
        {selectedDrink && selectedDrink !== 'mixed' && (
          <p className="text-lg text-gray-600">
            You practiced: <span className="font-semibold text-starbucks-green">
              {selectedDrink.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </p>
        )}
        {selectedDrink === 'mixed' && (
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-starbucks-green">Mixed Challenge Mode</span> completed!
          </p>
        )}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
        <div className="space-y-2">
          <div className="text-5xl font-bold text-starbucks-green">
            {score}/{totalQuestions}
          </div>
          <div className={`text-2xl font-semibold ${getPerformanceColor()}`}>
            {percentage}%
          </div>
        </div>

        <p className="text-lg text-gray-600">
          {getPerformanceMessage()}
        </p>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="w-full btn-primary text-lg py-4"
          >
            Play Again
          </button>
          
          <button
            onClick={() => router.push('/recipes')}
            className="w-full px-6 py-3 border border-starbucks-green text-starbucks-green rounded-lg hover:bg-starbucks-green hover:text-white transition-colors"
          >
            Review Recipes
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
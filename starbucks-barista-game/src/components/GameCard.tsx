'use client'

import { GameQuestion } from '@/types/game'

interface GameCardProps {
  question: GameQuestion
  choices: string[]
  selectedAnswer: number | null
  showAnswer: boolean
  onAnswerSelect: (answerIndex: number) => void
  onNext: () => void
  currentStep: number
  totalSteps: number
}

export default function GameCard({
  question,
  choices,
  selectedAnswer,
  showAnswer,
  onAnswerSelect,
  onNext,
  currentStep,
  totalSteps,
}: GameCardProps) {
  const getAnswerStyle = (index: number) => {
    if (!showAnswer) {
      return 'hover:bg-gray-50 border-gray-200 hover:border-starbucks-green'
    }
    
    if (index === question.correctIndex) {
      return 'bg-green-100 border-green-500 text-green-800'
    }
    
    if (index === selectedAnswer && index !== question.correctIndex) {
      return 'bg-red-100 border-red-500 text-red-800'
    }
    
    return 'bg-gray-50 border-gray-200 text-gray-600'
  }

  const getAnswerIcon = (index: number) => {
    if (!showAnswer) return null
    
    if (index === question.correctIndex) {
      return <span className="text-green-600 text-xl">✅</span>
    }
    
    if (index === selectedAnswer && index !== question.correctIndex) {
      return <span className="text-red-600 text-xl">❌</span>
    }
    
    return null
  }

  return (
    <div className="game-card space-y-6">
      {/* Question Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-starbucks-gold bg-starbucks-gold/10 px-3 py-1 rounded-full">
            Question {currentStep} of {totalSteps}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Difficulty:</span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              question.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </span>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-starbucks-darkgreen leading-tight">
          {question.question}
        </h2>
        
        {question.category && (
          <span className="inline-block px-3 py-1 bg-starbucks-green/10 text-starbucks-green text-sm rounded-full">
            {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
          </span>
        )}
      </div>

      {/* Answer Choices */}
      <div className="space-y-3">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={showAnswer}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getAnswerStyle(index)} ${
              !showAnswer ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-medium">
                  {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                </span>
                <span className="font-medium">{choice}</span>
              </div>
              {getAnswerIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {/* Answer Explanation */}
      {showAnswer && question.explanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {showAnswer && (
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="btn-primary text-lg px-8 py-3"
          >
            {currentStep === totalSteps ? 'Finish Game' : 'Next Question'}
          </button>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-starbucks-green h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}


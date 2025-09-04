'use client'

interface GameProgressProps {
  currentStep: number
  totalSteps: number
  score: number
}

export default function GameProgress({ currentStep, totalSteps, score }: GameProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100
  const scorePercentage = totalSteps > 0 ? (score / totalSteps) * 100 : 0

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-starbucks-darkgreen">Game Progress</h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-starbucks-green">{score}</div>
          <div className="text-sm text-gray-600">out of {totalSteps} correct</div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {/* Question Progress */}
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Question Progress</span>
            <span>{currentStep} / {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-starbucks-green h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Score Progress */}
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Score</span>
            <span>{scorePercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-starbucks-gold h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${scorePercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="grid grid-cols-3 gap-4 pt-2">
        <div className="text-center">
          <div className="text-lg font-semibold text-starbucks-green">
            {currentStep}
          </div>
          <div className="text-xs text-gray-500">Questions</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-starbucks-gold">
            {score}
          </div>
          <div className="text-xs text-gray-500">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-red-500">
            {currentStep - score}
          </div>
          <div className="text-xs text-gray-500">Incorrect</div>
        </div>
      </div>
    </div>
  )
}





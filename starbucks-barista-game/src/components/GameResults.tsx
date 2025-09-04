import Link from 'next/link'

interface GameResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
  onBackToHome: () => void
}

export default function GameResults({ score, totalQuestions, onRestart, onBackToHome }: GameResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent! You're a barista master!"
    if (percentage >= 80) return "Great job! You're well on your way to becoming a pro!"
    if (percentage >= 70) return "Good work! Keep practicing to improve your skills."
    if (percentage >= 60) return "Not bad! A bit more practice and you'll be great!"
    return "Keep practicing! Every barista starts somewhere."
  }

  const getScoreColor = () => {
    if (percentage >= 90) return "text-green-600"
    if (percentage >= 80) return "text-blue-600"
    if (percentage >= 70) return "text-yellow-600"
    if (percentage >= 60) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreEmoji = () => {
    if (percentage >= 90) return "🏆"
    if (percentage >= 80) return "⭐"
    if (percentage >= 70) return "👍"
    if (percentage >= 60) return "💪"
    return "📚"
  }

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      {/* Results Header */}
      <div className="space-y-4">
        <div className="text-6xl mb-4">{getScoreEmoji()}</div>
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Game Complete!
        </h1>
        <p className="text-xl text-gray-600">
          {getScoreMessage()}
        </p>
      </div>

      {/* Score Display */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="space-y-6">
          {/* Score Circle */}
          <div className="relative inline-flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor()}`}>
                  {percentage}%
                </div>
                <div className="text-sm text-gray-500">
                  Score
                </div>
              </div>
            </div>
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className={`${getScoreColor()}`}
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Score Details */}
          <div className="space-y-2">
            <div className="text-2xl font-bold text-starbucks-darkgreen">
              {score} out of {totalQuestions} correct
            </div>
            <div className="text-gray-600">
              {score === totalQuestions ? "Perfect score!" : `${totalQuestions - score} questions to review`}
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-green-700">Correct</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
              <div className="text-sm text-red-700">Incorrect</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="btn-primary text-lg px-8 py-4"
        >
          Play Again
        </button>
        <button
          onClick={onBackToHome}
          className="btn-secondary text-lg px-8 py-4"
        >
          Back to Home
        </button>
      </div>

      {/* Additional Actions */}
      <div className="space-y-4">
        <p className="text-gray-600">
          Want to improve your score?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/recipes"
            className="px-6 py-3 border border-starbucks-green text-starbucks-green rounded-lg hover:bg-starbucks-green hover:text-white transition-colors"
          >
            Review Recipes
          </Link>
          <Link
            href="/leaderboard"
            className="px-6 py-3 border border-starbucks-gold text-starbucks-gold rounded-lg hover:bg-starbucks-gold hover:text-white transition-colors"
          >
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  )
}


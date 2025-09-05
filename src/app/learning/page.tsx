'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LearningModule, LearningProgress } from '@/types/game'

const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'ingredients-basics',
    title: 'Coffee Bean & Ingredient Fundamentals',
    description: 'Learn about different espresso roasts, syrups, milk types, and their flavor profiles',
    category: 'ingredients',
    difficulty: 'beginner',
    estimatedTime: 15,
    isCompleted: false,
  },
  {
    id: 'espresso-techniques',
    title: 'Espresso Extraction & Steaming',
    description: 'Master the art of pulling perfect shots and steaming milk to the right temperature',
    category: 'techniques',
    difficulty: 'beginner',
    estimatedTime: 20,
    prerequisites: ['ingredients-basics'],
    isCompleted: false,
  },
  {
    id: 'signature-drinks',
    title: 'Signature Drink Recipes',
    description: 'Step-by-step preparation of popular drinks like Caramel Macchiato and PSL',
    category: 'recipes',
    difficulty: 'intermediate',
    estimatedTime: 25,
    prerequisites: ['ingredients-basics', 'espresso-techniques'],
    isCompleted: false,
  },
  {
    id: 'shaken-drinks',
    title: 'Shaken Espresso Mastery',
    description: 'Learn the precise technique for creating perfect shaken espresso drinks',
    category: 'techniques',
    difficulty: 'intermediate',
    estimatedTime: 18,
    prerequisites: ['espresso-techniques'],
    isCompleted: false,
  },
  {
    id: 'customization-expert',
    title: 'Drink Customization & Modifications',
    description: 'Handle customer requests for modifications, different sizes, and dietary needs',
    category: 'customization',
    difficulty: 'advanced',
    estimatedTime: 30,
    prerequisites: ['signature-drinks', 'shaken-drinks'],
    isCompleted: false,
  },
  {
    id: 'seasonal-specialties',
    title: 'Seasonal Drink Specialties',
    description: 'Master seasonal favorites and limited-time offerings',
    category: 'recipes',
    difficulty: 'advanced',
    estimatedTime: 22,
    prerequisites: ['signature-drinks'],
    isCompleted: false,
  }
]

export default function LearningPage() {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null)
  const [progress, setProgress] = useState<LearningProgress[]>([])

  useEffect(() => {
    // Load user progress from localStorage or API
    const savedProgress = localStorage.getItem('learningProgress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const getModuleProgress = (moduleId: string) => {
    return progress.find(p => p.moduleId === moduleId)
  }

  const isModuleUnlocked = (module: LearningModule) => {
    if (!module.prerequisites || module.prerequisites.length === 0) {
      return true
    }
    
    return module.prerequisites.every(prereqId => {
      const prereqProgress = getModuleProgress(prereqId)
      return prereqProgress && prereqProgress.completedSteps.length > 0
    })
  }

  const getCompletionPercentage = (moduleId: string) => {
    const moduleProgress = getModuleProgress(moduleId)
    if (!moduleProgress) return 0
    
    // Assuming each module has 5 steps for now
    const totalSteps = 5
    return Math.round((moduleProgress.completedSteps.length / totalSteps) * 100)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ingredients': return '🫘'
      case 'techniques': return '⚡'
      case 'recipes': return '📋'
      case 'customization': return '🎨'
      default: return '📚'
    }
  }

  const handleStartModule = (module: LearningModule) => {
    if (isModuleUnlocked(module)) {
      setSelectedModule(module)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-starbucks-darkgreen">
          Exact Learning System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Master every aspect of coffee making through step-by-step interactive learning. 
          Learn ingredients, perfect techniques, and build expertise progressively.
        </p>
      </div>

      {/* Learning Path Overview */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-starbucks-darkgreen mb-4">Your Learning Journey</h2>
        <div className="grid grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold text-starbucks-green">
              {progress.length}
            </div>
            <div className="text-gray-600">Modules Started</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-starbucks-gold">
              {progress.filter(p => p.completedSteps.length === 5).length}
            </div>
            <div className="text-gray-600">Modules Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {progress.reduce((total, p) => total + p.timeSpent, 0)}
            </div>
            <div className="text-gray-600">Minutes Learned</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {progress.length > 0 ? Math.round(progress.reduce((avg, p) => avg + p.score, 0) / progress.length) : 0}%
            </div>
            <div className="text-gray-600">Average Score</div>
          </div>
        </div>
      </div>

      {/* Learning Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEARNING_MODULES.map((module) => {
          const isUnlocked = isModuleUnlocked(module)
          const completionPercentage = getCompletionPercentage(module.id)
          const moduleProgress = getModuleProgress(module.id)
          
          return (
            <div
              key={module.id}
              className={`game-card transition-all duration-200 ${
                isUnlocked ? 'cursor-pointer hover:shadow-xl' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => handleStartModule(module)}
            >
              {/* Module Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{getCategoryIcon(module.category)}</div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(module.difficulty)}`}>
                    {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                  </span>
                  {!isUnlocked && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      🔒 Locked
                    </span>
                  )}
                </div>
              </div>

              {/* Module Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-starbucks-darkgreen leading-tight">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">{module.description}</p>

                {/* Progress Bar */}
                {completionPercentage > 0 && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-starbucks-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Module Meta */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>⏱️ {module.estimatedTime}min</span>
                    <span>📚 {module.category}</span>
                  </div>
                  {moduleProgress && (
                    <span className="text-xs font-medium text-starbucks-green">
                      {moduleProgress.masteryLevel}
                    </span>
                  )}
                </div>

                {/* Prerequisites */}
                {module.prerequisites && module.prerequisites.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Requires:</span>
                    <div className="mt-1">
                      {module.prerequisites.map(prereqId => {
                        const prereq = LEARNING_MODULES.find(m => m.id === prereqId)
                        const isCompleted = getModuleProgress(prereqId)?.completedSteps.length > 0
                        return (
                          <span
                            key={prereqId}
                            className={`inline-block mr-2 px-2 py-1 rounded text-xs ${
                              isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {isCompleted ? '✅' : '❌'} {prereq?.title.split(' ')[0]}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                {isUnlocked ? (
                  <Link
                    href={`/learning/${module.id}`}
                    className="btn-primary w-full text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {completionPercentage > 0 ? 'Continue Learning' : 'Start Module'}
                  </Link>
                ) : (
                  <button className="w-full py-2 px-4 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
                    Complete Prerequisites
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Practice Section */}
      <div className="card bg-starbucks-green text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Practice Session</h3>
            <p className="opacity-90">
              Practice specific skills without following the full learning path
            </p>
          </div>
          <div className="space-y-2">
            <Link href="/practice/ingredients" className="btn-secondary block text-center">
              Ingredient Quiz
            </Link>
            <Link href="/practice/recipes" className="btn-secondary block text-center">
              Recipe Builder
            </Link>
          </div>
        </div>
      </div>

      {/* Learning Tips */}
      <div className="card">
        <h3 className="text-lg font-semibold text-starbucks-darkgreen mb-3">Learning Tips</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-starbucks-green">📚 Study Mode</div>
            <p className="text-gray-600">Take your time to read and understand each step before practicing</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-starbucks-gold">🔄 Practice Regularly</div>
            <p className="text-gray-600">Consistent practice builds muscle memory and confidence</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-blue-600">💡 Learn from Mistakes</div>
            <p className="text-gray-600">Each mistake is a learning opportunity - review feedback carefully</p>
          </div>
        </div>
      </div>
    </div>
  )
}
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
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ingredients': return 'bg-blue-100 text-blue-800'
      case 'techniques': return 'bg-purple-100 text-purple-800'
      case 'recipes': return 'bg-green-100 text-green-800'
      case 'customization': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStartModule = (module: LearningModule) => {
    if (isModuleUnlocked(module)) {
      setSelectedModule(module)
    }
  }

  const totalModulesStarted = progress.length
  const totalModulesCompleted = progress.filter(p => p.completedSteps.length === 5).length
  const totalTimeSpent = progress.reduce((total, p) => total + p.timeSpent, 0)
  const averageScore = progress.length > 0 ? Math.round(progress.reduce((avg, p) => avg + p.score, 0) / progress.length) : 0

  return (
    <div className="learning-container">
      {/* Header Section */}
      <div className="learning-header">
        <div className="learning-header-badge">
          <span>🎓</span>
          <span>Learning Journey</span>
        </div>
        <h1 className="learning-header-title">
          Master Your <span className="text-highlight">Coffee Expertise</span>
        </h1>
        <p className="learning-header-description">
          Master every aspect of coffee making through step-by-step interactive learning. 
          Learn ingredients, perfect techniques, and build expertise progressively with our structured curriculum.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="progress-overview">
        <div className="progress-overview-header">
          <h2 className="progress-title">Your Learning Journey</h2>
          <p className="progress-subtitle">Track your advancement through our comprehensive curriculum</p>
        </div>
        <div className="progress-stats-grid">
          <div className="progress-stat-card modules-started">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <div className="stat-number">{totalModulesStarted}</div>
              <div className="stat-label">Modules Started</div>
            </div>
          </div>
          <div className="progress-stat-card modules-completed">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-number">{totalModulesCompleted}</div>
              <div className="stat-label">Modules Completed</div>
            </div>
          </div>
          <div className="progress-stat-card time-spent">
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <div className="stat-number">{totalTimeSpent}</div>
              <div className="stat-label">Minutes Learned</div>
            </div>
          </div>
          <div className="progress-stat-card average-score">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-number">{averageScore}%</div>
              <div className="stat-label">Average Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path Visualization */}
      <div className="learning-path-section">
        <div className="learning-path-header">
          <h2 className="section-title">Learning Path</h2>
          <p className="section-description">
            Follow our structured curriculum designed by coffee experts
          </p>
        </div>
        <div className="learning-modules-grid">
          {LEARNING_MODULES.map((module, index) => {
            const isUnlocked = isModuleUnlocked(module)
            const completionPercentage = getCompletionPercentage(module.id)
            const moduleProgress = getModuleProgress(module.id)
            
            return (
              <div
                key={module.id}
                className={`learning-module-card ${isUnlocked ? 'unlocked' : 'locked'} ${
                  completionPercentage > 0 ? 'in-progress' : ''
                } ${completionPercentage === 100 ? 'completed' : ''}`}
                onClick={() => handleStartModule(module)}
              >
                {/* Module Number & Icon */}
                <div className="module-header">
                  <div className="module-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="module-icon">
                    <span>{getCategoryIcon(module.category)}</span>
                  </div>
                  <div className="module-badges">
                    <span className={`difficulty-badge ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className={`category-badge ${getCategoryColor(module.category)}`}>
                      {module.category}
                    </span>
                    {!isUnlocked && (
                      <span className="locked-badge">
                        🔒 Locked
                      </span>
                    )}
                  </div>
                </div>

                {/* Module Content */}
                <div className="module-content">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>

                  {/* Progress Bar */}
                  {completionPercentage > 0 && (
                    <div className="module-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-percentage">{completionPercentage}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${completionPercentage}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Module Meta */}
                  <div className="module-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span>{module.estimatedTime} min</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📝</span>
                      <span>5 lessons</span>
                    </div>
                    {moduleProgress && (
                      <div className="meta-item mastery">
                        <span className="meta-icon">⭐</span>
                        <span>{moduleProgress.masteryLevel || 'Beginner'}</span>
                      </div>
                    )}
                  </div>

                  {/* Prerequisites */}
                  {module.prerequisites && module.prerequisites.length > 0 && (
                    <div className="module-prerequisites">
                      <span className="prereq-label">Requires:</span>
                      <div className="prereq-tags">
                        {module.prerequisites.map(prereqId => {
                          const prereq = LEARNING_MODULES.find(m => m.id === prereqId)
                          const progress = getModuleProgress(prereqId)
                          const isCompleted = progress ? progress.completedSteps.length > 0 : false
                          return (
                            <span
                              key={prereqId}
                              className={`prereq-tag ${isCompleted ? 'completed' : 'incomplete'}`}
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
                <div className="module-action">
                  {isUnlocked ? (
                    <Link
                      href={`/learning/${module.id}`}
                      className="module-action-button unlocked"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {completionPercentage > 0 ? 'Continue Learning' : 'Start Module'}
                      <span className="action-arrow">→</span>
                    </Link>
                  ) : (
                    <button className="module-action-button locked">
                      Complete Prerequisites
                      <span className="lock-icon">🔒</span>
                    </button>
                  )}
                </div>

                {/* Completion Badge */}
                {completionPercentage === 100 && (
                  <div className="completion-badge">
                    <span>🏆</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Practice Section */}
      <div className="quick-practice-section">
        <div className="quick-practice-card">
          <div className="quick-practice-content">
            <div className="practice-info">
              <h3 className="practice-title">Quick Practice Hub</h3>
              <p className="practice-description">
                Practice specific skills without following the full learning path. Perfect for targeted skill development.
              </p>
            </div>
            <div className="practice-actions">
              <Link href="/practice/ingredients" className="practice-button ingredients">
                <span className="practice-icon">🧪</span>
                <span>Ingredient Quiz</span>
              </Link>
              <Link href="/practice/recipes" className="practice-button recipes">
                <span className="practice-icon">📋</span>
                <span>Recipe Builder</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Tips */}
      <div className="learning-tips-section">
        <div className="tips-header">
          <h3 className="tips-title">💡 Learning Success Tips</h3>
          <p className="tips-subtitle">Maximize your learning potential with these expert recommendations</p>
        </div>
        <div className="tips-grid">
          <div className="tip-card study-mode">
            <div className="tip-icon">📚</div>
            <div className="tip-content">
              <h4 className="tip-title">Study Mode</h4>
              <p className="tip-description">Take your time to read and understand each step before practicing</p>
            </div>
          </div>
          <div className="tip-card practice-regularly">
            <div className="tip-icon">🔄</div>
            <div className="tip-content">
              <h4 className="tip-title">Practice Regularly</h4>
              <p className="tip-description">Consistent practice builds muscle memory and confidence</p>
            </div>
          </div>
          <div className="tip-card learn-mistakes">
            <div className="tip-icon">💡</div>
            <div className="tip-content">
              <h4 className="tip-title">Learn from Mistakes</h4>
              <p className="tip-description">Each mistake is a learning opportunity - review feedback carefully</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
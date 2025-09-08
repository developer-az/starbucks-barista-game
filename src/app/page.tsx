import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-icon">⭐</span>
            <span>Professional Barista Training</span>
          </div>
          <h1 className="hero-title">
            Master the Art of 
            <span className="hero-title-highlight"> Coffee Making</span>
          </h1>
          <p className="hero-description">
            Interactive training game for Starbucks baristas. Learn recipes, perfect techniques, 
            and become a coffee expert through gamified learning experiences designed by industry professionals.
          </p>
          <div className="hero-actions">
            <Link href="/game" className="btn-primary btn-large">
              <span>🎯</span>
              Start Training Game
            </Link>
            <Link href="/recipes" className="btn-secondary btn-large">
              <span>📚</span>
              Browse Recipes
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Signature Recipes</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-label">Training Questions</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">6</div>
              <div className="hero-stat-label">Learning Modules</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Our Training Platform?</h2>
          <p className="section-description">
            Comprehensive learning designed to make you a coffee expert
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <span>🎯</span>
            </div>
            <h3 className="feature-title">Interactive Learning</h3>
            <p className="feature-description">
              Learn through hands-on practice with realistic drink-making scenarios and immediate feedback to accelerate your mastery.
            </p>
            <div className="feature-benefits">
              <div className="feature-benefit">✓ Real-time feedback</div>
              <div className="feature-benefit">✓ Scenario-based learning</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <span>📚</span>
            </div>
            <h3 className="feature-title">Comprehensive Recipes</h3>
            <p className="feature-description">
              Master the most popular Starbucks drinks with step-by-step instructions, ingredient details, and professional techniques.
            </p>
            <div className="feature-benefits">
              <div className="feature-benefit">✓ Step-by-step guides</div>
              <div className="feature-benefit">✓ Professional techniques</div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <span>🏆</span>
            </div>
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-description">
              Monitor your improvement with detailed scoring, performance analytics, and achievement badges to stay motivated.
            </p>
            <div className="feature-benefits">
              <div className="feature-benefit">✓ Detailed analytics</div>
              <div className="feature-benefit">✓ Achievement system</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Drinks Preview */}
      <section className="drinks-section">
        <div className="section-header">
          <h2 className="section-title">Popular Drinks You'll Master</h2>
          <p className="section-description">
            Learn to craft the most beloved Starbucks beverages with precision and confidence
          </p>
        </div>
        <div className="drinks-grid">
          {[
            {
              name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
              description: 'Smooth blonde espresso shaken with brown sugar and cinnamon',
              icon: '🥤',
              category: 'Espresso',
              difficulty: 'Intermediate',
              time: '75s'
            },
            {
              name: 'Caramel Macchiato',
              description: 'Freshly steamed milk with vanilla syrup marked with espresso',
              icon: '☕',
              category: 'Espresso',
              difficulty: 'Intermediate',
              time: '90s'
            },
            {
              name: 'Pumpkin Spice Latte',
              description: 'Signature espresso with pumpkin spice sauce and whipped cream',
              icon: '🎃',
              category: 'Seasonal',
              difficulty: 'Beginner',
              time: '90s'
            }
          ].map((drink, index) => (
            <div key={index} className="drink-card">
              <div className="drink-card-header">
                <div className="drink-icon">
                  <span>{drink.icon}</span>
                </div>
                <div className="drink-badges">
                  <span className="drink-category">{drink.category}</span>
                  {drink.category === 'Seasonal' && <span className="seasonal-badge">🎃 Limited</span>}
                </div>
              </div>
              <div className="drink-content">
                <h3 className="drink-name">{drink.name}</h3>
                <p className="drink-description">{drink.description}</p>
                <div className="drink-meta">
                  <div className="drink-meta-item">
                    <span className="drink-meta-icon">⚡</span>
                    <span>{drink.difficulty}</span>
                  </div>
                  <div className="drink-meta-item">
                    <span className="drink-meta-icon">⏱️</span>
                    <span>{drink.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-header">
            <h2 className="cta-title">Ready to Become a Barista Pro?</h2>
            <p className="cta-description">
              Start your journey with our interactive training game and master the art of coffee making. 
              Join thousands of baristas who have elevated their skills.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/game" className="btn-secondary btn-large">
              <span>🚀</span>
              Begin Your Training
            </Link>
            <Link href="/learning" className="btn-outline btn-large">
              <span>📖</span>
              Explore Learning Path
            </Link>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span>🎓</span>
              <span>Professional Certification</span>
            </div>
            <div className="cta-feature">
              <span>⏰</span>
              <span>Self-Paced Learning</span>
            </div>
            <div className="cta-feature">
              <span>📱</span>
              <span>Mobile Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}






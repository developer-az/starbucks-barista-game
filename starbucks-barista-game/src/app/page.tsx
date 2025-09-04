import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-starbucks-darkgreen">
            Master the Art of Coffee Making
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive training game for Starbucks baristas. Learn recipes, perfect techniques, 
            and become a coffee expert through gamified learning experiences.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/game" className="btn-primary text-lg px-8 py-4">
            Start Training Game
          </Link>
          <Link href="/recipes" className="btn-secondary text-lg px-8 py-4">
            Browse Recipes
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center space-y-4">
          <div className="w-16 h-16 bg-starbucks-green rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-starbucks-darkgreen">Interactive Learning</h3>
          <p className="text-gray-600">
            Learn through hands-on practice with realistic drink-making scenarios and immediate feedback.
          </p>
        </div>

        <div className="card text-center space-y-4">
          <div className="w-16 h-16 bg-starbucks-green rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-2xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold text-starbucks-darkgreen">Comprehensive Recipes</h3>
          <p className="text-gray-600">
            Master the most popular Starbucks drinks with step-by-step instructions and ingredient details.
          </p>
        </div>

        <div className="card text-center space-y-4">
          <div className="w-16 h-16 bg-starbucks-green rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-2xl">🏆</span>
          </div>
          <h3 className="text-xl font-semibold text-starbucks-darkgreen">Progress Tracking</h3>
          <p className="text-gray-600">
            Monitor your improvement with detailed scoring and performance analytics.
          </p>
        </div>
      </section>

      {/* Popular Drinks Preview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-starbucks-darkgreen text-center">
          Popular Drinks You'll Master
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
              description: 'Smooth blonde espresso shaken with brown sugar and cinnamon',
              image: '/placeholder-shaken-espresso.jpg',
              category: 'Espresso'
            },
            {
              name: 'Caramel Macchiato',
              description: 'Freshly steamed milk with vanilla syrup marked with espresso',
              image: '/placeholder-macchiato.jpg',
              category: 'Espresso'
            },
            {
              name: 'Pumpkin Spice Latte',
              description: 'Signature espresso with pumpkin spice sauce and whipped cream',
              image: '/placeholder-psl.jpg',
              category: 'Seasonal'
            }
          ].map((drink, index) => (
            <div key={index} className="game-card space-y-4">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                {drink.image.startsWith('http') ? (
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-4xl">☕</span>
                )}
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-starbucks-gold text-white text-sm rounded-full">
                  {drink.category}
                </span>
                <h3 className="font-semibold text-lg text-starbucks-darkgreen">
                  {drink.name}
                </h3>
                <p className="text-gray-600 text-sm">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 bg-starbucks-green text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold">Ready to Become a Barista Pro?</h2>
        <p className="text-xl opacity-90">
          Start your journey with our interactive training game and master the art of coffee making.
        </p>
        <Link href="/game" className="btn-secondary text-lg px-8 py-4 inline-block">
          Begin Your Training
        </Link>
      </section>
    </div>
  )
}


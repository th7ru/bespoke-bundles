// Hero.jsx
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-[#F0E6FF] min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="font-serif text-6xl text-indigo-900 mb-6">
            Your Bundle...Your Way
          </h1>
          <p className="text-xl text-indigo-800/80 mb-8 max-w-2xl mx-auto">
            Create personalized gift bundles that speak from the heart. Choose your items,
            customize your message, and make every gift uniquely special.
          </p>
          <Link
            to="/build"
            className="bg-indigo-900 text-white px-8 py-3 rounded-lg inline-block
                     hover:bg-indigo-800 transition duration-300"
          >
            Start Building
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

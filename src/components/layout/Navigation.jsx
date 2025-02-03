
// Navigation.jsx
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 text-indigo-900 font-serif text-2xl">
            Bespoke Bundles
          </Link>
          <div className="flex space-x-8">
            <Link to="/build" className="text-indigo-900 hover:text-indigo-700">Create</Link>
            <Link to="/about" className="text-indigo-900 hover:text-indigo-700">About</Link>
            <Link to="/contact" className="text-indigo-900 hover:text-indigo-700">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

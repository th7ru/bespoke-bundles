
// Features.jsx
import { Package, Camera, Heart } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Customize Your Bundle",
      description: "Choose exactly what goes into your gift bundle"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Add Personal Photos",
      description: "Include your favorite memories in photo strips"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Make It Special",
      description: "Add personal messages and choose unique designs"
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-indigo-900 text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="text-indigo-900 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-indigo-800/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
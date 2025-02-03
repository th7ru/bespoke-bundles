// StandardBundleIntro.jsx
import React from 'react';
import { BookOpen, Camera, Mail, Package, Sparkles, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StandardBundleIntro = () => {
  const navigate = useNavigate();
  
  const bundleItems = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      name: 'Bookmark',
      description: 'Personalized bookmark with your custom text'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      name: 'Photo Strips',
      description: '2 photo strips with 3 photos each'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      name: 'Card',
      description: 'Customizable message card'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      name: 'Crochet Keychain',
      description: 'Choose from 3 unique designs'
    },
    {
      icon: <Package className="h-8 w-8" />,
      name: 'Stress Ball',
      description: 'Pick from 2 stress ball designs'
    },
    {
      icon: <Gift className="h-8 w-8" />,
      name: 'Claw Clip',
      description: 'Standard design claw clip'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0E6FF] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-indigo-900 text-center mb-6">
          What's in the Standard Bundle?
        </h1>
        <p className="text-center text-indigo-800/70 mb-12">
          All these items included in your bundle for $25
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bundleItems.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6
                                    hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4">
                <div className="text-indigo-900">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900">{item.name}</h3>
                  <p className="text-indigo-800/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 inline-block mb-8">
            <h2 className="text-2xl font-serif text-indigo-900 mb-2">Bundle Price</h2>
            <p className="text-3xl font-bold text-indigo-900">$25.00</p>
            <p className="text-indigo-800/70">Free shipping included</p>
          </div>

          <div>
          <button
              onClick={() => navigate('/build/standard/customize')}
              className="px-8 py-3 bg-indigo-900 text-white rounded-lg
                       hover:bg-indigo-800 transition duration-300"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardBundleIntro;
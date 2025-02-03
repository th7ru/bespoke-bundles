// Build.jsx
import { useNavigate } from 'react-router-dom';
import { Package, Sparkles } from 'lucide-react';

const Build = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F0E6FF] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-indigo-900 text-center mb-12">
          Choose Your Bundle Type
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Bundle */}
          <div 
            onClick={() => navigate('/build/standard')}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center
                     cursor-pointer hover:shadow-lg transition duration-300"
          >
            <Package className="h-12 w-12 text-indigo-900 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-indigo-900 mb-4">Standard Bundle</h2>
            <p className="text-indigo-800/70 mb-4">
              Our classic bundle with all items included. Just customize your designs and messages.
            </p>
            <p className="font-semibold text-indigo-900">$25.00</p>
          </div>

          {/* Custom Bundle */}
          <div 
            onClick={() => navigate('/build/custom')}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center
                     cursor-pointer hover:shadow-lg transition duration-300"
          >
            <Sparkles className="h-12 w-12 text-indigo-900 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-indigo-900 mb-4">Custom Bundle</h2>
            <p className="text-indigo-800/70 mb-4">
              Choose your items and quantities. Build your perfect bundle from scratch.
            </p>
            <p className="font-semibold text-indigo-900">Starting at $15.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
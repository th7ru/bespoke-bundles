// BundleBuilder.jsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Camera, Mail, Package, Sparkles, Box } from 'lucide-react';
import PhotoUpload from './PhotoUpload';
import ItemCustomization from './ItemCustomization';
import BundlePreview from './BundlePreview';
import { useNavigate } from 'react-router-dom';

const BundleBuilder = ({ mode = 'custom', initialStep = 1 }) => {
  const [step, setStep] = useState(initialStep);
  const [bundle, setBundle] = useState({
    bookmark: { included: mode === 'standard', quantity: 1, text: '' },
    photoStrips: { included: mode === 'standard', quantity: 1, photos: [] },
    card: { included: mode === 'standard', quantity: 1, text: '' },
    crochetBalls: { included: mode === 'standard', quantity: 1, design: '' },
    stressBall: { included: mode === 'standard', quantity: 1, design: '' },
    clawClip: { included: true, quantity: 1 } // Always included
  });
  
  const navigate = useNavigate();

  const items = [
    {
      id: 'bookmark',
      name: 'Bookmark',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Custom text bookmark'
    },
    {
      id: 'photoStrips',
      name: 'Photo Strips',
      icon: <Camera className="h-6 w-6" />,
      description: '2 strips, 3 photos each'
    },
    {
      id: 'card',
      name: 'Card',
      icon: <Mail className="h-6 w-6" />,
      description: 'Personalized message card'
    },
    {
      id: 'crochetBalls',
      name: 'Crochet Keychain',
      icon: <Sparkles className="h-6 w-6" />,
      description: 'Choose from 3 unique designs'
    },
    {
      id: 'stressBall',
      name: 'Stress Ball',
      icon: <Package className="h-6 w-6" />,
      description: 'Pick from 2 stress ball designs'
    },
    {
      id: 'clawClip',
      name: 'Claw Clip',
      icon: <Box className="h-6 w-6" />,
      description: 'Standard design',
      default: true
    }
  ];

  const calculateTotal = () => {
    if (mode === 'standard') return 25;
    
    let total = 0;
    Object.entries(bundle).forEach(([_, itemData]) => {
      if (itemData.included) {
        total += 5; // Base price for each item
        if (itemData.quantity > 1) {
          total += (itemData.quantity - 1) * 2; // Additional items cost $2 extra
        }
      }
    });
    return total;
  };

  const handleQuantityChange = (itemId, change) => {
    if (mode === 'standard') return;
    
    setBundle(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: Math.max(1, prev[itemId].quantity + change)
      }
    }));
  };

  return (
    <div className="min-h-screen bg-[#F0E6FF] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-indigo-900 text-center mb-12">
          {mode === 'standard' ? 'Standard Bundle' : 'Design Your Perfect Bundle'}
        </h1>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center
                ${step >= s ? 'bg-indigo-900 text-white' : 'bg-indigo-100 text-indigo-400'}`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`h-1 w-24 mx-2 
                  ${step > s ? 'bg-indigo-900' : 'bg-indigo-100'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Item Selection (Custom mode only) */}
        {mode === 'custom' && step === 1 && (
          <div className="grid gap-6">
            {items.map(item => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition duration-300">
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-indigo-900">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">{item.name}</h3>
                      <p className="text-indigo-800/70">{item.description}</p>
                      <p className="text-sm text-indigo-900 mt-1">Base price: $5.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {bundle[item.id].included && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-2 py-1 rounded bg-indigo-100 text-indigo-900"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{bundle[item.id].quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-2 py-1 rounded bg-indigo-100 text-indigo-900"
                        >
                          +
                        </button>
                      </div>
                    )}
                    {!item.default ? (
                      <button
                        onClick={() => setBundle(prev => ({
                          ...prev,
                          [item.id]: {
                            ...prev[item.id],
                            included: !prev[item.id].included
                          }
                        }))}
                        className={`px-4 py-2 rounded-lg transition duration-300 
                          ${bundle[item.id].included 
                            ? 'bg-indigo-900 text-white hover:bg-indigo-800' 
                            : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'}`}
                      >
                        {bundle[item.id].included ? 'Remove' : 'Add'}
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                        Default
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Customization Step */}
        {step === 2 && (
          <div className="space-y-8">
            {bundle.photoStrips.included && (
              <PhotoUpload bundle={bundle} setBundle={setBundle} />
            )}
            <ItemCustomization bundle={bundle} setBundle={setBundle} />
          </div>
        )}

        {/* Review Step */}
        {step === 3 && (
          <div>
            <BundlePreview 
              bundle={bundle} 
              mode={mode}
              total={calculateTotal()} 
            />
            <div className="mt-8 text-center">
            <button 
                onClick={() => {
                  // You can add order processing logic here
                  console.log('Bundle ordered:', bundle);
                  navigate('/thank-you');
                }}
                className="bg-indigo-900 text-white px-8 py-3 rounded-lg 
                         hover:bg-indigo-800 transition duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between">
          <button
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            className={`px-6 py-2 rounded-lg transition duration-300 
              ${step === 1 ? 'invisible' : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'}`}
          >
            Back
          </button>
          {step < 3 && (
            <button
              onClick={() => setStep(prev => Math.min(3, prev + 1))}
              className="px-6 py-2 rounded-lg bg-indigo-900 text-white 
                       hover:bg-indigo-800 transition duration-300"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BundleBuilder;
// ItemCustomization.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Mail, Sparkles } from 'lucide-react';

const ItemCustomization = ({ bundle, setBundle }) => {
  const stressBallDesigns = [
    { 
      id: 'kuromi',
      name: 'Purple Character',
      image: '/images/stress-ball-1.jpg', // You'll need to store these images in your public folder
      description: 'Purple and white character design'
    },
    {
      id: 'melody',
      name: 'Pink Character',
      image: '/images/stress-ball-2.jpg',
      description: 'Pink and white character design'
    }
  ];

  const crochetDesigns = [
    {
      id: 'bee',
      name: 'Pink Whale',
      image: '/images/crochet-1.png',
      description: 'Simple pink whale design'
    },
    {
      id: 'bunny',
      name: 'Pink Bunny',
      image: '/images/crochet-3.png',
      description: 'Pink and white bunny design'
    },
    {
      id: 'whale',
      name: 'Striped Bee',
      image: '/images/crochet-2.png',
      description: 'Pink and black striped bee design '
    }
  ];

  const handleDesignSelect = (itemType, designId) => {
    setBundle(prev => ({
      ...prev,
      [itemType]: {
        ...prev[itemType],
        design: designId
      }
    }));
  };

  return (
    <div className="space-y-8">
      {/* Text Customization for Bookmark */}
      {bundle.bookmark?.included && (
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-900" />
              <h3 className="text-xl font-semibold text-indigo-900">Bookmark Text</h3>
            </div>
            <textarea
              value={bundle.bookmark.text}
              onChange={(e) => setBundle(prev => ({
                ...prev,
                bookmark: { ...prev.bookmark, text: e.target.value }
              }))}
              placeholder="Enter text for your bookmark..."
              className="w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 
                       focus:ring-indigo-500 focus:border-transparent"
              rows={2}
            />
          </CardContent>
        </Card>
      )}

      {/* Card Message */}
      {bundle.card?.included && (
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="h-6 w-6 text-indigo-900" />
              <h3 className="text-xl font-semibold text-indigo-900">Card Message</h3>
            </div>
            <textarea
              value={bundle.card.text}
              onChange={(e) => setBundle(prev => ({
                ...prev,
                card: { ...prev.card, text: e.target.value }
              }))}
              placeholder="Write your message..."
              className="w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 
                       focus:ring-indigo-500 focus:border-transparent"
              rows={4}
            />
          </CardContent>
        </Card>
      )}

      {/* Stress Ball Designs */}
      {bundle.stressBall?.included && (
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="h-6 w-6 text-indigo-900" />
              <h3 className="text-xl font-semibold text-indigo-900">Choose Stress Ball Design</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stressBallDesigns.map(design => (
                <button
                  key={design.id}
                  onClick={() => handleDesignSelect('stressBall', design.id)}
                  className={`p-4 rounded-lg border-2 transition duration-300 flex flex-col items-center
                    ${bundle.stressBall.design === design.id
                      ? 'border-indigo-900 bg-indigo-50'
                      : 'border-indigo-200 hover:border-indigo-400'}`}
                >
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-32 h-32 object-cover rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-indigo-900">{design.name}</h4>
                  <p className="text-sm text-indigo-800/70">{design.description}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Crochet Keychain Designs */}
      {bundle.crochetBalls?.included && (
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="h-6 w-6 text-indigo-900" />
              <h3 className="text-xl font-semibold text-indigo-900">Choose Crochet Keychain Design</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {crochetDesigns.map(design => (
                <button
                  key={design.id}
                  onClick={() => handleDesignSelect('crochetBalls', design.id)}
                  className={`p-4 rounded-lg border-2 transition duration-300 flex flex-col items-center
                    ${bundle.crochetBalls.design === design.id
                      ? 'border-indigo-900 bg-indigo-50'
                      : 'border-indigo-200 hover:border-indigo-400'}`}
                >
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-32 h-32 object-cover rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-indigo-900">{design.name}</h4>
                  <p className="text-sm text-indigo-800/70">{design.description}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ItemCustomization;
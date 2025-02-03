// BundlePreview.jsx
import React from 'react';
import { BookOpen, Camera, Mail, Package, Sparkles, Box } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BundlePreview = ({ bundle, mode = 'custom', total }) => {
  const getItemIcon = (itemType) => {
    switch (itemType) {
      case 'bookmark':
        return <BookOpen className="h-6 w-6" />;
      case 'photoStrips':
        return <Camera className="h-6 w-6" />;
      case 'card':
        return <Mail className="h-6 w-6" />;
      case 'crochetBalls':
        return <Sparkles className="h-6 w-6" />;
      case 'stressBall':
        return <Package className="h-6 w-6" />;
      case 'clawClip':
        return <Box className="h-6 w-6" />;
      default:
        return <Box className="h-6 w-6" />;
    }
  };

  const getItemDetails = (itemType, itemData) => {
    switch (itemType) {
      case 'bookmark':
        return itemData.text ? `Text: "${itemData.text}"` : 'No text added';
      case 'photoStrips':
        const photoCount = itemData.photos?.filter(p => p)?.length || 0;
        return `${photoCount}/6 photos uploaded`;
      case 'card':
        return itemData.text ? 'Message added' : 'No message added';
      case 'crochetBalls':
        return itemData.design ? `Design: ${itemData.design}` : 'No design selected';
      case 'stressBall':
        return itemData.design ? `Design: ${itemData.design}` : 'No design selected';
      case 'clawClip':
        return 'Standard design';
      default:
        return '';
    }
  };

  const includedItems = Object.entries(bundle).filter(([_, data]) => data.included);
  const bundlePrice = mode === 'standard' ? 25 : total;

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-2xl font-serif text-indigo-900 mb-6">Your Bundle Summary</h2>
        
        <div className="space-y-4">
          {includedItems.map(([itemType, itemData]) => (
            <div key={itemType} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="text-indigo-900">
                {getItemIcon(itemType)}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-indigo-900 capitalize">
                  {itemType.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-indigo-800/70">
                  {getItemDetails(itemType, itemData)}
                </p>
              </div>
              {mode === 'custom' && itemData.quantity > 1 && (
                <div className="text-sm text-indigo-900 font-medium">
                  Quantity: {itemData.quantity}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-indigo-100 rounded-lg">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-indigo-900 mb-2">
              Bundle Price
            </h4>
            <p className="text-2xl font-bold text-indigo-900">
              ${bundlePrice}.00
            </p>
            <p className="text-sm text-indigo-800/70 mt-1">
              Free shipping included
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BundlePreview;
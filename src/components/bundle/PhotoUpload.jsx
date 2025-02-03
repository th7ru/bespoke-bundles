// PhotoUpload.jsx
import React from 'react';
import { Camera, X, Upload } from 'lucide-react';
import { Card, CardContent } from '../ui/Card.jsx';

const PhotoUpload = ({ bundle, setBundle }) => {
  const handlePhotoUpload = (stripIndex, photoIndex, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhotos = [...bundle.photoStrips.photos];
        newPhotos[stripIndex * 3 + photoIndex] = e.target.result;
        setBundle(prev => ({
          ...prev,
          photoStrips: {
            ...prev.photoStrips,
            photos: newPhotos
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (stripIndex, photoIndex) => {
    const newPhotos = [...bundle.photoStrips.photos];
    newPhotos[stripIndex * 3 + photoIndex] = null;
    setBundle(prev => ({
      ...prev,
      photoStrips: {
        ...prev.photoStrips,
        photos: newPhotos
      }
    }));
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <Camera className="h-8 w-8 text-indigo-900 mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-indigo-900 mb-2">
            Upload Your Photos
          </h2>
          <p className="text-indigo-800/70">
            Choose 6 photos for your photo strips (3 per strip)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map(stripIndex => (
            <div key={stripIndex} className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-indigo-900 font-medium mb-4">
                Photo Strip {stripIndex + 1}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[0, 1, 2].map(photoIndex => (
                  <div
                    key={photoIndex}
                    className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden
                             border-2 border-dashed border-indigo-200 hover:border-indigo-400
                             transition duration-300"
                  >
                    {bundle.photoStrips.photos[stripIndex * 3 + photoIndex] ? (
                      <div className="relative h-full">
                        <img
                          src={bundle.photoStrips.photos[stripIndex * 3 + photoIndex]}
                          alt={`Photo ${stripIndex * 3 + photoIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => removePhoto(stripIndex, photoIndex)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full
                                   hover:bg-red-600 transition duration-300"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                        <Upload className="h-6 w-6 text-indigo-400 mb-2" />
                        <span className="text-sm text-indigo-400">Upload Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handlePhotoUpload(stripIndex, photoIndex, e)}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoUpload;
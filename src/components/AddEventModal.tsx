import { useState, useEffect, useRef } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { Event } from '../App';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: Omit<Event, 'id'>) => void;
  preselectedDate: string | null;
}

export function AddEventModal({ isOpen, onClose, onAddEvent, preselectedDate }: AddEventModalProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<Event['type']>('other');
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedDate) {
      setDate(preselectedDate);
    } else {
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
    }
  }, [preselectedDate]);

  // Compress image to reduce size for Firestore storage
  const compressImage = (file: File, maxWidth = 800, quality = 0.7): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Convert to compressed base64
        const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedBase64);
      };
      
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      for (const file of fileArray) {
        try {
          const compressedImage = await compressImage(file);
          setImages(prev => [...prev, compressedImage]);
        } catch (error) {
          console.error('Error compressing image:', error);
          alert('Failed to process image. Please try a smaller image.');
        }
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date) {
      onAddEvent({
        title,
        date,
        description: description || undefined,
        type,
        images: images.length > 0 ? images : undefined,
      });
      setTitle('');
      setDate('');
      setDescription('');
      setType('other');
      setImages([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 border-2 border-pink-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-pink-600">Add Special Moment</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-pink-50 rounded-lg transition-colors"
          >
            <X className="text-gray-500" size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 mb-2">
              Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
              placeholder="Our first date, Anniversary, etc."
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Date *
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-gray-700 mb-2">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as Event['type'])}
              className="w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
            >
              <option value="other">Other</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date</option>
              <option value="special">Special Moment</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Description (optional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors resize-none"
              placeholder="Add a note about this special moment..."
              rows={3}
            />
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-gray-700 mb-2">
              Photos (optional)
            </label>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-3 border-2 border-dashed border-pink-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 text-gray-600"
            >
              <Upload size={20} />
              Upload Photos
            </button>

            {/* Image Preview Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {images.map((image, index) => (
                  <div key={index} className="relative group aspect-square">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg border-2 border-pink-100"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Add Memory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
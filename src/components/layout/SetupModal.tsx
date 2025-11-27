// src/components/layout/SetupModal.tsx
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { getTodayString } from '@/lib/utils';

interface SetupModalProps {
  isOpen: boolean;
  onSetStartDate: (date: string) => void;
  currentStartDate?: string | null;
}

export function SetupModal({ isOpen, onSetStartDate, currentStartDate }: SetupModalProps) {
  const [date, setDate] = useState('');

  useEffect(() => {
    if (currentStartDate) {
      setDate(currentStartDate);
    } else {
      setDate(getTodayString());
    }
  }, [currentStartDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      onSetStartDate(date);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-2 border-pink-200">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-red-500 fill-red-500" size={48} />
          </div>
          <h2 className="text-pink-600 mb-2">
            {currentStartDate ? 'Change Start Date' : 'Welcome to Your Love Story'}
          </h2>
          <p className="text-gray-600">
            {currentStartDate 
              ? 'Update when your journey together began'
              : 'When did your journey together begin?'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="startDate" className="block text-gray-700 mb-2 text-center">
              Our Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-center text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            {currentStartDate ? 'Update Date' : 'Begin Our Story'}
          </button>
        </form>
      </div>
    </div>
  );
}

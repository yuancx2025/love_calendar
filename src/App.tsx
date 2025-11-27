// src/App.tsx
import { useState } from 'react';
import { Heart, Settings } from 'lucide-react';

// Import from new organized structure
import { Calendar } from '@/components/calendar';
import { EventList, AddEventModal } from '@/components/events';
import { DayCounter, SetupModal } from '@/components/layout';
import { useEvents, useSettings } from '@/hooks';
import { formatFullDate } from '@/lib/utils';
import type { NewEvent } from '@/types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Use custom hooks for data management
  const { events, addEvent, deleteEvent } = useEvents();
  const { relationshipStart, loading, needsSetup, setStartDate } = useSettings();

  const handleSetStartDate = async (date: string) => {
    try {
      await setStartDate(date);
      setIsSetupModalOpen(false);
    } catch {
      alert('Failed to save start date. Please try again.');
    }
  };

  const handleAddEvent = async (event: NewEvent) => {
    try {
      await addEvent(event);
      setIsModalOpen(false);
      setSelectedDate(null);
    } catch {
      alert('Failed to add event. Please try again.');
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await deleteEvent(id);
    } catch {
      alert('Failed to delete event. Please try again.');
    }
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="text-pink-500 fill-pink-500 w-16 h-16 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading your love story...</p>
        </div>
      </div>
    );
  }

  // Setup state - show setup modal
  if (needsSetup && !relationshipStart) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <SetupModal
          isOpen={true}
          onSetStartDate={handleSetStartDate}
        />
      </div>
    );
  }

  // No relationship start date
  if (!relationshipStart) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="text-red-500 fill-red-500" size={32} />
            <h1 className="text-pink-600">Our Love Story</h1>
            <Heart className="text-red-500 fill-red-500" size={32} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-600">Together since {formatFullDate(relationshipStart)}</p>
            <button
              onClick={() => setIsSetupModalOpen(true)}
              className="p-1 hover:bg-white/50 rounded-lg transition-colors"
              title="Change start date"
            >
              <Settings size={16} className="text-gray-400 hover:text-pink-500" />
            </button>
          </div>
        </div>

        {/* Day Counter */}
        <DayCounter startDate={relationshipStart} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Calendar
              events={events}
              startDate={relationshipStart}
              onDateClick={handleDateClick}
              onAddEvent={() => setIsModalOpen(true)}
            />
          </div>

          {/* Events List */}
          <div className="lg:col-span-1">
            <EventList
              events={events}
              onDeleteEvent={handleDeleteEvent}
            />
          </div>
        </div>

        {/* Add Event Modal */}
        {isModalOpen && (
          <AddEventModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedDate(null);
            }}
            onAddEvent={handleAddEvent}
            preselectedDate={selectedDate}
          />
        )}

        {/* Setup Modal */}
        <SetupModal
          isOpen={isSetupModalOpen}
          onSetStartDate={handleSetStartDate}
          currentStartDate={relationshipStart}
        />
      </div>
    </div>
  );
}

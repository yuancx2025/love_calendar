// src/App.tsx
import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  setDoc,
  getDoc,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from './firebase-config';
import { Calendar } from './components/Calendar';
import { DayCounter } from './components/DayCounter';
import { EventList } from './components/EventList';
import { AddEventModal } from './components/AddEventModal';
import { SetupModal } from './components/SetupModal';
import { Heart, Settings } from 'lucide-react';

export interface Event {
  id: string;
  date: string;
  title: string;
  description?: string;
  type: 'anniversary' | 'date' | 'special' | 'other';
  images?: string[];
}

export default function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [relationshipStart, setRelationshipStart] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load relationship start date from Firestore
  useEffect(() => {
    const loadStartDate = async () => {
      try {
        const settingsRef = doc(db, 'settings', 'main');
        const settingsSnap = await getDoc(settingsRef);
        
        if (settingsSnap.exists()) {
          const startDate = settingsSnap.data().relationshipStartDate;
          setRelationshipStart(startDate);
        } else {
          setIsSetupModalOpen(true);
        }
      } catch (error) {
        console.error('Error loading start date:', error);
        setIsSetupModalOpen(true);
      } finally {
        setLoading(false);
      }
    };

    loadStartDate();
  }, []);

  // Real-time listener for events
  useEffect(() => {
    const eventsQuery = query(
      collection(db, 'events'),
      orderBy('date', 'desc')
    );

    const unsubscribe = onSnapshot(
      eventsQuery,
      (snapshot) => {
        const eventsData: Event[] = [];
        snapshot.forEach((doc) => {
          eventsData.push({
            id: doc.id,
            ...doc.data()
          } as Event);
        });
        setEvents(eventsData);
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const handleSetStartDate = async (date: string) => {
    try {
      const settingsRef = doc(db, 'settings', 'main');
      await setDoc(settingsRef, {
        relationshipStartDate: date
      });
      setRelationshipStart(date);
      setIsSetupModalOpen(false);
    } catch (error) {
      console.error('Error setting start date:', error);
      alert('Failed to save start date. Please try again.');
    }
  };

  const handleAddEvent = async (event: Omit<Event, 'id'>) => {
    try {
      // Remove undefined fields - Firestore doesn't accept undefined values
      const eventData: Record<string, unknown> = {
        title: event.title,
        date: event.date,
        type: event.type,
        createdAt: new Date().toISOString()
      };
      if (event.description) eventData.description = event.description;
      if (event.images && event.images.length > 0) eventData.images = event.images;
      
      await addDoc(collection(db, 'events'), eventData);
      setIsModalOpen(false);
      setSelectedDate(null);
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'events', id));
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

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

  if (!relationshipStart && isSetupModalOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <SetupModal
          isOpen={isSetupModalOpen}
          onSetStartDate={handleSetStartDate}
        />
      </div>
    );
  }

  if (!relationshipStart) return null;

  const formatStartDate = (dateStr: string) => {
    // Parse as local date to avoid timezone issues
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

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
            <p className="text-gray-600">Together since {formatStartDate(relationshipStart)}</p>
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

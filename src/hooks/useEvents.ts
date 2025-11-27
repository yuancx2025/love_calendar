// src/hooks/useEvents.ts
// Custom hook for managing events with Firebase
import { useState, useEffect, useCallback } from 'react';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Event, NewEvent } from '@/types';

interface UseEventsReturn {
  events: Event[];
  loading: boolean;
  error: string | null;
  addEvent: (event: NewEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
}

/**
 * Custom hook for real-time event management with Firebase
 */
export function useEvents(): UseEventsReturn {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error loading events:', err);
        setError('Failed to load events');
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const addEvent = useCallback(async (event: NewEvent) => {
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
    } catch (err) {
      console.error('Error adding event:', err);
      throw new Error('Failed to add event. Please try again.');
    }
  }, []);

  const deleteEvent = useCallback(async (id: string) => {
    try {
      await deleteDoc(doc(db, 'events', id));
    } catch (err) {
      console.error('Error deleting event:', err);
      throw new Error('Failed to delete event. Please try again.');
    }
  }, []);

  return {
    events,
    loading,
    error,
    addEvent,
    deleteEvent
  };
}

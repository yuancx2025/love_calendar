// src/types/index.ts
// Centralized type definitions for the application

/**
 * Event types that can be tracked in the calendar
 */
export type EventType = 'anniversary' | 'date' | 'special' | 'other';

/**
 * Represents a special moment or event in the couple's journey
 */
export interface Event {
  id: string;
  date: string;
  title: string;
  description?: string;
  type: EventType;
  images?: string[];
  createdAt?: string;
}

/**
 * Event data for creating a new event (without id)
 */
export type NewEvent = Omit<Event, 'id'>;

/**
 * Application settings stored in Firestore
 */
export interface AppSettings {
  relationshipStartDate: string;
}

/**
 * Filter options for the event list
 */
export type EventFilter = 'all' | 'upcoming' | 'past';

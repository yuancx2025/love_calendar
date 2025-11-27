// src/hooks/useSettings.ts
// Custom hook for managing app settings with Firebase
import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { AppSettings } from '@/types';

interface UseSettingsReturn {
  relationshipStart: string | null;
  loading: boolean;
  error: string | null;
  needsSetup: boolean;
  setStartDate: (date: string) => Promise<void>;
}

/**
 * Custom hook for managing app settings (relationship start date)
 */
export function useSettings(): UseSettingsReturn {
  const [relationshipStart, setRelationshipStart] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  // Load settings on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settingsRef = doc(db, 'settings', 'main');
        const settingsSnap = await getDoc(settingsRef);

        if (settingsSnap.exists()) {
          const data = settingsSnap.data() as AppSettings;
          setRelationshipStart(data.relationshipStartDate);
          setNeedsSetup(false);
        } else {
          setNeedsSetup(true);
        }
      } catch (err) {
        console.error('Error loading settings:', err);
        setError('Failed to load settings');
        setNeedsSetup(true);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const setStartDate = useCallback(async (date: string) => {
    try {
      const settingsRef = doc(db, 'settings', 'main');
      await setDoc(settingsRef, {
        relationshipStartDate: date
      });
      setRelationshipStart(date);
      setNeedsSetup(false);
      setError(null);
    } catch (err) {
      console.error('Error setting start date:', err);
      throw new Error('Failed to save start date. Please try again.');
    }
  }, []);

  return {
    relationshipStart,
    loading,
    error,
    needsSetup,
    setStartDate
  };
}

// src/lib/utils.ts
// Shared utility functions
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with tailwind-merge support
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Parse a YYYY-MM-DD date string as local date (not UTC)
 * This avoids timezone issues when displaying dates
 */
export function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Format a date string for display
 */
export function formatDate(dateStr: string, options?: Intl.DateTimeFormatOptions): string {
  const date = parseLocalDate(dateStr);
  return date.toLocaleDateString('en-US', options ?? {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Format a date string for full display (e.g., "January 1, 2024")
 */
export function formatFullDate(dateStr: string): string {
  return formatDate(dateStr, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Get today's date as a YYYY-MM-DD string
 */
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Create a YYYY-MM-DD date string from year, month, and day
 */
export function createDateString(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Calculate the number of days between a start date and today
 */
export function calculateDaysBetween(startDateStr: string): number {
  const start = parseLocalDate(startDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Break down days into years, months, and remaining days
 */
export function breakdownDays(totalDays: number): { years: number; months: number; days: number } {
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;
  return { years, months, days };
}

// src/components/calendar/Calendar.tsx
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import type { Event, EventType } from '@/types';
import { createDateString } from '@/lib/utils';

interface CalendarProps {
  events: Event[];
  startDate: string;
  onDateClick: (date: string) => void;
  onAddEvent: () => void;
}

export function Calendar({ events, startDate, onDateClick, onAddEvent }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = createDateString(year, month + 1, day);
    return events.filter(event => event.date === dateStr);
  };

  const isRelationshipStart = (day: number) => {
    const dateStr = createDateString(year, month + 1, day);
    return dateStr === startDate;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const handleDayClick = (day: number) => {
    const dateStr = createDateString(year, month + 1, day);
    onDateClick(dateStr);
  };

  const getEventColor = (type: EventType) => {
    switch (type) {
      case 'anniversary':
        return 'bg-red-500';
      case 'date':
        return 'bg-pink-500';
      case 'special':
        return 'bg-purple-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-100">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
        >
          <ChevronLeft className="text-pink-600" size={24} />
        </button>
        
        <h2 className="text-pink-600">
          {monthNames[month]} {year}
        </h2>
        
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
        >
          <ChevronRight className="text-pink-600" size={24} />
        </button>
      </div>

      {/* Add Event Button */}
      <button
        onClick={onAddEvent}
        className="w-full mb-4 py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add Special Moment
      </button>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`aspect-square p-2 rounded-lg ${
              day
                ? 'cursor-pointer hover:bg-pink-50 transition-colors'
                : ''
            }`}
            onClick={() => day && handleDayClick(day)}
          >
            {day && (
              <div className="h-full flex flex-col">
                <div
                  className={`text-center mb-1 ${
                    isToday(day)
                      ? 'bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto'
                      : isRelationshipStart(day)
                      ? 'text-red-500'
                      : 'text-gray-700'
                  }`}
                >
                  {day}
                </div>
                <div className="flex-1 flex flex-wrap gap-1 justify-center">
                  {getEventsForDate(day).map(event => (
                    <div
                      key={event.id}
                      className={`w-1.5 h-1.5 rounded-full ${getEventColor(event.type)}`}
                      title={event.title}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-pink-100 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-gray-600">Anniversary</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500" />
          <span className="text-gray-600">Date</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-gray-600">Special</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-gray-600">Other</span>
        </div>
      </div>
    </div>
  );
}

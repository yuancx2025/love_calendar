// src/components/layout/DayCounter.tsx
import { useEffect, useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { calculateDaysBetween, breakdownDays } from '@/lib/utils';

interface DayCounterProps {
  startDate: string;
}

export function DayCounter({ startDate }: DayCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const diffDays = calculateDaysBetween(startDate);
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, [startDate]);

  const { years, months, days: finalDays } = breakdownDays(days);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-pink-200">
      <div className="flex items-center justify-center gap-2 mb-4">
        <CalendarIcon className="text-pink-500" size={24} />
        <h2 className="text-pink-600">Days Together</h2>
      </div>
      
      <div className="mb-6">
        <div className="text-6xl text-purple-600 mb-2">{days}</div>
        <p className="text-gray-600">Beautiful Days</p>
      </div>

      <div className="flex justify-center gap-8 text-center">
        {years > 0 && (
          <div>
            <div className="text-3xl text-pink-500">{years}</div>
            <p className="text-gray-500 text-sm">Year{years !== 1 ? 's' : ''}</p>
          </div>
        )}
        {months > 0 && (
          <div>
            <div className="text-3xl text-purple-500">{months}</div>
            <p className="text-gray-500 text-sm">Month{months !== 1 ? 's' : ''}</p>
          </div>
        )}
        <div>
          <div className="text-3xl text-blue-500">{finalDays}</div>
          <p className="text-gray-500 text-sm">Day{finalDays !== 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface DayCounterProps {
  startDate: string;
}

export function DayCounter({ startDate }: DayCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      // Parse date string as local date to avoid timezone issues
      const [year, month, day] = startDate.split('-').map(Number);
      const start = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day
      const diffTime = Math.abs(today.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, [startDate]);

  const years = Math.floor(days / 365);
  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  const finalDays = remainingDays % 30;

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

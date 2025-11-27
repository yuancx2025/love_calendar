import { useState } from 'react';
import { Trash2, Calendar as CalendarIcon, Heart, Image as ImageIcon } from 'lucide-react';
import { Event } from '../App';
import { ImageGallery } from './ImageGallery';

interface EventListProps {
  events: Event[];
  onDeleteEvent: (id: string) => void;
}

export function EventList({ events, onDeleteEvent }: EventListProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedEventImages, setSelectedEventImages] = useState<string[] | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedEvents = [...events].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredEvents = sortedEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    
    if (filter === 'upcoming') {
      return eventDate >= today;
    } else if (filter === 'past') {
      return eventDate < today;
    }
    return true;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'anniversary':
        return <Heart className="text-red-500 fill-red-500" size={18} />;
      default:
        return <CalendarIcon className="text-purple-500" size={18} />;
    }
  };

  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'anniversary':
        return 'border-red-200 bg-red-50';
      case 'date':
        return 'border-pink-200 bg-pink-50';
      case 'special':
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-100">
      <h2 className="mb-4 text-pink-600">Our Memories</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
            filter === 'all'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
            filter === 'upcoming'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter('past')}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
            filter === 'past'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Past
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Heart className="mx-auto mb-2" size={48} />
            <p>No memories yet</p>
            <p className="text-sm">Start adding your special moments!</p>
          </div>
        ) : (
          filteredEvents.map(event => (
            <div
              key={event.id}
              className={`p-4 rounded-lg border-2 ${getEventColor(event.type)} transition-all hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getEventIcon(event.type)}
                    <span className="text-gray-900">{event.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {formatDate(event.date)}
                  </p>
                  {event.description && (
                    <p className="text-sm text-gray-500 mt-2">
                      {event.description}
                    </p>
                  )}
                  
                  {/* Image Thumbnails */}
                  {event.images && event.images.length > 0 && (
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {event.images.slice(0, 3).map((image, index) => (
                        <div
                          key={index}
                          className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setSelectedEventImages(event.images || null)}
                        >
                          <img
                            src={image}
                            alt={`${event.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {event.images.length > 3 && (
                        <button
                          onClick={() => setSelectedEventImages(event.images || null)}
                          className="w-16 h-16 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-sm">+{event.images.length - 3}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onDeleteEvent(event.id)}
                  className="p-1.5 hover:bg-white rounded-lg transition-colors group"
                >
                  <Trash2 size={16} className="text-gray-400 group-hover:text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Image Gallery Modal */}
      {selectedEventImages && (
        <ImageGallery
          images={selectedEventImages}
          onClose={() => setSelectedEventImages(null)}
        />
      )}
    </div>
  );
}
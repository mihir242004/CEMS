import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
  buttonText?: string;
}

export function EventCard({ event, onRegister, buttonText = 'Register Now' }: EventCardProps) {
  const isFullyBooked = event.registeredCount >= event.capacity;
  const spotsLeft = event.capacity - event.registeredCount;

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm
            ${event.category === 'workshop' ? 'text-blue-800' :
              event.category === 'cultural' ? 'text-purple-800' :
              event.category === 'sports' ? 'text-green-800' :
              'text-yellow-800'}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-blue-600" />
            <span>{event.registeredCount} / {event.capacity} registered</span>
          </div>
        </div>
        
        <div className="mt-6">
          {!isFullyBooked && (
            <div className="text-sm text-gray-600 mb-2">
              {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} remaining
            </div>
          )}
          <button
            onClick={() => onRegister(event.id)}
            disabled={isFullyBooked}
            className={`w-full px-4 py-2 rounded-lg font-medium text-white transition-all duration-300
              ${isFullyBooked
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02]'}`}>
            {isFullyBooked ? 'Fully Booked' : buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
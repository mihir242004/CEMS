import React from 'react';
import { Event } from '../types';
import { EventCard } from './EventCard';

interface EventListProps {
  events: Event[];
  onRegister: (eventId: string) => void;
}

export function EventList({ events, onRegister }: EventListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onRegister={onRegister} />
      ))}
    </div>
  );
}
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { EventList } from '../components/EventList';
import { EventFilters } from '../components/EventFilters';
import { useStore } from '../store/useStore';

export function EventsPage() {
  const { events, registerForEvent, currentUser } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleRegister = (eventId: string) => {
    if (!currentUser) {
      alert('Please login to register for events');
      return;
    }
    registerForEvent(eventId);
  };

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <EventList events={filteredEvents} onRegister={handleRegister} />
      </div>
    </div>
  );
}
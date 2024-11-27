import React from 'react';
import { useStore } from '../store/useStore';
import { EventCard } from '../components/EventCard';

export function DashboardPage() {
  const { events, registrations, currentUser, cancelRegistration } = useStore();

  if (!currentUser) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Please login to view your dashboard</h2>
      </div>
    );
  }

  const userEvents = events.filter(event =>
    registrations.some(reg => reg.eventId === event.id && reg.userId === currentUser.id)
  );

  return (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">My Dashboard</h2>
        <p className="mt-2 text-gray-600">
          Manage your registered events and view upcoming activities.
        </p>
      </div>
      
      {userEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={() => cancelRegistration(event.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't registered for any events yet.</p>
        </div>
      )}
    </div>
  );
}
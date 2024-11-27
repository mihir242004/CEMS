import { create } from 'zustand';
import { Event, User, EventRegistration } from '../types';

interface Store {
  events: Event[];
  currentUser: User | null;
  registrations: EventRegistration[];
  setCurrentUser: (user: User | null) => void;
  registerForEvent: (eventId: string) => void;
  cancelRegistration: (eventId: string) => void;
}

export const useStore = create<Store>((set) => ({
  events: [
    {
      id: '1',
      title: 'Web Development Workshop',
      description: 'Learn modern web development techniques with React and TypeScript. Build real-world projects and enhance your portfolio.',
      category: 'workshop',
      date: '2024-03-25',
      time: '10:00 AM',
      location: 'Computer Lab 101',
      capacity: 30,
      registeredCount: 25,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: '2',
      title: 'Annual Cultural Fest',
      description: 'Join us for a celebration of art, music, and dance performances. Showcase your talents and win exciting prizes!',
      category: 'cultural',
      date: '2024-04-15',
      time: '5:00 PM',
      location: 'College Auditorium',
      capacity: 200,
      registeredCount: 150,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: '3',
      title: 'Sports Tournament',
      description: 'Inter-college sports competition featuring basketball and volleyball. Form your team and compete for the championship!',
      category: 'sports',
      date: '2024-04-20',
      time: '9:00 AM',
      location: 'College Ground',
      capacity: 100,
      registeredCount: 80,
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: '4',
      title: 'AI & Machine Learning Seminar',
      description: 'Explore the latest trends in AI and Machine Learning with industry experts. Learn about real-world applications and future prospects.',
      category: 'seminar',
      date: '2024-05-10',
      time: '2:00 PM',
      location: 'Conference Hall',
      capacity: 150,
      registeredCount: 120,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
  ],
  currentUser: null,
  registrations: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  registerForEvent: (eventId) => 
    set((state) => {
      if (!state.currentUser) return state;
      
      const newRegistration: EventRegistration = {
        eventId,
        userId: state.currentUser.id,
        registrationDate: new Date().toISOString(),
        status: 'confirmed',
      };

      return {
        registrations: [...state.registrations, newRegistration],
        events: state.events.map(event =>
          event.id === eventId
            ? { ...event, registeredCount: event.registeredCount + 1 }
            : event
        ),
      };
    }),
  cancelRegistration: (eventId) =>
    set((state) => ({
      registrations: state.registrations.filter(reg => reg.eventId !== eventId),
      events: state.events.map(event =>
        event.id === eventId
          ? { ...event, registeredCount: event.registeredCount - 1 }
          : event
      ),
    })),
}));
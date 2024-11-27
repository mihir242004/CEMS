export interface Event {
  id: string;
  title: string;
  description: string;
  category: 'workshop' | 'cultural' | 'sports' | 'seminar';
  date: string;
  time: string;
  location: string;
  capacity: number;
  registeredCount: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
  registeredEvents: string[];
  avatar?: string;
}

export interface EventRegistration {
  eventId: string;
  userId: string;
  registrationDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
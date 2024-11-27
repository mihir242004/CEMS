import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            College Events Platform
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover, register, and participate in exciting college events. From workshops to cultural fests, find everything in one place.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="flex justify-center">
              <Calendar className="h-8 w-8 text-blue-200" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Upcoming Events</h3>
            <p className="mt-2 text-sm text-blue-100">Browse and register for events that match your interests</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="flex justify-center">
              <Users className="h-8 w-8 text-blue-200" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Community</h3>
            <p className="mt-2 text-sm text-blue-100">Connect with peers and build your network</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="flex justify-center">
              <Award className="h-8 w-8 text-blue-200" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Certificates</h3>
            <p className="mt-2 text-sm text-blue-100">Earn certificates for event participation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
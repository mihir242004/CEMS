import React from 'react';
import { User, Calendar, Mail, Award, BookOpen } from 'lucide-react';
import { useStore } from '../store/useStore';

export function ProfilePage() {
  const { currentUser, registrations } = useStore();

  if (!currentUser) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Please login to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700">
            <div className="absolute -bottom-16 left-8">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <User className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="pt-20 pb-8 px-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentUser.name}</h2>
                <p className="text-gray-600">{currentUser.role}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Student
              </span>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{currentUser.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{registrations.length} registered events</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-3 text-blue-600" />
                  <span>3 certificates earned</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                  <span>4 workshops completed</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {registrations.slice(0, 3).map((reg) => (
                    <div key={reg.eventId} className="text-sm text-gray-600">
                      Registered for event on {new Date(reg.registrationDate).toLocaleDateString()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Calendar, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';

export function Header() {
  const location = useLocation();
  const { currentUser, setCurrentUser } = useStore();

  const handleLogin = () => {
    // Simulated login
    setCurrentUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'student',
      registeredEvents: [],
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">College Events</h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Events
            </Link>
            <Link
              to="/dashboard"
              className={`text-gray-600 hover:text-gray-900 ${
                location.pathname === '/dashboard' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Dashboard
            </Link>
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className={`text-gray-600 hover:text-gray-900 ${
                    location.pathname === '/profile' ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
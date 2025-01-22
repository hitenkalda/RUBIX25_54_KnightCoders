import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, HelpCircle, User } from 'lucide-react';

interface HeaderProps {
  showAuthButtons?: boolean; // Optional prop to control auth buttons
}

export default function Header({ showAuthButtons = false }: HeaderProps) {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">HomeHaven</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="flex items-center hover:text-indigo-200">
              <Search className="w-4 h-4 mr-1" />
              Find Housing
            </Link>
            <Link to="/government-aid" className="flex items-center hover:text-indigo-200">
              <HelpCircle className="w-4 h-4 mr-1" />
              Aid Programs
            </Link>
            <Link to="/dashboard" className="flex items-center bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
              <User className="w-4 h-4 mr-1" />
              Dashboard
            </Link>
            {showAuthButtons && (
              <>
                <Link to="/signup" className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
                  Sign Up
                </Link>
                <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
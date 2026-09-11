import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Button } from '../common/Button';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">BrokerFinder</span>
            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full">Beta</span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1">
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1">
              <MagnifyingGlassIcon className="h-5 w-5" />
              Find Brokers
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <UserCircleIcon className="h-5 w-5 mr-1" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

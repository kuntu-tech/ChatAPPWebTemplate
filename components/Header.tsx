import React from 'react';
import { LogInIcon, UserPlusIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              App Name
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-black transition-colors">
              <LogInIcon className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all">
              <UserPlusIcon className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

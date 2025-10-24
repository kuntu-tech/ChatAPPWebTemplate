'use client'

import React from 'react';
import { LogInIcon, UserPlusIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

export function Header() {
  const { data: session, status } = useSession();

  const handleLogin = () => {
    signIn('datail-oauth', {
      callbackUrl: '/dashboard',
    });
  };

  const handleLogout = () => {
    signOut({
      callbackUrl: '/',
    });
  };

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
            {status === 'loading' ? (
              <div className="animate-pulse text-gray-500">Loading...</div>
            ) : session ? (
              <>
                <div className="flex items-center space-x-2">
                  {session.user?.image ? (
                    <img 
                      src={session.user.image} 
                      alt={session.user.name || 'User'} 
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <UserIcon className="w-8 h-8 text-gray-600" />
                  )}
                  <span className="text-gray-700 hidden md:block">
                    {session.user?.name || session.user?.email}
                  </span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-black transition-colors"
                >
                  <LogOutIcon className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handleLogin}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-black transition-colors"
                >
                  <LogInIcon className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button 
                  onClick={handleLogin}
                  className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all"
                >
                  <UserPlusIcon className="w-4 h-4" />
                  <span>Sign Up</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

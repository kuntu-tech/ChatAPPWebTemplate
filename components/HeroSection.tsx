"use client";
import React from 'react';
import { ArrowRightIcon, LogInIcon, UserPlusIcon } from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';

export function HeroSection() {
  return (
    <AuroraBackground>
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-semibold text-white">
                App Name
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors">
                <LogInIcon className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 hover:shadow-lg transition-all backdrop-blur-sm">
                <UserPlusIcon className="w-4 h-4" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex flex-col gap-4 items-center justify-center px-4 pt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center animate-fade-in-up">
          Smart App Name
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-center animate-fade-in-up animation-delay-200">
          One sentence introducing your app's core value, helping users quickly understand the product advantages
        </p>
        <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-white/90 hover:shadow-xl transition-all animate-fade-in-up animation-delay-400">
          <span>Use Now in ChatGPT</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </AuroraBackground>
  );
}

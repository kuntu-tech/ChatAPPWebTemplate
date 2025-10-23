import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            © {currentYear} App Name. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-gray-500">Powered by</span>
            <a href="https://datail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 font-semibold transition-colors">
              Datail
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

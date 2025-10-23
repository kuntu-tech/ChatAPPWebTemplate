import React from 'react';
import { CheckIcon, CrownIcon, XIcon } from 'lucide-react';
export function PricingSection() {
  const monthlyPrice = 29;
  return <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">Flexible pricing to meet different needs</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-100 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 text-center">
                Free Plan
              </h3>
              <p className="text-xs sm:text-base text-gray-600 text-center mt-1 sm:mt-2">
                Start experiencing basic features
              </p>
            </div>
            <div className="px-4 sm:px-8 py-6 sm:py-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-5xl font-bold text-gray-900">
                    $0
                  </span>
                  <span className="text-sm sm:text-xl text-gray-600 ml-1 sm:ml-2">
                    /month
                  </span>
                </div>
                <p className="text-xs sm:text-base text-gray-500 mt-1 sm:mt-2">
                  Free forever
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-700">
                    Basic feature access
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-700">
                    100 uses per month
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-700">
                    Community support
                  </span>
                </li>
                <li className="flex items-start">
                  <XIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-400">
                    Advanced data analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <XIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-400">
                    Team collaboration features
                  </span>
                </li>
              </ul>
              <button className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-gray-200 text-gray-900 text-sm sm:text-lg font-semibold rounded-lg hover:bg-gray-300 hover:shadow-lg transition-all">
                Start Free
              </button>
            </div>
          </div>
          {/* Pro Plan */}
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-700 relative">
            <div className="absolute top-0 right-0 bg-white text-gray-900 px-2 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-bl-lg shadow-md">
              Recommended
            </div>
            <div className="bg-black px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-800">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                <CrownIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" />
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Pro Plan
                </h3>
              </div>
              <p className="text-xs sm:text-base text-gray-300 text-center">
                Unlock all advanced features
              </p>
            </div>
            <div className="px-4 sm:px-8 py-6 sm:py-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-5xl font-bold text-white">
                    ${monthlyPrice}
                  </span>
                  <span className="text-sm sm:text-xl text-gray-400 ml-1 sm:ml-2">
                    /month
                  </span>
                </div>
                <p className="text-xs sm:text-base text-gray-400 mt-1 sm:mt-2">
                  Monthly subscription, cancel anytime
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-300">
                    Unlimited Conversation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-300">
                    Real-time Database Updates
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-base text-gray-300">
                    Exclusive Professional Database
                  </span>
                </li>
              </ul>
              <button className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-white text-black text-sm sm:text-lg font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
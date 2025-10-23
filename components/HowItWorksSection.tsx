import React from 'react';
import { MessageCircleIcon, BotIcon } from 'lucide-react';

const conversations = [
  {
    type: 'user',
    message: 'How can I quickly improve work efficiency?'
  },
  {
    type: 'bot',
    message: 'Based on your needs, I suggest focusing on three key areas: 1. Use time management tools to plan daily tasks; 2. Adopt the Pomodoro technique to maintain focus; 3. Regularly review and optimize workflows. I can create a detailed implementation plan for you.'
  },
  {
    type: 'user',
    message: 'Can you help me analyze current data trends?'
  },
  {
    type: 'bot',
    message: 'Of course! Through analyzing your data, I found these key trends: overall growth rate of 23%, with mobile traffic growing fastest at 45%. I recommend focusing on optimizing mobile user experience, which could bring an additional 30% conversion improvement.'
  }
];

export function HowItWorksSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">See how our intelligent assistant can help you</p>
        </div>
        <div className="space-y-6">
          {conversations.map((conv, index) => (
            <div key={index} className={`flex ${conv.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-2xl ${conv.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${conv.type === 'user' ? 'bg-gray-800' : 'bg-black'}`}>
                  {conv.type === 'user' ? <MessageCircleIcon className="w-5 h-5 text-white" /> : <BotIcon className="w-5 h-5 text-white" />}
                </div>
                <div className={`px-6 py-4 rounded-2xl ${conv.type === 'user' ? 'bg-gray-800 text-white shadow-lg' : 'bg-white text-gray-800 shadow-md border border-gray-200'}`}>
                  <p className="text-sm md:text-base leading-relaxed">
                    {conv.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

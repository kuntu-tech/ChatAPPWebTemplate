import React from 'react';
import { SparklesIcon, ZapIcon, ShieldIcon, TrendingUpIcon } from 'lucide-react';

const features = [
  {
    icon: SparklesIcon,
    title: 'Smart Analysis',
    description: 'Based on advanced AI technology, providing deep insights and intelligent recommendations'
  },
  {
    icon: ZapIcon,
    title: 'Fast Response',
    description: 'Millisecond-level response speed, instantly getting the information and answers you need'
  },
  {
    icon: ShieldIcon,
    title: 'Secure & Reliable',
    description: 'Enterprise-level security protection, safeguarding your data privacy and information security'
  },
  {
    icon: TrendingUpIcon,
    title: 'Continuous Optimization',
    description: 'Continuously learning and improving, providing increasingly accurate service experience'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600">Powerful features providing you with an exceptional experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

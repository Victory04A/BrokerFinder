
import React, { useState } from 'react';
import { MagnifyingGlassIcon, StarIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { BrokerCard } from '../components/brokers/BrokerCard';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

// Sample data (replace with API call later)
const sampleBrokers = [
  { id: 1, name: 'John Smith', specialty: 'Real Estate', location: 'New York, NY', rating: 4.8, reviewCount: 124, experience: 12 },
  { id: 2, name: 'Sarah Johnson', specialty: 'Insurance', location: 'Los Angeles, CA', rating: 4.9, reviewCount: 89, experience: 8 },
  { id: 3, name: 'Michael Chen', specialty: 'Financial', location: 'Chicago, IL', rating: 4.7, reviewCount: 156, experience: 15 },
];

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const features = [
    { icon: MagnifyingGlassIcon, title: 'Easy Search', description: 'Find brokers by specialty, location, or name' },
    { icon: StarIcon, title: 'Verified Reviews', description: 'Read authentic reviews from real clients' },
    { icon: UserGroupIcon, title: 'Top Professionals', description: 'Connect with licensed, experienced brokers' },
    { icon: ShieldCheckIcon, title: 'Secure & Trusted', description: 'All brokers are vetted and verified' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect Broker
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Connect with trusted brokers in real estate, insurance, and finance
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl p-2 shadow-xl">
              <div className="flex-1">
                <Input
                  placeholder="Search by specialty, location, or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 focus:ring-0 pl-4"
                  
                />
              </div>
              <Button size="lg" className="sm:rounded-xl">
                Find Brokers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose BrokerFinder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brokers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Top Rated Brokers
            </h2>
            <Button variant="outline">View All →</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleBrokers.map((broker) => (
              <BrokerCard 
                key={broker.id} 
                broker={broker}
                onClick={() => console.log('View broker:', broker.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

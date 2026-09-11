import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BrokerCard } from '../components/brokers/BrokerCard';
import { Input } from '../components/common/Input';

const sampleBrokers = [
  { id: 1, name: 'John Mwita', specialty: 'Real Estate', location: 'Dar es Salaam, TZ', rating: 4.8, reviewCount: 124, experience: 12 },
  { id: 2, name: 'Asha Hassan', specialty: 'Insurance', location: 'Nairobi, KE', rating: 4.9, reviewCount: 89, experience: 8 },
  { id: 3, name: 'Peter Juma', specialty: 'Financial', location: 'Kampala, UG', rating: 4.7, reviewCount: 156, experience: 15 },
  { id: 4, name: 'Amina Said', specialty: 'Real Estate', location: 'Dodoma, TZ', rating: 4.6, reviewCount: 78, experience: 10 },
  { id: 5, name: 'David Kim', specialty: 'Insurance', location: 'Mombasa, KE', rating: 4.8, reviewCount: 95, experience: 7 },
  { id: 6, name: 'Fatuma Ali', specialty: 'Financial', location: 'Kigali, RW', rating: 4.9, reviewCount: 142, experience: 14 },
];

export const Brokers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Real Estate', 'Insurance', 'Financial'];

  const filteredBrokers = sampleBrokers.filter((broker) => {
    const matchesSearch =
      broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broker.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === 'All' || broker.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Broker
          </h1>
          <p className="text-gray-600">
            Browse {sampleBrokers.length} trusted professionals
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={MagnifyingGlassIcon}
              />
            </div>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            >
              {specialties.map((s) => (
                <option key={s} value={s}>
                  {s === 'All' ? 'All Specialties' : s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-primary-600">{filteredBrokers.length}</span> results
          </p>
        </div>

        {/* Results Grid */}
        {filteredBrokers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrokers.map((broker) => (
              <BrokerCard
                key={broker.id}
                broker={broker}
                onClick={() => console.log('Clicked broker:', broker.name)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-medium">No brokers found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try a different search term or specialty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brokers;

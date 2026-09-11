
import React from 'react';
import { StarIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { Button } from '../common/Button';

export const BrokerCard = ({ broker, onClick }) => {
  const { name, specialty, location, rating, reviewCount, image, experience } = broker;

  return (
    <div className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-r from-primary-500 to-primary-600">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-white/50">🏢</span>
          </div>
        )}
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <StarIcon className="h-4 w-4 text-accent-500" />
          <span className="font-semibold text-gray-900">{rating}</span>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {specialty}
          </span>
        </div>

        <div className="space-y-2 mt-3">
          <p className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPinIcon className="h-4 w-4 text-gray-400" />
            {location}
          </p>
          {experience && (
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <BriefcaseIcon className="h-4 w-4 text-gray-400" />
              {experience} years experience
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                  👤
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">+{reviewCount} reviews</span>
          </div>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => onClick && onClick(broker)}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

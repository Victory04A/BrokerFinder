
import React from 'react';

export const Input = ({ 
  label, 
  error, 
  className, 
  icon: Icon,
  ...props 
}) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          className={`
            w-full rounded-lg border border-gray-300 
            ${Icon ? 'pl-10' : 'px-4'} 
            py-2.5 text-gray-900 placeholder-gray-400
            focus:border-primary-500 focus:ring-2 focus:ring-primary-200
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-200' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
};

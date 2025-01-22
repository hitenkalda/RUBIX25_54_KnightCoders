import React, { useState } from 'react';
import { Search, DollarSign, Home as HomeIcon, MapPin } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = () => {
    // Pass the search criteria to the parent component
    onSearch({ location, priceRange, propertyType });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-500">$0 - $500</option>
            <option value="501-1000">$501 - $1,000</option>
            <option value="1001-1500">$1,001 - $1,500</option>
            <option value="1501+">$1,501+</option>
          </select>
        </div>

        <div className="relative">
          <HomeIcon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="studio">Studio</option>
            <option value="shared">Shared Housing</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center"
        >
          <Search className="w-5 h-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}
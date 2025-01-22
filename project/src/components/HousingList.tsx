import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Bed, Bath, Home } from 'lucide-react';

const housings = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Downtown, San Francisco',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400',
    rating: 4.5,
    beds: 2,
    baths: 1,
    sqft: 850,
    type: 'apartment',
  },
  {
    id: 2,
    title: 'Cozy Studio Near Transit',
    location: 'Mission District, San Francisco',
    price: 950,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400',
    rating: 4.2,
    beds: 1,
    baths: 1,
    sqft: 500,
    type: 'studio',
  },
  {
    id: 3,
    title: 'Family-Friendly Townhouse',
    location: 'Richmond District, San Francisco',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400',
    rating: 4.8,
    beds: 3,
    baths: 2,
    sqft: 1200,
    type: 'house',
  },
  {
    id: 4,
    title: 'Shared Housing in Downtown',
    location: 'Downtown, San Francisco',
    price: 800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400',
    rating: 4.0,
    beds: 1,
    baths: 1,
    sqft: 400,
    type: 'shared',
  },
];

export default function HousingList({ sortBy = 'price-low', searchCriteria = {} }) {
  const { location = '', priceRange = '', propertyType = '' } = searchCriteria;

  // Filter housing data based on search criteria
  const filteredHousing = housings.filter((housing) => {
    const matchesLocation = location
      ? housing.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesPriceRange = priceRange
      ? (priceRange === '0-500' && housing.price <= 500) ||
        (priceRange === '501-1000' && housing.price > 500 && housing.price <= 1000) ||
        (priceRange === '1001-1500' && housing.price > 1000 && housing.price <= 1500) ||
        (priceRange === '1501+' && housing.price > 1500)
      : true;
    const matchesPropertyType = propertyType
      ? housing.type === propertyType
      : true;

    return matchesLocation && matchesPriceRange && matchesPropertyType;
  });

  // Sort housing data based on the selected sorting option
  const sortedHousing = filteredHousing.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedHousing.map((housing) => (
          <div key={housing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={housing.image} alt={housing.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">{housing.title}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{housing.rating}</span>
                </div>
              </div>
              
              <div className="mt-2 flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{housing.location}</span>
              </div>

              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{housing.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span>{housing.baths} Bath</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  <span>{housing.sqft} sqft</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">${housing.price}</span>
                <Link
  to="/housing/:id"
  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
>
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Bed, Bath, Home, DollarSign, Calendar } from 'lucide-react';

export default function HousingDetailsPage() {
  const { id } = useParams();

  // Mock data for demonstration
  const housing = {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Downtown, San Francisco',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000',
    rating: 4.5,
    beds: 2,
    baths: 1,
    sqft: 850,
    description: 'Beautiful modern apartment in the heart of downtown. Features updated appliances, in-unit laundry, and a private balcony with city views.',
    amenities: ['In-unit Laundry', 'Dishwasher', 'Central Heat/AC', 'Balcony', 'Pet Friendly'],
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Excellent location and amenities!' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great value for the area.' },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={housing.image} alt={housing.title} className="w-full h-96 object-cover rounded-lg" />
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">{housing.title}</h2>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-1" />
                <span>{housing.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                <span>{housing.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="mt-2 text-gray-600">{housing.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Amenities</h3>
            <ul className="mt-2 grid grid-cols-2 gap-4">
              {housing.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center text-gray-600">
                  <Home className="w-4 h-4 mr-2 text-indigo-600" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-indigo-600">${housing.price}</span>
              <span className="text-gray-500">/month</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <Bed className="w-6 h-6 mx-auto text-gray-400" />
                <span className="block mt-1 text-sm">{housing.beds} Beds</span>
              </div>
              <div className="text-center">
                <Bath className="w-6 h-6 mx-auto text-gray-400" />
                <span className="block mt-1 text-sm">{housing.baths} Bath</span>
              </div>
              <div className="text-center">
                <Home className="w-6 h-6 mx-auto text-gray-400" />
                <span className="block mt-1 text-sm">{housing.sqft} sqft</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Tour
            </button>

            <Link
  to="/apply/:id"
  className="mt-4 w-full bg-white text-indigo-600 px-6 py-3 rounded-md border-2 border-indigo-600 hover:bg-indigo-50"
>
  Apply Now
</Link>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="mt-4 space-y-4">
              {housing.reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between">
                    <span className="font-medium">{review.user}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
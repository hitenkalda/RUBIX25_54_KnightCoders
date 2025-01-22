import React, { useState } from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';

export default function GovernmentAidPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Section 8 Housing Choice Voucher',
      type: 'rental-assistance',
      description: 'Helps very low-income families, the elderly, and the disabled afford decent, safe housing in the private market.',
      eligibility: 'Income must be below 50% of median area income',
      link: '#'
    },
    {
      id: 2,
      title: 'Public Housing Program',
      type: 'public-housing',
      description: 'Provides decent and safe rental housing for eligible low-income families, the elderly, and persons with disabilities.',
      eligibility: 'Income must be below 80% of median area income',
      link: 'https://www.bajajfinserv.in/insights/top-government-housing-schemes-in-india#:~:text=Key%20schemes%20include%20Pradhan%20Mantri,apply%20through%20schemes%20like%20PMAY.'
    },
    {
      id: 3,
      title: 'HOME Investment Partnerships Program',
      type: 'home-ownership',
      description: 'Provides formula grants to states and localities for various housing activities.',
      eligibility: 'Varies by specific program and location',
      link: '#'
    }
  ];

  const filteredPrograms = programs.filter(program => 
    (selectedType === 'all' || program.type === selectedType) &&
    program.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Government Aid Programs</h1>
      
      <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="mt-4 md:mt-0 relative">
          <Filter className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Programs</option>
            <option value="rental-assistance">Rental Assistance</option>
            <option value="public-housing">Public Housing</option>
            <option value="home-ownership">Home Ownership</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-6">
        {filteredPrograms.map(program => (
          <div key={program.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900">{program.title}</h2>
              <a
                href={program.link}
                className="flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <div className="mt-4">
              <h3 className="font-medium text-gray-900">Eligibility</h3>
              <p className="mt-1 text-gray-600">{program.eligibility}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
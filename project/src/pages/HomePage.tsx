import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import HousingList from '../components/HousingList';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <HousingList />
    </div>
  );
}
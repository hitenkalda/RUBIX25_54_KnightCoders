import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Header from '../components/Header';
import { Search, HelpCircle, User } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header showAuthButtons={true} />
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <div className="text-6xl font-extrabold text-indigo-600">
          <Typewriter
            options={{
              strings: ['Welcome to HomeHaven!', 'Find Your Dream Home Today'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-gray-600 text-xl mt-6 max-w-3xl">
          Discover the best homes, housing programs, and government aid programs tailored to your needs.
        </p>
        <div className="mt-8">
          <Link
            to="/search"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Find Housing"
              description="Explore a variety of housing options that suit your budget and lifestyle."
              icon={<Search className="w-12 h-12 text-indigo-600" />}
            />
            <FeatureCard
              title="Government Aid"
              description="Learn about programs and assistance available for affordable housing."
              icon={<HelpCircle className="w-12 h-12 text-indigo-600" />}
            />
            <FeatureCard
              title="Personalized Dashboard"
              description="Access your saved searches, applications, and recommendations."
              icon={<User className="w-12 h-12 text-indigo-600" />}
            />
          </div>
        </div>
      </section>
      <footer className="bg-indigo-600 text-white py-4 text-center">
        © 2025 HomeHaven. All rights reserved.
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

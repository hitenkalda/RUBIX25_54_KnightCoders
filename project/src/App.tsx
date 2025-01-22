import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import HousingDetailsPage from './pages/HousingDetailsPage';
import GovernmentAidPage from './pages/GovernmentAidPage';
import ApplicationPage from './pages/ApplicationPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Exclude Header on the Landing Page ("/")
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLandingPage && <Header showAuthButtons={false} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/housing/:id" element={<HousingDetailsPage />} />
        <Route path="/government-aid" element={<GovernmentAidPage />} />
        <Route path="/apply/:id" element={<ApplicationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
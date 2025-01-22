import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/housing/:id" element={<HousingDetailsPage />} />
          <Route path="/government-aid" element={<GovernmentAidPage />} />
          <Route path="/apply/:id" element={<ApplicationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
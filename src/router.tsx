import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CamperDetailsPage from './pages/CamperDetailsPage';
import ReviewsPage from './pages/ReviewsPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/catalog/:id" element={<CamperDetailsPage />} />
    <Route path="/catalog/:id/reviews" element={<ReviewsPage />} />
  </Routes>
);

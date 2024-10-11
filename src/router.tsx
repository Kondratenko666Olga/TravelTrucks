import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/catalog/:id" element={<CamperDetailsPage />} />
    <Route path="/catalog/:id/reviews" element={<ReviewsPage />} />
  </Routes>
);

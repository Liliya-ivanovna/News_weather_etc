import { Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from 'pages/ProductDetails';
import ProductListPage from 'pages/ProductListPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

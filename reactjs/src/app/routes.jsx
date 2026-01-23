import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoutes from '../features/auth/auth.routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={<AuthRoutes />}
        />
      </Routes>
    </BrowserRouter>
  );
}

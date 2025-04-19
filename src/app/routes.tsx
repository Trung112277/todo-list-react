import { Routes, Route } from 'react-router-dom';
import { PageHome } from '../components/pages/home';
import { PageDesignSystem } from '../components/pages/designSystem';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<PageHome />} />
      <Route path="design-system" element={<PageDesignSystem />} />
    </Routes>
  );
}

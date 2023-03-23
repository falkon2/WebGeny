import { Routes, Route } from 'react-router-dom';
import  Application from './pages/Application';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Application />} />
    </Routes>
  );
}

export default Router;

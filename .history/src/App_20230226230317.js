import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Downloads } from './pages/Downloads';
function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/download' element={<Downloads />} />
    </Routes>
  );
}

export default App;

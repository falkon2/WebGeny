import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Downloads } from './pages/Downloads';
function App() {
  return (
    <Routes>
      <Route path="/WebGeny" element={<Home />} />
      <Route path="/WebGeny/about" element={<About />} />
      <Route path='/WebGeny/download' element={<Downloads />} />
    </Routes>
  );
}

export default App;

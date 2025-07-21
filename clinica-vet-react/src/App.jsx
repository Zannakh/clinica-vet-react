import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Duenos from './pages/Duenos';
import Mascotas from './pages/Mascotas';
import Veterinarios from './pages/Veterinarios';
import Reservas from './pages/Reservas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Duenos />} />
            <Route path="/duenos" element={<Duenos />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/veterinarios" element={<Veterinarios />} />
            <Route path="/reservas" element={<Reservas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Ejemplo de App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const handleSearch = (searchTerm) => {
    console.log("Búsqueda:", searchTerm); // Lógica de búsqueda
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
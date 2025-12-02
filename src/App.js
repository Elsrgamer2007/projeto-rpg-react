import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: '20px', background: '#333' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>HOME</Link></li>
          <li><Link to="/catalogo" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CATÁLOGO</Link></li>
          <li><Link to="/sobre" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>SOBRE</Link></li>
          <li><Link to="/contato" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CONTATO</Link></li>
        </ul>
      </nav>

      <div style={{ paddingBottom: '80px' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>

      <Rodape />
    </Router>
  );
}

export default App;
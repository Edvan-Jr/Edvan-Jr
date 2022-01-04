import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;

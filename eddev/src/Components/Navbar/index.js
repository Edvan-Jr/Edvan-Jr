import './styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-header'>
      <Link to="/">HOME</Link>
      <Link to="/portfolio">PORTFOLIO</Link>
      <Link to="/sobre">SOBRE</Link>
      <Link to="/contato">CONTATO</Link>
    </nav>
  );
}

export default Navbar;
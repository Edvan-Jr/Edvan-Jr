import './styles.css';
import logo from '../../Assets/logo-eddev.svg';
import Navbar from '../Navbar';

function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="Logo EdDev" />
      <Navbar />
    </div>
  );
}

export default Header;
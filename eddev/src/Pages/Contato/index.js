import iconGitHub from '../../Assets/github-dark.svg';
import iconLinkedIn from '../../Assets/linkedin-dark.svg';
import './styles.css';

function Contato() {
  return (
    <div className="container-contato">
      <div className="left-contato">
        <h1>Entre em Contato</h1>
      </div>
      <div className="rigth-contato">
        <p>Acabei de ser contratado para o cargo de Software Engineer, no iFood, estou muito feliz por isto, e quero me dedicar totalmente a esta missão. Nas horas vagas, além de aproveitar a família e do lazer, também pretendo desenvolver três sites a princípio: um para a minha esposa naturóloga, outro para a transportadora do meu sogro, e outro para a minha sogra cabeleireira.<br />
          Caso eu possa lhe ajudar em algo, estarei à disposição, e fique à vontade para visitar os meus perfis abaixo.
        </p>
        <nav className="nav-redes-sociais">
          <a href='https://github.com/Edvan-Jr  '>
            <img src={iconGitHub} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/mirandajr-edvan/'>
            <img src={iconLinkedIn} alt="" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Contato;
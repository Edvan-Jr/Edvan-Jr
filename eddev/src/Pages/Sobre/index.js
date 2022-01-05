import './styles.css';
// import fundoSobre from '../../Assets/perfil-eddev.jpg';

function Sobre() {
  return (
    <div className="container-sobre">
      <div className="left-sobre">
        {/* <img src={fundoSobre} alt="" /> */}
      </div>
      <div className="rigth-sobre">
        <h1>Sobre mim</h1>
        <p>
          Tech 'n roots. Tecnologia e natureza são minhas paixões, além de família, música e exercício físico.
          Desde as horas na infância frente aos consoles games e PCs, sempre me interessei pela area de tecnologia. Também desde a infância,
          meu pai possuía duas propriedades rurais, onde eu ficava encantado pela natureza. Sendo assim, gosto de combinar a tecnologia com o rústico.
        </p>
        <p>
          Mas não pude me dedicar às minhas paixões, em meio às circunstâncias da vida, até eu receber uma oferta de bolsa de estudo para um curso profissionalizante Web Dev Full Stack, em 2021, da parceiria iFood + Cubos Academy. Foram 750 horas de aula, numa rotina intensa com dedicação integral, durante 6 meses, aprendendo Front-End, Back-End e Soft Skills. Na sequência, o iFood abriu um processo seletivo para admissão no projeto iLab, e depois de três etapas, fui aprovado. O meu sim veio! O match perfeito!
        </p>
        <p>
          Então, aos 35 anos de idade, recém-casado e com filho de 1 ano, recém-órfão de pai e com uma parte de uma propriedade rural de herança, eis a oportunidade de viver apaixonadamente tech 'n roots, sendo FoodLover.
          Bora alimentar o futuro do mundo! 🚀
        </p>
      </div>
    </div>
  );
}

export default Sobre;
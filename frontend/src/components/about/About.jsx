import "./about.css";
import If from "../../img/if.png";
import Prog from '../../img/Program.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Prog}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
        </p>
        <p className="a-desc">
        Gosto muito de programar e estou sempre em busca de me aprimorar e dar o meu melhor.
        Sou um desenvolvedor iniciante full-stack com
        Ferramentas Node.js no back-end e ReactJs no front-end, se aventurando lentamente no React Native para dispositivos móveis.
        </p>
       
        <div className="a-award">
        <h1 className="a-title">Formações</h1>
          
          <div className="a-award-texts">
          <img src={If} alt="" className="a-award-img" />
            <h4 className="a-award-title">Técnico de informática</h4>
            <p className="a-award-desc">
             CAMPUS BARRA DO CORDA 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

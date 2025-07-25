import { NavLink } from "react-router";
import Projet from "../../components/Home/Projet";
import "./homepage.css";

const Homepage = () => {
  return (
    <main>
      <section className="pres-section">
        <div className="pres-detail">
          <h1>NABIL YAHYA</h1>
          <p>DÉVELOPPEUR WEB</p>
        </div>
      </section>

      <section className="about-section">
        <h2>A PROPOS DE MOI</h2>
        <p>
          Je m'appelle Nabil YAHYA. Je suis développeur web junior, fraîchement
          issu d'une formation intensive où j'ai appris à transformer des idées
          en interfaces fonctionnelles. Je conçois des sites modernes en
          utilisant des technologies actuelles comme HTML, CSS, JavaScript et
          React. À travers ce portfolio, je souhaite partager ma vision du
          développement : claire, fluide, et esthétique. Passionné par la
          créativité digitale et les détails qui font la différence, je
          m'efforce de créer des projets qui racontent une histoire, et
          peut-être la vôtre.
        </p>
        <NavLink to="/about" className="plus-button">
          PLUS
        </NavLink>
      </section>

      <section className="project-section">
        <h2>MES PROJETS</h2>
        <p>
          Découvrez quelques travaux réalisés, pour la plupart en équipe, avec
          passion et précision.
        </p>

        <Projet />

        <NavLink to="/projects" className="pluss-button">
          PLUS
        </NavLink>
      </section>

      <section className="skill-section">
        <h2>MES COMPETENCES</h2>
        <div className="skill-bar">
          <span className="skill-title">HTML</span>
          <div className="bar">
            <div className="fill html" />
          </div>

          <span className="skill-title">CSS</span>
          <div className="bar">
            <div className="fill css" />
          </div>

          <span className="skill-title">JavaScript</span>
          <div className="bar">
            <div className="fill js" />
          </div>

          <span className="skill-title">React</span>
          <div className="bar">
            <div className="fill react" />
          </div>

          <span className="skill-title">TypeScript</span>
          <div className="bar">
            <div className="fill ts" />
          </div>
          <span className="skill-title">Node.js</span>
          <div className="bar">
            <div className="fill node" />
          </div>
          <span className="skill-title">Express.js</span>
          <div className="bar">
            <div className="fill express" />
          </div>
          <span className="skill-title">MySQL</span>
          <div className="bar">
            <div className="fill mysql" />
          </div>
          <span className="skill-title">Git</span>
          <div className="bar">
            <div className="fill git" />
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>ON RESTE EN CONTACT ?</h2>
        <p>
          Envie de créer quelque chose ? Que ce soit pour un projet web, une
          mission freelance ou juste pour échanger, je suis toujours ouvert aux
          bonnes idées
        </p>
        <NavLink to="/contact" className="contact-button">
          ME CONTACTER
        </NavLink>
      </section>
    </main>
  );
};

export default Homepage;

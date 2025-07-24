import "./about.css";

const About = () => {
  return (
    <div>
      <section className="about-me-section">
        <h2>QUI SUIS-JE?</h2>
        <img src="/portrait.png" alt="Developpeur" className="about-img" />
        <p>
          Toujours attiré par le monde du numérique, j'ai exploré ce domaine en
          autodidacte, souvent de manière intuitive, sans passer par une
          formation technique au départ. Au fil de mes expériences
          professionnelles, j'ai effleuré le développement web sans jamais en
          approfondir les fondations — jusqu'à ce que je me lance pleinement.
          Curieux de nature, j'aime apprendre, expérimenter, découvrir ce qui se
          cache derrière les interfaces qu'on utilise chaque jour. Grâce à ma
          formation actuelle, j'ai pu acquérir les bases théoriques du
          développement, et surtout les appliquer concrètement à travers des
          projets variés. Aujourd'hui, je découvre un langage universel : celui
          qui permet de transformer une idée en quelque chose de réel. Coder,
          c'est imaginer, concevoir et donner vie — et c'est cette magie qui me
          motive chaque jour.
        </p>
      </section>

      <section className="formation-section">
        <h2>MES SKILLS</h2>

        <h3>Formation en développement web full-stack</h3>
        <p>
          Apprentissage structuré des bases et mise en pratique sur des projets
          concrets.
        </p>
        <ul className="formation-list">
          <li>Apprentissage des fondamentaux : HTML5, CSS3, JavaScript</li>
          <li>
            Maîtrise du DOM, des événements, et des interactions utilisateur
          </li>
          <li>
            Introduction aux API REST et à leur intégration dans des projets
          </li>
          <li>React.js : composants, hooks, routing</li>
          <li>
            Node.js & Express : création de serveurs et gestion des routes
          </li>
          <li>
            MySQL : base de données relationnelle, création de tables et
            requêtes SQL
          </li>
          <li>Postman : tests d'API REST, gestion des requêtes HTTP</li>
          <li>Git & GitHub : gestion de version et collaboration</li>
          <li>Figma : wireframes et maquettes</li>
        </ul>
      </section>
      <section className="vision-section">
        <h2>VISION & VALEURS</h2>

        <h3>Apprentissage continu</h3>
        <p>
          Le développement web est pour moi un terrain d'exploration permanent.
          Chaque projet est une opportunité d'apprendre et de tester.
        </p>

        <h3>Curiosité & autonomie</h3>
        <p>
          Je suis guidé par une curiosité naturelle. Plutôt que d'attendre les
          réponses, je vais les chercher et je les construis.
        </p>

        <h3>Création utile</h3>
        <p>
          Le code est bien plus qu'un outil technique : il permet de résoudre
          des problèmes concrets et de créer des expériences qui ont du sens.
        </p>

        <h3>Collaboration & partage</h3>
        <p>Le travail d'équipe et les échanges me motivent.</p>
      </section>
    </div>
  );
};

export default About;

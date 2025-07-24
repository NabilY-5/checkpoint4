import Projectlist from "../../components/ProjectList/ProjectList";
import "./projects.css";

const Projects = () => {
  return (
    <main className="project-page">
      <section className="project-intro d-s">
        <h2>MES RÉALISATIONS</h2>
        <p>
          Chaque projet présenté ici témoigne de mon processus de réflexion : de
          la conception minutieuse d'une maquette à l'analyse des technologies
          les plus adaptées à chaque besoin. J'accorde une attention
          particulière à l'harmonie entre le code et le design, afin d'offrir
          des rendus visuels soignés et des fonctionnalités réellement
          opérationnelles.
        </p>
      </section>
      <section className="project-list l-s">
        <Projectlist />
      </section>
    </main>
  );
};

export default Projects;

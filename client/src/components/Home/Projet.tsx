import { useEffect, useState } from "react";
import type { ProjetType } from "../../lib/definition";

const Projet = () => {
  const [projets, setProjets] = useState<ProjetType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projets`)
      .then((res) => res.json())
      .then((data) => setProjets(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="project-detail">
      {projets.map((projet) => (
        <div key={projet.id} className="project-card">
          s
          <img src={projet.image_url} alt={projet.titre} />
          <h3>{projet.titre}</h3>
          <p>{projet.description}</p>
          <div className="project-links">
            <a
              href={projet.lien_site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
            |
            <a
              href={projet.lien_github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projet;

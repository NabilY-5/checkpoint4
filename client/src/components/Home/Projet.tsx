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
          <img src={projet.image_url} alt={projet.titre} />
          <h3>{projet.titre}</h3>
          <p>{projet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projet;

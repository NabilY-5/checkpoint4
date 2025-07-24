import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import type { ProjetType } from "../../lib/definition";

const ProjectList = () => {
  const [projets, setProjets] = useState<ProjetType[]>([]);
  const [selectedProjet, setSelectedProjet] = useState<ProjetType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projets`)
      .then((res) => res.json())
      .then((data) => setProjets(data))
      .catch((err) => console.error(err));
  }, []);

  const fetchSingleProjet = (id: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projets/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedProjet(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="project-det">
      {projets.map((projet) => (
        <div key={projet.id} className="project-ca">
          <div className="image-container">
            <img src={projet.image_url} alt={projet.titre} />
            <button
              type="button"
              className="loupe"
              onClick={() => fetchSingleProjet(projet.id)}
            >
              🔍
            </button>
          </div>
          <h3>{projet.titre}</h3>
          <p>{projet.description}</p>
          <div className="proj-links">
            <a
              href={projet.lien_site}
              target="_blank"
              rel="noopener noreferrer"
              title="Site web"
            >
              <FaDesktop size={28} />
            </a>{" "}
            |{" "}
            <a
              href={projet.lien_github}
              target="_blank"
              rel="noopener noreferrer"
              title="Logo GitHub"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      ))}

      {selectedProjet && (
        <div className="project-modal">
          <div className="modal-content">
            <button type="button" onClick={() => setSelectedProjet(null)}>
              ❌
            </button>
            <h2>{selectedProjet.titre}</h2>
            <h3>Technologies utilisées :</h3>
            <ul className="skills-list">
              {selectedProjet.skills?.map((skill) => (
                <li key={skill.id}>
                  <img src={skill.icon_url} alt={skill.nom} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;

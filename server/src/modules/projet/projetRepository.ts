import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { ProjetType, ProjetTypeSansId } from "../../../lib/definition";

class ProjetRepository {
  async create(projet: ProjetTypeSansId): Promise<number> {
    // Insertion du projet
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO projet (titre, description, image_url, lien_site, lien_github)
     VALUES (?, ?, ?, ?, ?)`,
      [
        projet.titre,
        projet.description,
        projet.image_url,
        projet.lien_site,
        projet.lien_github,
      ],
    );

    const projetId = result.insertId;

    for (const skill of projet.skills) {
      await databaseClient.query(
        "INSERT INTO projet_skill (projet_id, skill_id) VALUES (?, ?)",
        [projetId, skill.id],
      );
    }

    return projetId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from projet");

    return rows as ProjetType[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
    SELECT p.*, s.id AS skill_id,s.nom AS skill_nom, s.icon_url AS skill_icon_url FROM projet p INNER JOIN projet_skill ps ON ps.projet_id = p.id INNER JOIN skill s ON s.id = ps.skill_id WHERE p.id = ? ORDER BY s.nom
    `,
      [id],
    );

    const projet: ProjetType = {
      id: rows[0].id,
      titre: rows[0].titre,
      description: rows[0].description,
      image_url: rows[0].image_url,
      lien_site: rows[0].lien_site,
      lien_github: rows[0].lien_github,
      skills: rows.map((row) => ({
        id: row.skill_id,
        nom: row.skill_nom,
        icon_url: row.skill_icon_url,
      })),
    };

    return projet;
  }

  async update(projet: ProjetType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE projet SET titre = ?, description = ?, image_url = ?, lien_site = ?, lien_github = ? WHERE id = ?",
      [
        projet.titre,
        projet.description,
        projet.image_url,
        projet.lien_site,
        projet.lien_github,
        projet.id,
      ],
    );
    return result.affectedRows;
  }
}

export default new ProjetRepository();

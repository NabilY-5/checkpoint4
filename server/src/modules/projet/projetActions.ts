import type { RequestHandler } from "express";
import ProjetRepository from "./projetRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const projet = await ProjetRepository.readAll();

    res.json(projet);
  } catch (err) {
    next(err);
  }
};

const readByProject: RequestHandler = async (req, res, next) => {
  try {
    const projetId = Number(req.params.id);
    const projet = await ProjetRepository.read(projetId);

    if (projet == null) {
      res.sendStatus(404);
    } else {
      res.json(projet);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProject = {
      titre: req.body.titre,
      description: req.body.description,
      image_url: req.body.image_url,
      lien_site: req.body.lien_site,
      lien_github: req.body.lien_github,
    };

    const insertId = await ProjetRepository.create(newProject);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, readByProject, add };

import type { RequestHandler } from "express";
import ProjetRepository from "./projetRepository";
import type { ProjetType } from "../../../lib/definition";

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
      skills: req.body.skills,
    };

    const insertId = await ProjetRepository.create(newProject);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updatedProject: ProjetType = {
      id: Number(req.params.id),
      titre: req.body.titre,
      description: req.body.description,
      image_url: req.body.image_url,
      lien_site: req.body.lien_site,
      lien_github: req.body.lien_github,
    };

    const affectedRows = await ProjetRepository.update(updatedProject);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, readByProject, edit, add };

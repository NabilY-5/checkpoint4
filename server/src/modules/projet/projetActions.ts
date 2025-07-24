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
    // Fetch a specific item based on the provided ID
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

export default { browse, readByProject };

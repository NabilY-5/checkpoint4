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

export default { browse };

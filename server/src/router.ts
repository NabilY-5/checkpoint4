import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define projet-related routes
import projetActions from "./modules/projet/projetActions";

router.get("/api/projets", projetActions.browse);
router.get("/api/projets/:id", projetActions.readByProject);
router.put("/api/projets/:id", projetActions.edit);
router.post("/api/projets", projetActions.add);
router.delete("/api/projets/:id", projetActions.destroy);
/* ************************************************************************* */

export default router;

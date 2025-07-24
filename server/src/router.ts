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
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;

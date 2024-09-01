import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { GestorController } from "../controllers/gestorController.js";

const routes = express.Router();

routes.post("/gestores", CorsMiddlewares.corsPermission, GestorController.postGestor);

export default routes;
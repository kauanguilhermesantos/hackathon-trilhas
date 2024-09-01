import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { FuncionariosControllers } from "../controllers/FuncionarioControllers.js";

const routes = express.Router();

routes.post("/funcionarios", CorsMiddlewares.corsPermission, FuncionariosControllers.postFuncionario);

export default routes;
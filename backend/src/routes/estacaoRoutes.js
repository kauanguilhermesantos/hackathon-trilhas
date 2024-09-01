import { Router } from "express";
import estacaoController from "../controllers/estacaoController.js";

const routes = Router();

routes.get("/estacoes", estacaoController.listarEstacoes);
routes.post("/estacoes", estacaoController.adicionarEstacao);
routes.delete("/estacoes/:id", estacaoController.removerEmpresaById);

export default routes;

import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { etController } from "../controllers/estacaoController.js";

const routes = express.Router();

routes.get("/estacoesTech", CorsMiddlewares.corsPermission, etController.listarEstacoes);
routes.post("/estacoesTech", CorsMiddlewares.corsPermission, etController.adicionarEstacao);
routes.delete("/estacoesTech", CorsMiddlewares.corsPermission, etController.removerEmpresaById);

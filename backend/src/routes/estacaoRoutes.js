import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import estacaoController from "../controllers/estacaoController.js";

const routes = express.Router();

routes.get("/estacoesTech", CorsMiddlewares.corsPermission, estacaoController.listarEstacoes);
routes.post("/estacoesTech", CorsMiddlewares.corsPermission, estacaoController.adicionarEstacao);
routes.delete("/estacoesTech", CorsMiddlewares.corsPermission, estacaoController.removerEmpresaById);

export default routes;

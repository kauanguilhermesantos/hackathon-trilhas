import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { etController } from "../controllers/estacaoController.js";

const routes = express.Router();

routes.get("/estacoesTech", CorsMiddlewares.corsPermission, etController.listarEstacoes);
routes.post("/estacoesTech", CorsMiddlewares.corsPermission, etController.adicionarEstacao);
routes.delete("/estacoesTech", CorsMiddlewares.corsPermission, etController.removerEmpresaById);

import { Router } from "express";
import estacaoController from "../controllers/estacaoController.js";

const routes = Router();

routes.get("/estacoes", estacaoController.listarEstacoes);
routes.post("/estacoes", estacaoController.adicionarEstacao);
routes.delete("/estacoes/:id", estacaoController.removerEmpresaById);

export default routes;

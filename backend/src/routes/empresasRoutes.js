import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { EmpresasControllers } from "../controllers/empresaControllers.js";

const routes = express.Router();

routes.get("/empresas", CorsMiddlewares.corsPermission, EmpresasControllers.getEmpresas);
routes.post("/empresas", CorsMiddlewares.corsPermission, EmpresasControllers.postEmpresas);
routes.put("/empresas/:id", CorsMiddlewares.corsPermission, EmpresasControllers.updateEmpresas);
routes.delete("/empresas/:id", CorsMiddlewares.corsPermission, EmpresasControllers.deleteEmpresa);

export default routes;

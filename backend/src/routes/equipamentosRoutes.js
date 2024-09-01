import express from "express";
import { CorsMiddlewares } from "../middlwares/Middlwares.js";
import { EquipamentoControllers } from "../controllers/equipamentosControllers.js";

const routes = express.Router();

routes.get("/equipamentos", CorsMiddlewares.corsPermission, EquipamentoControllers.getEquipamentos);
routes.post("/equipamentos", CorsMiddlewares.corsPermission, EquipamentoControllers.postEquipamentos);
routes.put("/equipamentos/:id", CorsMiddlewares.corsPermission, EquipamentoControllers.updateEquipamentos);
routes.delete("/equipamentos/:id", CorsMiddlewares.corsPermission, EquipamentoControllers.deleteEquipamento);

export default routes;
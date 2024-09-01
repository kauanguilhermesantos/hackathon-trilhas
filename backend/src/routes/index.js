import express from "express";
import estacoesTech from "./estacaoRoutes.js";
import empresas from "./empresasRoutes.js";
import funcionarios from "./funcionariosRoutes.js";
import equipamentos from "./equipamentosRoutes.js";
import gestores from "./gestorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Api funcionando..."));
  app.use(express.json(), estacoesTech, empresas, funcionarios, equipamentos, gestores);
};

export default routes;

import express from "express";
import estacoesTech from "./estacaoRoutes.js";
import empresas from "./empresasRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Api funcionando..."));
  app.use(express.json(), estacoesTech, empresas);
};

export default routes;

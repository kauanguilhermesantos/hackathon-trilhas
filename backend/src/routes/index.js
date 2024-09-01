import express from "express";
import estacaoRoutes from "./estacaoRoutes.js";

const routes = (app) => {
  app.route("/", (req, res) => res.send("Api funcionando..."));
  app.use(express.json(), estacaoRoutes);
};

export default routes;

import express from "express";
import { connectToDatabase } from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
  console.log("connection error");
});

connection.once("open", () => {
  console.log("Connection success.");
});

routes(app);

export const app = express();

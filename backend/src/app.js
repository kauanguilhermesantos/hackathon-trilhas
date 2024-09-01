import express from "express";
import { connectToDatabase } from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();
const app = express();

connection.on("error", (error) => {
  console.log("connection error");
});

connection.once("open", () => {
  console.log("Connection success.");
});


export default app;
routes(app);

import express from "express";
import { connectToDatabase } from "./config/dbConnection.js";

const connection = await connectToDatabase();

connection.on("error", (error)=>{
    console.log("connection error")
});

connection.once("open", ()=>{
    console.log("Connection success.")
});

export const app = express();
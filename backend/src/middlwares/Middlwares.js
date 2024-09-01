import cors from "cors";
import { app } from "../app.js";

export class CorsMiddlewares{
    static async corsPermission(req, res, next){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Access-Control-Allow-Headers", "Content-Type");
    
            app.use(cors());
    
            next();
    }
}
import { gestor } from "../model/Gestor.js";

export class GestorController{
    static async postGestor(req, res){
        const newGestor = req.body;

        try {
            const createdGestor = await gestor.create(newGestor);
            res.status(201).json({message: "Gestor adicionado com sucesso.", gestor: createdGestor});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar gestor`});
        }
    };
}
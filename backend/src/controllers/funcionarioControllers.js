import { funcionario } from "../model/Funcionario.js";

export class FuncionariosControllers{
    static async postFuncionario(req, res){
        const newFuncionario = req.body;

        try {
            const createdFuncionario = await funcionario.create(newFuncionario);
            res.status(201).json({message: "Funcionario adicionado com sucesso.", funcionario: createdFuncionario});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar funcionario`});
        }
    };
}
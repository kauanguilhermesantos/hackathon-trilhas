import { empresa } from "../model/Empresa.js";
import { funcionario } from "../model/Funcionario.js";

export class EmpresasControllers{
    static async getEmpresas(req, res){
        const showEmpresas = await empresa.find({});
        res.status(200).json(showEmpresas);
    };

    static async postEmpresas(req, res){
        const newEmpresa = req.body
        try {
            const findFuncionario = await funcionario.findById(newEmpresa.funcionario);
            const completeEmpresa = {...newEmpresa, funcionario:{...findFuncionario._doc}};
            const createdEmpresa = await empresa.create(completeEmpresa);
            res.status(201).json({message:"Empresa adicionada com sucesso.", empresa: createdEmpresa});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar atrativo`});
        }
    }
}